import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/utils/utils";

const fashionButtonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md font-medium ring-offset-background transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-gradient-to-r from-pink-800 to-pink-300 text-white hover:shadow-lg",
        outline:
          "border-2 border-pink-300 bg-transparent hover:bg-pink-100 dark:hover:bg-pink-800/30",
        ghost:
          "hover:bg-pink-100 dark:hover:bg-pink-800/30 hover:text-pink-900 dark:hover:text-pink-300",
        link: "text-primary underline-offset-4 hover:underline",
        cta: "bg-gradient-to-r from-pink-800 to-pink-300 text-white shadow-md hover:shadow-xl transition-all dark:from-pink-300 dark:to-pink-500 dark:text-pink-900",
      },
      size: {
        default: "h-10 px-6 py-2 text-sm",
        sm: "h-9 rounded-md px-4 text-xs",
        lg: "h-12 rounded-md px-8 text-base",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

export interface FashionButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof fashionButtonVariants> {
  asChild?: boolean;
}

/**
 * Fashion-forward button component with gradient options and elegant styling
 */
const FashionButton = React.forwardRef<HTMLButtonElement, FashionButtonProps>(
  ({ className, variant, size, ...props }, ref) => {
    return (
      <button
        className={cn(fashionButtonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
FashionButton.displayName = "FashionButton";

export { FashionButton, fashionButtonVariants };
