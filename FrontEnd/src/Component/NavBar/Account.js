import React from 'react'
import { useState } from 'react'
export default function Account() {

    const [AccountName, setAccountName] = useState("Rohit")
    return (
        <div className="col nav-item dropdown">
            <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
               Hello {AccountName}
            </a>
            <ul className="dropdown-menu" aria-labelledby="navbarDropdown">
                <li><a className="dropdown-item" href="#">Action</a></li>
                <li><a className="dropdown-item" href="#">Another action</a></li>
                <li><hr className="dropdown-divider" /></li>
                <li><a className="dropdown-item" href="#">Something else here</a></li>
            </ul>
        </div>
    )
}
