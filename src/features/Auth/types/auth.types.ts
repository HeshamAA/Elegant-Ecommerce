import type {
  UseFormReturn,
  RegisterFormValues,
  LoginFormValues,
} from "@/features/Auth";

export interface formInitialValues {
  email?: string;
  password?: string;
}

export interface LoginData extends formInitialValues {
  rememberMe?: boolean;
}

export interface RegisterData extends formInitialValues {
  name?: string;
  confirmPassword?: string;
  terms?: boolean;
}

export interface AuthResponse {
  accesstoken: string;
  user:User
}

export interface AuthFormProps {
  isRegister: boolean;
  showLoginPassword: boolean;
  showConfirmPassword: boolean;
  setShowLoginPassword: (value: boolean) => void;
  setShowConfirmPassword: (value: boolean) => void;
  form: UseFormReturn<RegisterFormValues | LoginFormValues>;
  isLoading: boolean;
  onRegisterSubmit: (data: RegisterFormValues) => Promise<void>;
  onLoginSubmit: (data: LoginFormValues) => Promise<void>;
  handleContinueAsGuest: () => void;
}

export interface User {
  
  email: string;
  name: string;
  wishlist: string[];
  id: string;
  role: "admin" | "user";
}

export interface AuthState {
  user: AuthResponse | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}

export interface AuthTabsProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
  navigate: (path: string) => void;
}