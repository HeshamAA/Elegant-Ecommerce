
import {categories,Image,ChevronLeft, ChevronRight,useEmblaCarousel,useCallback} from "@/features/Home"

export const CategoryPreview = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    align: "start",
    loop: true,
    skipSnaps: false,
    dragFree: false,
  });

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className="bg-muted py-8">
      <div className="container mx-auto px-4" data-aos="fade-up">
        <h2 className="text-3xl font-bold text-center mb-8">
          Shop by Category
        </h2>

        <div className="relative">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {categories.map((category) => (
                <div className="min-w-0 flex-[0_0_100%] px-4" key={category.id}>
                  <div className="relative h-[70vh] w-full">
                    <Image
                      path={category.imagePath}
                      size="large"
                      alt={category.name}
                      className="w-full h-full object-cover rounded-lg shadow-md"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                      <h3 className="text-3xl font-bold text-foreground mb-2">
                        {category.name}
                      </h3>
                      <p className="text-foreground/90 text-lg">
                        {category.description}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <button
            onClick={scrollPrev}
            className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors"
          >
            <ChevronLeft className="h-6 w-6 text-muted-foreground" />
          </button>
          <button
            onClick={scrollNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-background/80 backdrop-blur-sm hover:bg-background/90 transition-colors"
          >
            <ChevronRight className="h-6 w-6 text-muted-foreground" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default CategoryPreview;
