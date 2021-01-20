import React from 'react';
import './css/common.css';
import './css/cart.css';
import CartItem from './CartItem';

class Cart extends React.Component {
  render() {
    return (
      <div className={'cart-container'}>
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
