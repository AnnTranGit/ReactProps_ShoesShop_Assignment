import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    const { productsData, setStateModal } = this.props;

    return (
      <div>
       <h2 className='text-center fw-bold mb-5'> Sneakers World</h2>
        <div className='row'>
          {this.props.productsData.map((product)=>{
              return <div className='col-4 mb-5' key={product.id}>
              <ProductItem key={product.id} item={product} setStateModal={setStateModal}  />
          </div>
          })}
        
        </div>
      </div>
    )
  }
}
