import { lazy } from "react";

// Public pages
export const LoginPage = lazy(() => import("@/features/Auth/components/LoginPage"));
export const RegisterPage = lazy(() => import("@/features/Auth/components/RegisterPage"));
export const HomePage = lazy(() => import("@/features/Home/HomePage"));
export const ProductPage = lazy(() => import("@/features/Product/ProductPage"));
export const ProductsPage = lazy(() => import("@/features/Product/ProdutcsPage"));
export const CartPage = lazy(() => import("@/features/Cart/CartPage"));
export const CheckoutPage = lazy(() => import("@/features/Checkout/CheckoutPage"));
export const WishlistPage = lazy(() => import("@/features/Wishlist/WishlistPage"));
export const OrderConfirmationPage = lazy(() => import("@/features/OrderConfirmation/OrderConfirmation"));
export const BlogPage = lazy(() => import("@/features/Blog/BlogPage"));
export const BlogPostPage = lazy(() => import("@/features/Blog/BlogPostPage"));
export const ContactPage = lazy(() => import("@/features/Contact/Contact"));
export const ErrorPage = lazy(() => import("@/shared/components/ErrorPage"));

// Admin pages
export const Dashboard = lazy(() => import("@/features/Admin/Dashboard"));
export const OverviewTab = lazy(() => import("@/features/Admin/components/Tabs/OverviewTab"));
export const ProductsTab = lazy(() => import("@/features/Admin/components/Tabs/ProductsTab"));
export const UsersTab = lazy(() => import("@/features/Admin/components/Tabs/UsersTab"));
export const AnalyticsTab = lazy(() => import("@/features/Admin/components/Tabs/AnalyticsTab")); 