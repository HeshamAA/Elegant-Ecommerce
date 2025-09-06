export const API_BASE_URL = "https://elegant-api-mu.vercel.app"
export const ENDPOINTS = {
    NEW_ARRIVALS_LIMIT_4: `products?new=true&_limit=4`,
    BEST_SELLERS_LIMIT_4: `products?_sort=sold&_order=desc&_limit=4`,
    LOGIN: `/login`,
    REGISTER: `/register`,  
    BLOG_POSTS: `/blogPosts`,
    CART: `/cart`,
    PRODUCTS: `/products`,
    USERS: `/users`,
} as const

export enum HttpMethods {
    GET = 'GET',
    POST = 'POST',
    PUT = 'PUT',
    DELETE = 'DELETE',
    PATCH = 'PATCH',
}
export enum ErrorStatus {
    FETCH_ERROR = 'FETCH_ERROR',
    TIMEOUT_ERROR = 'TIMEOUT_ERROR',
    PARSING_ERROR = 'PARSING_ERROR',
    CUSTOM_ERROR = 'CUSTOM_ERROR',
}

export enum HttpStatusCode {
    BAD_REQUEST = 400,
    UNAUTHORIZED = 401,
    FORBIDDEN = 403,
    NOT_FOUND = 404,
    UNPROCESSABLE_ENTITY = 422,
    TOO_MANY_REQUESTS = 429,
    INTERNAL_SERVER_ERROR = 500,
    SERVICE_UNAVAILABLE = 503,
}

export const ROUTES = {
    HOME: '/',
    PRODUCT: '/product/:id',
    PRODUCTS: '/products/:cat_prefix',
    CART: '/cart',
    WISHLIST: '/wishlist',
    BLOG: '/blog',
    BLOG_POST: '/blog/:id',
    CHECKOUT: '/checkout',
    ORDER_CONFIRMATION: '/order-confirmation',
    CONTACT: '/contact',
    ADMIN: '/admin',
    ADMIN_DASHBOARD: '/admin/dashboard',
    ADMIN_OVERVIEW: '/admin/dashboard/overview',
    ADMIN_PRODUCTS: '/admin/dashboard/products',
    ADMIN_USERS: '/admin/dashboard/users',
    ADMIN_ANALYTICS: '/admin/dashboard/analytics',
    AUTH: '/auth',
    LOGIN: '/auth/login',
    REGISTER: '/auth/register',
  } as const

  export enum AvailableSizes {
    XS = "XS",
    S = "S",
    M = "M",
    L = "L",
    XL = "XL",
    XXL = "XXL",
    XXXL = "XXXL",
}
export enum Categories {
    Men = "Men",
    Women = "Women",
    Kids = "Kids",
    Sports = "Sports",
    Accessories = "Accessories",
}
export enum AvailableColors {
    White = "White",
    Black = "Black",
    Navy = "Navy",
    Red = "Red",
    Blue = "Blue",
    Green = "Green",
    Yellow = "Yellow",
}

export enum Params {
    PAGE = "page",
    LIMIT = "limit",
    SORT_BY = "sortBy",
    SORT_ORDER = "sortOrder",
    SEARCH = "search",
    CATEGORY = "category",
    PRICE_RANGE = "priceRange",
}