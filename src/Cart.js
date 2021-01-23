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

    return (
      <div className={'cart-container'}>
        {this.props.isLoading ? loadingComponent : null}
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
