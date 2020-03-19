
$(function() {
    $(window).scroll(function(){
        
        if ( $(this).scrollTop() > 200 ){
           // $('.back-to-top').fadeIn();
            $('.back-to-top').css({
                'opacity' : '1',
            });

        }

        else {
          // $('.back-to-top').fadeIn();
            $('.back-to-top').css({
                'opacity' : '0',
            });
        }
        
    });

    $('.back-to-top').on( 'click', function(e) {
        e.preventDefault();
    $('html, body').animate({
        'scrollTop': '0'
    }, 500, 'swing');
    });
});