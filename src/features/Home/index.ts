// Main Home Page Component
export { default as HomePage } from "./HomePage";

// Components
export { BestSellers } from "./components/BestSellers";
export { NewArrivals } from "./components/NewArrivals";
export { FeaturedBrands } from "./components/FeaturedBrands";
export { BlogPreview } from "./components/BlogPreview";
export { ShopTheLook } from "./components/ShopTheLook";
export { StyleFinderCta } from "./components/StyleFinderCta";
export { AnimatedMetrics } from "./components/AnimatedMetrics";
export { CountdownTimer } from "./components/CountdownTimer";

// Category Preview Components
export { CategoryPreview } from "./components/CategoryPreview/CategoryPreview";
export { CategoryTab } from "./components/CategoryPreview/CategoryTab";

// Hero Banner Components
export { HeroBanner } from "./components/HeroBanner/HeroBanner";
export { PremiumBadge } from "./components/HeroBanner/PremiumBadge";
export { HeroTitle } from "./components/HeroBanner/HeroTitle";
export { StatsSection } from "./components/HeroBanner/StatsSection";
export { CTASection } from "./components/HeroBanner/CTASection";
export { TrustIndicators } from "./components/HeroBanner/TrustIndicators";

// Hooks
export { useHome } from "./hooks/useHome";
export { useCountdownTimer } from "./hooks/useCountdownTimer";

// Services
export { useFetchBestSellersQuery, useFetchNewArrivalsQuery } from "./services/homeApiSlice";

// Data
export { blogs, metrics, outfits, brands, categories } from "./data/data";

// Types
export type * from "./types/home.types";
export type {Product} from "@/features/Product/types/products.types"

// Shared Components (re-export for Home feature consumers and internals)
export {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Button,
  Badge,
  showToast,
  Image,
  ChevronLeft,
  ChevronRight,
  Heart,
   Star, 
   ShoppingBag,
    Truck
} from "@/shared/components";

// Card Components (direct export since not in shared components index)
export { CardDescription, CardFooter } from "@/components/ui/card";

// Shared State
export { useAppDispatch, useAppSelector } from "@/shared/state/hooks";

// Shared Libs (re-export for Home feature consumers and internals)
export {
  useState,
  useEffect,
  useCallback,
  useMemo,
  useRef,
  Link,
  useEmblaCarousel,
  createApi,
   fetchBaseQuery
} from "@/shared/libs";

// Cart Feature Integration
export { addToCart, openCart } from "@/features/Cart/state/cartSlice";

// Product Feature Integration
export { default as ProductCard } from "@/features/Product/components/ProductCard";

// Utils
export { getErrorMessage } from "@/utils/apiErrorHandler";

// shared Constants

export {API_BASE_URL, ENDPOINTS} from "@/shared/constants/enums"