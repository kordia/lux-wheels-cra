import React, { Component } from "react"

class ProductSingle extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            product: {
                id: " ",
                name: " ",
                fuel_type: " ",
                miles_to_gallon: " ",
                speed: " ",
                img: " ",
                price: " "
            }
        }
    }
    componentDidMount() {
        fetch("http://localhost:8000/api/product/")
            .then(response => response.json())
            .then(responseData => {
                let product = responseData.find(item => {
                    return item.id === Number(this.props.match.params.id) ? item : null
                });
                this.setState({
                    loading: false,
                    product
                })
            })
    }

    render() {
        const product = this.state.product
        return ( 
            <>
            <div className="main-nav container">
                <div className="row">
                    <div className="upper col-sm-12">
                        <img className="img-responsive" src="/img/skinner-1.jpg" />
                    </div>
                </div>
            </div>
            <div className="product-1 container">
                <div className="row">
                    <div className="pro-1 col-sm-8">
                        <img className="img-responsive" src={`/img/${product.img}`} />
                    </div>
                    <div className="list col-sm-4">
                        <h4>NAME OF CAR:</h4>
                        <select>
                        <option />
                        <option>RANGE ROVER</option>
                        <option>TESLA</option>
                        <option>BENTLEY CONTINENTAL GT</option>
                        <option>FERRARI PORTOFINO</option>
                        <option>MERCEDES BENZ</option>
                        <option>LINCOLN NAVIGATOR</option>
                        <option>ROLLS-ROYCE GHOST</option>
                        <option>2019 INFINITI Q50</option>
                        <option>2019 BMW X5</option>
                        </select>
                        <h4>START DATE:</h4> <input type="date" name="start" />
                        <h4>RETURN DATE:</h4> <input type="date" name="return" />
                    </div>
                </div>
            </div>   
            <div className="car-1 container">
                <div className="row">
                    <div className="title-2 col-sm-4">
                        <h3>{product.name}</h3>
                    </div>
                    <div className="price-1 col-sm-3">
                        <h3>${product.price}.00</h3>
                    </div>
                </div>
            </div> 
            <div className="cash container">
                <div className="row">
                    <div className="pay col-sm-12">
                        <legend>
                        <h4>PAYMENT INFORMATION</h4>
                        </legend>
                    </div>
                </div>
                <div className="method col-sm-3">
                    <label>PAYMENT METHOD</label>
                    <span className="select">
                        <select>
                            <option value="VISA">VISA</option>
                            <option value="MASTERCARD">MASTER CARD</option>
                            <option value="AMERICAN EXPRESS">AMERICA EXPRESS</option>
                        </select>
                    </span>
                </div>
                <div className="method col-sm-3">
                    <label>CARDHOLDER'S NAME</label>
                    <input type="text" name="name" />
                </div>
                <div className="method col-sm-3">
                    <label>CARD NUMBER</label>
                    <input type="text" name="CCN" />
                </div>
                <div className="method col-sm-2">
                    <span className="expiry">
                        <label>EXPIRATION DATE</label>
                        <span className="select">
                            <select className="small">
                                <option value="JANUARY">JANUARY</option>
                                <option value="FEBRUARY">FEBRUARY</option>
                                <option value="MARCH">MARCH</option>
                                <option value="APRIL">APRIL</option>
                                <option value="MAY">MAY</option>
                                <option value="JUNE">JUNE</option>
                                <option value="JULY">JULY</option>
                                <option value="AUGUST">AUGUST</option>
                                <option value="SEPTEMBER">SEPTEMBER</option>
                                <option value="OCTOBER">OCTOBER</option>
                                <option value="NOVEMBER">NOVEMBER</option>
                                <option value="DECEMBER">DECEMBER</option>
                            </select>
                        </span>
                    </span>
                </div>
                <div className="method col-sm-2">
                    <span className="select">
                        <select className="small">
                            <option value={2020}>2020</option>
                            <option value={2021}>2021</option>
                            <option value={2022}>2022</option>
                            <option value={2023}>2023</option>
                        </select>
                    </span>
                </div>
            </div>
            <div className="resent container">
                <div className="row"> alt = {product.name} alt = {product.name}
                    <div className="last col-sm-2">
                        <span className="sec">
                        <label>SECURITY CODE</label>
                        <input type="text" name="sec" maxLength={4} />
                        </span>
                    </div>
                    <div className="send col-sm-2">
                        <label>SUBMIT YOUR ORDER</label>
                        <button>SUBMIT</button>
                    </div>
                </div>
            </div>
            </>
            )
        }
}

export default ProductSingle