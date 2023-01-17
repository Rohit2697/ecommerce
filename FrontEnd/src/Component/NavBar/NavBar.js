
import Cart from './Cart'
import Location from './Location'
import SearchBar from './SearchBar'
import Account from './Account'
import ReturnsOrder from './Returns-Order'
import { Link } from 'react-router-dom'
export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning fs-3">
            <div className="container-fluid">
                <Link className="navbar-brand" to="/"><h1>Shopping Cart</h1></Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>

                <Location />
                <SearchBar />
                <Account />
                <ReturnsOrder />
                <Cart />

            </div>
        </nav>
    )
};
