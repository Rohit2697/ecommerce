import { createSlice, current } from '@reduxjs/toolkit'

const productsInitial = {
    products: [
        {
            id: "1",
            name: "Samsung x1",
            price: "100",
            discount: "0",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },

        {
            id: "4",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "2",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "3",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "5",
            name: "Iphone x1",
            price: "100",
            discount: "40",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "6",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "7",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "8",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "9",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "10",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "11",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },
        {
            id: "12",
            name: "Iphone x1",
            price: "100",
            discount: "10",
            Desc: "Iphone Mobile",
            image: require('../image/Iphone.jpg'),
            type: "Mobile"
        },

    ],
    //fetchedData:false
}
const productSlice = createSlice({
    name: 'product-slice',
    initialState: productsInitial,
    reducers: {
        addDiscount(state) {

            for (let i = 0; i < state.products.length; i++) {
                //console.log("tes")
                let discountPrice = 0
                if (state.products[i].discount * 1) {
                    discountPrice = (state.products[i].price - (state.products[i].price * state.products[i].discount / 100)).toFixed(2)
                }
                //console.log(discountPrice)
                state.products[i]['discountPrice'] = discountPrice
            }
          
        }
    }
})

export default productSlice