import React from "react"

function Home() {
    return (
        <>
        <div className="boarder container">
            <div className="row">
                <div className="welcome col-sm-12">
                    <img className="img-responsive" src="img/skinner-5.jpg" />
                </div>
            </div>
        </div>
        <div className="section container">
            <div className="row">
                <div className="hero col-sm-12">
                    <img className="img-responsive" src="img/hero-2.jpg" />
                </div>
            </div>
        </div>
        <div className="letter container">
            <div className="row">
            <div className="news col-sm-12">
                <legend>
                <h2>News &amp; Events</h2>
                </legend>
            </div>
            <div className="event-1 col-sm-12">
                <h3>January 20, 2019</h3>
                <p>Lux-Rentals was named the best car rental company worldwide.</p>
            </div>
            <div className="event-2 col-sm-12">
                <h3>February 5, 2019</h3>
                <p>Lux-Rentals will be hosting an event with future entrepreneur students, in hopes of employment.</p>
            </div>
            <div className="event-3 col-sm-12">
                <h3>March 10, 2019</h3>
                <p>Lux-Rentals earns the Hire Industry Excellence Awards, for rental company of the year.</p>
            </div>
            <div className="event-4 col-sm-12">
                <h3>April 1, 2019</h3>
                <p>Lux-Rentals receives the most admired Rental Company awarded, at the Bloombird Choice Awards.</p>
            </div>
            </div>
        </div>
        </>
    )
}

export default Home;