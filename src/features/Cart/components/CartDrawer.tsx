import { Fragment, Link, useAppDispatch, useAppSelector, useCart, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Button, Image, Trash2, Minus, Plus, X, closeCart } from "@/features/Cart";

const CartDrawer = () => {
  const dispatch = useAppDispatch();
  const { isOpen } = useAppSelector((state) => state.cart);
  const {
    productIds,
    productFullInfo,
    total,
    handleUpdateQuantity,
    handleRemoveItem,
    handleUpdateColor,
    handleUpdateSize,
  } = useCart();

  if (!isOpen) return null;

  // ...existing code...

  return (
    <Fragment>
      <div
        className="fixed inset-0 z-50 bg-black bg-opacity-40 transition-opacity"
        onClick={() => dispatch(closeCart())}
      />

      <div className="fixed bottom-0 right-0 top-0 z-50 flex w-full max-w-md flex-col bg-background shadow-xl animate-slide-in">
        <div className="flex items-center justify-between border-b px-4 py-3">
          <h2 className="text-lg font-semibold">Your Cart ({total})</h2>
          <Button
            variant="ghost"
            size="icon"
            onClick={() => dispatch(closeCart())}
          >
            <X className="h-5 w-5" />
            <span className="sr-only">Close</span>
          </Button>
        </div>

        <div className="flex-1 overflow-y-auto px-4 py-4">
          {productFullInfo?.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center">
              <p className="mb-4 text-muted-foreground">Your cart is empty</p>
              <Button onClick={() => dispatch(closeCart())}>
                Continue Shopping
              </Button>
            </div>
          ) : (
            <ul className="divide-y divide-border">
              {productFullInfo?.map((item) => (
                <li
                  key={`${item.id}-${item.colors[0]}-${item.sizes[0]}`}
                  className="py-4"
                >
                  <div className="flex items-center space-x-4">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                      <Image
                        path={item.images[0]}
                        alt={item.title}
                        size="small"
                        className="w-full h-full object-cover rounded"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div className="flex justify-between">
                        <h3 className="text-sm font-medium">{item.title}</h3>
                        <p className="text-sm font-medium">
                          $
                          {(
                            item.price *
                            productIds.find((el) => el.id === item.id)?.quantity
                          ).toFixed(2)}
                        </p>
                      </div>

                      <div className="mt-2 flex flex-col gap-2">
                        {/* Color Selection */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            Color:
                          </span>
                          <div className="flex gap-1">
                            {item.colors?.map((color) => (
                              <button
                                key={color}
                                onClick={() =>
                                  handleUpdateColor(item.id, color)
                                }
                                className={`w-4 h-4 rounded-full border ${
                                  item.colors[0] === color
                                    ? "border-primary ring-2 ring-primary ring-offset-1"
                                    : "border-border"
                                }`}
                                style={{ backgroundColor: color.toLowerCase() }}
                                title={color}
                              />
                            ))}
                          </div>
                        </div>

                        {/* Size Selection */}
                        <div className="flex items-center gap-2">
                          <span className="text-xs text-muted-foreground">
                            Size:
                          </span>
                          <Select
                            value={
                              item.sizes[0]
                            }
                            onValueChange={(value) =>
                              handleUpdateSize(item.id, value)
                            }
                          >
                            <SelectTrigger className="h-7 text-xs">
                              <SelectValue />
                            </SelectTrigger>
                            <SelectContent>
                              {item.sizes?.map((size) => (
                                <SelectItem key={size} value={size}>
                                  {size}
                                </SelectItem>
                              ))}
                            </SelectContent>
                          </Select>
                        </div>
                      </div>

                      <div className="mt-2 flex items-center justify-between">
                        <div className="flex items-center border rounded">
                          <button
                            type="button"
                            className="px-2 py-1 text-muted-foreground"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.id,
                                productIds.find((el) => el.id === item.id)
                                  ?.quantity - 1
                              )
                            }
                            disabled={
                              productIds.find((el) => el.id === item.id)
                                ?.quantity <= 1
                            }
                          >
                            <Minus className="h-3 w-3" />
                          </button>
                          <span className="px-2 py-1 text-sm">
                            {
                              productIds.find((el) => el.id === item.id)
                                ?.quantity
                            }
                          </span>
                          <button
                            type="button"
                            className="px-2 py-1 text-muted-foreground"
                            onClick={() =>
                              handleUpdateQuantity(
                                item.id,
                                productIds.find((el) => el.id === item.id)
                                  ?.quantity + 1
                              )
                            }
                          >
                            <Plus className="h-3 w-3" />
                          </button>
                        </div>

                        <button
                          type="button"
                          className="text-muted-foreground hover:text-destructive transition-colors"
                          onClick={() => handleRemoveItem(item.id)}
                        >
                          <Trash2 className="h-4 w-4" />
                          <span className="sr-only">Remove</span>
                        </button>
                      </div>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {productFullInfo?.length > 0 && (
          <div className="border-t px-4 py-4">
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Subtotal</p>
              <p className="text-sm font-medium">${total.toFixed(2)}</p>
            </div>
            <div className="mb-3 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">Shipping</p>
              <p className="text-sm font-medium">Calculated at checkout</p>
            </div>
            <div className="mb-4 flex items-center justify-between border-t border-dashed pt-3">
              <p className="text-base font-medium">Total</p>
              <p className="text-base font-medium">${total.toFixed(2)}</p>
            </div>
            <div className="space-y-3">
              <Button className="w-full" asChild>
                <Link to="/checkout">Proceed to Checkout</Link>
              </Button>
              <Button
                variant="outline"
                className="w-full"
                onClick={() => dispatch(closeCart())}
              >
                Continue Shopping
              </Button>
            </div>
          </div>
        )}
      </div>
    </Fragment>
  );
};

export default CartDrawer;
