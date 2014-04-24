$(document).ready(function(){

	var page = "#page1";
	var transaction = "";
	var direction = "";

	



	$('a.callSobre').click( 'click', function() {
		direction = '';
		transaction = 'slide';
		page = $(this).data("origem"); 
	});

	$('#btnPage1Up').click ('click', function(){
	 	transaction = $(this).data("directioninverse"); 
		page = $(this).data("origem"); 
	});


	$('.btnVoltar').click( 'click', function() {
	 
		var pagina = page;
		var transactionpagina = transaction;
		transaction = "";
		page = "";
		if (direction != "") {
			$(this).data('direction', direction); 
		}
		 
		$(this).data('transition', transactionpagina); 
		$(this).attr('href', pagina); 
	   
	});

	$('.mapVoltar').click( 'click', function() {
	 
		var pagina = page;
		var transactionpagina = transaction;
		transaction = "";
		page = "";
		 
		$(this).data('transition', transactionpagina); 
		$(this).attr('href', pagina); 
	   
	});




 

	var timeoutId = null;
 

	var valorDelta;
	var pagedown = "";
	var pageup = "";
	 

	var mousewheelevt = (/Firefox/i.test(navigator.userAgent)) ? "DOMMouseScroll" : "mousewheel" //FF doesn't recognize mousewheel as of FF3.x
	
	$('.scrollSobre').bind(mousewheelevt, function(e){

			pagedown = $(this).data('pagedown');
			page = $(this).data("origem"); 
			pageup = $(this).data('pageup');


			console.log ($(window).scrollTop() );
			 
		    var evt = window.event || e //equalize event object     
		    evt = evt.originalEvent ? evt.originalEvent : evt; //convert to originalEvent if possible               
		    valorDelta = evt.detail ? evt.detail*(-40) : evt.wheelDelta //check for detail first, because it is used by Opera and FF
		 
			if(   ( $(window).scrollTop() + $(window).height()  ) == $(document).height()  || $(window).scrollTop()==0 ) {
		    	clearTimeout(timeoutId);
			    timeoutId = setTimeout(callPage, 40);
	    	}
	    
	});

	function callPage() {
		if(valorDelta > 0) {
	        
			//console.log ('scrolling down' + + timeoutId + ' -  ' + pagedown);
	        if (pageup != "") {
	        	transaction = "slidedown";
	        	direction = "";
	        	$.mobile.changePage( pageup, { transition: transaction} );	
	        }


	    }
	    else{
	        //console.log ('scrolling down' + + timeoutId + ' -  ' + pagedown);
	        if (pagedown != "") {
	        	transaction = "slideup";
	        	direction = "";
	        	$.mobile.changePage( pagedown, { transition: transaction} );	
	        }


	    }   
	}

	


});




