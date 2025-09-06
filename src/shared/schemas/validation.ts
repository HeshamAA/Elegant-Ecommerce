import { z } from '@/shared/libs';

// Auth schemas
export const loginSchema = z.object({
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const registerSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  confirmPassword: z.string(),
}).refine((data) => data.password === data.confirmPassword, {
  message: "Passwords don't match",
  path: ["confirmPassword"],
});



// Cart schemas
export const addToCartSchema = z.object({
  productId: z.number().positive('Product ID must be positive'),
  quantity: z.number().positive('Quantity must be positive').max(99, 'Quantity cannot exceed 99'),
});

// Checkout schemas
export const checkoutSchema = z.object({
  firstName: z.string().min(2, 'First name must be at least 2 characters'),
  lastName: z.string().min(2, 'Last name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  phone: z.string().min(10, 'Phone number must be at least 10 characters'),
  address: z.object({
    street: z.string().min(5, 'Street address must be at least 5 characters'),
    city: z.string().min(2, 'City must be at least 2 characters'),
    state: z.string().min(2, 'State must be at least 2 characters'),
    zipCode: z.string().min(5, 'ZIP code must be at least 5 characters'),
    country: z.string().min(2, 'Country must be at least 2 characters'),
  }),
  paymentMethod: z.enum(['credit_card', 'paypal', 'apple_pay']),
});

// Contact form schema
export const contactSchema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Invalid email address'),
  subject: z.string().min(5, 'Subject must be at least 5 characters'),
  message: z.string().min(10, 'Message must be at least 10 characters'),
});

// Search schema
export const searchSchema = z.object({
  query: z.string().min(1, 'Search query is required'),
  category: z.string().optional(),
  minPrice: z.number().min(0).optional(),
  maxPrice: z.number().min(0).optional(),
  sortBy: z.enum(['price_asc', 'price_desc', 'name_asc', 'name_desc', 'newest']).optional(),
});

export type LoginFormData = z.infer<typeof loginSchema>;
export type RegisterFormData = z.infer<typeof registerSchema>;
export type AddToCartData = z.infer<typeof addToCartSchema>;
export type CheckoutFormData = z.infer<typeof checkoutSchema>;
export type ContactFormData = z.infer<typeof contactSchema>;
export type SearchFormData = z.infer<typeof searchSchema>; 