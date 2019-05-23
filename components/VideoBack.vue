<template lang="pug">
  video.bg-video(
    muted
    autoplay
    playsinline
    loop
  )
    source(:src="mp4")
    source(:src="web")
</template>

<script>
import videoBackImg from '../static/title_back.jpg'
import videoBackMp4 from '../static/title_back.mp4'
import videoBackWeb from '../static/title_back.webm'

export default {
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

.bg-video
  animation: fadeIn 1s ease 0s 1 normal
  -webkit-animation: fadeIn 1s ease 0s 1 normal

@keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1

@-webkit-keyframes fadeIn
  0%
    opacity: 0
  100%
    opacity: 1
</style>
