$('#myCarousel').hover(function() {
		$('.showView').css({
			'opacity': '0.6'
		})
	},
	function() {
		$('.showView').css({
			'opacity': '0.1'
		})
	})

$('.showView').hover(function() {
	this.style.opacity = '1'
}, function() {
	this.style.opacity = '0.6'
})

$('.right ul li a').click(function() {
	location.href = $(this).text() + '.html'
})