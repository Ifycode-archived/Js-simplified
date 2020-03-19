$(function(){

   //==========| get time during interval delay |=================
    var todaysDate = new Date();
    var secondRotates = todaysDate.getSeconds()*6;

    $(".analogueClock .secondHand").css({
        'transform':'rotate('+ secondRotates + 'deg)',
    });

    var minuteRotates = todaysDate.getMinutes()*6;

    $(".analogueClock .minuteHand").css({
        'transform':'rotate('+ minuteRotates + 'deg)',
    });

    var hourRotates = todaysDate.getHours()*30;

    $(".analogueClock .hourHand").css({
        'transform':'rotate('+ hourRotates + 'deg)',
    });


    //==========| interval |=================

    setInterval(function(){

        var todaysDate = new Date();
        var secondRotates = todaysDate.getSeconds()*6;

        $(".analogueClock .secondHand").css({
            'transform':'rotate('+ secondRotates + 'deg)',
        });

        var minuteRotates = todaysDate.getMinutes()*6;

        $(".analogueClock .minuteHand").css({
            'transform':'rotate('+ minuteRotates + 'deg)',
        });

        var hourRotates = todaysDate.getHours()*30;

        $(".analogueClock .hourHand").css({
            'transform':'rotate('+ hourRotates + 'deg)',
        });

    }, 1000);
    
});