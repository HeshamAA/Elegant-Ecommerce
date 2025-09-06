
import { useRegisterMutation, useAuth, AuthPage } from "@/features/Auth";
  

const RegisterPage = () => {

  const [register, { isLoading }] = useRegisterMutation();
  const {
    form,
    onRegisterSubmit,
    onLoginSubmit,
    showLoginPassword,
    showConfirmPassword,
    setShowLoginPassword,
    setShowConfirmPassword,
    handleContinueAsGuest,
  } = useAuth(true);



  return (
    <AuthPage
      isRegister={true}
      form={form}
      isLoading={isLoading}
      onRegisterSubmit={onRegisterSubmit}
      onLoginSubmit={onLoginSubmit}
      showLoginPassword={showLoginPassword}
      showConfirmPassword={showConfirmPassword}
      setShowLoginPassword={setShowLoginPassword}
      setShowConfirmPassword={setShowConfirmPassword}
      handleContinueAsGuest={handleContinueAsGuest}
    />
  );
}

export default RegisterPage;
