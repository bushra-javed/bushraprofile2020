$(document).ready(function () {
$('.portfolio-detail-1').each(function () {

    $(this).on('mouseenter', function () {
        $(this).find('.portfolio-text-div1').fadeIn();
        $('.portfolio-detail-div').fadeIn();

    });
});
$('.portfolio-detail-1').each(function () {
    $(this).on('mouseleave', function () {
        $(this).find('.portfolio-text-div1').fadeOut();
        $('.portfolio-detail-div').fadeOut();
    });
});



});