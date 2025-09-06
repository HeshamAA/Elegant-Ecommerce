import { useState,useParams, useSearchParams ,useGetProductsQuery,useAppDispatch, useAppSelector,Params} from "@/features/Product";

export const useProducts = () => {
  const dispatch = useAppDispatch();
  const viewMode = useAppSelector((state) => state.filter.viewMode);
  const [searchParams, setSearchParams] = useSearchParams();
  const { cat_prefix } = useParams();
  const page = Number(searchParams.get(Params.PAGE)) || 1;
  const limit = 10;
  const [sort, setSort] = useState("desc");

  const {
    data: productsArray,
    isLoading: loading,
    error,
    refetch,
  } = useGetProductsQuery({ page, limit, cat_prefix });

  const categoryTitle = useAppSelector((state) => state.filter.category);

  const sortedProducts = productsArray?.data
    ? [...productsArray.data].sort((a, b) =>
        sort === "desc" ? b.price - a.price : a.price - b.price
      )
    : [];

  const totalPages = productsArray
    ? Math.ceil(productsArray.totalCount / limit)
    : 1;

  const handleNext = () => {
    if (productsArray && page < totalPages) {
      setSearchParams({ page: String(page + 1) });
    }
  };

  const handlePrev = () => {
    if (page > 1) {
      setSearchParams({ page: String(page - 1) });
    }
  };

  return {
    products: sortedProducts,
    loading,
    error: error ? "Failed to load products" : null,
    totalPages,
    currentPage: page,
    refetch,
    sort,
    setSort,
    handleNext,
    handlePrev,
    sortedProducts,
    categoryTitle,
    page,
    viewMode,
    dispatch,
  };
};
