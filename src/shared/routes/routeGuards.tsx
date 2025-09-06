import { Navigate } from "react-router-dom";
import { useAppSelector } from "@/shared/state/hooks";
import { useLocation } from "react-router-dom";

interface RequireAdminProps {
  children: React.ReactNode;
}

interface RequireGuestProps {
  children: React.ReactNode;
}

export function RequireAdmin({ children }: RequireAdminProps) {
  const { user, isAuthenticated } = useAppSelector((state) => state.auth);
  const location = useLocation();
  
  if ( !user || user.user?.role !== "admin") {
    return <Navigate to="/auth/login" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
}

export function RequireGuest({ children }: RequireGuestProps) {
  const { user } = useAppSelector((state) => state.auth);
  const location = useLocation();
  
  if (user && user.user) {
    return <Navigate to="/" state={{ from: location }} replace />;
  }
  
  return <>{children}</>;
} 