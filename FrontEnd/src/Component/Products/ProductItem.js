import React from 'react'
import { useDispatch } from 'react-redux'
//import { productAction } from '../../Store/Product-Store'
import { cartActions } from '../../Store/Product-Store'

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
    let newPrice = discountPrice ? <p className="card-text text-decoration-line-through fs-5">{price}</p> : <p className="card-text fs-5">{price}</p>
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
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{Desc}</p>
                {newPrice}
                {<p className="card-text badge bg-danger text-wrap fs-6">{discountPrice ? discountPrice : price}</p>}
                <p className="card-text text-danger fs-3">{discount ? `${discount}% Off` : ""}</p>
                
            </div>
            <div className='row justify-content-center mb-2'>
                    <div onClick={buyNow} href="#" className="col btn bg-warning bg-gradient fw-bold">Buy Now</div>
                    <div onClick={addToCart} href="#" className="col btn bg-light fw-bold bg-gradient fw-bold">Add To Cart</div>
                </div>
        </div>
    )
}
