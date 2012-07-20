// bootstrap drop down
$('.dropdown-toggle').dropdown();

// carousel
$('.carousel').carousel({
    interval: 3000,
    pause: "hover"
});

// nivo-slider default controls
$(window).load(function() {
    $('#slider').nivoSlider({
	    effect: 'fade',
	    controlNav: false,
	    pauseTime: 3000
    });
});