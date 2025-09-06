

export function AuthHero() {
  return (
    <div className="hidden flex-1 h-full lg:block">
      <div className="relative h-full w-full">
        <img
          src="https://images.unsplash.com/photo-1632282003890-020318a49e62?q=80&w=1973&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Shopping experience"
          className="object-cover w-full h-full"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-black/30" />
        <div className="absolute inset-0 flex flex-col items-center justify-center p-12 text-white">
          <div className="max-w-md space-y-6 text-center">
            <h2 className="text-4xl font-bold tracking-tight">
              Elevate Your Shopping Experience
            </h2>
            <p className="text-lg">
              Discover a world of premium products, exclusive deals, and
              personalized recommendations tailored just for you.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">10k+</div>
                <div className="text-sm">Premium Products</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">24/7</div>
                <div className="text-sm">Customer Support</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">95%</div>
                <div className="text-sm">Customer Satisfaction</div>
              </div>
              <div className="rounded-lg bg-white/10 p-4 backdrop-blur-sm">
                <div className="text-2xl font-bold text-primary">3-5</div>
                <div className="text-sm">Day Fast Delivery</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
