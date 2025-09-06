import { Product, createSlice, PayloadAction, CartState } from "@/features/Cart";

const initialState: CartState = {
  productIds: [],
  isOpen: false,
  productFullInfo: [],
};

const cartSlice = createSlice({
  name: "cart",
  initialState,
  reducers: {
    addToCart: (state, action) => {
      const { id, color } = action.payload;
      const existingItem = state.productIds.find(
        (item) => item.id === id && item.color === color
      );
      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.productIds.push({ id, color, quantity: 1 });
      }
    },
    setProductsFullInfo: (state, action) => {
      state.productFullInfo = action.payload;
    },
    removeProductFromCart: (state, action) => {
      const id = action.payload;

      if (state.productIds.some((item) => item.id === id)) {

        state.productIds = state.productIds.filter((el) => el.id !== id);
        state.productFullInfo = state.productFullInfo.filter(
          (el) => el.id !== id
        );
      }
    },
    updateQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const item = state.productIds.find((item) => item.id === id);
      // ...existing code...
      if (item) {
        item.quantity = Math.max(1, quantity);
      }
    },
    updateCartItem: (
      state,
      action: PayloadAction<{ id: number; color?: string; size?: string }>
    ) => {
      const { id, color, size } = action.payload;
      const item = state.productFullInfo.find((item) => item.id === id);
      if (item) {
        if (color) item.colors = [color];
        if (size) item.sizes = [size];
      }
    },
    openCart: (state) => {
      state.isOpen = true;
    },
    closeCart: (state) => {
      state.isOpen = false;
    },
    clearCart: (state) => {
      state.productIds = [];
      state.productFullInfo = [];
    },
  },
});

export const {
  addToCart,
  removeProductFromCart,
  updateQuantity,
  updateCartItem,
  openCart,
  closeCart,
  clearCart,
  setProductsFullInfo,
} = cartSlice.actions;

export default cartSlice.reducer;
