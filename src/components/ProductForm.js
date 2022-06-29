import React, { Component } from 'react'

export default class ProductForm extends Component {

    constructor() {
        super();
        this.handleFormSubmit = this.handleFormSubmit.bind(this);
        this.state = {
            product: {
                id: 0,
                title: '',
                body: '',
                price: '',
                category: ''
            }
        }
    }

    // handle form submit
    handleFormSubmit(event) {
        event.preventDefault();
        console.log("This : ", this);
        this.props.onNewProduct(this.state.product);
         //after submit form make form empty fields
         this.setState({ product : {id: 0,title: '', body: '', price: '',category: ''}})
    }

    handleTitleChange = (e) => {
        const product = this.state.product;
        this.setState({ product: { ...product, title: e.target.value } });
    }

    handleBodyChange = (e) => {
        const product = this.state.product;
        this.setState({ product: { ...product, body: e.target.value } });
    }


    handlePriceChange = (e) => {
        const product = this.state.product;
        this.setState({ product: { ...product, price: e.target.value } });
    }

    handleCategoryChange = (e) => {
        const product = this.state.product;
        this.setState({ product: { ...product, category: e.target.value } });
    }

    renderCategories() {
        return this.props.categories.map((category)=>{
            return <option key={category.code} value={category.name}> {category.name}</option>
        });
    }

    render() {
        return (
            <div className="col-sm-4">
            <h3>Create Product Form</h3>
            <div className="card bg-light">
            <div className="card-body">
                <form onSubmit={this.handleFormSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title</label>
                    <input type="text" className="form-control" id="title" autoComplete="off" name="Enter Product title"
                    placeholder="Enter title" value={this.state.product.title}  onChange={this.handleTitleChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="body">Body</label>
                    <textarea className="form-control" id="body" name="body"autoComplete="off"  placeholder="Enter decription"
                    rows="3" cols="30" value={this.state.product.body} onChange={this.handleBodyChange}></textarea>
                </div>
                <div className="form-group">
                    <label htmlFor="price">Price</label>
                    <input type="number" className="form-control" id="price" autoComplete="off" name="price" placeholder="Enter price" 
                    value={this.state.product.price}  onChange={this.handlePriceChange} />
                </div>
                <div className="form-group">
                    <label htmlFor="category">Category</label>
                    <select required className="form-control" id="category" name="category" 
                    value={this.state.product.category} onChange={this.handleCategoryChange}>
                    <option value=""></option>
                    {this.renderCategories()}
                    </select>
                </div><br />
                <button type="submit" className="btn btn-info">Save</button>
                </form>
            </div>
            </div>
        </div>
        )
    }
}
