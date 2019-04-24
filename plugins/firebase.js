import firebase from 'firebase'

if (!firebase.apps.length) {
  firebase.initializeApp({
    apiKey: 'AIzaSyA8R1eqtUtXxfiDXK9-TjCzNUIDVTxOIXo',
    authDomain: 'protein-counter-app.firebaseapp.com',
    databaseURL: 'https://protein-counter-app.firebaseio.com',
    projectId: 'protein-counter-app',
    storageBucket: 'protein-counter-app.appspot.com',
    messagingSenderId: '459945928592'
  })
}

export default firebase
