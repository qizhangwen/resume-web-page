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


function getScrollTop() {
    var scrollTop = (((t = document.documentElement) || (t = document.body.parentNode)) && typeof t.scrollTop == 'number' ? t : document.body).scrollTop
    return scrollTop;
}


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
    var scrollHeight = getScrollTop() ; // 当前窗口距离页面顶部高度
    $('.mask').fadeIn(300);
    $('.work-popup').fadeIn(300);
    $('body').css({overflow:'hidden'});
    $("body,html").scrollTop(scrollHeight);
    clMask(scrollHeight);
    clWork(scrollHeight);
    getWorkExp(thisId);
})

// 关闭工作经验弹窗
function clWork (h) {
    $('.fork').on('click', function () {
        $('.mask').fadeOut(300);
        $('.work-popup').fadeOut(300);
        $('body').css({overflow:'visible'});
        $("body,html").scrollTop(h);
    })
}

// 工作经验调用json
function getWorkExp (id) {
    $.ajax({
        url: "./json/suffer.json",//json文件位置
        type: "get",
        dataType: "json", //返回数据格式为json
        success: function(data) {//请求成功完成后要执行的方法
            var dataWork;
            switch (id) {
                case "1":
                    dataWork = data.firstWork;
                    break;
                case "2":
                    dataWork = data.secondWork;
                    break;
                case "3":
                    dataWork = data.thirdWork;
                    break;
                case "4":
                    dataWork = data.fourthWork;
            }
            // console.log(dataWork)
            var text = '';
            text +='<h4>' + dataWork.companyName + '</h4>';
            text +='<span class="tag tag-green">' + dataWork.time + '</span>';
            text +='<span class="tag">' + dataWork.department + '</span>';
            text +='<span class="tag tag-red">' + dataWork.position + '</span>';
            text +='<span class="tag tag-gray job-duties">' + dataWork.jobDuties + '</span>';
            if(dataWork.project){
                for(var i in dataWork.project){
                    text +='<div class="work-project">';
                    text +='<div class="left-line"><p class="line-num">' + (parseInt(i)+1) + '</p><p class="line"></p></div>';
                    text +='<div class="right-cont">' +
                        '<p class="project-name">' + dataWork.project[i].name + '</p>';
                    if(dataWork.project[i].time){
                        text +='<span class="tag tag-green">' + dataWork.project[i].time + '</span>';
                    }
                    text +='<div class="project-cont">';
                    for(var t in dataWork.project[i].content){
                        text +='<p>' + dataWork.project[i].content[t] + '</p>'
                    }
                    text +='</div></div>';
                    text +='</div>';
                }
            }
            $('#work-experience').empty().append(text);
        }
    })
}
