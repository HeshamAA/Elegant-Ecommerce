import { Fragment,useLocation } from "@/shared/libs";
import Header from "../components/header/Header";
import Footer from "../components/Footer";
import CartDrawer from "../../features/Cart/components/CartDrawer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  const location = useLocation();
  const hideHeaderFooter = location.pathname.startsWith("/auth");
  return (
    <Fragment>
      {!hideHeaderFooter && <Header />}
      <main>{children}</main>
      {!hideHeaderFooter && <Footer />}
      <CartDrawer />
    </Fragment>
  );
};

export default Layout;
