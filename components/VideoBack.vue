<template lang="pug">
  video.bg-video(
    muted
    autoplay
    loop
  )
    source(src="@/assets/title_back.mp4")
    source(src="@/assets/title_back.jpg")
</template>

<script>
export default {
  name: 'VideoBack'
}
</script>

<style scoped lang="sass">
video
  filter: blur(10px) grayscale(70%)

.bg-video
  position: fixed
  right: 0
  bottom: 0
  min-width: 100%
  min-height: 100%
  width: auto
  height: auto
  z-index: -2
  background-size: cover
</style>
