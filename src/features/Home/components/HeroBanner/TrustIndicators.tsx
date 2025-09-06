import { TrendingUp, Zap } from 'lucide-react';

export const TrustIndicators = () => {
  return (
    <div className="flex items-center justify-center gap-6 pt-4">
      <div className="flex items-center gap-2">
        <TrendingUp size={20} className="text-primary" />
        <span className="text-sm font-medium text-muted-foreground">
          #1 Best Seller
        </span>
      </div>
      <div className="flex items-center gap-2">
        <Zap size={20} className="text-primary" />
        <span className="text-sm font-medium text-muted-foreground">
          24/7 Support
        </span>
      </div>
      <div className="flex items-center gap-2">
        <TrendingUp size={20} className="text-primary" />
        <span className="text-sm font-medium text-muted-foreground">
          30 Days Return
        </span>
      </div>
    </div>
  );
}