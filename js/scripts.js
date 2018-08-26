(function() {
    "use strict";

    // custom scrollbar

    $("html").niceScroll({styler:"fb",cursorcolor:"rgb(16, 167, 175)", cursorwidth: '6', cursorborderradius: '10px', background: '#424f63', spacebarenabled:false, cursorborder: '0',  zindex: '1000'});

    $(".scrollbar1").niceScroll({styler:"fb",cursorcolor:"rgb(16, 167, 175)", cursorwidth: '6', cursorborderradius: '0',autohidemode: 'false', background: '#F1F1F1', spacebarenabled:false, cursorborder: '0'});



    $(".scrollbar1").getNiceScroll();
    if ($('body').hasClass('scrollbar1-collapsed')) {
        $(".scrollbar1").getNiceScroll().hide();
    }

})(jQuery);

// 返回顶部
$(window).scroll(function(){
    var h = $(window).scrollTop();
    if(h > 250){
        $("#toTop").show();
    }else{
        $("#toTop").hide();
        $("#toTop").css({bottom:'28px'});
    }
});
$("#toTop").on('click', function() {
    $("body,html").animate({scrollTop:0},500);
    $("#toTop").animate({bottom:$(window).scrollTop()},1000);
})

// 点击登录
$('.onLogin').on('click', function () {
	$('.mask').fadeIn(300);
	$('.login-popup').fadeIn(300);
	$('body').css({overflow:'hidden'});
    $("body,html").scrollTop(0);
    clMask(0);
})

// 点击蒙版
function clMask(h){
    $('.mask').on('click', function () {
        $(this).fadeOut(300);
        $('.popup').fadeOut(300);
        $('.work-popup').fadeOut(300);
        $('body').css({overflow:'visible'});
        $("body,html").scrollTop(h);
    });
}

// 登录按钮
$('.register').on('click', function () {
	$('.mask').hide();
	$('.popup').hide();
	$('body').css({overflow:'initial'});
})

// 抽屉
$('.caption').on('click', function () {
    $('.details').slideToggle('slow');
});

// 工作经验弹窗
$('.onPopup').on('click', function () {
    var thisId = $(this).attr('data-id');
    var scrollHeight = $(window).scrollTop(); // 当前窗口距离页面顶部高度
    $('.mask').fadeIn(300);
    $('.work-popup').fadeIn(300);
    $('body').css({overflow:'hidden'});
    $("body,html").scrollTop(scrollHeight);
    clMask(scrollHeight);
})
// 工作经验调用json
$.ajax({
    url: "./json/suffer.json",//json文件位置
    type: "get",
    dataType: "json", //返回数据格式为json
    success: function(data) {//请求成功完成后要执行的方法
        console.log(data)

    }
})
