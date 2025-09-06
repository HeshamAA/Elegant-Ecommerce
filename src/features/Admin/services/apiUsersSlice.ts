
import { API_BASE_URL, HttpMethods, ENDPOINTS, createApi, fetchBaseQuery } from "@/features/Admin";


export const apiUsersSlice = createApi({
    reducerPath: 'apiUsersSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    tagTypes: ["User"],
    endpoints: (builder) => ({
        getUsers: builder.query({
            query: () => ({
                url: ENDPOINTS.USERS,
                method: HttpMethods.GET,
            }),
            providesTags: ["User"],
        }),
        deleteUser: builder.mutation ({
            query: (id: number) => ({
                url: `${ENDPOINTS.USERS}/${id}`,
                method: HttpMethods.DELETE,
                body: id,
                }),
            invalidatesTags: ["User"],
        }),
    }),
});

export const { useGetUsersQuery, useDeleteUserMutation } = apiUsersSlice;
