/**
 * Created by Lily on 20.04.2016.
 */
$(function(){
    $('.button').on('click', function(){
        $('.tooltip').css('display', 'block');
    });

    $(".input").mouseover(function(){
        $(this).next('.tooltip').fadeIn(300);
    });

    $(".input").mouseout(function(){
        $(this).next('.tooltip').fadeOut(50);
    });
});







