import React from 'react';
import './css/common.css';
import './css/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className={'header centre-content-vertically noselect'}>
        <h1 className="flip-image">🛒 </h1>
        <h1> &nbsp;Emoji Cart Items</h1>
        <img
          className={'cart-img noselect'}
          src="https://www.flaticon.com/svg/vstatic/svg/833/833314.svg?token=exp=1611151496~hmac=8c47369272e24707cdb148961bea19e4"
          alt="cart icon"
        ></img>
        <p className={'cart-count'}>{this.props.totalQnty}</p>
      </div>
    );
  }
}

export default Header;
