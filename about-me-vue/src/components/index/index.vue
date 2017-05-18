<template>
  <div class="column page1 on">
    <img class="bg1" :src="img" height="1080" width="1920"></img>
    <div class="mouse-tips"></div>
    <div class="bg-black">
      <div class="title1">
        <h2>Walter</h2>
        <p>读书是为了心平气和的跟傻逼说话，健身是为了傻逼心平气和地跟我说话</p>
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
.column {
  overflow: hidden;
  position: relative;
  @include wh;
}

.page1 {
  text-align: center;
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
