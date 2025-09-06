import React, { useState } from "react";
import { Link } from "@/shared/libs";
import { Card, FashionButton, Badge, Heart, ShoppingBag } from "@/shared/components";
import { cn } from "@/utils/utils";

export interface FashionProductCardProps {
  product: {
    id: number;
    name: string;
    price: number;
    images: string[];
    category: string;
    rating?: number;
    reviewCount?: number;
    originalPrice?: number | null;
    isNew?: boolean;
    isOnSale?: boolean;
    isPremium?: boolean;
  };
}

const FashionProductCard = ({ product }: FashionProductCardProps) => {
  const [isHovered, setIsHovered] = useState(false);

  // Calculate discount percentage if there's an original price
  const discountPercentage = product.originalPrice
    ? Math.round(
        ((product.originalPrice - product.price) / product.originalPrice) * 100
      )
    : null;

  return (
    <Card
      className="overflow-hidden transition-all duration-300 hover:shadow-md border border-pink-100 dark:border-pink-800 gradient-border-bottom"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <Link to={`/product/${product.id}`} className="block gradient-overlay">
        <div className="relative aspect-[3/4] overflow-hidden">
          <img
            src={product.images[0] || "/placeholder.svg"}
            alt={product.name}
            className="h-full w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            onError={(e) => {
              (e.target as HTMLImageElement).src = "/placeholder.svg";
            }}
          />

          {/* Fashion-forward product badges */}
          <div className="absolute top-2 left-2 flex flex-col gap-1">
            {product.isNew && <Badge className="fashion-badge-new">New</Badge>}
            {product.isOnSale && (
              <Badge className="fashion-badge-sale">
                {discountPercentage ? `${discountPercentage}% Off` : "Sale"}
              </Badge>
            )}
            {product.isPremium && (
              <Badge className="bg-pink-300 text-pink-900 dark:bg-pink-400 dark:text-pink-900">
                Premium
              </Badge>
            )}
          </div>

          {/* Quick action buttons with fashion styling */}
          <div
            className={cn(
              "absolute bottom-0 left-0 right-0 flex justify-between p-3 bg-gradient-to-t from-pink-900/70 to-transparent transition-opacity duration-300",
              isHovered ? "opacity-100" : "opacity-0"
            )}
          >
            <FashionButton
              size="sm"
              variant="ghost"
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-white/80 text-pink-900 hover:bg-white"
            >
              <Heart className="h-5 w-5" />
            </FashionButton>
            <FashionButton
              size="sm"
              variant="ghost"
              className="rounded-full w-10 h-10 p-0 flex items-center justify-center bg-white/80 text-pink-900 hover:bg-white"
            >
              <ShoppingBag className="h-5 w-5" />
            </FashionButton>
          </div>
        </div>

        {/* Product info with fashion-forward styling */}
        <div className="p-4">
          <h3 className="font-medium text-pink-900 dark:text-pink-100 mb-1 line-clamp-1 fashion-heading">
            {product.name}
          </h3>
          <div className="flex items-center justify-between mt-2">
            <div className="flex items-baseline gap-2">
              {product.originalPrice ? (
                <>
                  <span className="fashion-sale-price font-semibold">
                    ${product.price.toFixed(2)}
                  </span>
                  <span className="text-sm text-gray-500 line-through">
                    ${product.originalPrice.toFixed(2)}
                  </span>
                </>
              ) : (
                <span className="price-tag">${product.price.toFixed(2)}</span>
              )}
            </div>

            {/* Only show ratings if they exist */}
            {product.rating && (
              <div className="flex items-center">
                <svg
                  className="h-4 w-4 text-amber-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
                <span className="ml-1 text-xs text-gray-600 dark:text-gray-400">
                  {product.rating}{" "}
                  {product.reviewCount && `(${product.reviewCount})`}
                </span>
              </div>
            )}
          </div>

          {/* Category tag for better filtering visibility */}
          <div className="mt-3">
            <span className="inline-block px-2 py-0.5 text-xs bg-pink-100 text-pink-800 dark:bg-pink-800 dark:text-pink-100 rounded-full">
              {product.category}
            </span>
          </div>
        </div>
      </Link>
    </Card>
  );
};

export default FashionProductCard;
