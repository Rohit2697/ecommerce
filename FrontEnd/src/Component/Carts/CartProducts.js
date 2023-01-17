import React from 'react'
import CartItem from './CartItem'
import ItemDetails from './ItemDetails'
import NoCartItem from './NoCartItem'
export default function CartProducts(props) {
    const cartProducts = props.cartProducts
    return (
        <div className='container ms-10 mt-5'>



            {cartProducts.length ?
                <div className='row justify-content-evenly'>
                    <div className='col-8'>
                        <div className='row'>
                            {cartProducts.map((item) => {
                                return (
                                    <div className='col' key={item.id}>
                                        <CartItem cartItem={item} />
                                    </div>
                                )
                            })
                            }


                        </div>
                    </div>
                    <div className='col-4'>
                        <ItemDetails />
                    </div>
                </div>
                : <NoCartItem />}
        </div>
    )
}
