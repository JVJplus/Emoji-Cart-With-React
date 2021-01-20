import React from 'react';
import './css/common.css';
import './css/footer.css';

class Footer extends React.Component {
  render() {
    return (
      <div className={'footer centre-content-vertically'}>
        <h1>👆 Total: {this.props.totalPrice}</h1>
      </div>
    );
  }
}
export default Footer;
