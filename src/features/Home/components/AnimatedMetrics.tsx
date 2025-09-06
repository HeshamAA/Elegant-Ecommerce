import { useState, useEffect, useRef, metrics } from "@/features/Home";

export const AnimatedMetrics = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
    };
  }, []);

  return (
    <section ref={sectionRef} className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">Our Achievements</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {metrics.map((metric) => (
            <div
              key={metric.id}
              className="text-center p-6 rounded-xl bg-background"
            >
              <div className="text-4xl font-bold mb-2">
                <span className="counter" data-target={metric.value}>
                  {isVisible ? metric.value : 0}
                </span>
              </div>
              <p className="text-gray-600">{metric.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
