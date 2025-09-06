import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  Button,
  showToast,
} from "@/shared/components";
import { logout } from "@/features/Auth";
import { useAppDispatch,useAppSelector,useNavigate, Link } from "@/shared/libs";

export const UserMenu = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const handleLogout = () => {
    dispatch(logout());
    showToast.success("Logged out successfully");
    navigate("/");
  };
  const { user } = useAppSelector((state) => state.auth);



  return (
    <div className="hidden md:block">
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            {user?.user.name || user?.user.role}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end">
          {user?.user.role === "admin" && (
            <DropdownMenuItem>
              <Link to="/admin/dashboard" className="w-full">
                Dashboard
              </Link>
            </DropdownMenuItem>
          )}
          <DropdownMenuItem>Profile</DropdownMenuItem>
          <DropdownMenuItem>
            <Link to="/wishlist" className="w-full">
              Wishlist
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>Orders</DropdownMenuItem>
          <DropdownMenuItem onClick={handleLogout}>Logout</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};
