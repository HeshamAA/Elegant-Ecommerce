import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";
import cartReducer from "../../features/Cart/state/cartSlice";
import filterReducer from "./slices/filterSlice";
import { homeApiSlice } from "../../features/Home/services/homeApiSlice";
import { apiAuthSlice } from "../../features/Auth/services/apiAuthSlice";
import { blogApiSlice } from "@/features/Blog/services/blogApiSlice";
import { cartApiSlice } from "@/features/Cart/services/cartApiSlice";
import { CartState } from "@/features/Cart";
import authReducer from "@/features/Auth/state/authSlice";
import { AuthState } from "@/features/Auth";
import { apiUsersSlice } from "@/features/Admin/services/apiUsersSlice";
import { apiProductsSlice } from "@/features/Product/services/apiProductsSlice";
import { apiWishlistSlice } from "@/features/Wishlist/services/apiWishlistSlice";

const cartPersistConfig = {
  key: "cart",
  storage,
  whitelist: ["productIds"],
};

const authPersistConfig = {
  key: "auth",
  storage,
  whitelist: ["user"],
};

export const store = configureStore({
  reducer: {
    cart: persistReducer<CartState>(cartPersistConfig, cartReducer),
    auth: persistReducer<AuthState>(authPersistConfig, authReducer),
    filter: filterReducer,
    [blogApiSlice.reducerPath]: blogApiSlice.reducer,
    [homeApiSlice.reducerPath]: homeApiSlice.reducer,
    [apiAuthSlice.reducerPath]: apiAuthSlice.reducer,
    [cartApiSlice.reducerPath]: cartApiSlice.reducer,
    [apiUsersSlice.reducerPath]: apiUsersSlice.reducer,
    [apiProductsSlice.reducerPath]: apiProductsSlice.reducer,
    [apiWishlistSlice.reducerPath]: apiWishlistSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(
      homeApiSlice.middleware,
      apiAuthSlice.middleware,
      blogApiSlice.middleware,
      cartApiSlice.middleware,
      apiUsersSlice.middleware,
      apiProductsSlice.middleware,
      apiWishlistSlice.middleware,
        ),  
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
