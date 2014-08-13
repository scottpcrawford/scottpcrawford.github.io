var main = function(){
    $('.menu-list').hover( 
    	function(){
        	$(this).animate({
            	left: '10%' }, 200)}, 
        function(){
        	$(this).animate({
        		left: '16%'}, 200)}
       );

};

$(document).ready(main)