import React from 'react'
import { useDispatch } from 'react-redux'
import { cartActions } from '../../Store/Product-Store'
export default function CartItem(props) {
    const dispatch = useDispatch()
    const { name, price, image, discountPrice, Qty } = props.cartItem
    const cartItemStyle = {
        width: "18rem",
        textAlign: "center",
        margin: "5px",
    }
    const addItem = (e) => {
        e.preventDefault()
        dispatch(cartActions.addItem(props.cartItem))
    }
    const removeItem=(e)=>{
        e.preventDefault()
        dispatch(cartActions.removeItem(props.cartItem))
    }
    return (
        <div className="card container" style={cartItemStyle}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{`${name} (${Qty})`}</h5>
                <h5 className="card-text">{`Total: ${price}`}</h5>
                <button onClick={addItem} className="btn bg-warning bg-gradient fs-3">+</button>
                <button onClick={removeItem} className="ms-1 btn bg-light bg-gradient fs-3">-</button>
            </div>
        </div>
    )
}
