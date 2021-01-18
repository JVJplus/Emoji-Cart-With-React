import React from 'react';
import './css/common.css';
import './css/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className={'header centre-content-vertically'}>
        <h1>🛒 Cart Items</h1>
        <img
          className={'cart-img'}
          src="https://www.flaticon.com/svg/vstatic/svg/833/833314.svg?token=exp=1610994947~hmac=f4ba11657dd6c4cabad8a255eda93fbe"
          alt="cart icon"
        ></img>
        <p className={'cart-count'}>3</p>
      </div>
    );
  }
}

export default Header;
