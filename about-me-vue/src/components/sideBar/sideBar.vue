<template>

  <div class="nav-right">
    <ul>
    <transition name="fade">
      <li class="item iconfont icon-homepage on"><span v-show="show">首页</span></li>
    </transition>
      <li @mouseenter='show =true' @mouseleave='show = false' class="item iconfont icon-xiangmu"><span>项目</span></li>
      <li @mouseenter='show =true' @mouseleave='show = false' class="item iconfont icon-skill"><span>技能</span></li>
      <li @mouseenter='show =true' @mouseleave='show = false' class="item iconfont icon-chengchangjingli"><span>经历</span></li>
      <li @mouseenter='show =true' @mouseleave='show = false' class="item iconfont icon-lianxi"><span>联系</span></li>
      <li @mouseenter='show =true' @mouseleave='show = false' class="item iconfont icon-editor"><span>信息</span></li>
    </ul>
  </div>

</template>
<script>
export default {
  data() {
    return {
      show: true
    };
  },
  methods: {
    showItem () {
      this.show = true;
    },
    hiddenItem () {
      this.show = false;
    }
  }
};
</script>
<style lang="scss" scoped>
@import '../../common/style/mixin.scss';
$nrH: 348px; // 整个导航栏高度
.nav-right {
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
    font-size: 30px;
    color: #fff;
    text-align: center;
    white-space: pre;
    position: relative;
    transition: all .8s ease;
    > span {
      position: absolute;
      top: 13px;
      left: -50px;
      font-size: 16px;
      color: #000;
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
