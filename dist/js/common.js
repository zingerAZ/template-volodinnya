
/* HERE STRATS SOME JS MADE BY ME */ 

$(document).ready(function(){
    
	//Scrolling for menu

    $('.go_to').click( function(){
	var go_to = $(this).attr('href'); 
        if ($(go_to).length != 0) { 
	    $('html, body').animate({ scrollTop: $(go_to).offset().top }, 1000);
        }
	    return false;
    });

    //Toogle default

    $('[data-toggle="popover"]').popover();

    //Button effects after click

    $('button, .left, .right').focus(function(){
    	this.blur();
    });

    $("#sticker").sticky({topSpacing:0});

});

/*---------Mobile sandwich menu---------*/

function openNav() {
    document.getElementById("mySidenav").style.width ="250px";
};


