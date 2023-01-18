import React from 'react'
import { useDispatch } from 'react-redux'
//import { productAction } from '../../Store/Product-Store'
import { cartActions } from '../../Store/Product-Store'
import styles from './ProductItem.module.css'

export default function ProductItem(props) {
    const prodItemStye = {
        width: "18rem",
        textAlign: "center",
        margin: "5px",
        //height:"100%"

    }
    const dispatch = useDispatch()
    //const [discountPrice, setDiscountPrice] = useState('')
    const { id, name, price, discount, Desc, image, discountPrice } = props.product

    //setDiscountPrice(discount ? (price - (price * discount / 100)).toFixed(2) : '')
    //setDiscountPrice(discount)
    //console.log(discount)
    let newPrice = discountPrice ? discountPrice : price
    let newDiscount = discount * 1 ? <ins className='text-danger fw-bold'>{discount}%&nbsp;Off</ins> : ""
    const buyNow = () => {
        console.log("Buy Now")
    }
    const addToCart = () => {
        dispatch(cartActions.addItem({
            id,
            name,
            price: price * 1,
            image,
            discount: price * 1 - discount * 1,
        })
        )

    }

    return (
        <div className="card container" style={prodItemStye}>
            <img src={image} className={`card-img-top ${styles['img-custom']}`} alt="..." />
            <div className="card-body">
                <div className='row justify-content-center mb-2'>
                    <h5 className="card-title">{name}</h5>
                    <p className="card-text">{Desc}</p>
                    {/* {newPrice}
                    {<p className="card-text badge bg-danger text-wrap fs-6">{discountPrice ? discountPrice : price}</p>}
                    <p className="card-text text-danger fs-3">{discount ? `${discount}% Off` : ""}</p> */}
                    {<div className='card-text'>{discountPrice ? <del> &#8377;{price}</del> : ""}&nbsp;  &#8377;{newPrice} &nbsp; {newDiscount}</div>}
                </div>
                <div className='row justify-content-center mb-2 gap-2'>
                    <button onClick={buyNow} type="button" className="col btn btn-warning fw-bold">Buy Now</button>
                    <button onClick={addToCart} type="button" className="col btn btn-secondary fw-bold">Cart</button>
                    {/* <div onClick={buyNow} href="#" className="col btn bg-warning bg-gradient fw-bold">Buy Now</div>
                    <div onClick={addToCart} href="#" className="col btn bg-light fw-bold bg-gradient fw-bold">Add To Cart</div> */}
                </div>

            </div>

        </div>
    )
}
