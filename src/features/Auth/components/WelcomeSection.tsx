import { ShoppingBag } from "@/features/Auth";


export function WelcomeSection({isRegister}: {isRegister: boolean}) {
  return (
    <div className="flex flex-col items-center space-y-2 text-center py-3">
      <div className="flex items-center justify-center rounded-full bg-primary/10 p-2">
        <ShoppingBag className="h-8 w-8 text-primary" />
      </div>
      <h1 className="text-3xl font-bold">Welcome to ShopHub</h1>
      <p className="text-muted-foreground">
        {isRegister ? "Create your account" : "Sign in to your account"}
      </p>
    </div>
  );
}
