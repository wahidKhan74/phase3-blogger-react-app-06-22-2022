import React, { Component } from 'react'
import { ProductDetails } from './ProductDetails';
import ProductForm from './ProductForm';

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
            products: [
                {
                  id: 1,
                  title: 'iPhone 9',
                  body: 'An apple mobile which is nothing like apple',
                  price: 549,
                  brand: "Apple",
                  rating: 4.69,
                  category: 'Electronics'
                },
                {
                    id: 2,
                    title: 'iPhone 11',
                    body: 'An apple mobile which is nothing like apple',
                    price: 749,
                    brand: "Apple",
                    rating: 4.99,
                    category: 'Electronics'
                  },
                  {
                    id: 3,
                    title: 'iPhone 10',
                    body: 'An apple mobile which is nothing like apple',
                    price: 649,
                    brand: "Apple",
                    rating: 4.00,
                    category: 'Electronics'
                  }
              ]
        }
    }

  

    renderProducts() {
        return (
            <div className="col-sm-8">
            <h3>Products</h3>
                {
                    this.state.products.map((product)=> {
                        return (
                            <ProductDetails key={product.id} product={product} />
                        );
                    })
                }
            </div>
        )
    }
    renderProductForm() {
        return (
            <ProductForm />
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
