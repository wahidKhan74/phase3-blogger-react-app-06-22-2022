import React from 'react'

export const ProductDetails = (props) => {
    
    return (
        <div className="card bg-light mb-3">
            <h5 className="card-header">{props.product.title}</h5>
            <div className="card-body">
            <p className="card-text">{props.product.body}</p>
            <p className="card-text">Price: {props.product.price}</p>
            <p className="card-text">Category: {props.product.category}</p>
            </div>
            <div className="card-footer">
                <button className="btn btn-sm btn-outline-danger"  
                onClick={ ()=> {props.onDelete(props.product.id); } }
                type="button">Delete</button>
            </div>
    </div>
    )
}
