<template>
  <section class="container">
    <div>
      <logo/>
      <!--<h3 class="subtitle">-->
      <!--このアプリはプロテインを継続するためのアプリです。<br>-->
      <!--簡単な操作で毎日プロテインを愛飲しましょう！-->
      <!--</h3>-->
      <div>
        <el-button
          class="el-button--medium"
          @click="loginByGoogle()">
          Google Login
          <font-awesome-icon :icon="['fab', 'google']"/>
        </el-button>
        <el-button class="el-button--medium">
          GitHub Login
          <font-awesome-icon :icon="['fab', 'github']"/>
        </el-button>
        <el-button class="el-button--medium">
          Twitter Login
          <font-awesome-icon :icon="['fab', 'twitter']"/>
        </el-button>
        <el-button class="el-button--medium">
          Facebook Login
          <font-awesome-icon :icon="['fab', 'facebook']"/>
        </el-button>
      </div>
    </div>
  </section>
</template>

<script>
import Logo from '~/components/Logo.vue'
import firebase from '~/plugins/firebase'

export default {
  components: {
    Logo
  },
  data: () => {
    return {
      visible: false
    }
  },
  methods: {
    loginByGoogle: () => {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase
        .auth()
        .signInWithPopup(provider)
        .then(result => {
          const user = result.user
          console.log(user)
        })
        .catch(error => {
          // Handle Errors here.
          var errorCode = error.code
          var errorMessage = error.message
          // The email of the user's account used.
          var email = error.email
          // The firebase.auth.AuthCredential type that was used.
          var credential = error.credential
          console.log(error)
        })
    }
  }
}
</script>

<style>
.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
}

.subtitle {
  font-weight: 300;
  font-size: 42px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
}
</style>
