
import Cart from './Cart'
import Location from './Location'
import SearchBar from './SearchBar'
export default function NavBar(props) {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-warning">
            <div className="container-fluid">
                <a className="navbar-brand" href="#"><h2>Shopping Cart</h2></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                    
                    <Location />
                    <SearchBar />
                    <Cart />
                
            </div>
        </nav>
    )
};
