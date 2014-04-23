$(document).ready(function(){

	var page = "#page1";
	var direction = "";

	 
	$('a.callSobre').click( 'click', function() {
		page = $(this).data("origem"); 
	});

	$('#btnPage1Up').click ('click', function(){
	 	direction = $(this).data("directioninverse"); 
		page = $(this).data("origem"); 
	});


	$('.btnVoltar').click( 'click', function() {
	 
		var pagina = page;
		var directionpagina = direction;
		direction = "";
		page = "";
		 
		$(this).data('transition', directionpagina); 
		$(this).attr('href', pagina); 
	   
	});

	


});