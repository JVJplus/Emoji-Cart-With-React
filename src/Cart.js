import React from 'react';
import './css/common.css';
import CartItem from './CartItem';

class Cart extends React.Component {
  render() {
    return (
      <div className={'cart-container'}>
        <CartItem />
        <CartItem />
        <CartItem />
      </div>
    );
  }
}

export default Cart;
