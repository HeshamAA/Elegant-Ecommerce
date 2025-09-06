import { useFetchBestSellersQuery, useFetchNewArrivalsQuery } from "@/features/Home";

export const useHome = () => {
 const { data: bestSellers, isLoading: bestSellersLoading, error: bestSellersError } = useFetchBestSellersQuery()
 const { data: newArrivals, isLoading: newArrivalsLoading, error: newArrivalsError } = useFetchNewArrivalsQuery()
  return {
    bestSellers,
    newArrivals,
   bestSellersLoading,
    newArrivalsLoading,
    bestSellersError,
    newArrivalsError,
  };
};
