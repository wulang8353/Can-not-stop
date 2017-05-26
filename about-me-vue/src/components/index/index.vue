<template>
  <div class="page1 on">
    <img class="bg1" :src="img"></img>
    <div class="bg-black">
      <div class="title1">
        <h2 class="name">{{head.nickname}}</h2>
        <div>
          <p class="saying1 animated rotateInDownLeft">{{head.saying1}}</p>
          <p class="saying2 animated rotateInDownRight">{{head.saying2}}</p>
        </div>
      </div>
    </div>
    <mouse></mouse>
  </div>
</template>
<script>
import mouse from '../mouse/mouse.vue';
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
  methods: {},
  components: {
    mouse
  }
};
</script>
<style lang="scss" scoped>
@import '../../common/style/mixin.scss';
.page1 {
  @include wh;
  text-align: center;
  overflow: hidden;
  position: relative;
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
    .saying1 {
      animation-delay: 0.5s;
      display: inline-block;
      margin-right: 30px;
    }
    .saying2 {
      animation-delay: 1.5s;
      display: inline-block;
    }
  }
}
</style>
