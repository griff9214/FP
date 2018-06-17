//-------------------Sticky aside form ---------------//
if (window.innerWidth > 992 && $('.aside__form').is('div.aside__form')) {
    var formHeight = $('.aside__form').outerHeight();
    $(window).scroll(function () {
        if ($(window).scrollTop() >= $('.page-content').offset().top) {
            $('.aside__form').css('width', $('.aside__form').outerWidth());
            $('.aside__form').css('left', $('.aside__form').offset().left);
            $('.aside__form').addClass('aside__form_fixed');
            $('.aside__form').removeClass('aside__form_on-bottom');
        }
        else {
            $('.aside__form').removeClass('aside__form_fixed');
            $('.aside__form').removeClass('aside__form_on-bottom');
            $('.aside__form').css('margin-top', 0);
        }
        //убираем фиксацию при прокрутке до футера + 2 паддинга контента страницы
        if ($(window).scrollTop() >= $('.page__footer').offset().top - $('.form-caption').outerHeight() - parseInt($(".page-content").css("padding-top")) - parseInt($(".page-content").css("padding-bottom"))) {
            $('.aside__form').removeClass('aside__form_fixed');
            $('.aside__form').addClass('aside__form_on-bottom');
            $('.aside').addClass('aside_on-bottom');
        }
        //гасим форму при прокрутке
        if ($(window).scrollTop() > $('.page__footer').offset().top - formHeight - 160) {
            $('.aside__form > form').hide();
        }
        else {
            $('.aside__form > form').show();
        }

    });
}
//-------------------Sticky aside form ---------------//

//-------------------Thanksgiven sizing---------------//
$(".ourThanks__slide").on("click", function (e) {
    increasedSrc = $(this).find('img').data('full');
    $('body').prepend('<div class="img-popup"><img class="ourThanks__thanksgiven ourThanks__thanksgiven_increased" src="' + increasedSrc + '" alt=""></div>');
    $(".ourThanks__thanksgiven_increased").fadeIn();
});

$("body").on("click", "div.img-popup", function () {
    $(".ourThanks__thanksgiven_increased").fadeOut();
    $(".img-popup").fadeOut();
    $(".img-popup").remove();
});
//-------------------Thanksgiven sizing---------------//

//-------------------Review sizing---------------//
if ($(".review").is("div.review")) {
    $(".review").each(function () {
        if ($(this).data('full') != undefined) {
            $(this).addClass('review_with-img');
        }
    });
    $(".review.review_with-img").on("click", function (e) {
        increasedSrc = $(this).data('full');

        $('body').prepend('<div class="img-popup"><img class="ourThanks__thanksgiven ourThanks__thanksgiven_increased" src="' + increasedSrc + '" alt=""></div>');
        $(".ourThanks__thanksgiven_increased").fadeIn();
    });

    $("body").on("click", "div.img-popup", function () {
        $(".ourThanks__thanksgiven_increased").fadeOut();
        $(".img-popup").fadeOut();
        $(".img-popup").remove();
    });
}
//-------------------Review sizing---------------//

//-------------------Dropdown menu---------------//
$('.header-nav-items__item_parent').hover(function () {
    $(this).find("ul:first").toggleClass('visible');
});
//-------------------Dropdown menu---------------//

//-------------------Sticky Footer---------------//
$(document).ready(function () {
    var footerHeight = $('footer.footer').outerHeight();
    $('.page').css('padding-bottom', footerHeight);
});
//-------------------Sticky Footer---------------//
//-------------------Animate Numbers---------------//
$('.animateNumbersNum__num').each(function () {
    $(this).prop('Counter', 0).animate({
        Counter: $(this).text()
    }, {
        duration: 5000,
        easing: 'easeOutBack',
        step: function (now) {
            $(this).text(Math.ceil(now));
        }
    });
});
//-------------------Animate Numbers---------------//

//-------------------Smoke Parallax---------------//
$(document).ready(function () {
    if ($('div').is('#smoke')) {
        var scene = document.getElementById('smoke');
        var parallaxInstance = new Parallax(scene);
        parallaxInstance.friction(0.2, 0.2);
    }
});
//-------------------Smoke Parallax---------------//

