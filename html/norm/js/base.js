$(document).ready(function () {

	var getNum = isNaN(parseInt(window.sessionStorage.getItem('num')))?0:parseInt(window.sessionStorage.getItem('num'));
	// 刷新保持当前切换状态
	tags(getNum)
	// 目录切换
	$('.norm-directory li').on('click', function () {
		tags(parseInt($(this).index()))
	})
	if(window.screen.width <= 700) {
		$('.directory').removeClass('show-menu');
	}
	// 缩进目录
	$('.directory').on('click', function () {
		if($(this).hasClass('show-menu')){
			$('.norm-directory').animate({left: '-200px'});
			$('.directory').removeClass('show-menu');
			$('.norm-body').animate({left: '0'});
		} else {
			$('.norm-directory').animate({left: '0'});
			$('.directory').addClass('show-menu');
			$('.norm-body').animate({left: '200px'});
		}
	})

	// 上下页
	$('.prev-box').on('click', function () {
		var num = parseInt($('.prev-box').attr('data-num'));
		if(num >= 0){
			tags(num)
		}
	})
	$('.next-box').on('click', function () {
		var num = parseInt($('.next-box').attr('data-num'));
		if(num <= 7){
			tags(num)
		}
	})
	// 键盘翻页
　　$(document).keydown(function(event){
　　　　if(event.keyCode == 37){ //判断当event.keyCode 为37时（即左方面键），执行函数to_left();
			var num = parseInt($('.prev-box').attr('data-num'));
			if(num >= 0){
				tags(num)
			}
　　　　}else if (event.keyCode == 39){ //判断当event.keyCode 为39时（即右方面键），执行函数to_right();
			var num = parseInt($('.next-box').attr('data-num'));
			if(num <= 7){
				tags(num)
			}
　　　　}
　　});
	function tags (num) {
		$('.norm-directory li').eq(num).addClass('active').siblings().removeClass('active');
		$('#norm-cont').load('directory-' + num + '.html');
		$('.nav-title').html($('.norm-directory li').eq(num).text());
		$('.prev-box').attr('data-num',num - 1);
		$('.next-box').attr('data-num',num + 1);
		window.sessionStorage.setItem('num', num);
	}
	
})









