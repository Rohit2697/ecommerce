import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    products: [
        {
            id: "14",
            name: "Iphone x1",
            image: require('../image/Iphone.jpg'),
            type: "Mobile",
            Desc: "Iphone Mobile",
        },
        {
            id: "15",
            name: "Iphone x1",
            image: require('../image/Iphone.jpg'),
            type: "Mobile",
            Desc: "Iphone Mobile",
        },
        {
            id: "16",
            name: "Iphone x1",
            image: require('../image/Iphone.jpg'),
            type: "Mobile",
            Desc: "Iphone Mobile",
        }
    ]
}

const name = 'new-product'

const newProductSlice = createSlice({
    name,
    initialState
})

export default newProductSlice