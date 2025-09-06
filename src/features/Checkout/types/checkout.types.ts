// Delivery Method Types
export type DeliveryMethod = "standard" | "express" | "next-day";

// Payment Method Types
export type PaymentMethod = "credit-card" | "paypal";

// Delivery Options
export interface DeliveryOption {
  id: DeliveryMethod;
  name: string;
  description: string;
  price: number;
  estimatedDays: string;
}

// Payment Option
export interface PaymentOption {
  id: PaymentMethod;
  name: string;
  description: string;
  icon: string;
}

// Order Data
export interface ShippingData {
  firstName: string;
  lastName: string;
  address: string;
  city: string;
  country: string;
  zipCode: string;
  email: string;
  phone: string;
}

export interface PaymentData {
  method: PaymentMethod;
  cardNumber?: string;
  expiryDate?: string;
  cvv?: string;
  paypalEmail?: string;
}

export interface CartItem {
  id: string | number;
  name: string;
  price: number;
  quantity: number;
  image: string;
}

// Order Data
export interface OrderData {
  shippingData: ShippingData;
  deliveryData: DeliveryOption;
  paymentData: PaymentData;
  items: CartItem[];
  subtotal: number;
  shipping: number;
  tax: number;
  total: number;
  orderId?: string;
  orderDate?: Date;
}

// Checkout Step
export interface CheckoutStep {
  id: number;
  title: string;
  description: string;
  icon: string;
  isCompleted: boolean;
  isActive: boolean;
}

// Form Errors
export interface FormErrors {
  [key: string]: string | undefined;
}

// Checkout State
// Checkout State
export interface CheckoutState {
  activeStep: number;
  shippingData: ShippingData | null;
  deliveryData: DeliveryOption | null;
  paymentData: PaymentData | null;
  isProcessing: boolean;
  errors: FormErrors;
}
