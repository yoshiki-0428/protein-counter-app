<template lang="pug">
  div
    slot(v-if="loaded")
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  data: () => {
    return {
      authInfo: Object,
      loaded: false
    }
  },
  computed: {
    ...mapGetters(['isAuthenticated'])
  },
  async mounted() {
    if (this.isAuthenticated) {
      this.loaded = true
    } else {
      this.$router.push('/')
    }
  }
}
</script>

<style lang="sass" scoped>
</style>
