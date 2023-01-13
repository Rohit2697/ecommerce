import React from 'react'
import ProductItem from './ProductItem'
import { useSelector } from 'react-redux'
export default function Products(props) {
    const products = useSelector(state => state.product.products)
    console.log(products)
    return (
        <div className='container ms-10 mt-5'>
            <div className='row'>

                {products.map((item, index) => {
                    return (
                        <div key={index} className='col'>
                            <ProductItem product={item} />

                        </div>
                    )
                })}
            </div>

        </div>
    )
}
