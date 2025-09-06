import { z } from "zod";

// Step 1: Shipping Details Schema
export const shippingSchema = z.object({
  fullName: z.string().min(2, "Full name is required"),
  email: z.string().email("Invalid email address"),
  phone: z.string().min(6, "Phone number is required"),
  address: z.string().min(5, "Address is required"),
  city: z.string().min(2, "City is required"),
  zipCode: z.string().min(3, "Zip code is required"),
  country: z.string().min(2, "Country is required"),
  saveInfo: z.boolean().optional(),
});

// Step 2: Delivery Method Schema
export const deliverySchema = z.object({
  deliveryMethod: z.enum(["standard", "express", "next-day"]),
});

// Step 3: Payment Schema
export const paymentSchema = z.object({
  paymentMethod: z.enum(["credit-card", "paypal"]),
  cardName: z.string().optional(),
  cardNumber: z.string().optional(),
  cardExpiry: z.string().optional(),
  cardCvc: z.string().optional(),
});

// Order Review Schema
export const orderReviewSchema = z.object({
  shippingData: shippingSchema,
  deliveryData: deliverySchema,
  paymentData: paymentSchema,
  items: z.array(z.any()),
});

// Type exports
export type ShippingForm = z.infer<typeof shippingSchema>;
export type DeliveryForm = z.infer<typeof deliverySchema>;
export type PaymentForm = z.infer<typeof paymentSchema>;
export type OrderReviewForm = z.infer<typeof orderReviewSchema>;
