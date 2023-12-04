import React, { Component } from "react";

export default class Modal extends Component {
  render() {
    const { content } = this.props;

    return (
      <div
        className="modal fade"
        id="staticBackdrop"
        data-bs-backdrop="static"
        data-bs-keyboard="false"
        tabIndex={-1}
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className="modal-dialog modal-dialog-centered modal-lg">
          <div className="modal-content">
            <div className="modal-header py-0">
            <div className="d-flex align-items-center">
                  <img src={content.image} alt="" width={150} height={150} />
                  <div className="ms-4">
                    <span className="fw-bold">{content.name}</span>
                    <p className="m-0">${content.price}</p>
                  </div>
                </div>
            </div>
            <div className="modal-body">
              <div key={content.id}>
                <p>Details: {content.description} {content.shortDescription}</p>
                <p>Quantity: {content.quantity}</p>
              </div>
            </div>
            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-secondary"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            
            </div>
          </div>
        </div>
      </div>
    );
  }
}
