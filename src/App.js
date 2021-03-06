import React from 'react';
import './css/common.css';
import Header from './Header';
import Cart from './Cart';
import SideMenu from './SideMenu';
import firebase from './firebase';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [],
      isLoading: true,
    };
    this.collectionID = 'products';
    // this.collectionID = 'products-user-testing';
  }

  componentDidMount() {
    const db = firebase.firestore();
    db.collection(this.collectionID).onSnapshot(snapshot => {
      const products = snapshot.docs.map(doc => {
        const data = doc.data();
        data['id'] = doc.id;
        return data;
      });
      this.setState({ products, isLoading: false });
    });
  }

  handleDOMActionBtnsAnimation(qty, indexToChange) {
    // Change animation action
    let minusDOM = document.querySelectorAll('.cart-item-minus-action');
    if (qty === 0) {
      minusDOM[indexToChange].classList.remove('action-icons');
      minusDOM[indexToChange].classList.add('cantDoCursor');
    } else {
      minusDOM[indexToChange].classList.add('action-icons');
      minusDOM[indexToChange].classList.remove('cantDoCursor');
    }
  }

  handleEmojiAnimation(type, indexToChange, qty) {
    let DOMs = document.querySelectorAll('.cart-img h1');
    if (type === '+') {
      DOMs[indexToChange].classList.add('cart-qty-inc');
      setTimeout(
        () => DOMs[indexToChange].classList.remove('cart-qty-inc'),
        200
      );
    } else {
      if (qty === 0) return;

      DOMs[indexToChange].classList.add('cart-qty-dec');
      setTimeout(
        () => DOMs[indexToChange].classList.remove('cart-qty-dec'),
        200
      );
    }
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

    this.handleEmojiAnimation(type, indexToChange, products[indexToChange].qty);

    if (type === '+') {
      products[indexToChange].qty += 1;
    } else {
      if (products[indexToChange].qty > 0) {
        products[indexToChange].qty -= 1;
      }
    }

    this.handleDOMActionBtnsAnimation(
      products[indexToChange].qty,
      indexToChange
    );

    // this.setState(products);
    let newQty = products[indexToChange].qty;

    const firestoreID = products[indexToChange].id;
    const db = firebase.firestore();
    db.collection(this.collectionID)
      .doc(firestoreID)
      .update({ qty: newQty })
      .then(function () {
        console.log('Document successfully updated!');
      })
      .catch(function (error) {
        // The document probably doesn't exist.
        console.error('Error updating document: ', error);
      });
  };

  removeProduct = id => {
    let { products } = this.state;

    let indexToRemove; // this.state.products.indexOf;
    products.forEach((ele, i) => {
      if (ele.id === id) {
        indexToRemove = i;
      }
    });

    /* products.splice(indexToRemove, 1);
    this.setState({ products }); */
    const firestoreID = products[indexToRemove].id;
    const db = firebase.firestore();
    db.collection(this.collectionID)
      .doc(firestoreID)
      .delete()
      .then(console.log('Emoji removed successfully.'))
      .catch(err => console.log('Error occured: ', err));
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

    // let { products } = this.state;
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
    /* db.collection(this.collectionID)
      .add(newEmojiDatas)
      .catch(err => console.log('Error occured: ', err)); */

    //Cloud Firestore auto-generated IDs do not provide any automatic ordering. If you want to be able to order your documents by creation date, you should store a timestamp as a field in the documents.

    db.collection(this.collectionID)
      .doc('' + Date.now())
      .set(newEmojiDatas)
      .catch(err => console.log('Error occured: ', err));

    e.target.reset();
  }

  render() {
    let cartComponent = (
      <Cart
        isLoading={this.state.isLoading}
        products={this.state.products}
        updateQty={this.updateQty}
        removeProduct={this.removeProduct}
      />
    );

    let sidebarComponent = (
      <SideMenu
        totalPrice={this.getTotalPrice()}
        addEmoji={this.addEmoji}
        AppThis={this}
      />
    );

    let mobileComponents = (
      <>
        {sidebarComponent} {cartComponent}
      </>
    );
    let desktopComponents = (
      <>
        {cartComponent} {sidebarComponent}
      </>
    );

    return (
      <div className="App">
        <Header totalQnty={this.getTotalQnty()} />
        {window.innerWidth <= 768 ? mobileComponents : desktopComponents}
      </div>
    );
  }
}

export default App;
