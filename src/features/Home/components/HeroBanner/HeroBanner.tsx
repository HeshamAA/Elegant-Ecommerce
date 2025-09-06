import { PremiumBadge, HeroTitle, StatsSection, CTASection, TrustIndicators } from "../../index";

export const HeroBanner = () => {
  return (
    <section className="min-h-screen transition-all duration-700">
      <div className="relative overflow-hidden hero-bg bg-background">
        {/* Interactive Background */}
        <div className="absolute inset-0 opacity-30 transition-all duration-700 bg-gradient-radial from-primary/15 to-transparent" />

        {/* Main Content */}
        <div className="container mx-auto px-6">
          <div className="flex justify-center items-center min-h-screen">
            {/* Centered Content */}
            <div className="flex flex-col justify-center space-y-10 text-center max-w-3xl">
              <PremiumBadge />
              <HeroTitle />
              <StatsSection />
              <CTASection />
              <TrustIndicators />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
