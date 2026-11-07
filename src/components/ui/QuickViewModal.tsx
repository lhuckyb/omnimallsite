import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  X,
  ShieldCheck,
  MapPin,
  Star,
  CheckCircle2,
  ExternalLink,
  MessageCircle,
  Share2,
} from 'lucide-react';
import { ProductItem } from '../../types';

interface QuickViewModalProps {
  product: ProductItem | null;
  onClose: () => void;
}

export const QuickViewModal: React.FC<QuickViewModalProps> = ({ product, onClose }) => {
  // Close on Escape key
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (product) {
      window.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [product, onClose]);

  if (!product) return null;

  const handleShare = () => {
    if (navigator.share) {
      navigator.share({
        title: product.title,
        text: `Check out ${product.title} on Omnimall Campus Marketplace`,
        url: window.location.href,
      }).catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      alert('Link copied to clipboard!');
    }
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 overflow-y-auto">
        {/* Backdrop */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
          onClick={onClose}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm"
          aria-hidden="true"
        />

        {/* Modal Dialog Card */}
        <motion.div
          initial={{ opacity: 0, scale: 0.96, y: 16 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.96, y: 16 }}
          transition={{ duration: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full max-w-3xl bg-white rounded-3xl shadow-2xl border border-slate-100 overflow-hidden z-10 my-8"
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-product-title"
        >
          {/* Header Actions */}
          <div className="absolute top-4 right-4 z-20 flex items-center gap-2">
            <button
              type="button"
              onClick={handleShare}
              className="p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 shadow-md backdrop-blur-xs transition-colors"
              aria-label="Share listing"
            >
              <Share2 className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2.5 rounded-full bg-white/90 hover:bg-white text-slate-600 hover:text-slate-900 shadow-md backdrop-blur-xs transition-colors"
              aria-label="Close dialog"
            >
              <X className="w-4 h-4" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2">
            {/* Left: Product Image */}
            <div className="relative aspect-4/3 md:aspect-auto md:min-h-[420px] bg-slate-100">
              <img
                src={product.imageUrl}
                alt={product.imageAlt || product.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute top-4 left-4 flex flex-col gap-1.5">
                {product.badge && (
                  <span className="px-2.5 py-1 text-[11px] font-bold text-white bg-[#FF5B00] rounded-full shadow-xs">
                    {product.badge}
                  </span>
                )}
                <span className="px-2.5 py-1 text-[11px] font-semibold text-slate-700 bg-white/90 backdrop-blur-xs rounded-full shadow-xs">
                  {product.condition}
                </span>
              </div>
            </div>

            {/* Right: Product Details */}
            <div className="p-6 sm:p-8 flex flex-col justify-between space-y-6">
              <div className="space-y-4">
                {/* Vendor Pill */}
                <div className="flex items-center justify-between text-xs text-slate-500">
                  <div className="flex items-center gap-1.5">
                    <span className="font-semibold text-slate-800">{product.vendorName}</span>
                    {product.vendorVerified && (
                      <CheckCircle2 className="w-3.5 h-3.5 text-blue-500 fill-blue-50" />
                    )}
                  </div>
                  <span className="text-[11px] bg-slate-100 px-2.5 py-0.5 rounded-md font-medium text-slate-600">
                    {product.vendorCampus}
                  </span>
                </div>

                {/* Title */}
                <h2
                  id="modal-product-title"
                  className="text-lg sm:text-xl font-bold text-slate-900 leading-snug"
                >
                  {product.title}
                </h2>

                {/* Rating & Reviews */}
                <div className="flex items-center gap-2 text-xs text-slate-600">
                  <div className="flex items-center text-amber-500">
                    <Star className="w-4 h-4 fill-amber-400 text-amber-400 mr-1" />
                    <span className="font-bold text-slate-900">{product.rating.toFixed(1)}</span>
                  </div>
                  <span className="text-slate-300">·</span>
                  <span className="text-slate-500">{product.reviewCount || 12} student ratings</span>
                </div>

                {/* Price Display */}
                <div className="flex items-baseline gap-2.5 pt-1">
                  <span className="text-2xl sm:text-3xl font-extrabold text-[#FF5B00]">
                    GH₵ {product.priceGHc.toLocaleString()}
                  </span>
                  {product.originalPriceGHc && (
                    <span className="text-sm line-through text-slate-400">
                      GH₵ {product.originalPriceGHc.toLocaleString()}
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {product.description}
                </p>

                {/* Safe Meetup Spot Box */}
                <div className="p-3.5 rounded-2xl bg-orange-50/60 border border-orange-100 space-y-1">
                  <div className="flex items-center gap-1.5 text-xs font-bold text-orange-900">
                    <MapPin className="w-3.5 h-3.5 text-[#FF5B00]" />
                    <span>Safe Campus Meetup Point</span>
                  </div>
                  <p className="text-[11px] text-slate-600 pl-5">
                    {product.meetupSpot || `${product.vendorCampus} - Public Central Quad`}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="space-y-2.5 pt-2">
                <a
                  href={`https://wa.me/?text=${encodeURIComponent(
                    `Hi! I saw your listing for "${product.title}" on Omnimall Campus Marketplace and I would like to arrange a pickup at ${product.meetupSpot || product.vendorCampus}.`
                  )}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 text-xs sm:text-sm font-bold text-white bg-[#FF5B00] hover:bg-orange-600 active:scale-98 rounded-2xl shadow-sm transition-all"
                >
                  <MessageCircle className="w-4 h-4" />
                  <span>Connect with Seller via WhatsApp</span>
                </a>
                <div className="flex items-center justify-center gap-1.5 text-[11px] text-slate-400">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Inspect item in person at meetup before payment</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
};

