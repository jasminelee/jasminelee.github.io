jQuery(document).ready(function($) {
    $("#scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
   $('.header').animate({opacity: 0}, 0).css({'background-image': 'url(beach_copy.jpg) no-repeat'}).animate({opacity: 1}, 4000);
});