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
  BestSellers,
  useEffect,
  AOS
} from "@/features/Home";
 import "aos/dist/aos.css";

const HomePage = () => {
   useEffect(() => {
    AOS.init({
      duration: 2000, 
      once: false,     
    });
  }, []);



  const targetDate = new Date();
  targetDate.setDate(targetDate.getDate() + 7);

  return (
    <div className="overflow-hidden">
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

      <div className="relative" >
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
