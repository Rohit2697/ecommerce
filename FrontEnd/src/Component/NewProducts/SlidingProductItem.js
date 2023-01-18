import React from 'react'
import style from './SlideProduct.module.css'

export default function SlidingProductItem(props) {
    return (
        <>

            <div className={`carousel-item ${props.extraclassName+' '+style.background}`} data-bs-interval="10000">
                <img src={props.newProduct.image} className={`d-block ${style['w-100-custom']}`} alt="..." />
                <div className={`carousel-caption d-none fs-4 d-md-block ${style.textCustomisation}`}>
                    <h2 >{props.newProduct.name}</h2>
                    <p>{props.newProduct.Desc}</p>
                </div>
            </div>
            {/* <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div> */}
            {/* <div className="carousel-inner"> */}


            {/* <div className="carousel-item active" data-bs-interval="10000">
                    <img src="..." className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>First slide label</h5>
                        <p>Some representative placeholder content for the first slide.</p>
                    </div>
                </div> */}
            {/* <div className="carousel-item" data-bs-interval="2000">
                    <img src="..." className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Second slide label</h5>
                        <p>Some representative placeholder content for the second slide.</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img src="..." className="d-block w-100" alt="..." />
                    <div className="carousel-caption d-none d-md-block">
                        <h5>Third slide label</h5>
                        <p>Some representative placeholder content for the third slide.</p>
                    </div>
                </div> */}
            {/* </div> */}
        </>
    )
}
