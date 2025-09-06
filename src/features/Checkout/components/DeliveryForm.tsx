import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  Button,
  RadioGroup,
  RadioGroupItem,
  Label,
} from "@/shared/components";
import { Truck } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { DeliveryForm as DeliveryFormType } from "../schemas/validation";
import { DELIVERY_OPTIONS } from "../constants/data";

interface DeliveryFormProps {
  form: UseFormReturn<DeliveryFormType>;
  onSubmit: (data: DeliveryFormType) => void;
  onBack: () => void;
}

export const DeliveryForm = ({ form, onSubmit, onBack }: DeliveryFormProps) => {
  return (
    <Card className="border-none shadow-lg backdrop-blur-sm bg-card/80">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Truck className="mr-2 h-5 w-5" /> Delivery Method
        </CardTitle>
        <CardDescription>
          Select your preferred delivery option
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent>
          <RadioGroup
            defaultValue={form.getValues("deliveryMethod")}
            onValueChange={(value) =>
              form.setValue(
                "deliveryMethod",
                value as "standard" | "express" | "next-day"
              )
            }
            className="space-y-4"
          >
            {DELIVERY_OPTIONS.map((option) => (
              <div
                key={option.id}
                className="flex items-center space-x-4 rounded-lg border p-4 cursor-pointer hover:bg-muted/50"
              >
                <RadioGroupItem value={option.id} id={option.id} />
                <Label htmlFor={option.id} className="flex-1 cursor-pointer">
                  <div className="flex justify-between">
                    <div>
                      <p className="font-medium">{option.name}</p>
                      <p className="text-sm text-muted-foreground">
                        {option.description}
                      </p>
                    </div>
                    <p className="font-semibold">${option.price.toFixed(2)}</p>
                  </div>
                </Label>
              </div>
            ))}
          </RadioGroup>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="outline" onClick={onBack}>
            Back
          </Button>
          <Button type="submit">Continue to Payment</Button>
        </CardFooter>
      </form>
    </Card>
  );
};
