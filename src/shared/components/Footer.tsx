import { Link } from "@/shared/libs";
import {
  Mail,
  Phone,
  MapPin,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
} from "@/shared/components";

const Footer = () => {
  return (
    <footer className="bg-background">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Elegent</h3>
            <p className="text-muted-foreground mb-4">
              Your destination for premium fashion and accessories. Quality
              products for every style and occasion.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Facebook"
              >
                <Facebook className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="h-5 w-5" />
              </a>
              <a
                href="#"
                className="text-muted-foreground hover:text-primary transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Shop</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/category/men"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Men
                </Link>
              </li>
              <li>
                <Link
                  to="/category/women"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Women
                </Link>
              </li>
              <li>
                <Link
                  to="/category/kids"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Kids
                </Link>
              </li>
              <li>
                <Link
                  to="/category/sports"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Sports
                </Link>
              </li>
              <li>
                <Link
                  to="/category/accessories"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Accessories
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Help</h3>
            <ul className="space-y-2">
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Customer Service
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Track My Order
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Returns & Exchanges
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Shipping Information
                </a>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-muted-foreground hover:text-primary transition-colors"
                >
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-bold mb-4 text-foreground">Contact</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0 mt-0.5" />
                <span className="text-muted-foreground">
                  123 Fashion Street, New York, NY 10001, United States
                </span>
              </li>
              <li className="flex items-center">
                <Phone className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center">
                <Mail className="h-5 w-5 mr-2 text-muted-foreground flex-shrink-0" />
                <span className="text-muted-foreground">
                  support@elegent.com
                </span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-12 pt-6 flex flex-col md:flex-row justify-between items-center text-muted-foreground text-sm">
          <p>&copy; 2025 Elegent. All rights reserved.</p>
          <div className="flex flex-wrap gap-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
