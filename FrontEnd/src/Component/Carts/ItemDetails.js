import React from 'react'
import { useSelector } from 'react-redux'

export default function ItemDetails() {
    const cart = useSelector(state => state.cart)
    const quantity = cart.quantity
    const actualPrice = cart.actualPrice
    const discountedPrice = cart.discountedPrice
    const savings = cart.savings
    return (
        <div className='row justify-content-center '>
            <div className='col-8 fs-4 '>
                <div className='row justify-content-center bg-light bg-gradient fs-4 fw-bold'>
                    <div className='row bg-warning bg-gradient fs-1 fw-bold justify-content-center'>Item Details</div>
                    <div className='row bg-light bg-gradient '>
                        <p>Total Item = {quantity}</p>
                    </div>
                    <div className='row '>
                        <p>Total Price = {actualPrice}</p>
                    </div>
                    <div className='row'>
                        <p>Total Discount = {savings}</p>
                    </div>
                    <div className='row bg-secondary bg-gradient  border border-dark'>
                        <p>Total Pay = {discountedPrice}</p>
                    </div>

                    <div className='row bg-success bg-gradient mt-2'>
                        <p>Savings = {`${(savings / actualPrice * 100).toFixed(2)}%`}</p>
                    </div>
                    <div className='row bg-warning bg-gradient fw-bold text-dark fs-4 justify-content-center btn btn-primary mx-auto mt-3 mb-2' style={{ width: "100%" }} > Buy Now</div>
                </div>
            </div>
        </div>
    )
}
