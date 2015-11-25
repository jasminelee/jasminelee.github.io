jQuery(document).ready(function($) {
    $("#scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });
    $('.header').animate({opacity: 0}, 0).css({'background-image': 'url(beach_copy.jpg) no-repeat'}).animate({opacity: 1}, 4000);


  //   (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){
  //     (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),
  //     m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)
  // })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');

  // ga('create', 'UA-41354756-4', 'auto');
  // ga('send', 'pageview');
});