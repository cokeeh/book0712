/*Pick 한 책 넘기기*/
$(function(){
	$(".Picksbook_prev").click(function(){
		$('.Picksbook_wrap li:last').prependTo('.Picksbook_wrap');
	});
	$(".Picksbook_next").click(function(){
		$('.Picksbook_wrap li:first').appendTo('.Picksbook_wrap');
	});
});