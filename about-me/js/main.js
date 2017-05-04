var doFn = {
    scrollFn: function() {
        // 当前屏幕，从0记数
        var onIndex = 0;
        // container: margin-top
        var mt = 0;
        // 是否正在滚动
        var onScroll = false;
        // info弹出层状态
        var infoOut = 0;
        // clearTimer = null;
        var infoTimer = null;
        var p4Timer = null;
        var p4Animate = true;

        function preventCombo() {
            // 如果没有在滚动 开始滚动 并将onScroll设置为true
            // 设置一个倒计时 防止频繁出发滚动事件 滚动完成后将onScroll设置为false
            if (!onScroll) {
              onScroll = true;
              setTimeout(function() {
                onScroll = false;
              }, 500);
              return false;
            } else {
              return true;
            }
        }

        (function pageScroll() {
          //  给document绑定鼠标滚轮事件、键盘事件、鼠标移动事件
          $(document).on()
        })()
    }
}

var  EventUtil = {
    /*
      e:要操作的元素
      type：事件名称
      handler：事件处理程序函数
     */
    addHandler: function(e, type, handler){
        if (e.addEventListener) {
          e.addEventListener(type, handler, false);
        } else if (e.attachEvent) {
          e.attachEvent("on" + type, handler, false);
        } else {
          e["on" + type] = handler;
        }
    },
    removeHandler: function(e, type, handler){
        if (e.removeEventListener) {
          e.removeEventListener(type, handler, false);
        } else if (e.detachEvent) {
          e.detachEvent("on" + type, handler, false);
        } else {
          e["on" + type] = null;
        }
    }
}
