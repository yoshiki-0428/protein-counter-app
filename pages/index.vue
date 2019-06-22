<template lang="pug">
  section.container
    .login-content
      video-back
      logo
      .button-list
        el-button.el-button--medium.margin-all(@click='auth.onAuthByProvider(new firebase.auth.GoogleAuthProvider(), success, failed)' round)
          .english-font
            | Google Login
            font-awesome-icon.margin-left(:icon="['fab', 'google']" )
        el-button.el-button--medium.margin-all(@click='auth.onAuthByProvider(new firebase.auth.TwitterAuthProvider(), success, failed)' round)
          .english-font
            | Twitter Login
            font-awesome-icon.margin-left(round :icon="['fab', 'twitter']")
        el-button.el-button--medium.margin-all(@click='auth.onAuthByProvider(new firebase.auth.FacebookAuthProvider(), success, failed)' round)
          .english-font
            | Facebook Login
            font-awesome-icon.margin-left(:icon="['fab', 'facebook']")
        el-button.el-button--medium.margin-all(@click='auth.onAuthByProvider(new firebase.auth.GithubAuthProvider(), success, failed)' round)
          .english-font
            | GitHub Login
            font-awesome-icon.margin-left(:icon="['fab', 'github']")
</template>

<script>
import Logo from '~/components/Logo.vue'
import VideoBack from '~/components/VideoBack.vue'
import auth from '~/plugins/auth'
import firebase from '~/plugins/firebase'
import { mapActions, mapState, mapGetters } from 'vuex'

export default {
  components: {
    Logo,
    VideoBack
  },
  data: () => {
    return {
      auth: auth,
      firebase: firebase
    }
  },
  computed: {
    ...mapState(['user']),
    ...mapGetters(['isAuthenticated'])
  },
  mounted() {
    auth.onAuthStateChanged().then(user => {
      this.setUser(user)
    })
  },
  methods: {
    ...mapActions(['setUser']),
    success(result) {
      console.log(result)
      this.$router.push('top')
      this.$notify({
        title: 'Success',
        message: 'ログインに成功しました',
        type: 'success',
        position: 'bottom'
      })
    },
    failed(error) {
      console.log(error)
      this.$notify({
        title: 'Error',
        message: error.message,
        type: 'error',
        position: 'bottom'
      })
    }
  }
}
</script>

<style lang="sass" scoped>
.login-content
  display: grid

.el-button:hover
  transform: scale(2, 2)
  transition: 1s

.button-list
  margin-top: 10px
  display: inline-grid

.margin-all
  margin: 8px

.margin-left
  margin-left: 5px
</style>
