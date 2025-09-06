
// Product Types
export type Product = {
  id: number;
  title: string;
  price: number;
  originalPrice?: number | null;  
  cat_prefix: string;
  subCategory?: string | null;
  images: string[];
  colors: string[];
  sizes: string[];
  desc: string;
  featured?: boolean;
  new?: boolean;
  sale?: boolean;
  rating: number;
  reviews: number;
  stock?: number;
  sold?: number;
};

// API Response Types
export type ProductsResponse = {
  data: Product[];
  totalCount: number;
  totalPages: number;
  currentPage: number;
  totalProducts: number;
};

// State Types
export type ProductState = {
  products: Product[];
  selectedProduct: Product | null;
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  hasMore: boolean;
};

export type ProductsState = {
  products: Product[];
  featuredProducts: Product[];
  newArrivals: Product[];
  bestSellers: Product[];
  loading: boolean;
  error: string | null;
  totalPages: number;
  currentPage: number;
  totalProducts: number;
};

// API Parameters
export type FetchProductsParams = {
  category?: string;
  cat_prefix?: string;
  page?: number;
  limit?: number;
  sort?: "asc" | "desc";
};

// Component Props Types
export type ProductCardProps = {
  product: Product;
  viewMode?: "grid" | "list";
};

export type ProductsPageProps = {
  category?: string;
};

// Hook Return Types

