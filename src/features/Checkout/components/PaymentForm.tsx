import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  Input,
  Label,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/shared/components";
import { CreditCard } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { PaymentForm as PaymentFormType } from "../schemas/validation";

interface PaymentFormProps {
  form: UseFormReturn<PaymentFormType>;
  onSubmit: (data: PaymentFormType) => void;
  onBack: () => void;
}

export const PaymentForm = ({ form, onSubmit, onBack }: PaymentFormProps) => {
  return (
    <Card className="border-none shadow-lg backdrop-blur-sm bg-card/80">
      <CardHeader>
        <CardTitle className="flex items-center">
          <CreditCard className="mr-2 h-5 w-5" /> Payment Method
        </CardTitle>
        <CardDescription>
          Complete your purchase securely
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <Tabs
            defaultValue="credit-card"
            onValueChange={(value) =>
              form.setValue(
                "paymentMethod",
                value as "credit-card" | "paypal"
              )
            }
          >
            <TabsList className="grid w-full grid-cols-2 mb-8">
              <TabsTrigger value="credit-card">
                Credit / Debit Card
              </TabsTrigger>
              <TabsTrigger value="paypal">PayPal</TabsTrigger>
            </TabsList>
            <TabsContent value="credit-card">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="cardName">Name on Card</Label>
                  <Input
                    id="cardName"
                    {...form.register("cardName")}
                    className="bg-background"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="cardNumber">Card Number</Label>
                  <Input
                    id="cardNumber"
                    placeholder="1234 5678 9012 3456"
                    {...form.register("cardNumber")}
                    className="bg-background"
                  />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="cardExpiry">Expiry Date</Label>
                    <Input
                      id="cardExpiry"
                      placeholder="MM/YY"
                      {...form.register("cardExpiry")}
                      className="bg-background"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="cardCvc">CVC</Label>
                    <Input
                      id="cardCvc"
                      placeholder="123"
                      {...form.register("cardCvc")}
                      className="bg-background"
                    />
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="paypal">
              <div className="flex flex-col items-center justify-center py-8">
                <div className="bg-[#003087] text-white font-bold text-2xl py-2 px-4 rounded-lg mb-4">
                  <span className="text-[#0079C1]">Pay</span>
                  <span className="text-[#00457C]">Pal</span>
                </div>
                <p className="text-center text-muted-foreground">
                  Click 'Review Order' to be redirected to PayPal to
                  complete your purchase securely.
                </p>
              </div>
            </TabsContent>
          </Tabs>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Review Order</Button>
        </CardFooter>
      </form>
    </Card>
  );
};
