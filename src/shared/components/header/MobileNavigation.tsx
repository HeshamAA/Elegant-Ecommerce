import { React,Link,cn } from "@/shared/libs";
import { Heart } from "@/shared/components";
import { WelcomeMessage } from "./WelcomeMessage";
import { useAuth } from "@/features/Auth";

interface MobileNavigationProps {
  isOpen: boolean;
  isCurrentPath: (path: string) => boolean;
  wishlistItemCount: number;
  welcomeMessage: string;
}

export const MobileNavigation: React.FC<MobileNavigationProps> = ({
  isOpen,
  isCurrentPath,
  wishlistItemCount,
  welcomeMessage,
}) => {
  const { user, handleLogout } = useAuth();

  if (!isOpen) return null;

  return (
    <div className="md:hidden border- pt-5">
      <WelcomeMessage message={welcomeMessage} />
    
      <nav className="flex flex-col space-y-4 p-4">

        <Link
          to="/"
          className={cn(
            "transition-colors hover:text-foreground/80",
            isCurrentPath("/") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Home
        </Link>

        <details className="group">
          <summary
            className={cn(
              "list-none flex justify-between transition-colors hover:text-foreground/80",
              isCurrentPath("/category/men") ||
                isCurrentPath("/category/women") ||
                isCurrentPath("/category/kids") ||
                isCurrentPath("/category/sport")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Categories
            <span className="transition group-open:rotate-180">▼</span>
          </summary>
          <div className="mt-2 space-y-2 pl-4">
            <Link
              to="/category/men"
              className={cn(
                "block transition-colors hover:text-foreground/80",
                isCurrentPath("/category/men")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Men
            </Link>
            <Link
              to="/category/women"
              className={cn(
                "block transition-colors hover:text-foreground/80",
                isCurrentPath("/category/women")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Women
            </Link>
            <Link
              to="/category/kids"
              className={cn(
                "block transition-colors hover:text-foreground/80",
                isCurrentPath("/category/kids")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Kids
            </Link>
            <Link
              to="/category/sport"
              className={cn(
                "block transition-colors hover:text-foreground/80",
                isCurrentPath("/category/sport")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              Sport
            </Link>
          </div>
        </details>

        <Link
          to="/blog"
          className={cn(
            "transition-colors hover:text-foreground/80",
            isCurrentPath("/blog") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Style Guide
        </Link>

        <Link
          to="/contact"
          className={cn(
            "transition-colors hover:text-foreground/80",
            isCurrentPath("/contact") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Contact
        </Link>
         <Link
          to="/wishlist"
          className={cn(
            "transition-colors hover:text-foreground/80",
            isCurrentPath("/wishlist") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Wishlist
        </Link>
         <Link
          to="/cart"
          className={cn(
            "transition-colors hover:text-foreground/80",
            isCurrentPath("/cart") ? "text-foreground" : "text-foreground/60"
          )}
        >
          Cart
        </Link>

        {user ? (
          <>
            {user.user.role === "admin" && (
              <Link
                to="/admin/dashboard"
                className={cn(
                  "transition-colors hover:text-foreground/80",
                  isCurrentPath("/admin/dashboard")
                    ? "text-foreground"
                    : "text-foreground/60"
                )}
              >
                Dashboard
              </Link>
            )}
            <Link
              to="/wishlist"
              className={cn(
                "flex items-center transition-colors hover:text-foreground/80",
                isCurrentPath("/wishlist")
                  ? "text-foreground"
                  : "text-foreground/60"
              )}
            >
              <Heart className="h-5 w-5 mr-2" /> Wishlist
              {wishlistItemCount > 0 && (
                <span className="ml-2 bg-primary text-primary-foreground text-xs font-bold rounded-full h-4 w-4 flex items-center justify-center">
                  {wishlistItemCount}
                </span>
              )}
            </Link>
            <button
              onClick={handleLogout}
              className="text-left text-foreground/60 hover:text-foreground/80"
            >
              Logout
            </button>
          </>
        ) : (
          <Link
            to="/auth"
            className={cn(
              "transition-colors hover:text-foreground/80",
              isCurrentPath("/auth") ? "text-foreground" : "text-foreground/60"
            )}
          >
            Login / Register
          </Link>
        )}
      </nav>
    </div>
  );
};
