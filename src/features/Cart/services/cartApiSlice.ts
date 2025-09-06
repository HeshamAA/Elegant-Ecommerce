
import { setProductsFullInfo, Product, createApi, fetchBaseQuery, API_BASE_URL, ENDPOINTS, HttpMethods } from '@/features/Cart';

export const cartApiSlice = createApi({
  reducerPath: 'cartApiSlice',
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  endpoints: (builder) => ({
    getCartProducts: builder.query<Product[], string[]>({
      query: (ids) => {
        if (!ids || ids.length === 0) {
          return { url: '', response: [] };
        }
        return {
          url: ENDPOINTS.PRODUCTS,
          method: HttpMethods.GET,
          params: ids.reduce((acc, id, index) => {
            acc[`id[${index}]`] = id;
            return acc;
          }, {} as Record<string, string>),
        };
      },
      async onQueryStarted(_ids, { dispatch, queryFulfilled }) {
        try {
          const { data } = await queryFulfilled;
          dispatch(setProductsFullInfo(data));
        } catch (error) {
          console.error('Error fetching cart products:', error);
        }
      },
      transformResponse: (response: Product[]) => response,
    }),
  }),
});

export const { useGetCartProductsQuery } = cartApiSlice;