import { Loader2 } from "lucide-react";

const LoadingSpinner = () => {
  return (
    <div className="flex min-h-[60vh] items-center justify-center">
      <Loader2 className="h-8 w-8 animate-spin text-primary" />
    </div>
  );
};

export default LoadingSpinner;
