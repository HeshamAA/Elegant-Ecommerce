
import { API_BASE_URL, HttpMethods,ENDPOINTS, createApi, fetchBaseQuery } from "@/features/Auth";
import type { AuthResponse, LoginData, RegisterData } from "@/features/Auth";



export const apiAuthSlice = createApi({
    reducerPath: 'apiAuthSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (builder) => ({
        login: builder.mutation<AuthResponse, LoginData>({
            query: (data: LoginData) => ({
                url: ENDPOINTS.LOGIN,
                method: HttpMethods.POST,
                body: data,
            }),
        }),
        register: builder.mutation<AuthResponse, RegisterData> ({
            query: (data: RegisterData) => ({
                url: ENDPOINTS.REGISTER,
                method: HttpMethods.POST,
                body: data,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }),
        }),
    }),
});

export const { useLoginMutation, useRegisterMutation } = apiAuthSlice;
