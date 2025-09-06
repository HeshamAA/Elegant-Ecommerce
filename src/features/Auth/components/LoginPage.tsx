
import { useLoginMutation, useAuth, AuthPage ,useNavigate} from "@/features/Auth";

 const LoginPage = () => {
  const navigate = useNavigate();
  const [login, { isLoading }] = useLoginMutation();
  const {
    form,
    showLoginPassword,
    showConfirmPassword,
    setShowLoginPassword,
    setShowConfirmPassword,
    handleContinueAsGuest,
    onLoginSubmit,
  } = useAuth(false);

 

  return (
    <AuthPage
      isRegister={false}
      form={form}
      showLoginPassword={showLoginPassword}
      showConfirmPassword={showConfirmPassword}
      setShowLoginPassword={setShowLoginPassword}
      setShowConfirmPassword={setShowConfirmPassword}
      isLoading={isLoading}
      onLoginSubmit={onLoginSubmit}
      onRegisterSubmit={null}
      handleContinueAsGuest={handleContinueAsGuest}
    />
  );
}
export default LoginPage;