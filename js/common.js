$(document).ready(function() {


    $('.table-notes-button1').click(function(e) {

        var $newString = $('<div class="divTableRow divTableRowAdded"></div>');
        var $newColumn = $('<div class="divTableCell">&nbsp;</div>');
        var $newColumnFirst = $('<div class="divTableCell input-added divTableCellCheckbox"><input class="styled-checkbox" type="checkbox" id="check"><label for="check"></label></div>');
        var $newColumnLast = $('<div class="divTableCell input-added divTableCellCross">&nbsp;</div>');
        var $newElements = $newColumn.clone();
        for (var i = 1; i < 10; i++) {
            $newElements = $newColumn.add($newElements.clone());
        }
        $('.divTableBody').append($newString).find($newString).append($newColumnFirst).append($newElements).append($newColumnLast);
        e.preventDefault;

        var $inputValue;
        $('.divTableCell').click(function() {
            if (!$(this).hasClass('input-added')) {
                $(this).addClass('input-added').append('<input type="text" class="addedText">');
            }
            $inputValue = $('.addedText').val();
            $(this).keypress(function(e) {
                if (e.which == 13) {
                    $(this).click().append($inputValue).find('.addedText').remove();
                }
            });
        });

    });
    var h1 = $('.h1').height();
    var h2 = $('.h2').height();
    var h3 = $('.h3').height();
    var h4 = $('.h4').height();
    var h5 = $('.h5').height();
    var h6 = $('.h6').height();
    var hall = $(window).innerHeight();
    var ha = h1 + h2 + h3 + h4;
    var hb = hall - ha;
    console.log(hb);
    $('.h5').css('min-height', hb - 30);
    $(window).resize(function() {
        var h1 = $('.h1').height();
        var h2 = $('.h2').height();
        var h3 = $('.h3').height();
        var h4 = $('.h4').height();
        var h5 = $('.h5').height();
        var h6 = $('.h6').height();
        var hall = $(window).innerHeight();
        var ha = h1 + h2 + h3 + h4;
        var hb = hall - ha;
        console.log(hb);
        $('.h5').css('min-height', hb - 30);

    });










    var winwidth = $(window).outerWidth();
    if (winwidth < 654) {
        $('.desktop-menu').css('display', 'none');
    } else if (winwidth > 654) {
        $('.desktop-menu').css('display', 'flex');
    }
    var bodywidth = $('body').width();
   


    $('.reg').click(function() {
        $('.modal-left').addClass('slideOutLeft'), 300;
        $('.modal-right').addClass('slideOutLeft'), 300;
        $('.modal-arrow').show();
    });
    $('.modal-arrow').click(function() {
        $(this).hide();
        $('.modal-left').removeClass('slideOutLeft'), 300;
        $('.modal-right').removeClass('slideOutLeft'), 300;
        $('.modal-left').css('transition', '0.3s'), 300;
        $('.modal-left').css('transition-timing-function', 'ease-out'), 300;
        $('.modal-right').css('transition', '0.3s'), 300;
        $('.modal-right').css('transition-timing-function', 'ease-out'), 300;
    });



    $modal = $('.modal-frame');

    function enterNewConvo() {
        $('.create-chat-input').focus();
    }

    function closeModal() {
        $modal.removeClass('active');
        $modal.addClass('leave');
    }

    $('.modal-popup').click(function() {
        $modal.toggleClass('active');
        $modal.removeClass('leave');
        enterNewConvo();
    })

    $('.modal-overlay').click(function() {
        closeModal();
    })

    $('.modal-cross').click(function() {
        closeModal();
    })

    $(document).keyup(function(e) {
        if (e.which === 27) {
            closeModal();
        }
    })



    function scrollbarWidth() {
        var block = $('<div>').css({ 'height': '50px', 'width': '50px' }),
            indicator = $('<div>').css({ 'height': '200px' });

        $('body').append(block.append(indicator));
        var w1 = $('div', block).innerWidth();
        block.css('overflow-y', 'scroll');
        var w2 = $('div', block).innerWidth();
        $(block).remove();
        return (w1 - w2);
    }


    $(window).resize(function() {
        var winwidth = $(window).outerWidth();
        if (winwidth > 991 - scrollbarWidth()) {
            // $('.header-menu').css("display", "flex");
            // $('.header-menu').css("display", "-webkit-flex");
            $('.hamburger').removeClass('is-active');

        } else if (winwidth < 992 - scrollbarWidth()) {
            // $('.header-menu').css("display", "none");
            // $('.hamburger').removeClass('is-active');
        } else if (winwidth < 768 - scrollbarwidth()) {
            $('.modal-arrow').click();
        }
    });

    $(window).resize(function() {
        var winwidth = $(window).outerWidth();
        if (winwidth < 654) {
            $('.desktop-menu').css('display', 'none');
        } else if (winwidth > 654) {
            $('.desktop-menu').css('display', 'flex');
        }
    });


    $(window).resize(function() {
        var winwidth = $(window).outerWidth();
        if (winwidth < 521 - scrollbarWidth()) {
                $('.info-menu-item').html('&nbsp');
    $('.signIn-menu-item').text('Вход');
        } else if (winwidth > 520 - scrollbarWidth()) {
             $('.info-menu-item').text('Справка');
    $('.signIn-menu-item').text('Личный кабинет');
        }
    });
       $(window).ready(function() {
        var winwidth = $(window).outerWidth();
        if (winwidth < 521 - scrollbarWidth()) {
                $('.info-menu-item').html('&nbsp');
    $('.signIn-menu-item').text('Вход');
        } else if (winwidth > 520 - scrollbarWidth()) {
             $('.info-menu-item').text('Справка');
    $('.signIn-menu-item').text('Личный кабинет');
        }
    });









    $(function() {
        var shrinkHeader = 1;
        $(window).scroll(function() {

            // 
            var scroll = getCurrentScroll();
            if (scroll >= shrinkHeader) {
                $('header').addClass('shrink');
                $('li').addClass('white');
                $('.brand-text').addClass('brand-text-e');
                $('.hamburger .line').css("background-color", "white");
                $('.header-menu').css("top", "60px");

            } else {
                $('header').removeClass('shrink');
                $('li').removeClass('white');
                $('.brand-text').removeClass('brand-text-e');
                $('.hamburger .line').css("background-color", "white");
                $('.header-menu').css("top", "75px");
            }




        });

        function getCurrentScroll() {
            return window.pageYOffset || document.documentElement.scrollTop;
        }
    });







});

$('a[href^="#"]').click(function() {
    $('html,body').animate({ scrollTop: $(this.hash).offset().top });
    return false;
    e.preventDefault();
});

$(document).ready(function() {
    $('#element-to-animate1').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    $('#element-to-animate2').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    $('#element-to-animate3').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    $('#element-to-animate4').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    $('#element-to-animate5').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    $('#element-to-animate6').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });
    $('#element-to-animate7').addClass("hidden").viewportChecker({
        classToAdd: 'visible animated fadeInUp',
        offset: 100
    });

});