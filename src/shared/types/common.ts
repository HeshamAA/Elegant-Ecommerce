// Base types
export interface BaseEntity {
  id: number;
  createdAt: string;
  updatedAt: string;
}

// User types
export interface User extends BaseEntity {
  name: string;
  email: string;
  role: 'user' | 'admin';
  avatar?: string;
  phone?: string;
}

// Product types
export interface Product extends BaseEntity {
  name: string;
  description: string;
  price: number;
  originalPrice?: number;
  images: string[];
  category: string;
  brand?: string;
  rating: number;
  reviewCount: number;
  stock: number;
  isNew: boolean;
  isOnSale: boolean;
  isPremium: boolean;
  tags: string[];
  specifications?: Record<string, string>;
}

// Cart types
export interface CartItem {
  id: number;
  product: Product;
  quantity: number;
  price: number;
}

export interface Cart {
  items: CartItem[];
  total: number;
  itemCount: number;
}

// Order types
export interface OrderItem {
  id: number;
  product: Product;
  quantity: number;
  price: number;
}

export interface Address {
  street: string;
  city: string;
  state: string;
  zipCode: string;
  country: string;
}

export interface Order extends BaseEntity {
  orderNumber: string;
  user: User;
  items: OrderItem[];
  subtotal: number;
  tax: number;
  shipping: number;
  total: number;
  status: OrderStatus;
  shippingAddress: Address;
  billingAddress: Address;
  paymentMethod: PaymentMethod;
  paymentStatus: PaymentStatus;
  trackingNumber?: string;
}

export type OrderStatus = 
  | 'pending'
  | 'confirmed'
  | 'processing'
  | 'shipped'
  | 'delivered'
  | 'cancelled'
  | 'refunded';

export type PaymentMethod = 'credit_card' | 'paypal' | 'apple_pay';
export type PaymentStatus = 'pending' | 'paid' | 'failed' | 'refunded';

// Blog types
export interface BlogPost extends BaseEntity {
  title: string;
  content: string;
  excerpt: string;
  slug: string;
  author: User;
  featuredImage: string;
  tags: string[];
  category: string;
  isPublished: boolean;
  publishedAt?: string;
  readTime: number;
}

// Review types
export interface Review extends BaseEntity {
  user: User;
  product: Product;
  rating: number;
  title: string;
  comment: string;
  isVerified: boolean;
  helpful: number;
}

// Wishlist types
export interface WishlistItem extends BaseEntity {
  user: User;
  product: Product;
}

// Category types
export interface Category {
  id: number;
  name: string;
  slug: string;
  description?: string;
  image?: string;
  parentId?: number;
  children?: Category[];
}

// API Response types
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export interface PaginatedResponse<T> {
  data: T[];
  pagination: {
    page: number;
    limit: number;
    total: number;
    totalPages: number;
  };
}

// Form types
export interface FormField {
  name: string;
  label: string;
  type: 'text' | 'email' | 'password' | 'number' | 'textarea' | 'select' | 'checkbox' | 'radio';
  required?: boolean;
  placeholder?: string;
  options?: { value: string; label: string }[];
  validation?: {
    min?: number;
    max?: number;
    pattern?: string;
    message?: string;
  };
}

// Filter types
export interface ProductFilters {
  category?: string;
  brand?: string;
  minPrice?: number;
  maxPrice?: number;
  rating?: number;
  tags?: string[];
  sortBy?: 'price_asc' | 'price_desc' | 'name_asc' | 'name_desc' | 'newest' | 'rating';
}

// Search types
export interface SearchResult<T> {
  items: T[];
  total: number;
  query: string;
  filters: ProductFilters;
}

// Notification types
export interface Notification {
  id: string;
  type: 'success' | 'error' | 'warning' | 'info';
  title: string;
  message: string;
  duration?: number;
  action?: {
    label: string;
    onClick: () => void;
  };
}

// Theme types (removed - no longer needed)
// export type Theme = 'light' | 'dark' | 'system';

// Loading states
export interface LoadingState {
  isLoading: boolean;
  error: string | null;
}

// Modal types
export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

// Table types
export interface TableColumn<T> {
  key: keyof T;
  header: string;
  sortable?: boolean;
  render?: (value: any, item: T) => React.ReactNode;
  width?: string;
}

export interface TableProps<T> {
  data: T[];
  columns: TableColumn<T>[];
  loading?: boolean;
  onSort?: (key: keyof T, direction: 'asc' | 'desc') => void;
  onRowClick?: (item: T) => void;
  pagination?: {
    page: number;
    limit: number;
    total: number;
    onPageChange: (page: number) => void;
  };
} 