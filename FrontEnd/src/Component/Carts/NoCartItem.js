import React from 'react'

export default function NoCartItem() {
    return (
        <div className='container'>
            <div className="row justify-content-md-center">
                <div className="col-md-auto">
                    <div className="alert alert-danger d-flex align-items-center" role="alert">
                        <h1>
                            😥 No Cart Item
                        </h1>
                    </div>
                </div>
            </div>
        </div>
    )
}
