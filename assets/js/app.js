$( document ).ready(function() {

	var bg = jQuery("#background1");
	jQuery(window).resize("resizeBackground");
	function resizeBackground() {
	    bg.height(jQuery(window).height() + 120);
	    console.log('resize');
	}
	resizeBackground();


//end Jquery
});
