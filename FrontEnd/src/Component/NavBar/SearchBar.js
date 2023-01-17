import React from 'react'

export default function SearchBar() {
    const searchBar={
        width:"400px"
        
    }
    return (
        <form className="mx-auto" style={searchBar}>
            <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
            {/* <button className="btn btn-outline-success" type="submit">Search</button> */}
        </form>
    )
}
