import { useState, useEffect,Link, useLocation,useAppSelector } from "@/shared/libs";
import { Menu, X } from "@/shared/components";
import { DesktopNavigation } from "./DesktopNavigation";
import { MobileNavigation } from "./MobileNavigation";
import  HeaderIcons  from "./HeaderIcons";
import { UserMenu } from "./UserMenu";


const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation();
  const cartItemCount = useAppSelector(
    (state) => state.cart.productFullInfo.length
  );
  const wishlistItemCount = useAppSelector(
    (state) => state.auth.user?.user?.wishlist?.length || 0
  );
  const [welcomeMessage, setWelcomeMessage] = useState("Welcome, Guest");
  const {user} = useAppSelector((state) => state.auth);
 
  useEffect(() => {
    
    if (user?.user) {
      setWelcomeMessage(`Welcome, ${user.user.name || "User"}`);
    }
    

  }, [location, user]);

  // Close the menu when route changes
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const isCurrentPath = (path: string) => {
    if (path === "/") {
      return location.pathname === path;
    }
    return location.pathname.startsWith(path);
  };




  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 ">
      <div className="container px-4 flex h-16 items-center mx-auto justify-center ">
        {/* Logo */}
        <div className="flex items-center">
          <Link to="/" className="mr-6 flex items-center space-x-2">
            <span className="font-bold text-3xl">Elegent</span>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <DesktopNavigation isCurrentPath={isCurrentPath} />

        {/* Right Section - Welcome Message and Icons */}
        <HeaderIcons
          cartItemCount={cartItemCount}
          wishlistItemCount={wishlistItemCount}
          isCurrentPath={isCurrentPath}
          welcomeMessage={welcomeMessage}
        />
        {user &&
        <div className="flex items-center space-x-4">
          <UserMenu />

          {/* Mobile menu button */}
          <button
            className="md:hidden text-foreground/60 hover:text-foreground/80"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
          >
            {menuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
        }
      </div>

      {/* Mobile Navigation */}
      <MobileNavigation
        isOpen={menuOpen}
        isCurrentPath={isCurrentPath}
        wishlistItemCount={wishlistItemCount}
        welcomeMessage={welcomeMessage}
      />
    </header>
  );
};

export default Header;
