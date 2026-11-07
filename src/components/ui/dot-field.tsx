"use client";

import * as React from "react";

/* ------------------------------------------------------------------ */
/*  Dot Field: Hero headline assembled from an interactive dot grid.  */
/*  Dots gracefully fly in and assemble the bold headline. Cursor     */
/*  and touch repel the dots naturally, and they flock back into place.*/
/*  Clean, natural, bold typography with zero blur or glowing haze,    */
/*  no artificial scroll heights, and perfectly proportioned spacing.  */
/* ------------------------------------------------------------------ */

export interface DotFieldProps extends Omit<React.HTMLAttributes<HTMLElement>, "title"> {
  /** Headline drawn with dots. Also rendered as an accessible <h1> for screen readers. */
  headline: string;
  /** Small pill above the headline (optional). */
  eyebrow?: React.ReactNode;
  /** Supporting line under the headline. */
  description?: React.ReactNode;
  /** Buttons or links under the description. */
  actions?: React.ReactNode;
  /** Primary dot color for the headline (defaults to brand orange #FF5B00). */
  color?: string;
  /** Optional secondary accent color. */
  accent?: string;
  /** Optional background image blended into the hero section. */
  backgroundImage?: string;
  /** Grid spacing in px: [x, y]. */
  grid?: [number, number];
  /** Font used to draw the headline. */
  fontFamily?: string;
  fontWeight?: number;
  /** Radius of cursor/touch repel push in px. 0 turns it off. */
  repelRadius?: number;
  /** Called when the initial dot assembly has finished. */
  onReady?: () => void;
}

export interface DotFieldHandle {
  /** Play the intro flocking animation again. */
  replay: () => void;
}

const FLOW = (x: number, y: number, t: number) =>
  (Math.sin(x * 0.004 + t * 0.7) + Math.cos(y * 0.005 - t * 0.5) + Math.sin((x + y) * 0.002 + t * 0.3)) * Math.PI;

