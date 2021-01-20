import React from 'react';
import './css/common.css';
import Header from './Header';
import Cart from './Cart';
import SideMenu from './SideMenu';
// import Footer from './Footer';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          id: 1,
          img: '🥳',
          title: "Let's Party",
          price: 10,
          qty: 3,
        },
        {
          id: 2,
          img: '🥰',
          title: 'Loved',
          price: 100,
          qty: 5,
        },
        {
          id: 3,
          img: '🤣',
          title: 'Funny',
          price: 5,
          qty: 3,
        },
        {
          id: 4,
          img: '😇',
          title: 'Blessed',
          price: 50,
          qty: 2,
        },
        {
          id: 5,
          img: '🤭',
          title: 'Hehehe',
          price: 20,
          qty: 1,
        },
        {
          id: 6,
          img: '👨🏽‍🌾',
          title: 'Farmer',
          price: 10,
          qty: 2,
        },
      ],
    };
  }

  updateQty = (type, id) => {
    // products contains reference of state as products is ARRAY!!!
    let { products } = this.state;

    let indexToChange; // this.state.products.indexOf;
    products.forEach((ele, i) => {
      if (ele.id === id) {
        indexToChange = i;
      }
    });

    if (type === '+') {
      products[indexToChange].qty += 1;
    } else {
      if (products[indexToChange].qty > 0) products[indexToChange].qty -= 1;
    }
    this.setState(products);
  };

  removeProduct = id => {
    let { products } = this.state;

    let indexToRemove; // this.state.products.indexOf;
    products.forEach((ele, i) => {
      if (ele.id === id) {
        indexToRemove = i;
      }
    });

    products.splice(indexToRemove, 1);
    this.setState({ products });
  };

  getTotalQnty() {
    return this.state.products.reduce((total, e) => total + e.qty, 0);
  }

  getTotalPrice() {
    return this.state.products.reduce((total, e) => total + e.qty * e.price, 0);
  }

  addEmoji(e) {
    e.preventDefault();
    console.log('Submitted');
    console.log(e);
  }

  render() {
    return (
      <div className="App">
        <Header totalQnty={this.getTotalQnty()} />
        <Cart
          products={this.state.products}
          updateQty={this.updateQty}
          removeProduct={this.removeProduct}
        />
        {/* <Footer totalPrice={this.getTotalPrice()} /> */}
        <SideMenu totalPrice={this.getTotalPrice()} addEmoji={this.addEmoji} />
      </div>
    );
  }
}

export default App;
