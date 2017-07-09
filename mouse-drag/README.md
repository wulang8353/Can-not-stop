# JS拖拽效果
### 1 简介

模仿百度登录界面，使用原生JS语言达到拖拽效果，点击**登录**，显示出登录浮层

### 2 原理分析

* 鼠标按下 - 计算鼠标相对拖拽元素的左上角的坐标，并标记元素为可拖动
```
g('dialogTitle').addEventListener('mousedown', function(e) {
    var e = e || window.event;
    mouseOffsetX = e.pageX - g('dialog').offsetLeft;
    mouseOffsetY = e.pageY - g('dialog').offsetTop;
    isDraging = true;
})
```

* 鼠标移动 - 检测元素可拖动标记，如果为true则更新元素位置到当前鼠标的位置
```
document.onmousemove = function(e) {
    var e = e || window.event;

    // 鼠标当前位置
    var mouseX = e.pageX;
    var mouseY = e.pageY;

    //  移动后的新位置
    var moveX = 0;
    var moveY = 0;

    if (isDraging === true) {

        moveX = mouseX - mouseOffsetX;
        moveY = mouseY - mouseOffsetY;

        //  范围先定 moveX > 0  且 (页面最大宽度 - 浮层的宽度)
        var pageWidth = document.documentElement.clientWidth;
        var pageHeight = document.documentElement.clientHeight;

        var dialogWidth = g('dialog').offsetWidth;
        var dialogHeight = g('dialog').offsetHeight;

        var maxX = pageWidth - dialogWidth;
        var maxY = pageHeight - dialogHeight;

        moveX = Math.min(maxX, Math.max(0, moveX));
        moveY = Math.min(maxY, Math.max(0, moveY));


        g('dialog').style.left = moveX + 'px';
        g('dialog').style.top = moveY + 'px';
    }
}
```


* 鼠标松开 - 标记元素为不可拖动，在document上设置事件，避免鼠标拖拽过快导致的鼠标不在标题栏上的问题
```
document.onmouseup = function() {
    isDraging = false;
}
```

### 3 核心代码

* 获取元素对象
```
function g(id) {
    return document.getElementById(id);
}
```

* 自动居中函数 - 针对拖动元素
```
function autoCenter(el) {
    var bodyW = document.documentElement.clientWidth; // 当前可视区域的宽度
    var bodyH = document.documentElement.clientHeight;// 当前可视区域的高度

    var elW = el.offsetWidth; // 目标元素的宽度
    var elH = el.offsetHeight;// 目标元素的高度

    el.style.left = (bodyW - elW) / 2 + 'px'; 
    el.style.top = (bodyH - elH) / 2 + 'px';
}
```

* 自动全屏函数 - 针对遮盖元素 mask
```
function fillToBody(el) { // 传入的元素对象的宽和高设置为当前可视区域的宽和高
    el.style.width = document.documentElement.clientWidth + 'px';
    el.style.height = document.documentElement.clientHeight + 'px';
}

```

* 窗口大小改变
```
window.onresize = function() { // 拖动元素能够自动居中
    autoCenter(g('dialog'));
    fillToBody(g('mask'));
}
```

### 4 Demo总结
```
//兼容DOM和IE的事件对象
event = event || window.event

// 获取窗口显示区域的宽高：
document.documentElement.cilentWidth  IE6标准模式及其以上、FF、chrome
document.documentElement.cilentHeight 

document.body.clientWidth  IE6混杂模式
document.body.clientHeight

兼容写法：
var ww=document.documentElement.clientWidth||document.body.clientWidth;
var hh=document.documentElement.clientHeight||document.body.clientHeight;

//获得当前事件发生时的鼠标坐标
Event.pageX , Event.pagey  (页面区域，包含滚动)
Event.cilentX, Event.clientY (客户端区域，不包含滚动)
在没有滚动的情况下，二者相等

//获得元素对象的实际宽高
Element.offsetWidth  (border+padding+content)
Element.offsetHeight

```
