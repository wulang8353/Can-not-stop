* 基于Vue.js的响应式简历

1. 简介

在看过慕课网《Vue.js高仿饿了么外卖App》后，尝试使用Vue设计一个简历并兼容手机端和网页端

2. 技术栈

```
核心框架：Vue + Vue-cli + axios
CSS编译器：Sass(饿了么中使用的Stylus也挺好的)
Html5、CSS3、IconMoon
```
3. 主要功能

* 响应式：通过@media自动切换不同分辨率的移动端和PC端
* 通过手机二维码，能够扫码进入
* CSS3炫酷动画
* 实现点击和拖拽事件

4. 预计出现的问题

## v0.1.0
* 响应式布局：饿了么主要是以手机端为主，并使用flex布局，对应到pc端如何实现自适应是一个问题。
* CSS3动画：  移动端使用transform:translate代替top、right等位移性能更优(待尝试)
* 冒泡：由点击事件产生的事件冒泡估计会很头疼



