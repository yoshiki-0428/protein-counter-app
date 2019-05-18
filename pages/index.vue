<template lang="pug">
  section.container
    div
      logo
      .button-list
        el-button.el-button--medium.margin-all(@click='loginByGoogle()')
          | Google Login
          font-awesome-icon.margin-left(:icon="['fab', 'google']" )
        el-button.el-button--medium.margin-all
          | GitHub Login
          font-awesome-icon.margin-left(:icon="['fab', 'github']")
        el-button.el-button--medium.margin-all
          | Twitter Login
          font-awesome-icon.margin-left(:icon="['fab', 'twitter']")
        el-button.el-button--medium.margin-all(@click='loginByFacebook(2)')
          | Facebook Login
          font-awesome-icon.margin-left(:icon="['fab', 'facebook']")
</template>

<script>
import Logo from '~/components/Logo.vue'
import auth from '~/plugins/auth'

export default {
  components: {
    Logo
  },
  data: () => {
    return {
      visible: false
    }
  },
  beforeCreate() {
    auth.onAuthStateChanged().then(value => {
      console.log(value)
    })
  },
  methods: {
    loginByGoogle: () => {
      auth.onAuthGoogleLogin()
    },
    loginByFacebook: () => {
      auth.onAuthFaceBookLogin()
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

.button-list {
  margin-top: 10px;
  display: inline-grid;
}

.margin-all {
  margin: 5px;
}

.margin-left {
  margin-left: 5px;
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
