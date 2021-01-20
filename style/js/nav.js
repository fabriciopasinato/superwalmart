var ultimo = 300;
$(document).ready(function(){
	$(window).on('scroll',function(){
		actual=$(window).scrollTop();
		if (actual>ultimo) {
			$('.div_nav').addClass('div_nav2');
		}else{
			$('.div_nav').removeClass('div_nav2');
		}
	});
});