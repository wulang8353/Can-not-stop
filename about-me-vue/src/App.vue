<template>
  <div id="app">
    <div class="nav-right">
      <ul>
        <router-link to="/index">
          <li class="item iconfont icon-homepage on"><span>首页</span></li>
        </router-link>
        <router-link to="/project">
          <li class="item iconfont icon-xiangmu"><span>项目</span></li>
        </router-link>
        <router-link to="/skill">
          <li class="item iconfont icon-skill"><span>技能</span></li>
        </router-link>
        <router-link to="/experice">
          <li class="item iconfont icon-chengchangjingli"><span>经历</span></li>
        </router-link>
        <router-link to="/contact">
          <li class="item iconfont icon-lianxi"><span>联系</span></li>
        </router-link>
        <router-link to="/info">
          <li class="item iconfont icon-editor"><span>信息</span></li>
        </router-link>
      </ul>
    </div>
    <!-- 路由出口 -->
    <div class="wrap">
      <div class="container">
          <router-view></router-view>
      </div>
    </div>
  </div>
</template>
<script>
export default {

};
</script>
<style lang="scss" scoped>
@import 'common/style/mixin.scss';

// 外层父容器样式
.wrap,
.container {
  @include wh;
}
// 不会出现右侧滚动框
.wrap {
  overflow: hidden;
}
.container {
  transition: all 0.5s ease;
}
// 整个导航栏高度
$nrH: 348px; 
.nav-right {
  z-index: 50;
  height: $nrH;
  position: fixed;
  top: 50%;
  right: 3%;
  margin-top: - $nrH/2;
  .item {
    @include wh(50px, 50px);
    margin: 10px 0;
    background: #fe2f62;
    border-radius: 25px;
    cursor: pointer;
    color: #fff;
    font-size: 30px;
    text-align: center;
    white-space: pre;
    position: relative;
    transition: all .8s ease;
    > span {
      display: none;
      position: absolute;
      top: 13px;
      left: -50px;
      font-size: 16px;
      color: #fff;
    }
    &.on {
      background: #fec02d;
      color: #000;
      transform: scale(1.3);
      margin: 20px 0;
    }
    @media (min-width: 769px) {
      &:hover {
        background: #fec02d;
        color: #000;
        transform: scale(1.3);
        margin: 20px 0;
        > span {
          display: block;
        }
      }
    }
  }
}
</style>
