import React, { Component } from 'react'

export default class ProductForm extends Component {

    constructor() {
        super();
        this.state = {
            product: {
                id: 0,
                title: '',
                body: '',
                author: '',
                category: ''
            },
            categories: [
                { code: 'ELECT', name: 'Electronics' },
                { code: 'FASHION', name: 'Fashion' },
                { code: 'HAK', name: 'Home & Kitchen' },
                { code: 'BOOK', name: 'Books' }
            ],
        }
    }

    renderCategories() {
        return this.state.categories.map((category)=>{
            return <option key={category.code} value={category.code}> {category.name}</option>
        });
    }

    render() {
        return (
            <div className="col-sm-4">
            <h3>Create Product Form</h3>
            <div className="card bg-light">
            <div className="card-body">
                <form >
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" name="title"
                    placeholder="Enter title" value={this.state.product.title}  />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea className="form-control" id="body" name="body" placeholder="Enter body"
                    rows="3" cols="30" value={this.state.product.body}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="text" className="form-control" id="price" name="price" placeholder="Enter author" value={this.state.product.price}  />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select required className="form-control" id="category" name="category" value={this.state.product.category}>
                    <option value=""></option>
                    {this.renderCategories()}
                    </select>
                </div>
                <button type="submit" className="btn btn-primary">Save</button>
                </form>
            </div>
            </div>
        </div>
        )
    }
}