//-------------------Correct DOM---------------//
if (window.innerWidth <= 992) {
    $(".promo-section__left-side").before($(".promo-section__header"));
    $(".promo-section__left-side").before($(".promo-section__sub-header"));
    //$(".aboutSection h3").after($(".aboutSectionBoss"));
    $(".aboutSection__article").before($(".aboutSection__Header"));
    $(".aboutSection__article").before($(".aboutSection__SubHeader"));
    $('.servicesRow--left').toggleClass('servicesRow--left servicesRow--center');
    $('.servicesRow--right').toggleClass('servicesRow--right servicesRow--center');
}
$(window).load(function () {
    $('.serviceCard__title').each(function () {
        $(this).css('height', $(this).outerHeight() + 1);
        $(this).css({top: 0, bottom: 0, right: 0, left: 0, margin: 'auto'});
    })
});
//-------------------Correct DOM---------------//

//-------------------serviceCard hover---------------//
$('.serviceCard').hover(function () {
        if ($(this).closest('.servicesRow--left').length + $(this).closest('.servicesRow--right').length + $(this).prev('.serviceCard').length == 2) {
            var linksBlockMargin = 0;
        } else {
            var linksBlockMargin = 20;
        }

        $(this).find('.serviceCard__title').animate({
            'margin-top': '20px'
        }, 400, 'swing');
        var linksBlock = $(this).find('.serviceCard__linksBlock');
        if (window.innerWidth <= 992) {
            var top = ($(this).outerHeight() - linksBlock.outerHeight()) / 2;
        }
        else {
            var top = $(this).find('.serviceCard__title').innerHeight() + 20 + linksBlockMargin;
        }
        linksBlock.animate({
            'top': top,
            'opacity': '1'
        }, 400, 'swing');
    },
    function () {
        $(this).find('.serviceCard__title').animate({
            'margin-top': ($(this).outerHeight() - $(this).find('.serviceCard__title').outerHeight()) / 2
        }, 400, 'swing');
        $(this).find('.serviceCard__linksBlock').animate({
            'top': $(this).outerHeight(),
            'opacity': '0'
        }, 400, 'swing');

    });
//-------------------serviceCard hover---------------//

//---------sizing input, which contains button-------//
$(window).load(function () {
    var inputHeight = $('.parallax-window__button').outerHeight();
    $('.parallax-window__input').css({
        height: inputHeight,
    });
    if (window.innerWidth > 992) {
        $('.parallax-window__button').css("margin-left", -$('.button.parallax-window__button').outerWidth());
        $('.parallax-window__input').css({
            height: inputHeight,
            'padding-right': $('.parallax-window__button').outerWidth() + parseInt($('.parallax-window__input').css('padding-right')),

        });

    }
})
//---------sizing input, which contains button-------//


//-------------------Men Parallax---------------//
var parallx = null;
var demoCount = 0;

function Parallx() {
    var self = this;
    $(".promo-section").mousemove(function (e) {
        parallax.mouseX(e.pageX);
        parallax.mouseY(e.pageY);
    });
    self.sensitivityMultiplier = ko.observable(0.01);
    self.wrapperOffset = $('.promo-section').offset();
    self.wrapperCenter = {
        x: ko.computed(function () {
            return ($('.promo-section').width()) / 2
        }, this),
        y: ko.computed(function () {
            return self.wrapperOffset.top + ($('#parallxWrapper').height() / 2)
        }, this)
    };
    self.mouseX = ko.observable(0);
    self.mouseY = ko.observable(0);
    self.relativeMouse = {
        x: ko.computed(function () {
            return (self.mouseX() - self.wrapperCenter.x()) * self.sensitivityMultiplier()
        }, this),
        y: ko.computed(function () {
            return ((self.mouseY() - self.wrapperCenter.y()) * -1) * self.sensitivityMultiplier() * 0.2
        }, this)
    };
    self.origin = {
        x: ko.computed(function () {
            return ((self.mouseX()) / $(window).width()) * 100
        }, this),
        y: ko.computed(function () {
            return ((self.mouseY()) / $(window).height()) * 100
        }, this)
    };
};

$(document).ready(function () {
    if ($("div").is("#parallxWrapper")) {
        parallax = new Parallx();
        ko.applyBindings(parallax);

        setInterval(function () {
            if (demoCount < 130) {
                parallax.mouseX(parallax.mouseX() + 5);
                demoCount += 1;
            }
        }, 40);
    }
});
//-------------------Men Parallax---------------//


