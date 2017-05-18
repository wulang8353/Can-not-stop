<template>
  <div class="page2">
    <h2 class="title2">项目经验</h2>
    <div class="content">
      <div class="project pro1">
        <div class="pro-img">
          <div class="iconfont icon-chengchangjingli"></div>
        </div>
        <div class="pro-txt">
          <h3>vue.js问卷管理单页应用(PC)</h3>
          <p>可以根据需求创建问卷，同样可以保存、填写问卷，问卷数据以图表统计的方式呈现出来。</p>
        </div>
        <div class="pro-btn">
          <a class="pro-link" href="http://win5do.cc/jianqn" target="_blank">LiveDemo</a>
          <a class="pro-link" href="https://github.com/win5do/IFE/tree/master/task50-vue-questionnaire#readme" target="_blank">项目心得</a>
        </div>
      </div>
      <div class="project pro2">
        <div class="pro-img">
          <div class="iconfont icon-chengchangjingli"></div>
        </div>
        <div class="pro-txt">
          <h3>基于jquery或zepto滚动插件</h3>
          <p>可用于fullpage页面和轮播，并且能够嵌套多个滚动框架，有竖直和横向滚动两种模式，可以自定义动画时间以及导航栏。</p>
        </div>
        <div class="pro-btn">
          <a class="pro-link" href="https://win5do.github.io/gun.js/" target="_blank">LiveDemo</a>
          <a class="pro-link" href="https://github.com/win5do/gun.js" target="_blank">项目心得</a>
        </div>
      </div>
    </div>
  </div>
</template>
<style lang="scss" scoped>
@import '../../common/style/mixin.scss';
.page2 {
  overflow: hidden;
  position: relative;
  background: #e8e8e8;
  text-align: center;
  @include wh;
  .title2 {
    font-size: 30px;
    margin: 20px 0;
  }
  .content {
    width: 940px;
    margin: 0 auto;
  }
  .project {
    display: table;
    height: 100px;
    width: 450px;
    background: #fff;
    border: 1px solid #eee;
    box-shadow: 1px 3px 3px 0 #b9b9b9;
    border-radius: 2px;
    cursor: pointer;
    box-sizing: border-box;
    padding: 5px;
    .pro-img {
      display: table-cell;
      vertical-align: middle;
      > .iconfont {
        @include wh(80px, 80px);
        border-radius: 100px;
        background: #666;
        font-size: 50px;
        color: #fff;
      }
    }
    .pro-txt {
      display: table-cell;
      text-align: left;
      padding: 0 10px;
      > h3 {
        font-size: 14px;
        margin-bottom: 5px;
      }
      > p {
        font-size: 13px;
      }
    }
    .pro-btn {
      display: table-cell;
      vertical-align: middle;
      .pro-link {
        display: block;
        padding: 5px 10px;
        margin: 8px 0;
        color: #fff;
        background: #ef4d4d;
        border-radius: 4px;
        box-shadow: 0 3px 0 0 #ab3434;
      }
    }
    @for $i from 1 through 2 {
      &.pro#{$i} {
        @if $i%2 == 1 {
          float: left;
          margin-right: 50%;
        }
        @else {
          float: right;
          margin-left: 50%;
        }
      }
    }
  }
}
</style>
<script>
export default {
  data() {
    return {

    };
  }
};
</script>
