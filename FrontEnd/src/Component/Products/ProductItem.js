import React from 'react'

export default function ProductItem(props) {
    const prodItemStye = {
        width: "18rem",
        textAlign: "center",
        margin: "5px"
    }
    //const [discountPrice, setDiscountPrice] = useState('')
    const { name, price, discount, Desc, image, type } = props.product

    //setDiscountPrice(discount ? (price - (price * discount / 100)).toFixed(2) : '')
    //setDiscountPrice(discount)
    //console.log(discount)
    let afterDiscount = Number(discount) ? <p className="card-text badge bg-danger text-wrap fs-6">{(price - (price * discount / 100)).toFixed(2)}</p> : ""
    let newPrice = Number(discount) ? <p className="card-text text-decoration-line-through fs-5">{price}</p> : <p className="card-text fs-5">{price}</p>
    return (
        <div className="card container" style={prodItemStye}>
            <img src={image} className="card-img-top" alt="..." />
            <div className="card-body">
                <h5 className="card-title">{name}</h5>
                <p className="card-text">{Desc}</p>
                {newPrice}
                {afterDiscount}
                <p className="card-text text-danger fs-3">{discount ? `${discount}% Off` : ""}</p>
                <a href="#" className="btn bg-warning bg-gradient">Buy Now</a>
                <a href="#" className="ms-1 btn bg-light bg-gradient">Add To Cart</a>
            </div>
        </div>
    )
}
