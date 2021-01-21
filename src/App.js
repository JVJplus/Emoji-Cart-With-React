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
    let newEmojiDatas = {};
    for (let pair of data.entries()) {
      if (Number.isInteger(1 * pair[1])) {
        pair[1] = 1 * pair[1];
      }
      newEmojiDatas[pair[0]] = pair[1];
    }

    // NOTE: no need to do this, this will auto done by realtime data updata listner.
    // products.push(newEmojiDatas);
    // this.setState({ products });

    const db = firebase.firestore();
    /* db.collection('products')
      .add(newEmojiDatas)
      .catch(err => console.log('Error occured: ', err)); */

    //Cloud Firestore auto-generated IDs do not provide any automatic ordering. If you want to be able to order your documents by creation date, you should store a timestamp as a field in the documents.

    db.collection('products')
      .doc('' + Date.now())
      .set(newEmojiDatas)
      .catch(err => console.log('Error occured: ', err));

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
