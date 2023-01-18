import React from 'react'
import { useState } from 'react'
import { Link } from 'react-router-dom'
import style from './NavBar.module.css'
console.log(style)
export default function Account() {

    const [AccountName] = useState("Rohit")
    return (
        <div className={`nav-item dropdown `}>
            <Link className={"nav-link dropdown-toggle "+ `${style.navLinkCustom}`} to="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                Hello {AccountName}
            </Link>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><Link className="dropdown-item" to="#">Action</Link></li>
                <li><Link className="dropdown-item" to="#">Another action</Link></li>
                <li><hr className="dropdown-divider" /></li>
                <li><Link className="dropdown-item" to="#">Something else here</Link></li>
            </ul>
        </div>
    )
}
