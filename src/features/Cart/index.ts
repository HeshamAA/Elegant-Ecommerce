// UI Components & Icons (shared aggregator)
export {
  Button,
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
  Image,
  showToast,
  Trash2,
  Minus,
  Plus,
  X,
} from "@/shared/components";
// Libs
export { Link, Fragment } from "@/shared/libs";

// Redux Toolkit
export { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
export { createSlice } from "@reduxjs/toolkit";
export type { PayloadAction } from "@reduxjs/toolkit";
// Shared Constants
export { API_BASE_URL, ENDPOINTS, HttpMethods } from '@/shared/constants/enums';

// Shared State
export { useAppDispatch, useAppSelector } from "@/shared/state/hooks";


// Types
export type { CartItem, productIds, CartState } from "./types/cart.types";
export type { Product } from '@/features/Product/types/products.types';
// Components
export { default as CartPage } from "./CartPage";
export { default as CartDrawer } from "./components/CartDrawer";

// Hooks
export { useCart } from "./hooks/useCart";

// Services
export { useGetCartProductsQuery } from "./services/cartApiSlice";

// State
export {
  removeProductFromCart,
  updateQuantity,
  clearCart,
  updateCartItem,
  closeCart,
  setProductsFullInfo,
} from "./state/cartSlice";

