import {
  useForm,
  useNavigate,
  useAppDispatch,
  useAppSelector,
  setUser,
  setLoading,
  setError,
  logout,
  useLoginMutation,
  useRegisterMutation,
  showToast,
  type LoginFormValues,
  type RegisterFormValues,
  registerSchema,
  loginSchema,
  useState,
  zodResolver,
  persistor
} from "@/features/Auth";

export const useAuth = (isRegister?: boolean) => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const [login] = useLoginMutation();
  const [register] = useRegisterMutation();
  const [showLoginPassword, setShowLoginPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const { user } = useAppSelector((state) => state.auth);

  const form = useForm<LoginFormValues | RegisterFormValues>({
    resolver: zodResolver(isRegister ? registerSchema : loginSchema),
    defaultValues: isRegister
      ? {
          name: "",
          email: "",
          password: "",
          confirmPassword: "",
          terms: false,
        }
      : {
          email: "",
          password: "",
        },
  });

  const onRegisterSubmit = async (data: RegisterFormValues) => {
    try {
      dispatch(setLoading(true));
      const registerData = data;
      const result = await register(registerData).unwrap();
      dispatch(setUser(result));
      showToast.success("Registration successful");

      navigate("/");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Authentication failed";
      dispatch(setError(errorMessage));
      showToast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleLogout = () => {
    dispatch(logout());
    persistor.purge();
    showToast.success("Logged out successfully");
    navigate("/");
  };

  const onLoginSubmit = async (data: LoginFormValues) => {
    try {
      dispatch(setLoading(true));

      const loginData = data as LoginFormValues;
      const result = await login(loginData).unwrap();
      dispatch(setUser(result));
      showToast.success("Login successful");

      navigate("/");
    } catch (error) {
      const errorMessage =
        error instanceof Error ? error.message : "Authentication failed";
      dispatch(setError(errorMessage));
      showToast.error(errorMessage);
    } finally {
      dispatch(setLoading(false));
    }
  };

  const handleContinueAsGuest = () => {
    navigate("/");
    showToast.success("Continuing as guest");
  };

  return {
    form,
    onRegisterSubmit,
    onLoginSubmit,
    handleLogout,
    showLoginPassword,
    showConfirmPassword,
    setShowLoginPassword,
    setShowConfirmPassword,
    handleContinueAsGuest,
    user,
  };
};
