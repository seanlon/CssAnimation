$(document).ready(function(){
    $(".cute-dog").click(function(){  

//alternate is to use toggleClass function in jquery
	$(this).removeClass("jumping").addClass("jumping");     

//To repaint redraw the element to reload the css animation
 document.getElementById('cute-dog').style.display='none';
 document.getElementById('cute-dog').offsetHeight; // no need to store this anywhere, the reference is enough
 document.getElementById('cute-dog').style.display='';

 setTimeout(function(){ },500);
    });
});

