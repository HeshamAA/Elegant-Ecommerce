/* eslint-disable @typescript-eslint/no-explicit-any */
import {Label,Input,Button,Separator,Link,Loader2,Facebook,Github,Eye,EyeOff,AuthFormProps} from "@/features/Auth"





export function AuthForm({
  isRegister,
  showLoginPassword,
  showConfirmPassword,
  setShowLoginPassword,
  setShowConfirmPassword,
  form,
  isLoading,
  onRegisterSubmit,
  onLoginSubmit,
  handleContinueAsGuest,
}: AuthFormProps) {


  

  const errors = form.formState.errors as any; // Type assertion for form errors


  return (
    <form
      onSubmit={form.handleSubmit(isRegister ? onRegisterSubmit : onLoginSubmit)}
      className="flex flex-col h-full gap-2 mt-6"
    >
      {/* Name Field - Only show in Register */}
      {isRegister && (
        <div className="space-y-2">
          <Label htmlFor="name">Full Name</Label>
          <Input
            id="name"
            placeholder="Enter your full name"
            type="text"
            {...form.register("name")}
            className={errors.name ? "border-red-500" : ""}
          />
          {errors.name && (
            <p className="text-sm text-red-500">{errors.name.message}</p>
          )}
        </div>
      )}

      {/* Email Field - Always show */}
      <div className="space-y-2">
        <Label htmlFor="email">Email</Label>
        <Input
          id="email"
          placeholder="Enter your email"
          type="email"
          {...form.register("email")}
          className={errors.email ? "border-red-500" : ""}
        />
        {errors.email && (
          <p className="text-sm text-red-500">{errors.email.message}</p>
        )}
      </div>

      {/* Password Field - Always show */}
      <div className={` ${isRegister ? "grid grid-cols-2 gap-2" : ""}`}>
        <div className="space-y-2">
          <Label htmlFor="password">Password</Label>
          <div className="relative">
            <Input
              id="password"
              placeholder={
                isRegister ? "Create a password" : "Enter your password"
              }
              type={showLoginPassword ? "text" : "password"}
              {...form.register("password")}
              className={errors.password ? "border-red-500" : ""}
            />
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
              onClick={() => setShowLoginPassword(!showLoginPassword)}
            >
              {showLoginPassword ? (
                <EyeOff className="h-4 w-4" />
              ) : (
                <Eye className="h-4 w-4" />
              )}
            </Button>
          </div>
          {errors.password && (
            <p className="text-sm text-red-500">{errors.password.message}</p>
          )}
        </div>

        {/* Confirm Password Field - Only show in Register */}
        {isRegister && (
          <div className="space-y-2">
            <Label htmlFor="confirmPassword">Confirm Password</Label>
            <div className="relative">
              <Input
                id="confirmPassword"
                placeholder="Confirm your password"
                type={showConfirmPassword ? "text" : "password"}
                {...form.register("confirmPassword")}
                className={errors.confirmPassword ? "border-red-500" : ""}
              />
              <Button
                type="button"
                variant="ghost"
                size="sm"
                className="absolute right-0 top-0 h-full px-3 py-2 hover:bg-transparent"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? (
                  <EyeOff className="h-4 w-4" />
                ) : (
                  <Eye className="h-4 w-4" />
                )}
              </Button>
            </div>
            {errors.confirmPassword && (
              <p className="text-sm text-red-500">
                {errors.confirmPassword.message}
              </p>
            )}
          </div>
        )}
      </div>

      {/* Conditional Footer - Terms for Register */}
      {isRegister && (
        <div className="space-y-2">
          <div className="flex items-center space-x-2">
            <Input
              type="checkbox"
              id="terms"
              {...form.register("terms")}
              className={errors.terms ? "border-red-500" : ""}
              defaultChecked={false}
            />
            <Label htmlFor="terms" className="text-sm">
              I agree to the{" "}
              <Link to="/terms" className="text-primary hover:underline">
                Terms of Service
              </Link>{" "}
              and{" "}
              <Link to="/privacy" className="text-primary hover:underline">
                Privacy Policy
              </Link>
            </Label>
          </div>
          {errors.terms && (
            <p className="text-sm text-red-500">{errors.terms.message}</p>
          )}
        </div>
      )}

      <Button type="submit" className="w-full mt-6" disabled={isLoading}>
        {isLoading && <Loader2 className="mr-2 h-4 w-4 animate-spin" />}
        {isRegister ? "Create Account" : "Sign In"}
      </Button>

      {/* Social Login Options */}
      <div className="space-y-4">
        <div className="relative">
          <div className="absolute inset-0 flex items-center">
            <Separator className="w-full" />
          </div>
          <div className="relative flex justify-center text-xs uppercase">
            <span className="bg-background px-2 text-muted-foreground">
              Or continue with
            </span>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-3">
          <Button variant="outline" type="button">
            <Github className="mr-2 h-4 w-4" />
            Github
          </Button>
          <Button variant="outline" type="button">
            <Facebook className="mr-2 h-4 w-4" />
            Facebook
          </Button>
        </div>
        <div className=" bottom-0 bg-background p-4 mb-2 border-t">
          <Button
            variant="secondary"
            className="w-full"
            onClick={handleContinueAsGuest}
          >
            Continue as Guest
          </Button>
        </div>
      </div>
    </form>
  );
}
