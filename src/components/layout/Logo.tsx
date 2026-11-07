import React from 'react';
import { Link } from 'react-router-dom';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  center?: boolean;
  showWordmark?: boolean;
  wordmarkClassName?: string;
}

export const Logo: React.FC<LogoProps> = ({
  className = '',
  size = 'md',
  center = false,
  showWordmark = false,
  wordmarkClassName = '',
}) => {
  // Symmetrical circular dimensions across all breakpoints
  const sizeClasses = {
    sm: 'w-9 h-9 sm:w-10 sm:h-10',
    md: 'w-10 h-10 sm:w-11 sm:h-11',
    lg: 'w-13 h-13 sm:w-14 sm:h-14',
    xl: 'w-18 h-18 sm:w-20 sm:h-20',
  };

  const textClasses = {
    sm: 'text-sm sm:text-[15px]',
    md: 'text-base sm:text-lg',
    lg: 'text-lg sm:text-xl',
    xl: 'text-2xl sm:text-3xl',
  };

  return (
    <Link
      to="/"
      className={`inline-flex items-center gap-2 sm:gap-2.5 ${
        center ? 'justify-center mx-auto' : ''
      } group focus:outline-none focus-visible:ring-2 focus-visible:ring-[#FF5B00] rounded-full transition-all duration-200 hover:scale-[1.03] active:scale-[0.97] ${className}`}
      aria-label="Omnimall - Sell with ease, buy with confidence"
    >
      {/* Refined circular logo badge */}
      <div
        className={`relative ${sizeClasses[size]} aspect-square rounded-full bg-white p-1 sm:p-1.5 border border-orange-200/90 shadow-[0_2px_10px_rgba(255,91,0,0.12)] group-hover:border-[#FF5B00] group-hover:shadow-[0_4px_18px_rgba(255,91,0,0.22)] transition-all duration-200 flex items-center justify-center overflow-hidden shrink-0`}
      >
        <img
          src="/om-logo-complete.png"
          srcSet="/om-logo-complete.png 1x, /om-logo-complete@2x.png 2x"
          alt="Omnimall"
          className="w-full h-full object-contain select-none"
          loading="eager"
          decoding="async"
        />
      </div>

      {/* Modern OMNIMALL text lockup positioned to the right of the circular logo */}
      {showWordmark && (
        <div className={`flex flex-col justify-center leading-none text-left select-none ${wordmarkClassName}`}>
          <div className={`font-heading font-black tracking-[-0.03em] uppercase flex items-center ${textClasses[size]}`}>
            <span className="text-slate-900 group-hover:text-slate-800 transition-colors">OMNI</span>
            <span className="text-[#FF5B00] group-hover:text-orange-600 transition-colors">MALL</span>
          </div>
          <span className="text-[8px] sm:text-[9px] font-bold tracking-[0.08em] text-slate-400 uppercase mt-0.5">
            Campus Marketplace
          </span>
        </div>
      )}
    </Link>
  );
};

export default Logo;
