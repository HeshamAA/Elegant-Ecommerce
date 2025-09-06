//ui & icons from shared
export {
  Button,
  Input,
  Label,
  Separator,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Loader2,
  ShoppingBag,
  Facebook,
  Github,
  Eye,
  EyeOff,
  showToast
} from "@/shared/components";

// Components
export { AuthForm } from "@/features/Auth/components/AuthForm";
export { WelcomeSection } from "@/features/Auth/components/WelcomeSection";
export { AuthHero } from "@/features/Auth/components/AuthHero";
export { AuthTabs } from "@/features/Auth/components/AuthTabs";
export { default as RegisterPage } from "@/features/Auth/components/RegisterPage";
export { default as LoginPage } from "@/features/Auth/components/LoginPage";
export { AuthPage } from "@/features/Auth/AuthPage";

// Hooks
export { useAppDispatch, useAppSelector } from "@/shared/state/hooks";
export { useAuth } from "@/features/Auth/hooks/useAuth";

// Shared libs
export { Link,useState, useEffect, useLocation, useNavigate, useForm,createSlice,createApi, fetchBaseQuery , zodResolver, z,persistor} from "@/shared/libs";




 
// enums
export { API_BASE_URL, HttpMethods } from "@/shared/constants/enums";
export { ENDPOINTS } from "@/shared/constants/enums";

// Services
export {
  useLoginMutation,
  useRegisterMutation,
} from "@/features/Auth/services/apiAuthSlice";
export { getErrorMessage } from "@/utils/apiErrorHandler";


//utils
export { cn } from "@/utils/utils";


// Types
export type { LoginFormValues } from "@/features/Auth/schemas/loginSchema";
export type { RegisterFormValues } from "@/features/Auth/schemas/registerSchema";
export type { AuthFormProps,AuthTabsProps } from "@/features/Auth/types/auth.types";
export type {
  AuthResponse,
  LoginData,
  RegisterData,
} from "@/features/Auth/types/auth.types";
export type {UseFormReturn} from "@/shared/libs"

//schemas
export { registerSchema } from "@/features/Auth/schemas/registerSchema";
export { loginSchema } from "@/features/Auth/schemas/loginSchema";

// Types
export type {
  User,
  AuthState,
} from "./types/auth.types";

// State
export { setUser, setLoading, setError, logout } from "./state/authSlice";
export { default as authReducer } from "./state/authSlice";
