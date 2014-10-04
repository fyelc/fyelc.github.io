$(window).on("scroll", function () {
	var scrolled = $(window).scrollTop();
	$('#home-bg').css('top', (0-(scrolled*.5))+'px');
});