//-------------------InputMask---------------//
$("input").inputmask(undefined, {
    oncomplete: function () {
        $(this).data('completed', true);
        if ($(this).hasClass('parallax-window__input') == true) {
            $(this).css('box-shadow', ' inset 0 0 19.24px 6.76px rgba(13, 162, 126, 0.5)');
        } else {
            $(this).css('box-shadow', '0 0 10px 3px rgba(13, 162, 126, 0.5)');
        }
    },
    onincomplete: function () {
        $(this).data('completed', false);
        if ($(this).hasClass('parallax-window__input') == true) {
            $(this).css('box-shadow', 'inset 0 0 19.24px 6.76px rgba(255, 107, 78, 0.5)');
        } else {
            $(this).css('box-shadow', ' 0 0 10px 3px rgba(255, 107, 78, 0.5)');
        }
    }
});
//-------------------InputMask---------------//

//-------------------FormSubmit---------------//
var onloadCallback = function () {
    grecaptcha.render('modal_recaptcha', {
        'sitekey': '6Lclt0AUAAAAAD3R3YC3mvaRD8SOssmU26OYbYuL'
    });
};

$('form button').click(function (event) {
    var valid = true;
    $(this).closest('form').find('input').each(
        function (index, element) {
            var data = $(element).data();
            if (data.inputmask && !data.completed) {
                valid = false;
                $(element).css('box-shadow', ' 0 0 10px 3px rgba(255, 107, 78, 0.5)');
            }
            else if ($(element)['0'].required && $(element).val().length == 0) {
                valid = false;
                $(element).css('box-shadow', ' 0 0 10px 3px rgba(255, 107, 78, 0.5)');
            }
        }
    );
    if (valid) {
        formData = $(this).closest('form').serialize();
        $.ajax({
            type: 'POST',
            url: '/mailer.php',
            context: this,
            data: formData,
            beforeSend: function () {
                $(this).closest(".modal").modal('hide');
                $("#ResultModal").remove();
            },
            success: function (data) {
                $("body").append(data);
                $("#ResultModal").modal();
            },
            error: function (xhr, str) {
                alert('Возникла ошибка: ' + xhr.responseCode);
            }
        });
    }

    event.preventDefault();
});

//-------------------FormSubmit---------------//

//-------------------Equivalent height---------------//
$.fn.equivalentHeight = function () {
    var mh = $(this).eq(0).height();
    $(this).each(function () {
        mh = $(this).height() > mh ? $(this).height() : mh;
    });
    $(this).height(mh);
};
$(window).load(function () {
    if (window.innerWidth >= 721) {
        $('.textBlock__header').equivalentHeight();
    }
    $('.news__title').equivalentHeight();
    $('.news__shortText').equivalentHeight();
});
//-------------------Equivalent height---------------//

//-------------------mmenu---------------//
$(document).ready(function () {
    // $('#menu').clone().addClass("cloned").addClass("mobile").insertBefore("#menu");
    if (window.innerWidth <= 720) {
        $('#menu').mmenu({
            extensions: ['theme-dark', 'effect-menu-slide', 'pagedim-black', 'position-right'],
            navbar: {
                title: '<div class="textBlock__header textBlock__header--inmenu">меню</div>'
            },
            clone: true,
            offCanvas: {
                pageSelector: ".page"
            }
        });
        var api = $('#menu').data('mmenu');
        api.bind('open:finish', function () {
            $('.hamburger').addClass('is-active');
        }).bind('close:finish', function () {
            $('.hamburger').removeClass('is-active');
        });
    }
})
;

//-------------------mmenu---------------//

//-------------------slick---------------//
$(document).ready(function () {
    $('.ourReviews__slider').slick({
        autoplay: true,
        autoplaySpeed: 4000,
        dots: true,
        arrowsToDots: true,
        adaptiveHeight: false,
        prevArrow: '<button class="slick-prev withnums" aria-label="Previous" type="button"></button></div>',
        nextArrow: '<button class="slick-next withnums" aria-label="Next" type="button"></button></div>',
    });
    $('.ourThanks__slider').slick({
        autoplay: false,
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        adaptiveHeight: false,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]
    });
    $('.ourClients__slider').slick({
        autoplay: true,
        autoplaySpeed: 2000,
        dots: false,
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                }
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            },
        ]

    });
});
// //-------------------slick---------------//

// //-------------------to top---------------//
$(window).scroll(function () {
    if ($(window).scrollTop() >= 200) {
        $(".to-top").fadeIn(400);
        //$(".to-top").animate({opacity: 1}, 500);
    }
    else {
        //$(".to-top").animate({opacity: 0}, 500);
        $(".to-top").fadeOut(400);
    }
});

$(".to-top").click(function() {
    $("html, body").animate({ scrollTop: 0 }, "slow");
    return false;
});
// //-------------------to top---------------//
