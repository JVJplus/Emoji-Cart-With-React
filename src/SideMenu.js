/* eslint-disable jsx-a11y/accessible-emoji */
import React from 'react';
import './css/common.css';
import './css/sidemenu.css';
import AddEmoji from './AddEmoji';

class SideMenu extends React.Component {
  render() {
    let totalPriceComponent = (
      <h1 className="total-price">Total: 💲 {this.props.totalPrice}</h1>
    );

    return (
      <>
        <div className={'side-menu-container'}>
          <AddEmoji
            addEmoji={this.props.addEmoji}
            AppThis={this.props.AppThis}
          />
          {window.innerWidth > 768 ? totalPriceComponent : null}
        </div>
        {window.innerWidth <= 768 ? totalPriceComponent : null}
      </>
    );
  }
}
export default SideMenu;
