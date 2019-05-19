<template lang="pug">
  section.container
    .login-content
      logo
      .button-list
        el-button.el-button--medium.margin-all(@click='loginByGoogle()' round )
          .english-font
            | Google Login
            font-awesome-icon.margin-left(:icon="['fab', 'google']" )
        el-button.el-button--medium.margin-all(@click='loginByTwitter()' round)
          .english-font
            | Twitter Login
            font-awesome-icon.margin-left(round :icon="['fab', 'twitter']")
        el-button.el-button--medium.margin-all(@click='loginByFacebook()' round)
          .english-font
            | Facebook Login
            font-awesome-icon.margin-left(:icon="['fab', 'facebook']")
        el-button.el-button--medium.margin-all(@click='loginByGitHub()' round)
          .english-font
            | GitHub Login
            font-awesome-icon.margin-left(:icon="['fab', 'github']")
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
    },
    loginByTwitter: () => {
      auth.onAuthTwitterLogin()
    },
    loginByGitHub: () => {
      auth.onAuthGitHubLogin()
    }
  }
}
</script>

<style>
.login-content {
  display: grid;
}

.app-name {
}

.container {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.english-font {
  font-size: 20px;
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
