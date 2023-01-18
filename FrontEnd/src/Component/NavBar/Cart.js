import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'
export default function Cart() {
    const navigate = useNavigate()
    const cartItemNo = useSelector(state => state.cart.quantity)

    const goToCartPage = (e) => {
        e.preventDefault()
        navigate('/cartitems')
    }

    return (

        <button type="button" onClick={goToCartPage} className="btn btn-warning position-relative">
            cart
            <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cartItemNo}
                <span className="visually-hidden">unread messages</span>
            </span>
        </button>
    )
}
