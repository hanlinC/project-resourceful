$(document).ready(function(){
	(function() {
		var body = $('body');
		$('.menu-toggle').bind('click', function() {
			body.toggleClass('menu-open');
			return false;
		});
	})();

	$(function(){
		$("#button01").click(function(){
			$(".info01").toggle(200);
		});
		$("#button02").click(function(){
			$(".info02").toggle(200);
		});
		$("#button03").click(function(){
			$(".info03").toggle(200);
		});
	});
});
