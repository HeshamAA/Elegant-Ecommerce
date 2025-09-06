import { createApi, fetchBaseQuery,API_BASE_URL, ENDPOINTS,Product } from '@/features/Home'



export const homeApiSlice = createApi({
    reducerPath: 'homeApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
        
    }),
    endpoints: (builder) => ({
        fetchNewArrivals: builder.query<Product[], void>({
            query: () => ENDPOINTS.NEW_ARRIVALS_LIMIT_4,
            keepUnusedDataFor: 60 * 60 * 24
        }),
        fetchBestSellers: builder.query<Product[], void>({
            query: () => ENDPOINTS.BEST_SELLERS_LIMIT_4,    
            keepUnusedDataFor: 60 * 60 * 24
        })
    })
})


export const {
    useFetchNewArrivalsQuery,
    useFetchBestSellersQuery
} = homeApiSlice
