<template lang="pug">
  .container
    .japanese-font 〇〇さん、プロテインカウンターへようこそ
    .japanese-font さっそく下のボタンを押してプロテインの記録をしてみましょう
    img.drink_button(src="../static/drink_logo.png")
</template>

<script>
export default {}
</script>

<style lang="sass" scoped>
  .container
    margin-top: 20%
    align-items: center
    justify-content: center
    text-align: center
    display: block

  .drink_button
    display: inline-block
    height: 300px
    width: 300px
    cursor: pointer
    background: url("../static/drink_logo.png")
    background-size: cover
</style>
