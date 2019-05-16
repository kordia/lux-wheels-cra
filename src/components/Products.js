import React, { Component } from "react"
import ProductTile from './ProductTile'

class Products extends Component {
    constructor() {
        super()
        this.state = {
            loading: true,
            products: []
        }
    }
    componentDidMount() {
        fetch("http://localhost:8000/api/product/")
            .then(response => response.json())
            .then(responseData => {
                this.setState({
                    loading: false,
                    products: responseData
                })
            })
    }

    render() {
        const products = this.state.products.map((product, idx) => <ProductTile key={idx} {...product}/>)
        return (
            <>
            <div className="topper container">
                <div className="row">
                    <div className="upper col-sm-12">
                        <img className="img-responsive" src="/img/skinner-1.jpg" style={{width: 950, height: 100}} />
                    </div>
                </div>
            </div>
            <div className="first-set">
                <div className="product container">
                    <div className="row">
                        {products}
                    </div>
                </div>
            </div>
        </>
        )
    }
}



export default Products
