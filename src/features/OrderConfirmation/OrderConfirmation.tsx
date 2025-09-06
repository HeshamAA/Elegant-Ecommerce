import {
  useNavigate,
  useEffect,
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Check,
   ArrowRight

} from "@/features/OrderConfirmation";

const OrderConfirmation = () => {
  const navigate = useNavigate();
  const orderNumber = `ORD-${Math.floor(100000 + Math.random() * 900000)}`;

  // Confetti effect on load
  useEffect(() => {
    const script = document.createElement("script");
    script.src =
      "https://cdn.jsdelivr.net/npm/canvas-confetti@1.5.1/dist/confetti.browser.min.js";
    script.onload = () => {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const confetti = (window as any).confetti;
      if (confetti) {
        confetti({
          particleCount: 100,
          spread: 70,
          origin: { y: 0.6 },
        });

        setTimeout(() => {
          confetti({
            particleCount: 50,
            angle: 60,
            spread: 55,
            origin: { x: 0 },
          });

          confetti({
            particleCount: 50,
            angle: 120,
            spread: 55,
            origin: { x: 1 },
          });
        }, 500);
      }
    };
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className="container mx-auto px-4 py-16 max-w-2xl">
      <Card className="border-none shadow-xl bg-gradient-to-b from-card to-background">
        <CardHeader className="text-center pb-6">
          <div className="w-20 h-20 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
            <Check className="h-10 w-10 text-primary" />
          </div>
          <CardTitle className="text-3xl">Order Confirmed!</CardTitle>
        </CardHeader>
        <CardContent className="text-center space-y-6">
          <p className="text-muted-foreground">
            Thank you for your purchase. We're getting your order ready to be
            shipped. We'll notify you when it has been sent.
          </p>

          <div className="bg-muted/20 rounded-lg p-6">
            <h3 className="font-medium mb-2">Order Number</h3>
            <p className="text-2xl font-bold">{orderNumber}</p>
          </div>

          <div className="space-y-2">
            <p className="font-medium">What happens next?</p>
            <ol className="space-y-4 text-left">
              <li className="flex">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  1
                </div>
                <div>
                  <p className="font-medium">We're preparing your order</p>
                  <p className="text-sm text-muted-foreground">
                    Your order details have been received and are being
                    processed.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  2
                </div>
                <div>
                  <p className="font-medium">Shipping confirmation</p>
                  <p className="text-sm text-muted-foreground">
                    You'll receive an email with tracking information once your
                    order ships.
                  </p>
                </div>
              </li>
              <li className="flex">
                <div className="bg-primary/10 text-primary rounded-full w-6 h-6 flex items-center justify-center mr-3 mt-0.5 flex-shrink-0">
                  3
                </div>
                <div>
                  <p className="font-medium">Delivery</p>
                  <p className="text-sm text-muted-foreground">
                    Your items will be delivered based on your selected shipping
                    method.
                  </p>
                </div>
              </li>
            </ol>
          </div>
        </CardContent>
        <CardFooter className="flex flex-col gap-4 pt-6">
          <Button onClick={() => navigate("/")} className="w-full">
            Continue Shopping
            <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
          <Button
            variant="outline"
            onClick={() => window.print()}
            className="w-full"
          >
            Print Receipt
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
};

export default OrderConfirmation;
