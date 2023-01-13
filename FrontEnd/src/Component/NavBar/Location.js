import { useEffect, useState } from 'react'

import axios from 'axios'

export default function Location(params) {
    const [Location, setLocation] = useState({})

    useEffect(() => {
        if (navigator.geolocation) {

            navigator.geolocation.getCurrentPosition(async (position) => {
                const data = {
                    lat: position.coords.latitude,
                    lon: position.coords.longitude
                }
                axios.post('http://localhost:4000/location', data).then(loc => {
                    const { data } = loc
                    const { location, country, state } = data
                    setLocation({ location, country, state })
                }).catch(err => {
                    console.log(err)
                })
            })

        }

    }, [navigator.geolocation])
    return (
        <>
            {Location.location ? <div className="ms-4" >
                <div className='row'>
                    <span className='col'>{Location.location}</span>
                </div>
                <div className='row'>
                    <span className='col'>{`${Location.country}, ${Location.state}`}</span>
                </div>

            </div > : ""}
        </>
    )
};
