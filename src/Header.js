/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './css/common.css';
import './css/header.css';
import cartIcon from './assets/shopping-cart.svg';

class Header extends React.Component {
  render() {
    return (
      <div className={'header centre-content-vertically noselect'}>
        <h1 className="flip-image header-cart-emoji">🛒 </h1>
        <h1> &nbsp;&nbsp;&nbsp;Emoji Cart Items</h1>
        <img
          className={'cart-img noselect'}
          src={cartIcon}
          alt="cart icon"
        ></img>
        <p className={'cart-count'}>{this.props.totalQnty}</p>
      </div>
    );
  }
}

export default Header;
