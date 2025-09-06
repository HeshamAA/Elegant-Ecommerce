import { Sparkles } from "lucide-react";

export const PremiumBadge = () => {
  return (
    <div className="flex justify-center">
      <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full glass-effect animate-scaleIn">
        <Sparkles size={20} className="animate-bounce-slow text-primary" />
        <span className="font-semibold text-foreground">
          New Exclusive Collection
        </span>
      </div>
    </div>
  );
}
