	(function (window, $) {
	'use strict';
	var path = window.location.pathname;
	// Cache document for fast access.
	var document = window.document;


	$('#d-resume1').click(function () {

	    window.location.href= window.location.protocol + "//" + window.location.host +path+"KEYUR_PATEL_RESUME.pdf";
	});
});