$(document).ready(function() {
    $('.slider').slick({
        arrows: false,
        dots: true
    });

    $.fn.wcTab = function(settings) {

        const options = $.extend({
            dataClick: 'data-id',
            dataOpen: 'data-open',
            toggle: true,
            activeClass: 'active',
            elemToAddActiveClass: '.tabs__btn'
        }, settings);

        this.each(function() {
            const elem = $(this);

            elem.on('click', function(e) {
                e.preventDefault();

                const id = $(this).attr(options.dataClick),
                    open = $('[' + options.dataOpen + '=' + id + ']');

                if(options.toggle) {
                    $('[' + options.dataOpen + ']').not(open).slideUp();
                    open.slideToggle();
                } else {
                    $('[' + options.dataOpen + ']').hide();
                    open.show();
                }

                if (options.activeClass) {
                    $(options.elemToAddActiveClass).removeClass('active');
                    elem.addClass('active');
                }
            });

        });
        return this;
    };
    if (screen.width > '720') {
        $('.tabs__btn').wcTab({
            toggle: false
        });
    } else {
        $('.tabs__btn').on('click', function(e) {
            e.preventDefault();
            $('.tabs__btn').removeClass('active');
            $(this).addClass('active');
            $('.tabs__content').slideUp();
            $(this).next('.tabs__content').slideDown();
        })
    }

    let hamburger = $('.hamburger');

    hamburger.on('click', function() {
        $(this).toggleClass('is-active');
        $('.menu').toggle();
    })
});




