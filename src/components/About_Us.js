import React from 'react'

function AboutUs() {
    return (
        <>
        <div className="main">
            <div className="info container">
                <div className="row">
                    <div className="about col-sm-3">
                        <h3>About Us</h3>
                            <p><b>We are Lux Rentals the rental company, 
                                where we cut out the middle man and give the 
                                people what they deserve. Lux Rentals can't be
                                beat with the best cars and the best prices. Our customers
                                are recognized that the only way to rent with our company, is to 
                                prioritize their needs for the top of the line cars. So come on over 
                                to Lux Rentals, we are more than what meets the eye.</b></p>
                    </div>
                    <div className="top col-sm-4">
                        <div className="image-pic">    
                            <img className="img-responsive" src="img/lux-rentals-4.jpg" style={{width: 650, height: 350}} />                                
                        </div>
                    </div>
                </div>
            </div>
        </div>      
        <div className="awards container">
            <div className="row">
                <div className="front col-sm-3">
                    <img className="img-responsive" src="img/award-2.jpg" />
                </div>
                <div className="middle col-sm-3">
                    <img className="img-responsive" src="img/award-3.jpg" />
                </div>
                <div className="side col-sm-3">
                    <img className="img-responsive" src="img/award-1.jpg" />
                </div>
            </div>
        </div>
        </>
    )
}
export default AboutUs;