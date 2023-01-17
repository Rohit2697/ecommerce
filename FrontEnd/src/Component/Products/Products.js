//import React, { useState } from 'react'
import ProductItem from './ProductItem'
import { cartActions } from '../../Store/Product-Store'
import { useSelector, useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import { useEffect } from 'react'
export default function Products(props) {
    const products = useSelector(state => state.product.products)
    const cart = useSelector(state => state.cart)
    const showCartItem = cart.showCartItem
    const cartQuantity = cart.quantity
    // const [sentItemToCart, setsentItemToCart] = useState(true)

    //console.log(showCartItem)
    const dispatch = useDispatch()
    useEffect(() => {
        if (cartQuantity === 0) {
            dispatch(cartActions.closeShowCart())
        }
    }, [cartQuantity, dispatch])

    const alertClose = (e) => {
        //e.preventDefault() 
        //setsentItemToCart(false)
        dispatch(cartActions.closeShowCart())
    }
    return (
        <>
            {showCartItem ? <div className="alert alert-success alert-dismissible fade show" role="alert">
                Your Product has been added to the <Link to="/cartitems" onClick={alertClose} className="alert-link">Cart</Link>. Please check it out!.
                <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
            </div> : ""}
            <div className='container ms-10 mt-5'>
                <div className='row'>

                    {products.map((item, index) => {
                        return (
                            <div key={item.id} className='col'>
                                <ProductItem product={item} />

                            </div>
                        )
                    })}
                </div>

            </div>
        </>
    )
}
