import React, { Component } from 'react'
import ProductItem from './ProductItem'

export default class ProductList extends Component {
  render() {
    return (
      <div>
       <h3 className='text-center'> Sneakers World</h3>
        <div className='row'>
          {this.props.productsData.map((prod)=>{
              return <div className='col-2' key={prod.id}>
              <ProductItem prod={prod} />
          </div>
          })}
        
        </div>
      </div>
    )
  }
}
