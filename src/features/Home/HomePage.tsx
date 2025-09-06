import { 
  HeroBanner, 
  CategoryPreview, 
  NewArrivals, 
  FeaturedBrands, 
  BlogPreview, 
  StyleFinderCta, 
  AnimatedMetrics, 
  CountdownTimer, 
  ShopTheLook, 
  BestSellers 
} from "@/features/Home";

const HomePage = () => {
  
  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <div className="overflow-x-hidden">
      <HeroBanner />

      <div>
        <CategoryPreview />
      </div>

      <div>
        <NewArrivals />
      </div>

      <div>
        <BestSellers />
      </div>

      <div>
        <FeaturedBrands />
      </div>

      <div className="relative">
        <CountdownTimer
          targetDate={targetDate}
          title="Summer Sale Ends Soon!"
          description="Don't miss out on our biggest sale of the season. Shop now and save up to 70% on selected items."
          linkText="Shop Now"
          linkUrl="/category/all"
        />
        <ShopTheLook />
      </div>

      <div>
        <AnimatedMetrics />
      </div>
      <div>
        <StyleFinderCta />
      </div>
      <div>
        <BlogPreview />
      </div>
    </div>
  );
};

export default HomePage;
