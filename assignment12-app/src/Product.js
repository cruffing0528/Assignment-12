import React, { Component } from 'react'
import Filters from './Filters'
import ProductTable from './ProductTable'
import ProductForm from './ProductForm'

let PRODUCTS = {
   '1': {id: 1, category: 'Skincare', price: '$12.99', name: 'Facial Cleanser'},
   '2': {id: 2, category: 'Skincare', price: '$8', name: 'Eye Cream'},
   '3': {id: 3, category: 'Skincare', price: '$20', name: 'Retinol Serum'},
   '4': {id: 4, category: 'Makeup', price: '$10', name: 'Lip Gloss'},
   '5': {id: 5, category: 'Makeup', price: '$35', name: 'Foundation'},
   '6': {id: 6, category: 'Makeup', price: '$8.99', name: 'Mascara'},
};

class Product extends Component {
        constructor(props) {
        super(props)
        this.state = {
            filterText: '',
            products: PRODUCTS
        }
        this.handleFilter = this.handleFilter.bind(this)
        this.handleSave = this.handleSave.bind(this)
        this.handleDestroy = this.handleDestroy.bind(this)
    }

    handleFilter(filterInput) {
        this.setState(filterInput)
    }

    handleSave(product) {
        if (!product.id) {
            product.id = new Date().getTime()
        }
        this.setState((prevState) => {
            let products = prevState.products
            products[product.id] = product
            return { products }
        })
    }

    handleDestroy(productId) {
        this.setState((prevState) => {
            let products = prevState.products
            delete products[productId]
            return { products }
        });
    }
    
    render() {
        return (
            <div>
                <h1>My Inventory</h1>
                <Filters 
                    onFilter={this.handleFilter}></Filters>
                <ProductTable 
                    products={this.state.products}
                    filterText={this.state.filterText}
                    onDestroy={this.handleDestroy}></ProductTable>
                <ProductForm
                    onSave={this.handleSave}></ProductForm>
            </div>
        )
    }
}

export default Product