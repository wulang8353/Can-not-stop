<template>
  <div class="page2">
    <h2 class="title2">项目经验</h2>
    <div class="content">
      <div class="project" :class="'pro'+(index+1)" v-for="(item,index) in project.experience">
        <div class="pro-img">
          <div class="iconfont" :class="item.logo"></div>
        </div>
        <div class="pro-txt">
          <h3>{{item.name}}</h3>
          <p>{{item.describe}}</p>
          <p>{{item.skill}}</p>
        </div>
        <div class="pro-btn">
          <a :href="item.address" class="pro-link" target="_blank">LiveDemo</a>
          <a :href="item.summary" class="pro-link" target="_blank">项目心得</a>
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
import axios from 'axios';

const ERR_OK = 0;
export default {
  data() {
    return {
      project: []
    };
  },
  created() {
    axios.get('./api/project').then((res) => {
      var response = res.data;
      if (response.errno === ERR_OK) {
        this.project = response.data;
        console.log(this.project);
      }
    })
    .catch(function(error) {
      console.log(error);
    });
  }
};
</script>
