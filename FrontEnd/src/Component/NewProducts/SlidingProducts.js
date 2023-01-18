import React from 'react'
import SliderButton from './SliderButton'
import SlidingProductItem from './SlidingProductItem'

export default function SlidingProducts(props) {
    const newProducts = props.newProducts
    return (
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">

                {newProducts.map((newProduct, index) => {
                    return <SliderButton key={`newPB-${newProduct.id}`} dataBsSlideTo={index} ariaCurrent={index === 0 ? 'true' : ""} activeclassName={index === 0 ? 'active' : ""} ariaLabel={`Slide ${index + 1}`} />
                })}
            </div>
            <div className="carousel-inner">
                {newProducts.map((newProduct, index) => {
                    return (
                        <SlidingProductItem newProduct={newProduct} key={`newP-${newProduct.id}`} extraclassName={index === 0 ? 'active' : ''} />
                    )
                })}
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="visually-hidden">Next</span>
            </button>
        </div>
    )
}
