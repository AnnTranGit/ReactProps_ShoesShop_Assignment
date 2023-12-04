import React, { Component } from 'react'

export default class ProductItem extends Component {
  render() {
    const {prod} = this.props
    return (
        <div className='card'>
        <img src={prod.image} alt="..."/>
        <div className='card-body'>
          <h3>{prod.name}</h3>
          <p>$ {prod.price}</p>
          <button className='btn btn-dark' onClick={()=>{
            this.props.themGioHang(prod)
          }}>
            Thêm vào giỏ <i className='fa fa-cart-plus'> </i>
          </button>
        </div>
      </div>
    )
  }
}
