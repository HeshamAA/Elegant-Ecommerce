import { API_BASE_URL, ENDPOINTS, HttpMethods,createApi, fetchBaseQuery } from "@/features/Blog";
import type { BlogPost } from "@/features/Blog/types/blog.types";



interface BlogPostParams {
    category?: string;
}

export const blogApiSlice = createApi({
    reducerPath: 'blogApiSlice',
    baseQuery: fetchBaseQuery({
        baseUrl: API_BASE_URL,
    }),
    endpoints: (builder) => ({
        getBlogPosts: builder.query<BlogPost[], BlogPostParams>({
            query: (category) => ({
                url: ENDPOINTS.BLOG_POSTS,
                method: HttpMethods.GET,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
                params: category,
            }),
        }),
        getBlogPostById: builder.query<BlogPost, number>({
            query: (id) => ({
                url: `${ENDPOINTS.BLOG_POSTS}/${id}`,
                method: HttpMethods.GET,
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            }),
        }),
    }),
});

export const { useGetBlogPostsQuery, useGetBlogPostByIdQuery } = blogApiSlice;
