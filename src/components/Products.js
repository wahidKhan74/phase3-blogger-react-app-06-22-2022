import React, { Component } from 'react'
import { ProductDetails } from './ProductDetails';
import ProductForm from './ProductForm';
import { getProducts, addProduct, deleteProduct } from '../services/ProductService';

export default class Products extends Component {

    constructor() {
        super();
        this.state = {
            post: {
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
            products: [  ]
        }
    }

    //component lifecycle methods
    componentDidMount() { 
        getProducts().then((products)=>{
            this.setState({ products : products });
        }).catch((error)=>{
            console.error("Get all products is failed");
        });
    }
      // add post 
    handleNewProduct =(product)=>{
        addProduct(product).then((newProduct)=>{
            this.setState((prevSate)=> {
                return { products : [...prevSate.products,newProduct] }
            });
        }).catch((error)=>{
            console.error("Add products is failed", error);
        });
        
    }

    handleDelete = (id) =>{
        deleteProduct(id).then(()=>{
            this.setState((prevSate)=>{
                const filteredProducts = prevSate.products.filter((product)=>{
                    return (product.id !== id);
                });
                return {products: filteredProducts};
            });
        }).catch((error)=>{
            console.error("Delete products is failed", error);
        });       
    }

    renderProducts() {
        return (
            <div className="col-sm-8">
            <h3>Products</h3>
                {
                    this.state.products.map((product)=> {
                        return (
                            <ProductDetails key={product.id} product={product} onDelete={this.handleDelete} />
                        );
                    })
                }
            </div>
        )
    }
    renderProductForm() {
        return (
            <ProductForm categories={this.state.categories} onNewProduct={this.handleNewProduct} />
        )
    }
    render() {
        return (
            <div className="row">
                 {this.renderProductForm()}
                 {this.renderProducts()}
            </div>
        )
    }
}
