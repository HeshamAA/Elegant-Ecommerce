import { useCart, Button, Image, Select, SelectContent, SelectItem, SelectTrigger, SelectValue, Trash2, Link } from "@/features/Cart";


const CartPage = () => {
  const {
    productIds,
    productFullInfo,
    total,
    handleUpdateQuantity,
    handleRemoveItem,
    handleClearCart,
    handleUpdateColor,
    handleUpdateSize,
  } = useCart();

  if (productFullInfo?.length === 0) {
    return (
      <div className="container mx-auto flex min-h-[60vh] flex-col items-center justify-center px-4">
        <h1 className="mb-4 text-2xl font-bold">Your cart is empty</h1>
        <p className="mb-8">Add some items to your cart to continue shopping</p>
        <Button asChild>
          <Link to="/category/all">Continue Shopping</Link>
        </Button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="mb-8 flex items-center justify-between">
        <h1 className="text-2xl font-bold">Shopping Cart</h1>
        <Button variant="destructive" onClick={handleClearCart}>
          Clear Cart
        </Button>
      </div>

      <div className="grid gap-8 lg:grid-cols-3">
        <div className="lg:col-span-2">
          <div className="space-y-4">
            {productFullInfo?.map((item) => (
              <div
                key={`${item.id}-${item.colors[0]}-${item.sizes[0]}`}
                className="flex items-center justify-between rounded-lg border p-4"
              >
                <div className="flex items-center space-x-4">
                  <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border">
                    <Image
                      path={item.images[0]}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="font-medium">{item.title}</h3>

                    {/* Color Selection */}
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Color:
                      </span>
                      <div className="flex gap-1">
                        {item.colors.map((color) => (
                          <button
                            key={color}
                            onClick={() => handleUpdateColor(item.id, color)}
                            className={`w-4 h-4 rounded-full border ${
                              item.colors.includes(color)
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
                    <div className="mt-2 flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        Size:
                      </span>
                      <Select
                        value={item.sizes[0]}
                        onValueChange={(value) =>
                          handleUpdateSize(item.id, value)
                        }
                      >
                        <SelectTrigger className="h-8 w-20">
                          <SelectValue />
                        </SelectTrigger>
                        <SelectContent>
                          {item.sizes.map((size) => (
                            <SelectItem key={size} value={size}>
                              {size}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div className="mt-2 flex items-center gap-4">
                      <div className="flex items-center border rounded w-24">
                        <button
                          className="flex-1 px-2 py-1"
                          onClick={() =>
                            handleUpdateQuantity(
                              item.id,
                              Math.max(
                                1,
                                productIds.find((el) => el.id === item.id)
                                  ?.quantity - 1
                              )
                            )
                          }
                        >
                          -
                        </button>
                        <span className="flex-1 px-2 py-1 text-center">
                          {productIds.find((el) => el.id === item.id)?.quantity}
                        </span>
                        <button
                          className="flex-1 px-2 py-1"
                          onClick={() =>
                            handleUpdateQuantity(
                              item.id,
                              productIds.find((el) => el.id === item.id)
                                ?.quantity + 1
                            )
                          }
                        >
                          +
                        </button>
                      </div>
                      <button
                        className="text-destructive hover:text-destructive/80"
                        onClick={() => handleRemoveItem(item.id)}
                      >
                        <Trash2 className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-medium">
                    $
                    {(
                      item.price *
                      productIds.find((el) => el.id === item.id)?.quantity
                    ).toFixed(2)}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    ${item.price.toFixed(2)} each
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="rounded-lg border p-6">
          <h2 className="mb-4 text-lg font-semibold">Order Summary</h2>
          <div className="space-y-4">
            <div className="flex justify-between">
              <span>Subtotal</span>
              <span>${total?.toFixed(2)}</span>
            </div>
            <div className="flex justify-between">
              <span>Shipping</span>
              <span>Calculated at checkout</span>
            </div>
            <div className="border-t pt-4">
              <div className="flex justify-between font-semibold">
                <span>Total</span>
                <span>${total?.toFixed(2)}</span>
              </div>
            </div>
            <Button className="w-full" asChild>
              <Link to="/checkout">Proceed to Checkout</Link>
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
