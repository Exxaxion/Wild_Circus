		$(document).ready(function() { 
	 		$('#navi').on('click', '.calendar', function() {    
				$(this).toggleClass('show');
	 		});
			$('#navi').on('click', '.price', function() {    
				$(this).toggleClass('highlighted');
	 		});
	 		$('#navi').on('click', '.contact', function() {    
				$(this).toggleClass('slide');
	 		});
		});