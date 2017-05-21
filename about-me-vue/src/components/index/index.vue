<template>
  <div class="page1 on">
    <img class="bg1" :src="img"></img>
    <div class="mouse-tips"></div>
    <div class="bg-black">
      <div class="title1" >
        <h2 class="name">{{head.nickname}}</h2>
        <p>{{head.saying}}</p>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    head: {
      type: Object
    }
  },
  data() {
    return {
      img: require('./head.png')
    };
  },
  methods: {
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
