import { configureStore } from "@reduxjs/toolkit";
import productSlice from './product-Slice'
import cartSlice from "./cart-Slice";
import newProductSlice from "./newProduct-Slice";
const store = configureStore({
    reducer: {
        product: productSlice.reducer,
        cart: cartSlice.reducer,
        newProduct: newProductSlice.reducer
    }
})
export const cartActions = cartSlice.actions
export const productAction = productSlice.actions
export default store