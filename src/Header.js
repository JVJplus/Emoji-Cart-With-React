import React from 'react';
import './css/header.css';

class Header extends React.Component {
  render() {
    return (
      <div className={'header'}>
        <h1>Cart Items:</h1>
        <img
          src="https://www.flaticon.com/svg/vstatic/svg/711/711192.svg?token=exp=1610505358~hmac=28f70230a2d89e27b0becb688247649e"
          alt="cart icon"
        ></img>
        <p>3</p>
      </div>
    );
  }
}

export default Header;
