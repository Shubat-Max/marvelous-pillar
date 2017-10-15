$(document).ready(function(){
    $('div.air-lock-cover').click(function(){
        var $al = $('.air-lock');
        var shutter_s = 1000;
        var lock_s = 500;

        var l_wing = setTimeout(function(){
            clearTimeout(l_wing);
            $al.find('.left-wing img').animate({
                left: "-=100"
            }, lock_s, function(){
                $al.find('.left-wing').animate({
                    left: "-="+$al.find('.right-wing').width()
                }, shutter_s, function(){
                    $al.find('.left-wing').hide();
                });
            });
        }, 1); 

        var r_wing = setTimeout(function(){
            clearTimeout(r_wing);
            $al.find('.right-wing img').animate({
                left: "+=100"
            }, lock_s, function(){
                $al.find('.right-wing').animate({
                    right: "-="+$al.find('.right-wing').width()
                }, shutter_s, function(){
                    $al.find('.right-wing').hide();
                });
            });
        }, 1);
    });
});