import { Toaster, toast } from "@/shared/libs";

export const showToast = {
  success: (message: string) => {
    toast.success(message, {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#4CAF50",
        color: "#fff",
      },
    });
  },
  error: (message: string) => {
    toast.error(message, {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#f44336",
        color: "#fff",
      },
    });
  },
  info: (message: string) => {
    toast(message, {
      duration: 3000,
      position: "top-right",
      style: {
        background: "#2196F3",
        color: "#fff",
      },
    });
  },
};

export const ToastContainer = () => {
  return <Toaster />;
};
