import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useAppSelector, useAppDispatch } from "@/shared/state/hooks";
import { clearCart } from "@/features/Cart/state/cartSlice";
import { showToast } from "@/shared/components/Toast";
import {
  shippingSchema,
  deliverySchema,
  paymentSchema,
  type ShippingForm,
  type DeliveryForm,
  type PaymentForm,
} from "../schemas/validation";

export const useCheckout = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();
  const cartItems = useAppSelector((state) => state.cart.productIds);
  
  const [activeStep, setActiveStep] = useState(1);
  const [shippingData, setShippingData] = useState<ShippingForm | null>(null);
  const [deliveryData, setDeliveryData] = useState<DeliveryForm | null>(null);

  // Calculate totals
  const subtotal = cartItems.reduce(
    (sum, item) => {
      return sum + (item.price ?? 0) * (item.quantity ?? 1);
    },
    0
  );

  const shipping =
    deliveryData?.deliveryMethod === "express"
      ? 9.99
      : deliveryData?.deliveryMethod === "next-day"
      ? 19.99
      : 4.99;

  const tax = subtotal * 0.07; // 7% tax
  const total = subtotal + shipping + tax;

  // Setup forms
  const shippingForm = useForm<ShippingForm>({
    resolver: zodResolver(shippingSchema),
    defaultValues: {
      fullName: "",
      email: "",
      phone: "",
      address: "",
      city: "",
      zipCode: "",
      country: "",
      saveInfo: false,
    },
  });

  const deliveryForm = useForm<DeliveryForm>({
    resolver: zodResolver(deliverySchema),
    defaultValues: {
      deliveryMethod: "standard",
    },
  });

  const paymentForm = useForm<PaymentForm>({
    resolver: zodResolver(paymentSchema),
    defaultValues: {
      paymentMethod: "credit-card",
      cardName: "",
      cardNumber: "",
      cardExpiry: "",
      cardCvc: "",
    },
  });

  const handleShippingSubmit = (data: ShippingForm) => {
    setShippingData(data);
    setActiveStep(2);
  };

  const handleDeliverySubmit = (data: DeliveryForm) => {
    setDeliveryData(data);
    setActiveStep(3);
  };

  const handlePaymentSubmit = (data: PaymentForm) => {
    const orderData = {
      shippingData,
      deliveryData,
      paymentData: data,
      items: cartItems,
    };

    // Show confirmation and clear cart
    showToast.success("تم الدفع بنجاح");
    dispatch(clearCart());
    navigate("/order-confirmation");
  };

  const goToPreviousStep = () => {
    if (activeStep > 1) {
      setActiveStep(activeStep - 1);
    }
  };

  const goToNextStep = () => {
    if (activeStep < 4) {
      setActiveStep(activeStep + 1);
    }
  };

  const getStepIndicatorClass = (step: number) => {
    return activeStep >= step
      ? "bg-primary text-primary-foreground"
      : "bg-muted text-muted-foreground";
  };

  const isCartEmpty = cartItems.length === 0;

  return {
    // State
    activeStep,
    shippingData,
    deliveryData,
    cartItems,
    isCartEmpty,
    
    // Calculations
    subtotal,
    shipping,
    tax,
    total,
    
    // Forms
    shippingForm,
    deliveryForm,
    paymentForm,
    
    // Handlers
    handleShippingSubmit,
    handleDeliverySubmit,
    handlePaymentSubmit,
    goToPreviousStep,
    goToNextStep,
    getStepIndicatorClass,
    
    // Navigation
    navigate,
  };
};
