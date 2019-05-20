import firebase from '~/plugins/firebase'

export default {
  onAuthStateChanged() {
    return new Promise((resolve, reject) => {
      firebase.auth().onAuthStateChanged(user => {
        resolve(user || false)
      })
    })
  },
  onAuthByProvider(provider, success, failed) {
    return new Promise(resolve => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => success(result))
        .catch(error => failed(error))
    })
  },
  onAuthGoogleLogin() {
    const provider = new firebase.auth.GoogleAuthProvider()
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => resolve(result))
        .catch(error => console.log(error))
    })
  },
  onAuthFaceBookLogin() {
    const provider = new firebase.auth.FacebookAuthProvider()
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => resolve(result))
        .catch(error => console.log(error))
    })
  },
  onAuthTwitterLogin() {
    const provider = new firebase.auth.TwitterAuthProvider()
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => resolve(result))
        .catch(error => console.log(error))
    })
  },
  onAuthGitHubLogin() {
    const provider = new firebase.auth.GithubAuthProvider()
    return new Promise((resolve, reject) => {
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => resolve(result))
        .catch(error => console.log(error))
    })
  }
}
