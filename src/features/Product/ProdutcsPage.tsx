import {useProducts, ProductCard, Filter, Grid, List, toggleViewMode, Button, Skeleton, } from "@/features/Product";
import type { Product } from "@/features/Product";

const ProductsPage = () => {
  
  const {
    sort,
    setSort,
    totalPages,
    page,
    handleNext,
    handlePrev,
    sortedProducts,
    categoryTitle,
    loading: productsLoading,
    viewMode,
    dispatch,
  } = useProducts();

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="mb-8 text-2xl font-bold">{categoryTitle}</h1>

      <div className="mb-6 flex flex-wrap items-center justify-between gap-4">
        <div className="flex items-center">
          <Button variant="outline" size="sm" className="mr-3">
            <Filter className="mr-2 h-4 w-4" />
            Filters
          </Button>

          <div className="flex items-center gap-2">
            <Button
              variant={viewMode === "grid" ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => dispatch(toggleViewMode())}
            >
              <Grid className="h-4 w-4" />
            </Button>
            <Button
              variant={viewMode === "list" ? "default" : "ghost"}
              size="icon"
              className="h-8 w-8"
              onClick={() => dispatch(toggleViewMode())}
            >
              <List className="h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <label className="font-medium">Sort by price:</label>
          <select
            value={sort}
            onChange={(e) => setSort(e.target.value)}
            className="bg-background border rounded px-2 py-1"
          >
            <option value="desc">Highest to Lowest</option>
            <option value="asc">Lowest to Highest</option>
          </select>
        </div>
      </div>

      <div
        className={`grid gap-6 ${
          viewMode === "grid"
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
            : "grid-cols-1"
        }`}
      >
        {productsLoading
          ? Array.from({ length: 8 }).map((_, i) => (
              <div key={i} className="flex flex-col space-y-3">
                <Skeleton className="h-64 w-full" />
                <Skeleton className="h-4 w-3/4" />
                <Skeleton className="h-4 w-1/2" />
              </div>
            ))
          : sortedProducts.map((product) => (
              <ProductCard key={product.id} product={product as Product} />
            ))}
      </div>

      {/* Pagination Controls */}
      <div className="flex justify-center items-center gap-2 mt-8">
        <Button
          variant="outline"
          size="sm"
          disabled={page === 1}
          onClick={handlePrev}
        >
          Prev
        </Button>
        <span className="px-3">
          Page {page} of {totalPages}
        </span>
        <Button
          variant="outline"
          size="sm"
          disabled={page === totalPages}
          onClick={handleNext}
        >
          Next
        </Button>
      </div>
    </div>
  );
};

export default ProductsPage;
