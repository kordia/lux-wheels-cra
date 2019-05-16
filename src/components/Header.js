import React from 'react'

function Header() {
    return (
        <>
        <div className="main-nav container">
            <div className="row">
                <div className="col-sm-4">
                    <img className="img-responsive" src="/img/Lux-rentals.png" style={{width: 250, height: 50}} />
                </div>
                <div className="control col-sm-8">
                    <ul>
                        <li><a href="/">Home</a></li>
                        <li><a href="/about-us">About Us</a></li>
                        <li><a href="/products">Products</a></li>
                        <li><a href="/contacts">Contact</a></li>
                    </ul>
                </div>
            </div>
        </div>
        </>
    )
}

export default Header