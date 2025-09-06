
import { Button,cn ,AuthTabsProps} from "@/features/Auth";


export function AuthTabs({ activeTab, setActiveTab, navigate }: AuthTabsProps) {
  return (
    <div className="grid w-full grid-cols-2 bg-muted p-1 rounded-md gap-1">
      <Button
        variant="outline"
        onClick={() => {
          setActiveTab("login");
          navigate("/auth/login");
        }}
        className={cn(
          activeTab === "login" ? "bg-background shadow-sm" : "bg-transparent"
        )}
      >
        Sign In
      </Button>
      <Button
        variant="outline"
        onClick={() => {
          setActiveTab("register");
          navigate("/auth/register");
        }}
        className={cn(
          activeTab === "register" ? "bg-background shadow-sm" : "bg-transparent"
        )}
      >
        Register
      </Button>
    </div>
  );
}
