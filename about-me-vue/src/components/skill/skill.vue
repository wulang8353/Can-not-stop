<template>
  <div class="page3">
    <h2 class="title3">前端技能</h2>
    <div class="content">
      <div class="skill" v-for="(skill, index) in skills" :class="'skill'+ (index+1)" >
        <div class="front">
          <h5 class="skill-title">{{skill.title}}</h5>
          <p><span class="skill-point" v-for="item in skill.items">{{item}}</span></p>
        </div>
        <div class="backface">
          {{skill.backface}}
        </div>
      </div>
    </div>
  </div>
</template>
<script>
import axios from 'axios';

const ERR_OK = 0;
export default {
  data() {
      return {
        skills: {}
      };
    },
    created() {
      axios.get('./api/skill').then((res) => {
          var response = res.data;
          if (response.errno === ERR_OK) {
            this.skills = response.data;
            console.log(this.skill);
          }
        })
        .catch(function(error) {
          console.log(error);
        });
    }
};
</script>
<style lang="scss" scoped>
.page3 {
  text-align: center;
  width: 100%;
  height: 100%;
  background: #bbb;
  overflow: hidden;
  position: relative;
  .title3 {
    margin-top: 60px;
  }
  .content {
    width: auto;
    height: 300px;
    margin: 100px auto 0;
  }
  .skill {
    display: inline-block;
    width: 150px;
    height: 100%;
    margin: 5px 20px;
    vertical-align: middle;
    background: #efefef;
    border: 1px solid #efefef;
    box-shadow: 0px 3px 4px 1px rgba(0,0,0, 0.35);
    border-radius: 2px;
    position: relative;
    transition: transform 0.8s ease;
    transform-style: preserve-3d;
    animation: rotate360 1.2s ease;
    @keyframes rotate360 {
      from {
        transform: rotateY(-360deg);
      }
      to {}
    }    
    @for $i from 1 through 5 {
      &.skill#{$i} {
        animation-delay: .2s * ($i - 1);
      }
    }
    @media (min-width: 769px) {
      &:hover {
        transform: rotateY(180deg);
      }
    }
    .skill-title {
      font-size: 18px;
      width: 100px;
      height: 40px;
      margin: 10px auto;
      border-bottom: 3px solid red;
    }
    .skill-point {
      font-size: 16px;
      display: inline-block;
      margin: 5px 20px;
      padding: 5px 10px;
      background: rgba(255, 154, 0, 0.4);
    }
    .backface {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      padding: 15px;
      text-indent: 2em;
      text-align: justify;
      box-sizing: border-box;
      font-size: 14px;
      overflow: hidden;
      transform: rotateY(180deg) translateZ(1px);
      backface-visibility: hidden;
      background: #efefef;
    }

  }

}
</style>
