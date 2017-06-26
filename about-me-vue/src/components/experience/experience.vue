<template>
  <div class="page4">
    <h2 class="title4">个人经历</h2>
    <div class="content">
      <div class="history" :class="cur"  ref="history" v-for="experience in experiences">
        <div class="year">{{experience.date}}</div>
        <dl class="intro">
          <dt v-for="intro in experience.intros">{{intro}}</dt>
          <dd v-for="item in experience.items">{{item}}</dd>
        </dl>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

const animate = true;
const ERR_OK = 0;
export default {
  data() {
      return {
        experiences: [],
        cur: ''
      };
    },
  created() {
    axios.get('./api/experience').then((res) => {
        var response = res.data;
        if (response.errno === ERR_OK) {
          this.experiences = response.data;
        }
      })
      .catch(function(error) {
        console.log(error);
      });
  }
};


</script>
<style lang="scss" scoped>
.page4 {
  text-align: center;
  background: #e8e8e8;
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: relative;
  .title4 {
    margin-top: 60px;
  }
  .content {
    width: 650px;
    height: 300px;
    margin: 100px auto 0;
  }
  .history {
    float: left;
    width: 50px;
    height: 100%;
    margin: 0 2px;
    background: #fff;
    border-radius: 2px;
    border: 1px solid #eee;
    box-shadow: 1px 3px 3px 0 #b9b9b9;
    overflow: hidden;
    position: relative;
    &:last-child {
      width: 500px;
    }
    .year {
      position: absolute;
      left: 0;
      top: 0;
      width: 50px;
      height: 100%;
      text-align: center;
      box-sizing: border-box;
      font-size: 18px;
      font-weight: 700;
      padding: 30px 0 0 15px;
      word-wrap: break-word;
      letter-spacing: 20px;
    }
    .intro {
      position: absolute;
      left: 50px;
      top: 0;
      width: 450px;
      height: 100%;
      box-sizing: border-box;
      padding: 30px;
      line-height: 2;
      text-align: left;
      word-break: break-all;
      >dt {
        &:first-child {
          font-weight: 600;
          font-size: 15px;
        }
        &:nth-child(3) {
          margin-bottom: 5px;
        }
      }
      >dd {
        display: list-item;
        list-style-type: circle;
      }
    }
  }
}
</style>
