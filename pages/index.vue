<template>
  <section class="container">
    <div>
      <logo/>
      <h2 class="subtitle">
        このアプリはプロテインを継続するためのアプリです。<br>
        簡単な操作で毎日プロテインを愛飲しましょう！
      </h2>
      <el-button @click="loginByGoogle()">Google Login</el-button>
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
      firebase.auth().signInWithRedirect(provider)
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
