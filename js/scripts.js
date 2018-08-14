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
})

$('.mask').on('click', function () {
	$(this).fadeOut(300);
	$('.popup').fadeOut(300);
	$('body').css({overflow:'initial'});
});

$('.register').on('click', function () {
	$('.mask').hide();
	$('.popup').hide();
	$('body').css({overflow:'initial'});
})

// 抽屉
$('.caption').on('click', function () {
    console.log(1)
    $('.details').slideToggle('slow');
});