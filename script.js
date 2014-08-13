var main = function(){
    $('.menu-list').hover( 
    	function(){
        	$(this).animate({
            	left: '130px' }, 200)}, 
        function(){
        	$(this).animate({
        		left: '250px'}, 200)}
       );

};

$(document).ready(main)