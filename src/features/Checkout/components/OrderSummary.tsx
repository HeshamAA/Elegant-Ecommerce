import {
  Card,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/shared/components";
import { Calendar } from "lucide-react";
import { DeliveryForm } from "../schemas/validation";

interface OrderSummaryProps {
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  deliveryData: DeliveryForm | null;
}

export const OrderSummary = ({
  subtotal,
  shipping,
  tax,
  total,
  deliveryData,
}: OrderSummaryProps) => {
  const getEstimatedDeliveryDate = () => {
    if (!deliveryData) return "Select delivery method";
    
    switch (deliveryData.deliveryMethod) {
      case "next-day":
        return "Tomorrow";
      case "express":
        return "In 2-3 business days";
      case "standard":
        return "In 5-7 business days";
      default:
        return "Select delivery method";
    }
  };

  return (
    <Card className="border-none shadow-lg sticky top-4 backdrop-blur-sm bg-card/80">
      <CardHeader>
        <CardTitle>Order Summary</CardTitle>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="space-y-2">
          <div className="flex justify-between">
            <span className="text-muted-foreground">Subtotal</span>
            <span>${subtotal.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Shipping</span>
            <span>${shipping.toFixed(2)}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-muted-foreground">Tax</span>
            <span>${tax.toFixed(2)}</span>
          </div>
          <div className="border-t pt-2 mt-2">
            <div className="flex justify-between font-bold">
              <span>Total</span>
              <span>${total.toFixed(2)}</span>
            </div>
          </div>
        </div>

        <div className="space-y-2">
          <span className="text-sm font-medium">
            Estimated delivery date:
          </span>
          <div className="flex items-center bg-muted/30 p-3 rounded-md">
            <Calendar className="h-5 w-5 mr-2 text-primary" />
            <span>{getEstimatedDeliveryDate()}</span>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
