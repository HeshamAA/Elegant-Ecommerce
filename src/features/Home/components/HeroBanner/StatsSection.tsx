export const StatsSection = () => {
  return (
    <div
      className="grid grid-cols-3 gap-8"
      
    >
      <div className="text-center">
        <div className="text-4xl font-bold gradient-text mb-2">10K+</div>
        <div className="text-sm font-medium text-muted-foreground">
          Products
        </div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold gradient-text mb-2">500+</div>
        <div className="text-sm font-medium text-muted-foreground">
          Brands
        </div>
      </div>
      <div className="text-center">
        <div className="text-4xl font-bold gradient-text mb-2">2M+</div>
        <div className="text-sm font-medium text-muted-foreground">
          Happy Clients
        </div>
      </div>
    </div>
  );
}
