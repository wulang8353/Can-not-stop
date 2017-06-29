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

            // 给当前所在屏加上class——on，适用于column和nav-right
            function currentOn(className) {
                $(className).removeClass('on');
                $(className).eq(onIndex).addClass('on');
            }

            var clientH = $(window).height();
            mt = -clientH * onIndex;
            // 通过滑动滑轮，进入触发transition
            $('.container').css({
                'transform': 'translateY(' + mt + 'px)'
            });
            setTimeout(function() {
                currentOn('.column');
                currentOn('.item');
            }, 400);
        };


        $('.info-tg, .info-tg2, .info-tg3').on('click', function(event) {
            event.stopPropagation();
            event.preventDefault();

            if (infoOut === 2) {
                infoOut = 1;
            } else {
                infoOut = 2;
            }

            infoToggle();
        })

        $(window).resize(function () {
        	setMtAndOn();
        })

        function infoToggle() {
            var infoW = $('.info').width();

            switch (infoOut) {
                case 2:
		                $('.info').show().css({
		                    'left': 0
		                });
		                $('.info-arrow').addClass('inverse');
		                break;
                case 1:
		                $('.info').css({
		                    'left': -infoW
		                });
		                $('.info-arrow').removeClass('inverse');
		                break;
                default:
                    $('.info').css({
                        'left': '-100%'
                    });
                    $('.info-arrow').removeClass('inverse');
                    break;
            }
        }

        function whenIndexChange() {
            //  onIndex改变时的逻辑
            // console.log("onIndex逻辑触发")
            setMtAndOn();
            // info 在第五屏幕自动弹出
            clearTimeout(infoTimer);
            switch (onIndex) {
            	case 0:
            			infoOut = 1;
            			break;
            	case 4:
            			infoTimer = setTimeout(function () {
            				infoOut =2;
            				infoToggle();
            			}, 4000);
            			break;
            	default:
            			infoOut = 0;
            			break;
            }
            infoToggle();


            // 第四屏幕-先动画再绑定事件
            if (onIndex === 3) {
                if (!p4Animate) {
                    return;
                }

                clearTimeout(p4Timer);
                p4Animate = false;
                $('.history').removeClass('cur');
                $('.history').eq(0).addClass('cur');
                p4Timer = setTimeout(function() {
                    $('.history').removeClass('cur');
                    $('.history').eq(1).addClass('cur');
                }, 1000);
                p4Timer = setTimeout(function() {
                    $('.history').removeClass('cur');
                    $('.history').eq(2).addClass('cur');
                }, 2000);
                p4Timer = setTimeout(function() {
                    $('.history').on('mouseover', function() {
                        if ($(this).attr('class').indexOf('cur') < 0) {
                            $('.history').removeClass('cur');
                            $(this).addClass('cur');
                        }
                    });
                }, 3000);
            } else {
                p4Animate = true;
                $('.history').off('mouseover');
                $('.history').removeClass('cur').eq(-1).addClass('cur');
            }

        }

        // 绑定滚轮事件，确定向上滚动还是向下滚动
        (function pageScroll() {
            //  给document绑定鼠标滚轮事件、键盘事件、鼠标移动事件
            $(document).on('mousewheel keydown DOMMouseScroll', function(event) {

                event = window.event || event;
                if (preventCombo()) {
                    return;
                };
                // console.log("滑动开始")

                // keyCode = 38 | 40   -> 上箭头、下箭头
                var wheel = event.wheelDelta || -event.detail;
                // console.log(event.wheelDelta)
                if (wheel < 0 || event.keyCode == 40) {
                    if (onIndex <= 3) {
                        onIndex++;
                    }
                } else if (wheel > 0 || event.keyCode == 38) {
                    if (onIndex >= 1) {
                        onIndex--;
                    }
                }

                whenIndexChange();
            })
        })();

        $('.nav-right').find('.item').each(function (index) {
        	 if (index !== 5) {
        	 	$(this).click(function (event) {
        	 			event.stopPropagation();
        	 			onIndex = index;
        	 			whenIndexChange();
        	 	})
        	 }
        });

    }
}

doFn.scrollFn();
