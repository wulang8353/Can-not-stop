# 3D旋转效果
### 1 transition


<过渡属性名>: transition-property

<过渡时间>: transition-duration

<过渡延时>: transition-delay

<过渡状态变化速度>: transition-timing-function

```
1 linear      匀速
2 ease        慢速开始，然后变快，然后慢速结束
3 ease-in     慢速开始
4 ease-out    慢速结束
5 ease-in-out 慢速开始和结束
6 cubic-bezier(n,n,n,n)  自定义效果

```

#### transition完整写法

```
div{
    -webkit-transition: 1s 1s height ease;
    -moz-transition: 1s 1s height ease;
    transition: 1s 1s height ease;
    <!-- 兼容性写法 -->
}

img{
    transition-property: height;
    transition-duration: 1s;
    transition-delay: 1s;
    transition-timing-function: ease;
}

```

#### transition的局限性：

transition的优点在于简单易用，但是它有几个很大的局限性，而**Animation**正是解决这些问题

（1）transition需要**事件触发**，所以没法在网页加载时自动发生

（2）transition**是一次性的**，不能重复发生，除非一再触发

（3）transition只能定义开始状态和结束状态，**不能定义中间状态**，也就是说只有两个状态

（4）一条transition规则，**只能定义一个属性的变化**，不能涉及多个属性



### 2 Animation

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

