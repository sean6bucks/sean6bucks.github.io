var main = function() {
	$('.enter-img').click(function() {
		$('#splash').animate({
			top: "-100%"
		}, 300);
	});

};

$(document).ready(main);