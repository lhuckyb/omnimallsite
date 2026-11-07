"use client";

import * as React from "react";
import { DotField, type DotFieldHandle } from "./dot-field";

const pill =
  "inline-flex h-11 items-center rounded-full px-5 text-[15px] font-medium tracking-[-0.02em] outline-none transition-transform active:scale-[.97] focus-visible:ring-2 focus-visible:ring-ring";

export default function DotFieldDemo() {
  const field = React.useRef<DotFieldHandle>(null);
  const [scattered, setScattered] = React.useState(false);

  return (
    <div className="w-full bg-background text-foreground">
      <DotField
        ref={field}
        headline="Sell with ease, buy with confidence."
        accent="#FF5B00"
        eyebrow="UPSA Flagship Hub Active · Accra, Ghana"
        description="The structured digital marketplace for university campuses — connecting student buyers, verified student storefronts, and skilled service providers."
        actions={
          <>
            <a href="/marketplace" className={`${pill} bg-[#FF5B00] text-white font-bold hover:bg-orange-600 transition-colors`}>
              Explore Marketplace
            </a>
            <a href="/sell" className={`${pill} border border-border bg-white text-slate-800 hover:bg-slate-50 transition-colors`}>
              Open Storefront
            </a>
          </>
        }
      />
    </div>
  );
}

