import {
  API_BASE_URL,
  HttpMethods,
  ENDPOINTS,
  createApi,
  fetchBaseQuery,
} from "@/features/Auth";
import { Product } from "@/features/Product/types/products.types";
type productResponse = {
  data: Product[];
  totalCount: number;
};

export const apiProductsSlice = createApi({
  reducerPath: "apiProductsSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Product"],
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ page = 1, limit = 10, cat_prefix }) => {
        const params = new URLSearchParams();
        if (cat_prefix) {
          params.set("cat_prefix", cat_prefix);
        }
        params.set("_page", page.toString());
        params.set("_limit", limit.toString());

        return {
          url: `${ENDPOINTS.PRODUCTS}?${params.toString()}`,
          method: HttpMethods.GET,
        };
      },
      providesTags: ["Product"],
      transformResponse: (response, meta): productResponse => {
        const totalCount = meta?.response?.headers.get("X-Total-Count");
        return {
          data: response as Product[],
          totalCount: Number(totalCount) || 0,
        };
      },
    }),
    getProductById: builder.query<Product, number>({
      query: (id: number) => ({
        url: `${ENDPOINTS.PRODUCTS}/${id}`,
        method: HttpMethods.GET,
      }),
      providesTags: (result, error, id) => [{ type: "Product", id }],
    }),
    addProduct: builder.mutation({
      query: (product) => ({
        url: ENDPOINTS.PRODUCTS,
        method: HttpMethods.POST,
        body: product,
      }),
      invalidatesTags: ["Product"],
    }),
    editProduct: builder.mutation({
      query: ({ id, product }) => ({
        url: `${ENDPOINTS.PRODUCTS}/${id}`,
        method: HttpMethods.PUT,
        body: product,
      }),
      invalidatesTags: (result, error, { id }) => [
        { type: "Product", id },
        "Product",
      ],
    }),
    deleteProduct: builder.mutation({
      query: (id: number) => ({
        url: `${ENDPOINTS.PRODUCTS}/${id}`,
        method: HttpMethods.DELETE,
      }),
      invalidatesTags: ["Product"],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetProductByIdQuery,
  useAddProductMutation,
  useEditProductMutation,
  useDeleteProductMutation,
} = apiProductsSlice;
