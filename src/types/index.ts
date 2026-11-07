export interface Category {
  id: string;
  name: string;
  iconName?: string;
  count?: number;
}

export interface ProductItem {
  id: string;
  title: string;
  description: string;
  priceGHc: number;
  originalPriceGHc?: number;
  category: string;
  condition: string;
  badge?: string;
  rating: number;
  reviewCount?: number;
  imageUrl: string;
  imageAlt?: string;
  galleryImages?: string[];
  vendorName: string;
  vendorCampus: string;
  vendorVerified: boolean;
  sellerBadge?: string;
  meetupSpot?: string;
  inStock?: boolean;
}

export interface ServiceItem {
  id: string;
  title: string;
  category: string;
  startingPriceGHc: number;
  deliveryTime: string;
  imageUrl?: string;
  providerName?: string;
  rating?: number;
}

export interface Vendor {
  id: string;
  name: string;
  campus: string;
  category: string;
  verified: boolean;
  avatarUrl?: string;
  rating?: number;
  dealsCount?: number;
}

export interface Campus {
  id: string;
  shortCode: string;
  name: string;
  city: string;
  studentCountEstimate: string;
  status: string;
  description: string;
  pickupSpots: string[];
}

export interface FAQItem {
  question: string;
  answer: string;
  category?: string;
}

