import React from 'react'

export default function SliderButton(props) {
    return (
        <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to={props.dataBsSlideTo} className={props.activeclassName} aria-current={props.ariaCurrent} aria-label={props.ariaLabel}></button>
    )
}
