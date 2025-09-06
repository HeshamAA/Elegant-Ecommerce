import { useCheckout, CheckoutSteps, ShippingForm, DeliveryForm, PaymentForm, OrderSummary, CHECKOUT_STEPS, Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle, Button, Check } from "@/features/Checkout";

const CheckoutPage = () => {
  const {
    activeStep,
    shippingData,
    deliveryData,
    cartItems,
    isCartEmpty,
    subtotal,
    shipping,
    tax,
    total,
    shippingForm,
    deliveryForm,
    paymentForm,
    handleShippingSubmit,
    handleDeliverySubmit,
    handlePaymentSubmit,
    goToPreviousStep,
    getStepIndicatorClass,
    navigate,
  } = useCheckout();

  if (isCartEmpty) {
    return (
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        <Card className="border-none shadow-lg">
          <CardHeader className="text-center">
            <CardTitle>Your Cart is Empty</CardTitle>
            <CardDescription>
              Add some products to your cart before proceeding to checkout.
            </CardDescription>
          </CardHeader>
          <CardFooter className="flex justify-center pb-8">
            <Button onClick={() => navigate("/")}>Continue Shopping</Button>
          </CardFooter>
        </Card>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-4 py-12 max-w-6xl">
      <h1 className="text-3xl font-bold mb-8 text-center">Checkout</h1>

      {/* Checkout Steps Indicator */}
      <CheckoutSteps
        steps={CHECKOUT_STEPS}
        activeStep={activeStep}
        getStepIndicatorClass={getStepIndicatorClass}
      />

      <div className="grid md:grid-cols-3 gap-8">
        <div className="md:col-span-2">
          <div className="transition-all duration-300">
            {/* Step 1: Shipping Details */}
            {activeStep === 1 && (
              <ShippingForm
                form={shippingForm}
                onSubmit={handleShippingSubmit}
                onCancel={() => navigate("/")}
              />
            )}

            {/* Step 2: Delivery Method */}
            {activeStep === 2 && (
              <DeliveryForm
                form={deliveryForm}
                onSubmit={handleDeliverySubmit}
                onBack={goToPreviousStep}
              />
            )}

            {/* Step 3: Payment */}
            {activeStep === 3 && (
              <PaymentForm
                form={paymentForm}
                onSubmit={handlePaymentSubmit}
                onBack={goToPreviousStep}
              />
            )}

            {/* Step 4: Review Order */}
            {activeStep === 4 && (
              <Card className="border-none shadow-lg backdrop-blur-sm bg-card/80">
                <CardHeader>
                  <CardTitle className="flex items-center">
                    <Check className="mr-2 h-5 w-5" /> Review Your Order
                  </CardTitle>
                  <CardDescription>
                    Please review your order details before placing the order
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  {/* Shipping Information */}
                  <div>
                    <h3 className="font-medium mb-2">Shipping Information</h3>
                    <div className="bg-muted/30 p-4 rounded-md">
                      <p>{shippingData?.fullName}</p>
                      <p>{shippingData?.address}</p>
                      <p>
                        {shippingData?.city}, {shippingData?.zipCode},{" "}
                        {shippingData?.country}
                      </p>
                      <p>{shippingData?.phone}</p>
                      <p>{shippingData?.email}</p>
                    </div>
                  </div>

                  {/* Delivery Method */}
                  <div>
                    <h3 className="font-medium mb-2">Delivery Method</h3>
                    <div className="bg-muted/30 p-4 rounded-md">
                      {deliveryData?.deliveryMethod === "standard" && (
                        <p>Standard Shipping (5-7 business days)</p>
                      )}
                      {deliveryData?.deliveryMethod === "express" && (
                        <p>Express Shipping (2-3 business days)</p>
                      )}
                      {deliveryData?.deliveryMethod === "next-day" && (
                        <p>Next Day Delivery</p>
                      )}
                    </div>
                  </div>

                  {/* Order Items */}
                  <div>
                    <h3 className="font-medium mb-2">Order Items</h3>
                    <div className="bg-muted/30 p-4 rounded-md divide-y space-y-4">
                      {cartItems.map((item: any) => (
                        <div
                          key={`${item.id}-${item.color ?? ''}-${item.size ?? ''}`}
                          className="flex py-2"
                        >
                          <div className="h-16 w-16 rounded-md overflow-hidden mr-4">
                            <img
                              src={item.image ?? ''}
                              alt={item.title ?? ''}
                              className="h-full w-full object-cover"
                            />
                          </div>
                          <div className="flex-1">
                            <div className="flex justify-between">
                              <p className="font-medium">{item.title}</p>
                              <p className="font-medium">
                              ${((item.price ?? 0) * (item.quantity ?? 1)).toFixed(2)}
                              </p>
                            </div>
                            <p className="text-sm text-muted-foreground">
                              {item.color ?? ''}, {item.size ?? ''}
                            </p>
                            <p className="text-sm text-muted-foreground">
                              Qty: {item.quantity ?? 1} × ${(item.price ?? 0).toFixed(2)}
                            </p>
                          </div>
                        </div>
                      ))}
                    </div>
                  </div>
                </CardContent>
                <CardFooter className="flex justify-between">
                  <Button variant="outline" onClick={goToPreviousStep}>
                    Back
                  </Button>
                  <Button onClick={() => handlePaymentSubmit(paymentForm.getValues())}>
                    Place Order
                  </Button>
                </CardFooter>
              </Card>
            )}
          </div>
        </div>

        {/* Order Summary */}
        <div className="md:col-span-1">
          <OrderSummary
            subtotal={subtotal}
            shipping={shipping}
            tax={tax}
            total={total}
            deliveryData={deliveryData}
          />
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
