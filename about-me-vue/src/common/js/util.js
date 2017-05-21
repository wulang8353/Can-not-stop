import $ from 'jquery';
export function setMtAndOn(onIndex) {
    function currentOn(className) {
        $(className).removeClass('on');
        $(className).eq(onIndex).addClass('on');
    }

    var clientH = $(window).height();
    mt = -clientH * onIndex;
    $('.container').css({
        'transform': 'translateY(' + mt + 'px)'
    });
    setTimeout(function () {
        currentOn('.column');
        currentOn('.item');
    }, 400);
}
