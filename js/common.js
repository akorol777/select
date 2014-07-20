$(document).ready(function() {
	$('#myForm input:checkbox').after('<span></span>');
	$('#myForm :checkbox:checked + span').addClass('check');
	$(function() {
	  $( "#myForm :checkbox" ).click(function() {
	  	$('#myForm :checkbox + span').removeClass('check');
	  	if ($('#myForm :checkbox:checked + span')) {
			$('#myForm :checkbox:checked + span').addClass('check');	
		};
	  });
	});

	$('#myForm input:radio').after('<span></span>');
	$('#myForm :radio:checked + span').addClass('check');
	$(function() {
	  $( "#myForm :radio" ).click(function() {
	  	$('#myForm :radio + span').removeClass('check');
	  	if ($('#myForm :radio:checked + span')) {
			$('#myForm :radio:checked + span').addClass('check');	
		};
	  });
	});






});


