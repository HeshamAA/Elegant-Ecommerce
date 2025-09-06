import { Check } from "lucide-react";
import { CheckoutStep } from "../types/checkout.types";

interface CheckoutStepsProps {
  steps: CheckoutStep[];
  activeStep: number;
  getStepIndicatorClass: (step: number) => string;
}

export const CheckoutSteps = ({ steps, activeStep, getStepIndicatorClass }: CheckoutStepsProps) => {
  return (
    <div className="mb-10 relative">
      <div className="hidden sm:block h-0.5 bg-muted absolute top-5 left-0 right-0 z-0"></div>
      <div className="flex justify-between relative z-10">
        {steps.map((step) => (
          <div key={step.id} className="flex flex-col items-center">
            <div
              className={`w-10 h-10 rounded-full flex items-center justify-center ${getStepIndicatorClass(
                step.id
              )}`}
            >
              {activeStep > step.id ? <Check className="h-5 w-5" /> : step.id}
            </div>
            <span className="text-sm mt-2">{step.title}</span>
          </div>
        ))}
      </div>
    </div>
  );
};
