(function ($) {

    // Add smooth scrolling to all links in navbar
    $(".navbar a,a.btn-appoint, .quick-info li a, .overlay-detail a ,.overlay-detail-new a ,.arrow-center-down a").on('click', function (event) {

        var hash = this.hash;
        if (hash) {
            // event.preventDefault();

            //    if you uncomment it than it will make the about.html#section-id not working
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 900, function () {
                window.location.hash = hash;
            });
        }

    });

    //jQuery to collapse the navbar on scroll
    $(window).scroll(function () {
        if ($(".navbar-default").offset().top > 50) {
            $(".navbar-fixed-top1").addClass("top-nav-collapse");
            // alert("lll");
        } else {
            $(".navbar-fixed-top1").removeClass("top-nav-collapse");
        }
    });



    var hamburger = document.getElementById('hamburger');

    $(hamburger).click(function () {
        $(this).toggleClass('is-active');
    })

    $(".sidebar-navbar-toggle-button .toggle-button-div").click(function () {
        // $("#sidebar").toggleClass('active1');
        $(".sidebar-wrapper").toggleClass('active1');
        $('#toggle-button').toggle();
        $('#toggle-closebutton').toggle();
        $(".rightwindow").toggleClass('active2');
    })


    //   $('#toggle-button').show();


    //   $(".home1").hover(function() {
    //     $(".home").css('display','inline-block')
    //   }, function () {
    //         $(".home").css('display','none')
    //         });


    $('.sidebar-list-ul').hover(function () {
        $(".sidebar-list-text").animate({
            "left": '135px',
            // "opacity": '0.5'

        });

        // $(".list-text").show( "slide", {direction: "left" }, 2000 );

        // $(".sidebar-li-1").css('color','red');
        $(".sidebar-li-1 i, .sidebar-li-3 i, .sidebar-li-5 i").css('color', 'black');
        $(".sidebar-li-1 span, .sidebar-li-3 span, .sidebar-li-5 span").css({
            'color': 'black'
        });

    }, function () {

        $(".sidebar-list-text").animate({
            "left": '-125px',

        });
        $(".list-fa").css('color', '#000');
        $(".list-text").css('color', '#000');

    });




})(jQuery);