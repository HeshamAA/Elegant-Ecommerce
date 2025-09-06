import {useProduct, useState,useParams, Link, Button, Heart, HeartOff, Skeleton, Image  } from "@/features/Product";


const ProductPage = () => {
  const { id } = useParams<{ id: string }>();
  const {product,isLoading,error,handleAddToCart,handleWishlist,isInWishlist,navigate} = useProduct(id);
  const [activeImage, setActiveImage] = useState(0);


  if (error) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold text-destructive">Error</h1>
          <p className="mt-2 ">Error</p>
          
       
        </div>
      </div>
    );
  }

  if (isLoading) {
    return (
      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
          <div>
            <Skeleton className="mb-4 h-[400px] w-full" />
            <div className="grid grid-cols-4 gap-2">
              {[...Array(4)].map((_, i) => (
                <Skeleton key={i} className="h-20 w-full" />
              ))}
            </div>
          </div>
          <div>
            <Skeleton className="mb-4 h-8 w-3/4" />
            <Skeleton className="mb-4 h-4 w-1/2" />
            <Skeleton className="mb-8 h-6 w-1/4" />
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="mb-4 h-10 w-full" />
            <Skeleton className="mb-4 h-32 w-full" />
          </div>
        </div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="container mx-auto flex min-h-[60vh] items-center justify-center px-4">
        <div className="text-center">
          <h1 className="text-2xl font-semibold">Product not found</h1>
          <p className="mt-2">
            The product you are looking for does not exist.
          </p>
          <Button className="mt-4" onClick={() => navigate("/")}>
            Return to Home
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-4 flex items-center text-sm">
        <Link to="/" className="hover:text-primary">
          Home
        </Link>
        <span className="mx-2">/</span>
        <Link
          to={`/category/${product.cat_prefix}`}
          className="hover:text-primary"
        >
          {product.cat_prefix.charAt(0).toUpperCase() + product.cat_prefix.slice(1)}
        </Link>
       
        <span>{product.title}</span>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
        <div>
          <div className="mb-4 overflow-hidden rounded-lg">
           <Image 
           path={product.images[activeImage]}
           alt={product.title}
           size="large"
           loading="lazy"
           className="h-full w-full object-cover"
           /> 
          </div>

          <div className="grid grid-cols-4 gap-2">
            {product.images.map((image, i) => (
              <button
                key={i}
                className={`overflow-hidden rounded border-2 ${
                  activeImage === i ? "border-primary" : "border-transparent"
                }`}
                onClick={() => setActiveImage(i)}
              >
                <Image 
                path={image}
                alt={product.title}
                size="small"
                loading="lazy"
                className="h-full w-full object-cover"
                /> 
              </button>
            ))}
          </div>
        </div>

        <div>
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <div className="mt-2 flex items-center space-x-4">
            <div className="flex">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={`h-5 w-5 ${
                    i < Math.floor(product.rating)
                      ? "text-amber-400"
                      : "text-elegant-300"
                  }`}
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <span className="text-sm ">
              {product.reviews} reviews
            </span>
          </div>

          <div className="mt-4 flex items-baseline">
            <span className="text-2xl font-bold">
              ${product.price.toFixed(2)}
            </span>
            {product.originalPrice && (
              <span className="ml-3 text-lg line-through">
                ${product.originalPrice.toFixed(2)}
              </span>
            )}
            {product.originalPrice && (
              <span className="ml-3 rounded-full bg-destructive px-2 py-0.5 text-xs font-medium text-white">
                {Math.round(
                  ((product.originalPrice - product.price) /
                    product.originalPrice) *
                    100
                )}
                % OFF
              </span>
            )}
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium">Available Colors</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.colors.map((color) => (
                <button
                  key={color}
                  className="rounded-md border px-3 py-1 text-sm"
                >
                  {color}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="text-sm font-medium">Available Sizes</h3>
            <div className="mt-2 flex flex-wrap gap-2">
              {product.sizes.map((size) => (
                <button
                  key={size}
                  className="rounded-md border px-3 py-1 text-sm"
                 
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="text-sm font-medium">Available Quantity</h3>
            <div className="mt-2 flex items-center border rounded w-32">
            
              <span className="flex-1 px-2 py-1 text-center">{product.stock}</span>
            
            </div>
          </div>

          <div className="mt-6 space-y-3">
            <Button
              className="w-full"
              size="lg"
              onClick={handleAddToCart}
              disabled={product.stock === 0}
            >
              {product.stock > 0 ? "Add to Cart" : "Out of Stock"}
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="w-full flex items-center justify-center gap-2"
              onClick={handleWishlist}
            >
              {isInWishlist ? (
                <>
                  <HeartOff className="w-5 h-5" /> Remove from Wishlist
                </>
              ) : (
                <>
                  <Heart className="w-5 h-5" /> Add to Wishlist
                </>
              )}
            </Button>
          </div>

          <div className="mt-8">
            <h3 className="text-lg font-medium">Description</h3>
            <p className="mt-2 text-primary">{product.desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
