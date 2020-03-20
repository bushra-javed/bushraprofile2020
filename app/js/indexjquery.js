﻿

$(document).ready(function () {
    
    $('ul.parent  li.dropdown').hover(function () {
        $('div.child', this).show();

    }, function () {
        $('div.child', this).hide();

    });



    $('#search-web ,.search-web-lg').on('click', function () {
        $('.top-search').css(
            {
                'top': '0',
                'display': 'none',
            }).slideDown('1000');
    });
    
    $('#close').click(function () {
        $('.top-search').slideUp('1000');
    });




    $(".up-arrow1").hide();

    $('li:has("ul")').click(function () {
        $(this).children('ul').toggle();
        var targetOffset = $(this).offset().top - 210;
        $(this).find('.down-arrow1').toggle();
        $(this).find('.up-arrow1').toggle();
        $(this).children('.up-arrow1').toggle();
    });


    $('.toggle-button').on('click', function () {
        $('li:has("ul")').children('ul').slideUp('fast');
        // $('#wrapper1').toggle();
        // $('#sidenavContainer').toggle();
        $("#sidenavContainer").css('display', 'block'); // you can also use $(".yourClass").hide();
        $('#sidenavContainer').toggleClass('active');
    });
    if ((screen.width > 555)) {
        // if screen size is 1025px wide or larger
        $("#sidenavContainer").css('display', 'block'); // you can also use $(".yourClass").hide();
    }
    else if ((screen.width <= 555)) {
        // if screen size width is less than 1024px
        $("#sidenavContainer").css('display', 'block'); // here you can also use show();
    }
});