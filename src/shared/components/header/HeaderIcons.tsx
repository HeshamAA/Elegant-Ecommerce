import { Search, ShoppingCart, Heart, User, Sun, Moon } from "@/shared/components";
import { useTheme } from "@/shared/hooks";
import { Link,useAppSelector } from "@/shared/libs";

export default function HeaderIcons({welcomeMessage}: {welcomeMessage: string}) {
  const { theme, setTheme, isDark } = useTheme();
  const { cartItems } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.auth);
console.log(welcomeMessage);
  const toggleTheme = () => {
    setTheme(isDark ? 'light' : 'dark');
  };

  return (
    <div className="flex items-center gap-4">
      {/* Theme Toggle */}
      <button
        onClick={toggleTheme}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
        aria-label="Toggle theme"
      >
        {isDark ? (
          <Sun className="h-5 w-5 text-yellow-500" />
        ) : (
          <Moon className="h-5 w-5 text-gray-600" />
        )}
      </button>

      {/* Wishlist */}
      <Link
        to="/wishlist"
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative hidden md:inline-flex"
      >
        <Heart className="h-5 w-5" />
      </Link>

      {/* Cart */}
      <Link
        to="/cart"
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative hidden md:inline-flex"
      >
        <ShoppingCart className="h-5 w-5" />
        {cartItems?.length > 0 && (
          <span className="absolute -top-1 -right-1 bg-red-500 text-white text-xs rounded-full h-5 w-5 flex items-center justify-center">
            {cartItems.length}
          </span>
        )}
      </Link>

      {/* User */}
      <Link
        to={user ? "/profile" : "/auth/login"}
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors items-center gap-2 hidden md:inline-flex"
      >
        <User className="h-5 w-5" />
        <p>{welcomeMessage}</p>
      </Link>
    </div>
  );
}
