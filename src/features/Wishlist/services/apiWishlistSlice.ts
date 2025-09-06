/* eslint-disable @typescript-eslint/no-explicit-any */
import { createApi, fetchBaseQuery ,API_BASE_URL, ENDPOINTS, HttpMethods, showToast} from '@/features/Wishlist'


export const apiWishlistSlice = createApi({
  reducerPath: "apiWishlistSlice",
  baseQuery: fetchBaseQuery({
    baseUrl: API_BASE_URL,
  }),
  tagTypes: ["Wishlist"],
  endpoints: (builder) => ({

    addToWishlist: builder.mutation({
      async queryFn({ newWishlist }, { getState }, _extra, fetchWithBQ) {
        try {
          
          const state: any = getState();
          const userId = state.auth.user.user.id;

          
          const userRes: any = await fetchWithBQ(`${ENDPOINTS.USERS}/${userId}`);
          if (userRes.error) return { error: userRes.error };

          const oldWishlist = userRes.data.wishlist || [];

        
          const patchRes: any = await fetchWithBQ({
            url: `${ENDPOINTS.USERS}/${userId}`,
            method: HttpMethods.PATCH,
            headers: { "Content-Type": "application/json" },
            body: { wishlist: [...oldWishlist, newWishlist] },
          });

          if (patchRes.error) return { error: patchRes.error };

          showToast.success("Item added to wishlist ✅");
          return { data: patchRes.data };
        } catch (err) {
          showToast.error("Error ❌");
          return { error: err as any };
        }
      },
      invalidatesTags: ["Wishlist"],
    }),

    removeFromWishlist: builder.mutation({
      async queryFn({ itemIdToRemove }, { getState }, _extra, fetchWithBQ) {
        try {
          const state: any = getState();
          const userId = state.auth.user.user.id;

          const userRes: any = await fetchWithBQ(`${ENDPOINTS.USERS}/${userId}`);
          if (userRes.error) return { error: userRes.error };

          const oldWishlist = userRes.data.wishlist || [];
          const updatedWishlist = oldWishlist.filter(
            (item: any) => item !== itemIdToRemove
          );

          const patchRes: any = await fetchWithBQ({
            url: `${ENDPOINTS.USERS}/${userId}`,
            method: HttpMethods.PATCH,
            headers: { "Content-Type": "application/json" },
            body: { wishlist: updatedWishlist },
          });

          if (patchRes.error) return { error: patchRes.error };

          showToast.success("Item removed from wishlist 🗑️");
          return { data: patchRes.data };
        } catch (err) {
          showToast.error("Error ❌");
          return { error: err as any };
        }
      },
      invalidatesTags: ["Wishlist"],
    }),

  }),
});

export const { useAddToWishlistMutation, useRemoveFromWishlistMutation } = apiWishlistSlice;
