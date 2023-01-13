import React from 'react'
import Account from './Account'
export default function Cart() {
    const cartImg =
    {
        height: "65px",
        width: "65px"
    }

    const cartNum = {
        position: "fixed",
        zIndex: "100",
        marginLeft: "8px",
        marginTop: "17px",
        width: "60px",
        display: "flex",
        textAlign: "center",
        justifyContent: "center"
    }
    return (
        <div className="d-flex row  ">
            <Account />

            <div className='col'> <span style={cartNum}>5</span><img src={require('../../image/cart.png')} style={cartImg} /></div>
            <span className='col me-5'><a className="" href="#" tabIndex="-1">Cart</a></span>
        </div>
    )
}
