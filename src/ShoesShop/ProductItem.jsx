import React, { Component } from "react";

export default class ProductItem extends Component {
  render() {
    const { item,setStateModal } = this.props;
    return (
      <div className="card">
        <img src={item.image} alt="..." />
        <div className="card-body">
          <h4 className="fw-bold">{item.name}</h4>
          <p className="fs-5">${item.price}</p>
          <button
            type="button"
            className="btn btn-dark"
            data-bs-toggle="modal"
            data-bs-target="#staticBackdrop"
            onClick={ () => setStateModal(item)}
          >
            View Product Details
          </button>
        </div>
      </div>
    );
  }
}
