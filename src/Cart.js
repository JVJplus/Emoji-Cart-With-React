/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './css/common.css';
import './css/cart.css';
import CartItem from './CartItem';
import loadingSVG from './assets/loading.svg';

class Cart extends React.Component {
  render() {
    let loadingComponent = (
      <div className="loading-icon">
        <img src={loadingSVG} alt="loading icon"></img>
      </div>
    );

    let emptyStateComponent = (
      <div className="empty-state">
        <h4>
          🛍️
          <br /> Cart is Empty.
          <br />
          Add some emojis!
        </h4>
      </div>
    );

    return (
      <div className={'cart-container'}>
        {this.props.isLoading ? loadingComponent : null}
        {this.props.isLoading === false && this.props.products.length === 0
          ? emptyStateComponent
          : null}
        {this.props.products.map(product => {
          return (
            <CartItem
              key={product.id}
              product={product}
              updateQty={this.props.updateQty}
              removeProduct={this.props.removeProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default Cart;
