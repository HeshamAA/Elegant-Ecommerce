import { showToast, useAppDispatch, useAppSelector, useGetCartProductsQuery, productIds, removeProductFromCart, updateQuantity, clearCart, updateCartItem } from "@/features/Cart";


export const useCart = () => {
  const dispatch = useAppDispatch();
  const { productIds, isOpen, productFullInfo } = useAppSelector(
    (state) => state.cart
  );

  const ids: string[] = Object.values(productIds).map(
    (item: productIds) => item.id
  );
  const { data: cartProducts } = useGetCartProductsQuery(ids as string[], {
    skip: ids.length === 0,
    refetchOnMountOrArgChange: true,
  });

  const total =
    cartProducts?.reduce((sum, product) => {
      const cartItem = Object.values(productIds).find(
        (item) => item.id === product.id
      );
      const quantity: number = cartItem ? cartItem.quantity : 0;
      return sum + product.price * quantity;
    }, 0) || 0;
  const handleUpdateQuantity = (id: number, quantity: number) => {
    try {
      dispatch(updateQuantity({ id, quantity }));
      showToast.success("Cart updated successfully");
    } catch (error) {
      showToast.error("Failed to update quantity");
    }
  };

  const handleRemoveItem = (id: number) => {
    try {
      dispatch(removeProductFromCart(id));
      showToast.success("Item removed from cart");
    } catch (error) {
      showToast.error("Failed to remove item");
    }
  };

  const handleClearCart = () => {
    try {
      dispatch(clearCart());
      showToast.success("Cart cleared successfully");
    } catch (error) {
      showToast.error("Failed to clear cart");
    }
  };

  const handleUpdateColor = (id: number, color: string) => {
    try {
      dispatch(updateCartItem({ id, color }));
      showToast.success("Color updated successfully");
    } catch (error) {
      showToast.error("Failed to update color");
    }
  };

  const handleUpdateSize = (id: number, size: string) => {
    try {
      dispatch(updateCartItem({ id, size }));
      showToast.success("Size updated successfully");
    } catch (error) {
      showToast.error("Failed to update size");
    }
  };

  return {
    productIds,
    ids,
    productFullInfo,
    isOpen,
    total,
    handleUpdateQuantity,
    handleRemoveItem,
    handleClearCart,
    handleUpdateColor,
    handleUpdateSize,
  };
};
