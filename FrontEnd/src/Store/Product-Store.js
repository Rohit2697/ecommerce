import { configureStore } from "@reduxjs/toolkit";
import productSlice from './product-Slice'
import cartSlice from "./cart-Slice";
const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer
    }
})
export const cartActions = cartSlice.actions
export const productAction = productSlice.actions
export default store