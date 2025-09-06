import { Search, ShoppingCart, Heart, User, Sun, Moon } from "@/shared/components";
import { useTheme } from "@/shared/hooks";
import { Link,useAppSelector } from "@/shared/libs";

export default function HeaderIcons() {
  const { theme, setTheme, isDark } = useTheme();
  const { cartItems } = useAppSelector((state) => state.cart);
  const { user } = useAppSelector((state) => state.auth);

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

      {/* Search */}
      <button className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors">
        <Search className="h-5 w-5" />
      </button>

      {/* Wishlist */}
      <Link
        to="/wishlist"
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
      >
        <Heart className="h-5 w-5" />
      </Link>

      {/* Cart */}
      <Link
        to="/cart"
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors relative"
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
        className="p-2 rounded-full hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
      >
        <User className="h-5 w-5" />
      </Link>
    </div>
  );
}
