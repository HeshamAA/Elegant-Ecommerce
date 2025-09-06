
// Main Dashboard component
export { default as Dashboard } from "./Dashboard";

// Components
export { default as ProductForm } from "./components/ProductForm";
export { default as AdminTabsNav } from "./components/AdminTabsNav";
export { default as UploadImage } from "./components/UploadImage";

// Tab Components
export { default as UsersTab } from "./components/Tabs/UsersTab";
export { default as ProductsTab } from "./components/Tabs/ProductsTab";
export { default as OverviewTab } from "./components/Tabs/OverviewTab";
export { default as AnalyticsTab } from "./components/Tabs/AnalyticsTab";

// Hooks
export * from "./hooks/useAdmin";
export * from "./hooks/useUploadImage";
export * from "./hooks/useProductForm";

// Services
export * from "./services/apiUsersSlice";

// Constants
export { AdminTabs } from "./constants/enums";
export { AvailableColors, AvailableSizes, Categories, Params } from "@/shared/constants/enums";

// Data
export * from "./data/data";


// Shared Constants
export { ROUTES } from "@/shared/constants/enums";

export { API_BASE_URL,ENDPOINTS, HttpMethods } from "@/shared/constants/enums";


// Shared Components (re-export for Admin feature consumers and internals)
export {
  Button,
  Card,
  CardContent,
  CardHeader,
  CardTitle,
  Badge,
  Input,
  Label,
  Textarea,
  Checkbox,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  Upload,
  X,
  ImageIcon,
  CheckCircle,
  AlertCircle,
  showToast,
  Trash2,
  Edit,
  Plus,
  Modal,
  Image,
} from "@/shared/components";

// Shared Libs (re-export for Admin feature consumers and internals)
export {
  IKContext,
  IKImage,
  IKUpload,
  Controller,
  NavLink,
  useLocation,
  Outlet,
  useState,
  useEffect,
  zodResolver,
  useForm,
  useSearchParams,
  createApi, fetchBaseQuery
} from "@/shared/libs";

// Services
export {
  useGetProductsQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} from "@/features/Product/services/apiProductsSlice";

// Types
export type { Product } from "@/features/Product/types/products.types";
export type { User } from "@/features/Auth/types/auth.types";
export type {CategoryData ,ProductFormProps,UploadImageProps} from "@/features/Admin/types/admin.types";



export * from "@/features/Admin/schemas/validations";