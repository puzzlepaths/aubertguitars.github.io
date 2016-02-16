$( document ).ready(function() {

	var bg = jQuery("#background1");
	jQuery(window).resize("resizeBackground");
	function resizeBackground() {
	    bg.height(jQuery(window).height() + 60);
	}
	resizeBackground();


//end Jquery
});
