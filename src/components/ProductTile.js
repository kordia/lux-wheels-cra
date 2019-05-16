import React from "react"

function ProductTile(props){
    return(
        <div className="pic-1 col-sm-3">
            <div className="image-placeholder">
                <img src={`/img/${props.img}`} className="img-responsive" alt="" />
            </div>
            <div className="set-1 col-sm-10">
                <a href={`/product/${props.id}`}>{props.name}</a>
            </div>
            <div className="set-2 col-sm-2">
                <p>${props.price}.00</p>
            </div>
        </div>
    )
}
export default ProductTile