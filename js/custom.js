jQuery(document).ready(function($) {
    function scrollToSection(event) {
        event.preventDefault();
        var $section = $($(this).attr('href'));
        $('html, body').animate({
            scrollTop: $section.offset().top - 150
        }, 500);
    }
    $('[data-scroll]').on('click', scrollToSection);

    $('.scroll_down').click(function () {
        var url = $(this).attr('href');
        if(url.indexOf('the_artist') >= 0){
            $(this).attr('href','#the_art');
        }else if(url.indexOf('the_art') >= 0){
            $(this).attr('href','#exhibition');
        }else if(url.indexOf('exhibition') >= 0){
            $(this).attr('href','#derivative');
        }else if(url.indexOf('derivative') >= 0){
            $(this).attr('href','#gallery');
        }else if(url.indexOf('gallery') >= 0){
            $(this).attr('href','#contact');
        }else if(url.indexOf('contact') >= 0){
            $(this).hide(500);
        }
    });
    $('.top_arrow').click(function () {
        $('.scroll_down').show(500).attr('href','#the_artist');
    });
    ///

    $('a[href="#the_art"]').click(function (){
        $('.scroll_down').attr('href','#exhibition').show(500);
    });
    $('a[href="#exhibition"]').click(function (){
        $('.scroll_down').attr('href','#derivative').show(500);
    });
    $('a[href="#derivative"]').click(function (){
        $('.scroll_down').attr('href','#gallery').show(500);
    });
    $('a[href="#gallery"]').click(function (){
        $('.scroll_down').attr('href','#contact').show(500);
    });

    ///
    $('.close_menu').click(function () {
        $('.navbar-default .navbar-collapse').hide(500);
    });
    $('.navbar-header').click(function () {
        $('.navbar-default .navbar-collapse').show(500);
    });

}(jQuery));