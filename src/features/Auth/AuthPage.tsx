
import { AuthTabs, AuthForm, WelcomeSection, AuthHero,useLocation, useNavigate,useEffect, useState } from "@/features/Auth";
import type {AuthFormProps} from "@/features/Auth"




export function AuthPage({
  isRegister,
  form,
  showLoginPassword,
  showConfirmPassword,
  setShowLoginPassword,
  setShowConfirmPassword,
  isLoading,
  handleContinueAsGuest,
  onLoginSubmit,
  onRegisterSubmit,
}: AuthFormProps) {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState(isRegister ? "register" : "login");
  const location = useLocation();
  const path = location.pathname;

  // Update tab when URL changes
  useEffect(() => {
    if (activeTab === "login" && path !== "/auth/login") {
      navigate("/auth/login");
    } else if (activeTab === "register" && path !== "/auth/register") {
      navigate("/auth/register");
    }
  }, [activeTab, navigate, path]);

  // Update tab when isRegister changes
  useEffect(() => {
    setActiveTab(isRegister ? "register" : "login");
  }, [isRegister]);

  return (
    <section className="flex h-screen w-full flex-col bg-background lg:flex-row overflow-hidden">
      {/* Form Section */}
      <div className="flex flex-1 h-full flex-col">
        {/* Welcome message and logo */}
        <WelcomeSection isRegister={isRegister } />

        {/* Tabs and content */}
        <div className="w-full max-w-md mx-auto flex flex-col h-full px-4">
          <AuthTabs
            activeTab={activeTab}
            setActiveTab={setActiveTab}
            navigate={navigate}
          />

          <AuthForm
            isRegister={isRegister}
            showLoginPassword={showLoginPassword}
            showConfirmPassword={showConfirmPassword}
            setShowLoginPassword={setShowLoginPassword}
            setShowConfirmPassword={setShowConfirmPassword}
            form={form}
            isLoading={isLoading}
            onLoginSubmit={onLoginSubmit}
            onRegisterSubmit={onRegisterSubmit}
            handleContinueAsGuest={handleContinueAsGuest}
          />
        </div>
      </div>

      {/* Image Section with Unsplash Image */}
      <AuthHero />
    </section>
  );
}
