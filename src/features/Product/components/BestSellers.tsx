// import { useAppSelector } from "@/shared/state/hooks";
// import ProductCard from "./ProductCard";
// import { Button } from "@/shared/components/Button";
// import { Link } from "react-router-dom";
// import { TrendingUp } from "lucide-react";

// const BestSellers = () => {
//   const { bestSellers, loading } = useAppSelector((state) => state.products);

//   if (loading && bestSellers.length === 0) {
//     return (
//       <div className="container mx-auto px-4 py-12">
//         <h2 className="mb-2 text-center text-2xl font-semibold">
//           Best Sellers
//         </h2>
//         <p className="mb-8 text-center text-muted-foreground">
//           Our most popular products
//         </p>
//         <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//           {[...Array(4)].map((_, i) => (
//             <div key={i} className="animate-pulse">
//               <div className="aspect-square rounded-md bg-elegant-200"></div>
//               <div className="mt-2">
//                 <div className="h-4 w-3/4 rounded bg-elegant-200"></div>
//                 <div className="mt-2 h-3 w-1/4 rounded bg-elegant-200"></div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     );
//   }

//   if (bestSellers.length === 0) {
//     return null;
//   }

//   return (
//     <div className="container mx-auto px-4 py-12">
//       <div className="mb-8 flex flex-col items-center justify-center">
//         <div className="mb-2 flex items-center gap-2">
//           <TrendingUp className="h-5 w-5 text-elegant-600" />
//           <h2 className="text-center text-2xl font-semibold">Best Sellers</h2>
//         </div>
//         <p className="text-center text-muted-foreground">
//           Our most popular products based on sales
//         </p>
//       </div>
//       <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
//         {bestSellers.map((product) => (
//           <ProductCard key={product.id} product={product} />
//         ))}
//       </div>
//       <div className="mt-8 text-center">
//         <Button variant="outline">
//           <Link to="/category/all">View All Products</Link>
//         </Button>
//       </div>
//     </div>
//   );
// };

// export default BestSellers;
