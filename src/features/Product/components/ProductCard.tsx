import React from "react";
import { Image,useProduct ,Heart, ShoppingCart} from "@/features/Product";
import type { Product } from "@/features/Product";
import { Info } from "lucide-react";



export interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {

  const {handleAddToCart,handleToggleWishlist,isInWishlist,getDiscountPercentage,selectedColor,setSelectedColor,navigate} = useProduct(product.id.toString());
  

  return (
    <div
      className="max-w-sm mx-auto h-full "
      dir="ltr"
    >
      <div
        className="group bg-card rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 overflow-hidden border border-border h-full flex flex-col"
      >
        {/* Image */}
        <div className="relative flex-shrink-0">
          <div className="aspect-[3/4] overflow-hidden">
            <Image
              path={product.images[0]}
              alt={product.title}
              size="small"
              className="w-full h-full object-cover rounded"
            />
          </div>

          {/* Badges */}
          <div className="absolute top-3 left-3 flex flex-col gap-2">
            {product.new && (
              <span className="bg-primary text-primary-foreground text-xs font-bold px-2 py-1 rounded-full">
                New
              </span>
            )}
            {product.sale && (
              <span className="bg-destructive text-destructive-foreground text-xs font-bold px-2 py-1 rounded-full">
                -{getDiscountPercentage()}%
              </span>
            )}
          </div>

          {/* Wishlist Button */}
          <button
            className="absolute top-3 right-3 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all"
            onClick={handleToggleWishlist}
          >
            <Heart
              className={`h-4 w-4 ${
                isInWishlist
                  ? "text-red-500 fill-red-500"
                  : "text-muted-foreground"
              }`}
            />
          </button>
          {/* Add Details Button */}
          <button
            className="absolute top-12 right-3 w-8 h-8 bg-background rounded-full flex items-center justify-center shadow-md hover:shadow-lg transition-all cursor-pointer"
            onClick={() => navigate(`/product/${product.id}`)}
          >
            <Info
              className={`h-4 w-4 ${
                isInWishlist
                  ? "text-red-500 fill-red-500"
                  : "text-muted-foreground"
              }`}
            />
          </button>
        </div>

        {/* Content */}
        <div className="p-4 flex flex-col flex-grow">
          {/* Rating */}
          <div className="flex items-center gap-1 mb-2">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`w-3 h-3 ${
                    i < Math.floor(product.rating)
                      ? "text-yellow-400"
                      : "text-muted"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-xs text-muted-foreground">
              ({product.reviews})
            </span>
          </div>

          {/* Title */}
          <h3 className="font-semibold text-foreground mb-1 line-clamp-1">
            {product.title}
          </h3>

          {/* Description */}
          <p className="text-sm text-muted-foreground mb-3 line-clamp-2 min-h-[2.5rem]">
            {product.desc}
          </p>

          {/* Price */}
          <div className="flex items-center gap-2 mb-4 mt-auto">
            <span className="text-xl font-bold text-primary">
              ${product.price}
            </span>
            {product.originalPrice && (
              <span className="text-sm text-muted-foreground line-through">
                ${product.originalPrice}
              </span>
            )}
          </div>

          {/* Color Selection */}
          <div className="mb-4">
            <div className="flex gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  onClick={(e) => {
                    e.preventDefault();
                    e.stopPropagation();
                    setSelectedColor(color);
                  }}
                  className={`w-5 h-5 rounded-full border-2 transition-all ${
                    selectedColor === color
                      ? "border-primary scale-110"
                      : "border-border hover:border-primary/50"
                  }`}
                  style={{ backgroundColor: color.toLowerCase() }}
                  title={color}
                />
              ))}
            </div>
          </div>

          {/* Add to Cart Button */}
          <button
            className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-medium py-2.5 px-4 rounded-xl transition-colors flex items-center justify-center gap-2"
            onClick={handleAddToCart}
          >
            <ShoppingCart className="h-4 w-4" />
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default React.memo(ProductCard);
