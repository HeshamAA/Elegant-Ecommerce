import { ProductCard, useHome, getErrorMessage } from "@/features/Home";

export const NewArrivals = () => {
  const { newArrivals, newArrivalsLoading, newArrivalsError } = useHome();

  if (newArrivalsLoading) return <p>Loading...</p>;
  if (newArrivalsError)
    return (
      <p className="text-destructive">{getErrorMessage(newArrivalsError)}</p>
    );

  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8">New Arrivals</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {newArrivals.map((product, index) => (
            <div
              key={product.id}
              data-aos="fade-up"
              data-aos-delay={100 * index}
              data-aos-duration="800"
            >
              <ProductCard product={product} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
