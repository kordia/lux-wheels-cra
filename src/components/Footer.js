import React from 'react'


function Footer(){
    return (
        <>
        <div className="bottom">
            <div className='inside container'>
                <div className='row'>
                    <div className='Menu col-sm-4'>
                        <h3>Main Menu:</h3>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/about-us">About Us</a></li>
                            <li><a href="/products">Products</a></li>
                            <li><a href="/contacts">Contact</a></li>
                        </ul>
                    </div>
                    <div className='hours col-sm-4'>
                        <h3>Hours Open:</h3>
                        <ul>
                            <li>Monday 8:00am - 5:00pm</li>
                            <li>Tuesday  8:00am - 5:00pm</li>
                            <li>Wednesday 8:00am - 5:00pm</li>
                            <li>Thursday 8:00am - 5:00pm</li>
                            <li>Friday 8:00am - 5:00pm</li>
                        </ul>
                    </div>
                    <div className='company col-sm-4'>
                        <h3>Contact:</h3>
                        <ul>
                            <li><i class="fas fa-mobile-alt"> Phone: 334-333-4569</i></li>
                            <li><i class="fas fa-envelope"> Email: luxrentals603@gmail.com</i></li>
                            <li><i class="far fa-address-card"> Address: 454 Mulberry Ln. San Diego, CA</i></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
        </>
    )


}
export default Footer
