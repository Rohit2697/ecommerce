import { createSlice, current } from '@reduxjs/toolkit'

const initialState = {
    quantity: 0,
    cartProducts: [],
    actualPrice: 0,
    discountedPrice: 0,
    savings: 0,
    chnagedCartItem: false,
    showCartItem: false

}

//cart item
//[{
//product info
//Qty:
//}]
const reducers = {
    closeShowCart(state) {
        state.showCartItem =false
    },
    toggeChange(state) {
        state.chnagedCartItem = !state.chnagedCartItem
    },
    addItem(state, action) {
        state.showCartItem = true
        const { payload } = action
        state.quantity++;
        state.chnagedCartItem = true
        const isExistingProduct = state.cartProducts.find((item) => item.id === payload.id)
        if (!isExistingProduct) {
            payload['OriginalPrice'] = payload.price
            payload['OriginalDiscount'] = payload.discount
            payload['Qty'] = 1
            state.actualPrice += payload.OriginalPrice
            state.discountedPrice += payload.OriginalDiscount
            state.cartProducts.push(payload)
        }
        else {
            isExistingProduct.Qty++
            isExistingProduct.price += isExistingProduct.OriginalPrice
            isExistingProduct.discount += isExistingProduct.OriginalDiscount
            state.actualPrice += isExistingProduct.OriginalPrice
            state.discountedPrice += isExistingProduct.OriginalDiscount
        }

        // state.actualPrice += state.actualPrice
        // state.discountedPrice += state.discountedPrice
        state.savings = state.actualPrice - state.discountedPrice
        console.log(current(state))
    },
    // updateItem(state, action) {
    //     const { payload } = action
    //     state.quantity--;

    // }
    removeItem(state, action) {
        const { payload } = action
        const isExistingProduct = state.cartProducts.find((item) => item.id === payload.id)


        state.chnagedCartItem = true

        if (isExistingProduct) {
            state.quantity--
            isExistingProduct.Qty--;
            isExistingProduct.price -= isExistingProduct.OriginalPrice
            isExistingProduct.discount -= isExistingProduct.OriginalDiscount
            state.actualPrice -= isExistingProduct.OriginalPrice
            state.discountedPrice -= isExistingProduct.OriginalDiscount
            state.savings = state.actualPrice - state.discountedPrice
        }

        if (isExistingProduct.Qty === 0) {
            // alert("No Product")
            state.cartProducts = state.cartProducts.filter((item) => item.id !== payload.id)
            return;
        }

        // if (!isExistingProduct) {
        //     // state.cartProducts.push(payload)
        //     //send Notification to the user that the there is no product

        // }



        // state.actualPrice -= payload.price
        // state.discountedPrice -= payload.discount
        // state.actualPrice += state.actualPrice
        // state.discountedPrice += state.discountedPrice

    }

}

const cartSlice = createSlice({
    name: "cart-slice",
    initialState,
    reducers
})

export default cartSlice