/*eslint-env jquery*/
/*jslint browser: true*/
/*global $, jQuery*/

$(function () {
    "use strict";
    
    var progressBarNamesArray = ["precision-bar", "systematic-bar", "fast-learning-bar", "music-bar", "video-bar", "front-end-bar", "written-bar"],
        progressBarPercentageArray = ["90%", "94%", "95%", "94%", "50%", "55%", "92%"],
        i;
    
    for (i = 0; i < progressBarNamesArray.length; i += 1) {
        $("#" + progressBarNamesArray[i]).animate({
            width: progressBarPercentageArray[i]
        }, { duration: 300, queue: false });
    }
	
	
	$(".nav-link").click(function () {
		$(".nav-link").removeClass("active");
		$(this).addClass("active");
	});
});