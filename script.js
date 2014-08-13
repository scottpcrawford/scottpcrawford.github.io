var main = function(){
    $('.menu-list').hover( 
    	function(){
        	$(this).animate({
            	left: '30px' }, 200)}, 
        function(){
        	$(this).animate({
        		left: '150px'}, 200)}
       );

};

$(document).ready(main)