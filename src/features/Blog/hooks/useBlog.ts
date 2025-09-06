import { useSearchParams ,useGetBlogPostsQuery,useState} from "@/features/Blog";


export const useBlog = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [searchParams, setSearchParams] = useSearchParams();
  const category = searchParams.get("category") || "";
  const { data, isLoading, error } = useGetBlogPostsQuery(
    category ? { category } : undefined
  );

  const handleFilterChange = (key: string, value: string) => {
    const newParams = new URLSearchParams(searchParams);
    if (value) {
      newParams.set(key, value);
    } else {
      newParams.delete(key);
    }
    setSearchParams(newParams);
  };

  let errorMessage: string | null = null;
  if (error) {
    errorMessage =
      'status' in error
        ? JSON.stringify(error.data)
        : 'message' in error
        ? error.message!
        : 'An error occurred';
  }

  return {
    searchQuery,
    setSearchQuery,
    category,
    data,
    isLoading,
    error,
    handleFilterChange,
    errorMessage,
  };
};
