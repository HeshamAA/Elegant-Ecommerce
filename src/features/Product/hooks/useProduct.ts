import {useState, useGetProductByIdQuery,useAppDispatch, useAppSelector,addToCart, openCart,showToast,useNavigate } from "@/features/Product";
import { useRemoveFromWishlistMutation } from "@/features/Wishlist/services/apiWishlistSlice";
import { useAddToWishlistMutation } from "@/features/Wishlist/services/apiWishlistSlice";


export const useProduct = (id: string) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const {user} = useAppSelector((state) => state.auth);
  const {data:product,isLoading, error} = useGetProductByIdQuery(Number(id));
  const [addToWishlist] = useAddToWishlistMutation();
  const [removeFromWishlist] = useRemoveFromWishlistMutation();

  const isInWishlist = user?.user?.wishlist?.some((item) => item === String(product.id));
  const [selectedColor, setSelectedColor] = useState(
    product?.colors[0] || "Default"
  );
  const wishlistItems = useAppSelector((state) => state.auth.user?.user?.wishlist || []);
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();

    if (!selectedColor) {
      showToast.error("Please select a color before adding the product to the cart");
      return;
    }

    dispatch(
      addToCart({
        id: product.id,
        color: selectedColor,
      })
    );

    showToast.success(`${product.title} added to the cart`);

    dispatch(openCart()); 
  };

  
  const handleToggleWishlist = () => {
    if(!user){
      showToast.error("Please log in to add to your wishlist");
      return;
    }
    if (isInWishlist) {
   
      removeFromWishlist({

        itemIdToRemove: product.id,
      });
    } else {
    
      addToWishlist({
            
        newWishlist: product.id,
      });
    }
  };

  function getDiscountPercentage(): number {
    if (!product?.originalPrice) return 0;
    return Math.round(
      ((product.originalPrice - product.price) / product.originalPrice) * 100
    );
  }

  return {
    dispatch,
    product,
    navigate,
    isLoading,
    error,
    handleAddToCart,
    handleToggleWishlist,
    isInWishlist, user, wishlistItems,
    getDiscountPercentage,
    selectedColor,
    setSelectedColor,
  };
}
