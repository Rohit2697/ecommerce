
import Cart from './Cart'
import Location from './Location'
import SearchBar from './SearchBar'
import Account from './Account'
import ReturnsOrder from './Returns-Order'
import { Link } from 'react-router-dom'
import styles from './NavBar.module.css'
export default function NavBar(props) {
    return (
        <nav className={`navbar navbar-expand-lg navbar-dark bg-dark  `}>
            <div className="container-fluid">
                <Link className="navbar-brand fw-bold" to="/">
                    <img src={require('../../image/cartLogo.png')} alt="" width="30" height="27" />
                    Shopping Cart</Link>
                {/* <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button> */}

                <Location />
                <SearchBar />
                <Account />
                <ReturnsOrder />
                <Cart />

            </div>
        </nav>
    )
};
