import React from 'react'
import { useSelector } from 'react-redux'
import styles from './ItemDetails.module.css'
export default function ItemDetails() {
    const cart = useSelector(state => state.cart)
    const quantity = cart.quantity
    const actualPrice = cart.actualPrice
    const discountedPrice = cart.discountedPrice
    const savings = cart.savings
    //console.log(cart)
    return (
        <div className='row'>
            <div className='col-8 '>

                <div className={`card ${styles.itemBody} text-center`}>
                    <div className="card-header">
                        Item Details
                    </div>
                    <ul className="list-group list-group-flush">
                        <li className="list-group-item">Item/s = {quantity}</li>
                        <li className="list-group-item">Price = &#8377;{actualPrice}</li>
                        <li className="list-group-item">Discount = &#8377;{savings}</li>
                        <li className="list-group-item">Total Pay = &#8377;{discountedPrice}</li>
                        <li className="list-group-item text-success fw-bold">Savings = {`${(savings / actualPrice * 100).toFixed(2)}%`}</li>
                        <li className="list-group-item btn bg-warning bg-gradient fw-bold">Buy Now</li>


                    </ul>
                </div>
                {/* <div className='row fw-bold'>
                    <div className={`row fw-bold  ${styles.addBorderBottom}`}>Item Details</div>
                    <div className='row'>
                        <p>Item/s = {quantity}</p>
                    </div>
                    <div className='row '>
                        <p>Price = &#8377;{actualPrice}</p>
                    </div>
                    <div className='row'>
                        <p>Discount = &#8377;{savings}</p>
                    </div>
                    <div className={`row ${styles.addBorderTop}`}>
                        <p>Total Pay = &#8377;{discountedPrice}</p>
                    </div>

                    <div className='row bg-success bg-gradient mt-2'>
                        <p>Savings = {`${(savings / actualPrice * 100).toFixed(2)}%`}</p>
                    </div> */}
                {/* <div className='row bg-warning bg-gradient fw-bold text-dark fs-4 justify-content-center btn btn-primary mx-auto mt-3 mb-2' style={{ width: "100%" }} > Buy Now</div> */}

                {/* <div className='row justify-content-center mt-2 mb-2'>
                <button className="col btn btn-warning fw-bold">Buy Now</button>
                
                </div>
                </div> */}
            </div>
        </div>
    )
}
