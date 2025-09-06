import {React} from "@/shared/libs";

interface WelcomeMessageProps {
  message: string;
  className?: string;
}

export const WelcomeMessage: React.FC<WelcomeMessageProps> = ({
  message,
  className,
}) => {
  if (!message) return null;

  return (
    <span className={`text-sm text-muted-foreground ml-1.5 ${className || ""}`}>
      {message}
    </span>
  );
};
