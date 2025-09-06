import { Carousel, CarouselContent, CarouselItem, brands } from "@/features/Home";

export const FeaturedBrands = () => {
  return (
    <section className="py-12 bg-muted">
      <div className="container mx-auto px-4">
        <h2
          className="text-2xl font-semibold text-center mb-8"
          data-aos="fade-up"
          data-aos-duration="600"
        >
          Brands We Carry
        </h2>

        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent className="-ml-2 md:-ml-4">
            {brands.map((brand, index) => (
              <CarouselItem
                key={brand.id}
                className="pl-2 md:pl-4 basis-1/2 sm:basis-1/3 md:basis-1/4 lg:basis-1/6"
                data-aos="zoom-in"
                data-aos-delay={100 * index}
                data-aos-duration="800"
              >
                <div className="bg-card rounded-lg p-4 h-36 flex flex-col items-center justify-center shadow-sm hover:shadow-md transition-shadow">
                  <div
                    className="h-16 w-16 rounded-full overflow-hidden mb-4"
                    data-aos="zoom-in"
                    data-aos-delay={150 * index}
                    data-aos-duration="800"
                  >
                    <img
                      src={brand.logo}
                      alt={brand.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <p
                    className="text-sm font-medium text-center"
                    data-aos="fade-up"
                    data-aos-delay={200 * index}
                    data-aos-duration="600"
                  >
                    {brand.name}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};

export default FeaturedBrands;
