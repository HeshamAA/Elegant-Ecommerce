import { Link ,Button,Heart,ShoppingCart,Trash,AlertCircle,} from "@/features/Wishlist";
import { useProduct } from "@/features/Product";



const WishlistPage = () => {
  const { handleAddToCart,handleToggleWishlist,user} = useProduct(null)
  if (!user) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <div className="text-center p-8 rounded-lg bg-muted/30">
          <AlertCircle className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h1 className="text-2xl font-bold mb-4">Login Required</h1>
          <p className="text-muted-foreground mb-6">
            Please login to view and manage your wishlist.
          </p>
          <Button>
            <Link to="/auth">Login / Register</Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12">
      <div className="flex items-center justify-between mb-8">
        <h1 className="text-3xl font-bold flex items-center">
          <Heart className="mr-2 h-6 w-6" /> My Wishlist
        </h1>
        {user.user.wishlist.length > 0 && (
          <Button variant="outline" onClick={handleToggleWishlist}>
            <Trash className="h-4 w-4 mr-2" /> Clear Wishlist
          </Button>
        )}
      </div>

      {user.user.wishlist.length === 0 ? (
        <div className="text-center py-16 bg-muted/30 rounded-lg">
          <Heart className="mx-auto h-12 w-12 text-muted-foreground mb-4" />
          <h2 className="text-2xl font-medium mb-2">Your wishlist is empty</h2>
          <p className="text-muted-foreground mb-6">
            Products you save to your wishlist will appear here.
          </p>
          <Button>
            <Link to="/">Continue Shopping</Link>
          </Button>
        </div>
      ) : (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {user.user.wishlist.map((item:any) => (
            <div
              key={item}
              className="border rounded-lg overflow-hidden hover:shadow-md transition-shadow bg-card"
            >
              <Link to={`/product/${item}`}>
                <div className="aspect-square relative">
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className="object-cover w-full h-full"
                    onError={(e) => {
                      (e.target as HTMLImageElement).src = "/placeholder.svg";
                    }}
                  />
                </div>
              </Link>
              <div className="p-4">
                <Link
                  to={`/product/${item}`}
                  className="font-medium hover:text-primary"
                >
                  {item.title}
                </Link>
                <div className="flex items-center justify-between mt-2">
                  <span className="font-bold">${item.price}</span>
                </div>
                <div className="flex gap-2 mt-4">
                  <Button
                    className="flex-1"
                    onClick={() => handleAddToCart(item.id)}
                  >
                    <ShoppingCart className="h-4 w-4 mr-2" /> Add to Cart
                  </Button>
                  <Button
                    variant="outline"
                    className="px-3"
                    onClick={() => handleToggleWishlist(item.id)}
                  >
                    <Trash className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default WishlistPage;
