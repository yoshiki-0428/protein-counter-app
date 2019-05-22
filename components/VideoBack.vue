<template lang="pug">
  video.bg-video(
    muted
    autoplay
    playsinline
    loop
    :poster="img"
  )
    source(:src="mp4")
    source(:src="web")
</template>

<script>
import videoBackImg from '../static/title_back.jpg'
import videoBackMp4 from '../static/title_back.mp4'
import videoBackWeb from '../static/title_back.webm'

export default {
  name: 'VideoBack',
  data: () => {
    return {
      img: videoBackImg,
      mp4: videoBackMp4,
      web: videoBackWeb
    }
  }
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
