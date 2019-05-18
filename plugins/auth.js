import firebase from '~/plugins/firebase'

class auth {
  static onAuthStateChanged() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user || false)
      })
    })
  }

  static onAuthGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => resolve(user))
        .catch(error => console.log(error))
    })
  }

  static onAuthFaceBookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(() => resolve(user))
        .catch(error => console.log(error))
    })
  }
}

export default auth
