import { Link,cn,React} from "@/shared/libs";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/shared/components";

interface DesktopNavigationProps {
  isCurrentPath: (path: string) => boolean;
}

export const DesktopNavigation: React.FC<DesktopNavigationProps> = ({
  isCurrentPath,
}) => {
  return (
    <nav className="hidden md:flex flex-1 items-center justify-center space-x-6 text-sm font-medium">
      <Link
        to="/"
        className={cn(
          "transition-colors hover:text-foreground/80",
          isCurrentPath("/") ? "text-foreground" : "text-foreground/60"
        )}
      >
        Home
      </Link>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <button
            className={cn(
              "transition-colors hover:text-foreground/80",
              isCurrentPath("/products/men") ||
                isCurrentPath("/products/women") ||
                isCurrentPath("/products/kids") ||
                isCurrentPath("/products/sport")
                ? "text-foreground"
                : "text-foreground/60"
            )}
          >
            Categories
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="center">
          <DropdownMenuItem>
            <Link to="/products/men" className="w-full">
              Men
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/products/women" className="w-full">
              Women
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/products/kids" className="w-full">
              Kids
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/products/sport" className="w-full">
              Sport
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
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
    </nav>
  );
};
