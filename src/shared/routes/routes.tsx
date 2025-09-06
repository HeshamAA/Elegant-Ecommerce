import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { RequireAdmin, RequireGuest } from "./routeGuards";
import {
  LoginPage,
  RegisterPage,
  HomePage,
  ProductPage,
  ProductsPage,
  CartPage,
  CheckoutPage,
  WishlistPage,
  OrderConfirmationPage,
  BlogPage,
  BlogPostPage,
  ContactPage,
  ErrorPage,
  Dashboard,
  OverviewTab,
  ProductsTab,
  UsersTab,
  AnalyticsTab,
} from "./lazyComponents";
import Layout from "@/shared/pages/Layout";
import { LoadingSpinner } from "@/shared/components";
import { Suspense } from "@/shared/libs";
import { ROUTES } from "../constants/enums";

const withSuspense = (Component: React.ComponentType) => (
  <Suspense fallback={<LoadingSpinner />}>
    <Component />
  </Suspense>
);

export const router = createBrowserRouter([
  {
    path: ROUTES.HOME,
    element: (
      <Layout>
        <Outlet />
      </Layout>
    ),
    children: [
      {
        index: true,
        element: withSuspense(HomePage),
      },
      {
        path: ROUTES.PRODUCT,
        element: withSuspense(ProductPage),
      },
      {
        path: ROUTES.PRODUCTS,
        element: withSuspense(ProductsPage),
      },
      {
        path: ROUTES.CART,
        element: withSuspense(CartPage),
      },
      {
        path: ROUTES.WISHLIST,
        element: withSuspense(WishlistPage),
      },
      {
        path: ROUTES.BLOG,
        element: withSuspense(BlogPage),
      },
      {
        path: ROUTES.BLOG_POST,
        element: withSuspense(BlogPostPage),
      },
      {
        path: ROUTES.CHECKOUT,
        element: withSuspense(CheckoutPage),
      },
      {
        path: ROUTES.ORDER_CONFIRMATION,
        element: withSuspense(OrderConfirmationPage),
      },
      {
        path: ROUTES.CONTACT,
        element: withSuspense(ContactPage),
      },
      {
        path: ROUTES.ADMIN,
        element: (
          <RequireAdmin>
            {withSuspense(Dashboard)}
          </RequireAdmin>
        ),
        children: [
          {
            path: ROUTES.ADMIN_DASHBOARD,
            element: <Outlet />,
            children: [
              {
                path: ROUTES.ADMIN_OVERVIEW,
                element: withSuspense(OverviewTab),
              },
              {
                path: ROUTES.ADMIN_PRODUCTS,
                element: withSuspense(ProductsTab),
              },
              {
                path: ROUTES.ADMIN_USERS,
                element: withSuspense(UsersTab),
              },
              {
                path: ROUTES.ADMIN_ANALYTICS,
                element: withSuspense(AnalyticsTab),
              },
              { index: true, element: <Navigate to="overview" replace /> },
            ],
          },
          { index: true, element: <Navigate to={ROUTES.ADMIN_DASHBOARD} replace /> },
        ],
      },
    ],
  },
  {
    path: "*",
    element: withSuspense(ErrorPage),
  },
  {
    path: ROUTES.AUTH,
    element: <RequireGuest><Outlet /></RequireGuest>,
    children: [
      {
        index: true,
        element: <Navigate to={ROUTES.LOGIN} replace />,
      },
      {
        path: ROUTES.LOGIN,
        element: withSuspense(LoginPage),
      },
      {
        path: ROUTES.REGISTER,
        element: withSuspense(RegisterPage),
      },
    ],
  },
]); 