import { ShoppingBag, ArrowRight } from "lucide-react";

export const CTASection = () => {
  return (
    <div className="space-y-6">

    <div className="flex flex-col sm:flex-row gap-4 justify-center">
      <button className="group relative px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-500 hover:scale-105 animate-glow overflow-hidden bg-primary text-primary-foreground">
        <span className="relative z-10 flex items-center justify-center gap-3">
          <ShoppingBag size={24} />
          Shop Now
          <ArrowRight
            size={20}
            className="group-hover:translate-x-2 transition-transform"
          />
        </span>
        <div className="absolute inset-0 animate-shimmer"></div>
      </button>

      <button className="px-10 py-5 rounded-2xl font-bold text-lg transition-all duration-300 hover:scale-105 text-foreground border-2 border-primary hover:bg-primary hover:text-primary-foreground backdrop-blur-md bg-white/10 dark:bg-black/10 dark:text-white">
        Explore Collections
      </button>
    </div>
  </div>
  );
}
