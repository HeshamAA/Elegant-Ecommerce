import { useEffect } from "react";
import { useAppDispatch, useAppSelector } from "@/shared/state/hooks";
import { fetchProducts } from "@/features/Product/state/productsSlice";
import ProductCard from "./ProductCard";
import { Button } from "@/shared/components/Button";
import { Link } from "react-router-dom";
import { fetchFeaturedProductsShortList } from "@/features/Home/services/fetchFeaturedProductsShortList";

const FeaturedProducts = () => {
  const dispatch = useAppDispatch();
  const { featuredProducts, loading } = useAppSelector(
    (state) => state.products
  );

  useEffect(() => {
    dispatch(fetchFeaturedProductsShortList());
  }, [dispatch]);

  if (loading && featuredProducts.length === 0) {
    return (
      <div className="container mx-auto px-4 py-12">
        <h2 className="mb-8 text-center text-2xl font-semibold">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="animate-pulse">
              <div className="aspect-[3/4] rounded-md bg-elegent-200"></div>
              <div className="mt-2">
                <div className="h-4 w-3/4 rounded bg-elegent-200"></div>
                <div className="mt-2 h-3 w-1/4 rounded bg-elegent-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <h2 className="mb-8 text-center text-2xl font-semibold">
        Featured Products
      </h2>
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {featuredProducts.slice(0, 4).map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
      </div>
      <div className="mt-8 text-center">
        <Button>
          <Link to="/category/all">View All Products</Link>
        </Button>
      </div>
    </div>
  );
};

export default FeaturedProducts;