export const DotField = React.forwardRef<DotFieldHandle, DotFieldProps>(function DotField(
  {
    headline,
    eyebrow,
    description,
    actions,
    color = "#FF5B00",
    accent = "#FFA04D",
    backgroundImage = "/2.png",
    grid = [16, 12],
    fontFamily = "Manrope, sans-serif",
    fontWeight = 800,
    repelRadius = 110,
    onReady,
    className = "",
    style,
    ...rest
  },
  ref,
) {
  const outerRef = React.useRef<HTMLElement>(null);
  const stageRef = React.useRef<HTMLDivElement>(null);
  const canvasRef = React.useRef<HTMLCanvasElement>(null);
  const copyRef = React.useRef<HTMLDivElement>(null);
  const [ready, setReady] = React.useState(false);
  const readyRef = React.useRef(false);

  // Render loop mutable state
  const S = React.useRef({
    W: 0,
    H: 0,
    N: 0,
    P: new Float32Array(0),
    t0: 0,
    mouse: { x: -9999, y: -9999, on: false },
    restart: () => {},
  });

  const opts = React.useRef({ headline, fontFamily, fontWeight, grid, repelRadius, color, onReady });
  opts.current = { headline, fontFamily, fontWeight, grid, repelRadius, color, onReady };

  React.useImperativeHandle(ref, () => ({
    replay: () => S.current.restart(),
  }), []);

  React.useEffect(() => {
    const stage = stageRef.current;
    const cv = canvasRef.current;
    if (!stage || !cv) return;

    const ctx = cv.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const s = S.current;
    let raf = 0;
    let visible = true;
    let alive = true;
    let readyTimer = 0;

    /* Sample headline pixels from an offscreen canvas */
    const sample = () => {
      const { W, H } = s;
      const o = opts.current;
      const c = document.createElement("canvas");
      const g = c.getContext("2d", { willReadFrequently: true });
      if (!g) return [];

      c.width = W;
      c.height = H;
      const isMobile = W < 640;
      const font = (px: number) => `${o.fontWeight} ${px}px ${o.fontFamily}`;
      const words = o.headline.split(/\s+/);

      // Optically balanced size for mobile and desktop screens
      let size = isMobile
        ? Math.min(W * 0.105, H * 0.11, 42)
        : Math.min(W * 0.08, H * 0.16, 76);

      let lines: string[] = [];
      for (;;) {
        g.font = font(size);
        lines = [];
        let cur = "";
        for (const w of words) {
          const t = cur ? cur + " " + w : w;
          if (g.measureText(t).width > W * (isMobile ? 0.90 : 0.86) && cur) {
            lines.push(cur);
            cur = w;
          } else {
            cur = t;
          }
        }
        lines.push(cur);
        if ((lines.length <= (isMobile ? 2 : 2) && lines.every((l) => g.measureText(l).width <= W * 0.92)) || size < 22) {
          break;
        }
        size *= 0.92;
      }

      g.font = font(size);
      g.textAlign = "center";
      g.textBaseline = "middle";
      try {
        (g as any).letterSpacing = `${-size * 0.02}px`;
      } catch {}

      // Vertically center in upper portion so supporting copy and buttons have ample room below
      const lh = size * 1.18;
      const centerY = isMobile ? H * 0.31 : H * 0.35;
      const top = centerY - ((lines.length - 1) * lh) / 2;
      lines.forEach((l, i) => g.fillText(l, W / 2, top + i * lh));

      const d = g.getImageData(0, 0, W, H).data;
      const pts: number[] = [];
      // Dense step for bold, legible, continuous letterforms
      const step = Math.max(2, Math.round(size / 30));
      for (let y = 0; y < H; y += step) {
        for (let x = 0; x < W; x += step) {
          if (d[(y * W + x) * 4 + 3] > 128) {
            pts.push(x, y);
          }
        }
      }
      return pts;
    };

    /* Float32Array: 10 slots per dot: x, y, vx, vy, homeX, homeY, textX, textY, delay, isText */
    const build = () => {
      const r = stage.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      s.W = Math.max(1, Math.round(r.width));
      s.H = Math.max(1, Math.round(r.height));

      cv.width = s.W * dpr;
      cv.height = s.H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);

      const [GX, GY] = opts.current.grid;
      const tgt = sample();
      const cols = Math.ceil(s.W / GX) + 1;
      const rows = Math.ceil(s.H / GY) + 1;
      const cells = cols * rows;
      const nText = tgt.length / 2;
      s.N = Math.max(cells, nText);

      const P = new Float32Array(s.N * 10);
      for (let i = 0; i < s.N; i++) {
        const cell = i < cells ? i : (Math.random() * cells) | 0;
        const hx = (cell % cols) * GX - 4;
        const hy = Math.floor(cell / cols) * GY - 1;
        const o = i * 10;
        P[o] = hx;
        P[o + 1] = hy;
        P[o + 4] = hx;
        P[o + 5] = hy;
      }

      const ids = Array.from({ length: s.N }, (_, i) => i);
      for (let i = ids.length - 1; i > 0; i--) {
        const j = (Math.random() * (i + 1)) | 0;
        [ids[i], ids[j]] = [ids[j], ids[i]];
      }

      const diag = Math.hypot(s.W, s.H);
      for (let k = 0; k < nText; k++) {
        const o = ids[k] * 10;
        const tx = tgt[k * 2];
        const ty = tgt[k * 2 + 1];
        P[o + 6] = tx;
        P[o + 7] = ty;
        P[o + 9] = 1;
        // Natural center-out arrival
        P[o + 8] = 0.12 + Math.min(0.85, Math.hypot(tx - s.W / 2, ty - s.H * 0.33) / diag) * 1.0 + Math.random() * 0.2;
      }
      s.P = P;
    };

    const restart = () => {
      build();
      s.t0 = performance.now();
      readyRef.current = false;
      setReady(false);
      window.clearTimeout(readyTimer);
      readyTimer = window.setTimeout(
        () => {
          readyRef.current = true;
          setReady(true);
          opts.current.onReady?.();
        },
        reduce ? 0 : 1400,
      );
    };
    s.restart = restart;

    const frame = (now: number) => {
      raf = 0;
      if (!alive) return;
      if (visible) {
        const t = (now - s.t0) / 1000;
        const { W, H, N, P } = s;
        const R = opts.current.repelRadius;
        const R2 = R * R;
        const m = s.mouse;

        ctx.clearRect(0, 0, W, H);
        const brandColor = opts.current.color;

        for (let i = 0; i < N; i++) {
          const o = i * 10;
          const isT = P[o + 9] === 1;
          let tx = P[o + 4];
          let ty = P[o + 5];
          let k = 0.07;
          let fl = 0;
          const local = t - P[o + 8];

          if (isT) {
            if (local > 0) {
              tx = P[o + 6];
              ty = P[o + 7];
              k = Math.min(0.095, 0.03 + local * 0.08);
            }
            fl = local > -1 ? Math.max(0, 1 - Math.max(0, local) * 1.5) : 0;
          }

          if (reduce) {
            P[o] = isT ? P[o + 6] : P[o + 4];
            P[o + 1] = isT ? P[o + 7] : P[o + 5];
          } else {
            let ax = (tx - P[o]) * k;
            let ay = (ty - P[o + 1]) * k;
            if (fl > 0) {
              const a = FLOW(P[o], P[o + 1], t);
              ax += Math.cos(a) * 2.0 * fl;
              ay += Math.sin(a) * 2.0 * fl;
            }
            if (m.on && R > 0) {
              const dx = P[o] - m.x;
              const dy = P[o + 1] - m.y;
              const d2 = dx * dx + dy * dy;
              if (d2 < R2) {
                const d = Math.sqrt(d2) || 1;
                const f = (1 - d / R) * 5.5;
                ax += (dx / d) * f;
                ay += (dy / d) * f;
              }
            }
            P[o + 2] = (P[o + 2] + ax) * 0.82;
            P[o + 3] = (P[o + 3] + ay) * 0.82;
            P[o] += P[o + 2];
            P[o + 1] += P[o + 3];
          }

          const x = P[o];
          const y = P[o + 1];

          if (isT) {
            // Bold, crisp, natural headline dots: high opacity, crisp edges, no blurry haze
            const settle = reduce ? 1 : Math.min(1, Math.max(0, local * 1.3));
            ctx.globalAlpha = Math.min(1, 0.75 + settle * 0.25);
            ctx.fillStyle = brandColor;
            // Radius ~1.8px gives bold, legible, solid letterforms
            const r = 1.8;
            ctx.fillRect(x - r, y - r, r * 2.1, r * 2.1);
          } else {
            // Subtle, clean ambient grid dots with low opacity
            ctx.globalAlpha = 0.08;
            ctx.fillStyle = brandColor;
            ctx.fillRect(x - 0.75, y - 0.75, 1.5, 1.5);
          }
        }
        ctx.globalAlpha = 1;
      }
      raf = requestAnimationFrame(frame);
    };

    const move = (e: PointerEvent) => {
      const r = stage.getBoundingClientRect();
      s.mouse.x = e.clientX - r.left;
      s.mouse.y = e.clientY - r.top;
      s.mouse.on = true;
    };
    const leave = () => {
      s.mouse.on = false;
    };

    // Responsive mobile touch interaction: dragging finger pushes dots away alive
    const touchMove = (e: TouchEvent) => {
      if (e.touches.length > 0) {
        const t = e.touches[0];
        const r = stage.getBoundingClientRect();
        s.mouse.x = t.clientX - r.left;
        s.mouse.y = t.clientY - r.top;
        s.mouse.on = true;
      }
    };
    const touchEnd = () => {
      s.mouse.on = false;
    };

    let rt = 0;
    const ro = new ResizeObserver(() => {
      window.clearTimeout(rt);
      rt = window.setTimeout(() => {
        build();
        s.t0 = performance.now() - 3000;
      }, 150);
    });
    const io = new IntersectionObserver(([e]) => {
      visible = e.isIntersecting;
    }, { threshold: 0 });

    stage.addEventListener("pointermove", move);
    stage.addEventListener("pointerleave", leave);
    stage.addEventListener("touchmove", touchMove, { passive: true });
    stage.addEventListener("touchend", touchEnd, { passive: true });
    stage.addEventListener("touchcancel", touchEnd, { passive: true });

    const fontReady = document.fonts?.load
      ? document.fonts.load(`${opts.current.fontWeight} 100px ${opts.current.fontFamily}`).catch(() => [])
      : Promise.resolve([]);

    fontReady.then(() => {
      if (!alive) return;
      restart();
      ro.observe(stage);
      io.observe(stage);
      raf = requestAnimationFrame(frame);
    });

    return () => {
      alive = false;
      cancelAnimationFrame(raf);
      window.clearTimeout(readyTimer);
      window.clearTimeout(rt);
      ro.disconnect();
      io.disconnect();
      stage.removeEventListener("pointermove", move);
      stage.removeEventListener("pointerleave", leave);
      stage.removeEventListener("touchmove", touchMove);
      stage.removeEventListener("touchend", touchEnd);
      stage.removeEventListener("touchcancel", touchEnd);
    };
    // rebuild when headline or grid changes
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [headline, fontFamily, fontWeight, grid[0], grid[1], color]);

  const fade = `transition-[opacity,transform] duration-900 [transition-timing-function:cubic-bezier(.2,.9,.25,1)] ${ready ? "translate-y-0 opacity-100" : "translate-y-2.5 opacity-0"}`;

  return (
    <section
      ref={outerRef}
      className={`relative w-full bg-gradient-to-b from-[#FFF5ED] via-[#FFFBF8] to-white text-[#202124] overflow-hidden ${className}`}
      style={style}
      {...rest}
    >
      {/* Natural, snug container height: no extra 80vh scroll void */}
      <div
        ref={stageRef}
        className="relative w-full h-[460px] sm:h-[500px] md:h-[540px] overflow-hidden"
        style={{ fontFamily }}
      >
        {/* Wide blended background image: 2.png spanning full width */}
        {backgroundImage && (
          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-0 w-full h-full overflow-hidden z-0"
          >
            <img
              src={backgroundImage}
              alt=""
              className="w-full h-full object-cover object-center opacity-22 sm:opacity-26 mix-blend-multiply select-none"
              loading="eager"
              decoding="async"
            />
            {/* Soft luminous gradient veil ensuring the design text UI stays crisp, bold, and high-contrast */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#FFF5ED]/75 via-white/40 to-white" />
            <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_30%,white_88%)] opacity-60" />
          </div>
        )}

        {/* Crisp canvas: zero blurry glow overlays */}
        <canvas ref={canvasRef} aria-hidden="true" className="absolute inset-0 h-full w-full z-10" />

        <h1 className="sr-only">{headline}</h1>

        {/* Copy container: positioned directly below the headline with snug, comfortable spacing */}
        <div
          ref={copyRef}
          className="pointer-events-none absolute inset-x-0 bottom-6 sm:bottom-10 flex flex-col items-center justify-end px-5 text-center z-20"
        >
          {eyebrow && (
            <div className={`mb-3 flex justify-center px-4 ${fade}`}>
              <span className="inline-flex h-[32px] items-center gap-2 rounded-full border border-orange-200/90 bg-white/90 px-4 text-[12px] font-bold text-orange-950 shadow-2xs backdrop-blur-md">
                <i className="size-2 rounded-full" style={{ background: color }} />
                {eyebrow}
              </span>
            </div>
          )}

          {description && (
            <p className={`m-0 max-w-[580px] text-xs sm:text-base leading-relaxed tracking-tight text-slate-600 font-medium ${fade} delay-100`}>
              {description}
            </p>
          )}

          {actions && (
            <div className={`pointer-events-auto mt-4 sm:mt-5 flex flex-col sm:flex-row justify-center items-center gap-2.5 w-full max-w-xs sm:max-w-none ${fade} delay-200`}>
              {actions}
            </div>
          )}
        </div>
      </div>
    </section>
  );
});

export default DotField;
