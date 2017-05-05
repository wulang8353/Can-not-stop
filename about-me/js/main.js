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

        // 通过onIndex的值来设置container的margin-top值，并给当前的附上class——on
        function setMtAndOn() {
          function currentOn(className) {
            $(className).remove('on');
            $(className).eq(onIndex).addClass('on');
          }

          var clientH = $(window).height();
          mt = -clientH * onIndex;
          $('.container').css({
            'transform': 'translateY(' + mt + 'px)'
          });
          setTimeout(function(){
            currentOn('.column');
            currentOn('.item');
          }, 400);
        }

        function whenIndexChange() {
            //  onIndex改变时的逻辑

            setMtAndOn();
            // info控制 在第五屏定时弹出 不在隐藏 在第一屏显示个按钮
        }

        (function pageScroll() {
            //  给document绑定鼠标滚轮事件、键盘事件、鼠标移动事件
            $(document).on('mousewheel keydown DOMMouseScroll',
                function(event) {

                    if (preventCombo()) {
                        return;
                    };

                    event = event || window.event;
                    // 给document绑定鼠标滚轮事件、键盘事件、鼠标移动事件
                    // keyCode = 38 | 40   -> 上箭头、下箭头
                    var wheel = event.wheelDelta || -event.detail;
                    if (wheel < 0 || event.keyCode == 40) {
                        if (onIndex <= 3) {
                            onIndex++;
                        }
                    } else if (wheel > 0 || event.detail == 38) {
                        if (onIndex >= 1) {
                            onIndex--;
                        }
                    }

                    whenIndexChange();
                })
        })();
    }
}

doFn.scrollFn();
