$(function(){
	$.backstretch(["images/background.jpg"]);
	$('.body').css({ height:$(window).height() });
	$(document).on('click', '#menu-icon', function(){
		$(this).toggleClass('selected');
		$('.menu').toggleClass('selected');
	});
});