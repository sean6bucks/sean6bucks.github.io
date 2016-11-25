// var main = function() {
// 	$('.enter-img').click(function() {
// 		$('#splash').animate({
// 			top: "-100%"
// 		}, 300);

var main = function() {

	$('.enter-img').click(function() {
		window.location.path = '/top5';
		// $('#splash').fadeOut("1000").slideUp("slow");
		$('#splash')
    .animate({top: '-100%', opacity: 0}, 'slow', function() {
        $('#splash').remove();
    });

	});	
};

$(document).ready(main);
