import React from 'react';
import './css/common.css';
import Header from './Header';
import Cart from './Cart';
import SideMenu from './SideMenu';
// import Footer from './Footer';

import firebase from './firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
    };
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection('products').onSnapshot(snapshot => {
      const products = snapshot.docs.map(doc => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      this.setState({ products });
    });
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
    const data = new FormData(e.target);

    let { products } = this.state;
    let newEmojiDatas = { id: products[products.length - 1].id + 1 };
    for (let pair of data.entries()) {
      if (Number.isInteger(1 * pair[1])) {
        pair[1] = 1 * pair[1];
      }
      newEmojiDatas[pair[0]] = pair[1];
    }

    products.push(newEmojiDatas);
    this.setState({ products });

    // TODO: Auto Scroll To End

    e.target.reset();
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
        <SideMenu
          totalPrice={this.getTotalPrice()}
          addEmoji={this.addEmoji}
          AppThis={this}
        />
      </div>
    );
  }
}

export default App;
