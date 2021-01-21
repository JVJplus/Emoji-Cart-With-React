import firebase from 'firebase/app';
import 'firebase/firestore';

const firebaseConfig = {
  apiKey: 'AIzaSyBRAkphPuvODztms3IbK_S-_BR3_LVLgyE',
  authDomain: 'emoji-cart.firebaseapp.com',
  projectId: 'emoji-cart',
  storageBucket: 'emoji-cart.appspot.com',
  messagingSenderId: '284812849950',
  appId: '1:284812849950:web:81787c79c4d7185d524f0f',
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;
