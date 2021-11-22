import React from 'react';
import './css/common.css';
import './css/cartItem.css';

class CartItem extends React.Component {
  render() {
    return (
      // <React.Fragment>
      <>
        <div className="cart-item-container">
          <div className="cart-img centre-content-both ">
            {/* <img src="" alt=""></img> */}
            {/* <h1 className="flip-image">{this.props.product.img}</h1> */}
            <h1>{this.props.product.img}</h1>
          </div>

          <div className="cart-details-cntr">
            <h4>{this.props.product.title}</h4>
            <p>Price: {this.props.product.price}</p>
            <p>Quantity: {this.props.product.qty}</p>

            <div className="cart-btns-cntr centre-content-vertically noselect">
              <img
                alt="add"
                src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                className="action-icons noselect"
                onClick={() => this.props.updateQty('+', this.props.product.id)}
              />

              <img
                alt="minus"
                src="https://cdn-icons-png.flaticon.com/128/992/992651.png"
                className="action-icons cart-item-minus-action noselect"
                onClick={() => this.props.updateQty('-', this.props.product.id)}
              />

              <img
                alt="delete"
                src="https://cdn-icons.flaticon.com/png/512/484/premium/484662.png"
                className="action-icons noselect"
                onClick={() => this.props.removeProduct(this.props.product.id)}
              />
            </div>
          </div>
        </div>
        <div className="cart-item-dividor"></div>
      </>
    );
  }
}

export default CartItem;
