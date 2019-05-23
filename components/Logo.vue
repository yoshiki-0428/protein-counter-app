<template lang="pug">
  .main_logo

</template>

<style lang="sass" scoped>
.main_logo
  display: inline-block
  height: 300px
  width: 300px
  background: url('../static/title_logo.png')
  background-size: cover

.main_logo
  animation: fadeIn 2s ease 0s 1 normal
  -webkit-animation: fadeIn 2s ease 0s 1 normal

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
