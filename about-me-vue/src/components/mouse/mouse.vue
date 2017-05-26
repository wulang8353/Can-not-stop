<template>
  <div class="mouse down iconfont icon-down"></div>
</template>
<script>
</script>
<style lang="scss" scoped>
.mouse {
  z-index: 97;
  width: 50px;
  height: 50px;
  left: calc(50% - 25px);
  bottom: 20px;
  font-size: 50px;
  position: absolute;
  color: #fff;
  animation: doUpDown1 .5s ease-in-out infinite alternate both;
  @keyframes doUpDown1 {
    from {
      transform: translate(0, 0);
    }
    to {
      transform: translate(0, -80%);
    }
  }
  @keyframes doUpDown2 {
    from {
      transform: translate(0, 0) rotate(180deg);
    }
    to {
      transform: translate(0, -80%) rotate(180deg);
    }
  }
}
</style>
