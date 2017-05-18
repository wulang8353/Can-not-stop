<template>
  <div class="page1 on">
    <img class="bg1" :src="img"></img>
    <div class="mouse-tips"></div>
    <div class="bg-black">
      <div class="title1">
        <h2>Walter</h2>
        <p><span>读书</span>是为了心平气和地跟傻逼说话，<span>健身</span>是为了傻逼心平气和地跟我说话</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      img: require('./head.png')
    };
  }
};
</script>
<style lang="scss" scoped>
@import '../../common/style/mixin.scss';
.page1 {
  text-align: center;
  overflow: hidden;
  position: relative;
  @include wh;
  transition: all 0.5s ease;
  .bg1 {
    display: block;
    @include wh;
  }
  .bg-black {
    position: absolute;
    left: 0;
    top: 0;
    @include wh;
    background: rgba(0, 0, 0, .3)
  }
  .title1 {
    font-size: 30px;
    position: absolute;
    @include wh(100%, 150px);
    top: 250px;
    left: 0;
    color: #fff;
    > h2 {
      font-size: 40px;
    }
  }
}
</style>
