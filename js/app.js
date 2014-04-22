$(document).ready(function(){

	var page = "#page1";

	 
	$('a.callSobre').click( 'click', function() {
		page = $(this).data("origem"); 
	});


	$('#btnSobreVoltar').click( 'click', function() {
		
		$(this).attr('href', page); 
	   
	});

	


});