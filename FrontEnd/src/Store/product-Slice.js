import { createSlice } from '@reduxjs/toolkit'

const productsInitial = {
    products: [
        {
            name: "Samsung x1",
            price: "100",
            discount: "0",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },

        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "40",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },
        {
            name: "Samsung x1",
            price: "100",
            discount: "10",
            Desc: "Samsung Mobile",
            image: require('../image/Samsung.jpg'),
            type: "Mobile"
        },

    ]
}
const productSlice = createSlice({
    name: 'product-slice',
    initialState: productsInitial,
    reducers: {}
})

export default productSlice