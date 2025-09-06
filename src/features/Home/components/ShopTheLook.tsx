import {
  useState,
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  Card,
  CardContent,
  CardTitle,
  Button,
  Badge,
  useAppDispatch,
  showToast,
  addToCart,
  openCart,
  Outfit,
  outfits,
} from "@/features/Home";

export const ShopTheLook = () => {
  const dispatch = useAppDispatch();

  const addOutfitToCart = (outfit: Outfit) => {
    outfit.items.forEach((item) => {
      dispatch(
        addToCart({
          id: item.id,
          title: item.name,
          price: item.price,
          image: item.image,
          color: item.color,
          size: item.size,
          quantity: 1,
        })
      );
    });

    dispatch(openCart());
    showToast.success("تمت إضافة المنتج للسلة");
  };

  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-2">Shop the Look</h2>
        <p className="text-muted-foreground text-center mb-10">
          Complete outfits curated by our stylists
        </p>

        <Carousel className="w-full max-w-5xl mx-auto">
          <CarouselContent>
            {outfits.map((outfit) => (
              <CarouselItem key={outfit.id} className="md:basis-1/1">
                <div className="p-1">
                  <Card className="overflow-hidden border-none shadow-lg">
                    <div className="grid md:grid-cols-2 gap-0">
                      <div className="relative h-[400px] overflow-hidden">
                        <img
                          src={outfit.image}
                          alt={outfit.title}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent flex flex-col justify-end p-6">
                          <Badge className="self-start mb-2">
                            Complete Look
                          </Badge>
                          <h3 className="text-xl font-bold text-foreground">
                            {outfit.title}
                          </h3>
                          <p className="text-foreground/80 text-sm">
                            {outfit.description}
                          </p>
                        </div>
                      </div>

                      <CardContent className="p-6 flex flex-col">
                        <CardTitle className="mb-4">
                          Include in this outfit:
                        </CardTitle>
                        <div className="space-y-4 flex-1">
                          {outfit.items.map((item) => (
                            <div
                              key={item.id}
                              className="flex items-center space-x-3"
                            >
                              <div className="h-16 w-16 rounded bg-muted overflow-hidden flex-shrink-0">
                                <img
                                  src={item.image}
                                  alt={item.name}
                                  className="h-full w-full object-cover"
                                />
                              </div>
                              <div className="flex-1">
                                <h4 className="font-medium text-sm">
                                  {item.name}
                                </h4>
                                <div className="flex justify-between items-center mt-1">
                                  <p className="text-sm text-muted-foreground">
                                    {item.color}, {item.size}
                                  </p>
                                  <p className="font-semibold">
                                    ${item.price.toFixed(2)}
                                  </p>
                                </div>
                              </div>
                            </div>
                          ))}
                        </div>
                      </CardContent>
                    </div>
                    <div className="px-0 pt-4 flex justify-between items-center border-t mt-4">
                      <div className="px-6 pb-6">
                        <p className="text-2xl font-bold">
                          ${outfit.items
                            .reduce((sum, item) => sum + item.price, 0)
                            .toFixed(2)}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          Total outfit price
                        </p>
                      </div>
                      <div className="px-6 pb-6">
                        <Button
                          onClick={() => addOutfitToCart(outfit)}
                          className="w-full"
                        >
                          Add Complete Look to Cart
                        </Button>
                      </div>
                    </div>
                  </Card>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </section>
  );
};
