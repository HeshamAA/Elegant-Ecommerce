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
} from "@/shared/components";
import { Package } from "lucide-react";
import { UseFormReturn } from "react-hook-form";
import { ShippingForm as ShippingFormType } from "../schemas/validation";
import { COUNTRIES } from "../constants/data";

interface ShippingFormProps {
  form: UseFormReturn<ShippingFormType>;
  onSubmit: (data: ShippingFormType) => void;
  onCancel: () => void;
}

export const ShippingForm = ({ form, onSubmit, onCancel }: ShippingFormProps) => {
  return (
    <Card className="border-none shadow-lg backdrop-blur-sm bg-card/80">
      <CardHeader>
        <CardTitle className="flex items-center">
          <Package className="mr-2 h-5 w-5" /> Shipping Details
        </CardTitle>
        <CardDescription>
          Enter your shipping information to continue
        </CardDescription>
      </CardHeader>
      <form onSubmit={form.handleSubmit(onSubmit)}>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="fullName">Full Name</Label>
              <Input
                id="fullName"
                {...form.register("fullName")}
                className="bg-background"
              />
              {form.formState.errors.fullName && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.fullName.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="email">Email Address</Label>
              <Input
                id="email"
                type="email"
                {...form.register("email")}
                className="bg-background"
              />
              {form.formState.errors.email && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.email.message}
                </p>
              )}
            </div>
          </div>

          <div className="space-y-2">
            <Label htmlFor="phone">Phone Number</Label>
            <Input
              id="phone"
              {...form.register("phone")}
              className="bg-background"
            />
            {form.formState.errors.phone && (
              <p className="text-xs text-destructive">
                {form.formState.errors.phone.message}
              </p>
            )}
          </div>

          <div className="space-y-2">
            <Label htmlFor="address">Street Address</Label>
            <Input
              id="address"
              {...form.register("address")}
              className="bg-background"
            />
            {form.formState.errors.address && (
              <p className="text-xs text-destructive">
                {form.formState.errors.address.message}
              </p>
            )}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="space-y-2">
              <Label htmlFor="city">City</Label>
              <Input
                id="city"
                {...form.register("city")}
                className="bg-background"
              />
              {form.formState.errors.city && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.city.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="zipCode">Zip Code</Label>
              <Input
                id="zipCode"
                {...form.register("zipCode")}
                className="bg-background"
              />
              {form.formState.errors.zipCode && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.zipCode.message}
                </p>
              )}
            </div>
            <div className="space-y-2">
              <Label htmlFor="country">Country</Label>
              <select
                id="country"
                {...form.register("country")}
                className="w-full px-3 py-2 border border-input bg-background rounded-md"
              >
                <option value="">Select Country</option>
                {COUNTRIES.map((country) => (
                  <option key={country} value={country}>
                    {country}
                  </option>
                ))}
              </select>
              {form.formState.errors.country && (
                <p className="text-xs text-destructive">
                  {form.formState.errors.country.message}
                </p>
              )}
            </div>
          </div>
        </CardContent>
        <CardFooter className="flex justify-between">
          <Button type="button" variant="ghost" onClick={onCancel}>
            Cancel
          </Button>
          <Button type="submit">Continue to Delivery</Button>
        </CardFooter>
      </form>
    </Card>
  );
};
