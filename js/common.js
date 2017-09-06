$(document).ready(function() {


$('.table-notes-button1').click(function(e){

    var $newString = $('<div class="divTableRow divTableRowAdded"></div>');
    var $newColumn = $('<div class="divTableCell">&nbsp;</div>');
    var $newElements = $newColumn.clone();
    for(var i = 1; i < 12; i++)
    {
        $newElements = $newColumn.add($newElements.clone());
    }
    $('.divTableBody').append($newString).find($newString).append($newElements);
    e.preventDefault;

    var $inputValue;
$('.divTableCell').click(function(){
    if( !$(this).hasClass('input-added') ){
        $(this).addClass('input-added').append('<input type="text" class="addedText">');
    }
    $inputValue = $('.addedText').val();
    $(this).keypress(function(e) {
    if(e.which == 13) {
        $(this).click().append($inputValue).removeClass('input-added').find('.addedText').remove();
    }
});
});
    
});














var winwidth = $(window).outerWidth();
        if(winwidth < 654 ){
                $('.desktop-menu').css('display', 'none');
        } 
                else if(winwidth > 654 ){
                $('.desktop-menu').css('display', 'flex');
        }
var bodywidth = $('body').width();
 if (bodywidth < 992) {
    $('.btn').click(function(){
        setTimeout(function() {
            $('.header-menu').slideToggle({ top: 'toggle' });
            $('.hamburger').toggleClass("is-active");
        }, 300);
    });
 };


$('.reg').click(function(){
    $('.modal-left').addClass('slideOutLeft'), 300;
    $('.modal-right').addClass('slideOutLeft'), 300;
    $('.modal-arrow').show();
});
$('.modal-arrow').click(function(){
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
    if(e.which === 27) {
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
            $('.header-menu').css("display", "flex");
            $('.header-menu').css("display", "-webkit-flex");
            $('.hamburger').removeClass('is-active');

        } else if (winwidth < 992 - scrollbarWidth()) {
            $('.header-menu').css("display", "none");
            $('.hamburger').removeClass('is-active');
        }
        else if(winwidth < 768 -scrollbarwidth()){
                $('.modal-arrow').click();
        } 
    });   

     $(window).resize(function() {
        var winwidth = $(window).outerWidth();
        if(winwidth < 654 ){
                $('.desktop-menu').css('display', 'none');
        } 
                else if(winwidth > 654 ){
                $('.desktop-menu').css('display', 'flex');
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









    $(window).ready(function() {
        var winwidth = $(window).outerWidth();
        if (winwidth > 991) {
            $('.header-menu').css("display", "flex");

        } else if (winwidth < 992) {
            $(".header-menu").hide();
        }
    });






    $(".hamburger").click(function() {
        $(this).toggleClass("is-active");
    });
    $('.hamburger').click(function() {
        $('.header-menu').slideToggle({ top: 'toggle' });

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