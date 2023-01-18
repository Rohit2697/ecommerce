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
                <h5 className="card-text">Total: &#8377;{price}</h5>
                <div className='row justify-content-center mb-2 gap-2'>
                <button onClick={addItem} className="col btn btn-warning fw-bold">+</button>
                <button onClick={removeItem} className="col btn btn-secondary fw-bold">-</button>
                </div>
               
            </div>
        </div>
    )
}
