/*------------------------PRICE-CALCULATOR--------------------------------------*/
$(document).ready(function () {
    let type = 0;
    $('.typee').on('change', function () {
        type = $(this).val();
        $('.price').text(calculate() + " российских рублей");
    });
    let design = 0;
    $('.designe').on('change', function () {
        design = $(this).val();
        $('.price').text(calculate() + " российских рублей");
    });
    let responsive = 0;
    $('.adapt').on('change', function () {
        responsive = $(this).val();
        $('.price').text(calculate() + " российских рублей");
    });

    function calculate() {
        let priceOne = [1000, 2000, 3000, 4000];
        let priceTwo = [500, 1000, 2000];
        let priceThree = [700, 1000, 1500, 2000];
        let calcPriceOne = 0;
        $('.typee').change(function () {
            calcPriceOne = $(this).val();
        });
        let calcPriceTwo = 0;
        $('.designe').change(function () {
            calcPriceTwo = $(this).val();
        });
        let calcPriceThree = 0;
        $('.adapt').change(function () {
            calcPriceThree = $(this).val();
        });
        for (let i = 0; i < priceOne.length; i++) {
            if (i + 1 == type) {
                calcPriceOne = priceOne[i];
            }
        };
        for (let i = 0; i < priceTwo.length; i++) {
            if (i + 1 == design) {
                calcPriceTwo = priceTwo[i];
            }
        };
        for (let i = 0; i < priceThree.length; i++) {
            if (i + 1 == responsive) {
                calcPriceThree = priceThree[i];
            }
        };
        return calcPriceOne + calcPriceTwo + calcPriceThree;
    };
    $('.price').text(calculate() + " российских рублей");
    /*--------------------DEADLINE----------------------------------------------*/
    if (calculate() == 0) {
        $('.deadline').text(0 + " дней");
    } else if (calculate() > 0 && calculate() <= 2500) {
        $('.deadline').text(1 + " день");
    } else if (calculate() > 2500 && calculate() <= 4000) {
        $('.deadline').text(2 + " дня");
    } else if (calculate() > 4000) {
        $('.deadline').text(3 + " дня");
    };

    /*------------------------STATS-COUNTER-ANIMATE-----------------------------*/
    $('.stats_count').each(function () {
        $(this).prop('Counter', 0).animate({
            Counter: $(this).text()
        }, {
            duration: 3000,
            easing: 'swing',
            step: function (now) {
                $(this).text(Math.ceil(now));
            }
        });
    });
    /*------------------------------NAV-SCROLL--------------------------------*/
    $('a[href^="#"]').click(function () {
        let valHref = $(this).attr("href");
        $('html, body').animate({
            scrollTop: $(valHref).offset().top - 60 + "px"
        });
    });

    /*--------------------ACTIVE-SCROLL-----------------------------------------*/
    $(window).scroll(() => {
        let scrollDistance = $(window).scrollTop();

        $(".section").each((i, el) => {

            if ($(el).offset().top - $("nav").outerHeight()+600<= scrollDistance) {
                $("nav a").each((i, el) => {
                    if ($(el).hasClass("active")) {
                        $(el).removeClass("active");
                    }
                });

                $('nav li:eq(' + i + ')').find('a').addClass('active');
            }

        });

    });

});

AOS.init({
  // Global settings:
  disable: false, // accepts following values: 'phone', 'tablet', 'mobile', boolean, expression or function
  startEvent: 'DOMContentLoaded', // name of the event dispatched on the document, that AOS should initialize on
  initClassName: 'aos-init', // class applied after initialization
  animatedClassName: 'aos-animate', // class applied on animation
  useClassNames: false, // if true, will add content of `data-aos` as classes on scroll
  disableMutationObserver: false, // disables automatic mutations' detections (advanced)
  debounceDelay: 50, // the delay on debounce used while resizing window (advanced)
  throttleDelay: 99, // the delay on throttle used while scrolling the page (advanced)


  // Settings that can be overridden on per-element basis, by `data-aos-*` attributes:
  offset: 200, // offset (in px) from the original trigger point
  delay: 0, // values from 0 to 3000, with step 50ms
  duration: 1000, // values from 0 to 3000, with step 50ms
  easing: 'ease', // default easing for AOS animations
  once: false, // whether animation should happen only once - while scrolling down
  mirror: false, // whether elements should animate out while scrolling past them
  anchorPlacement: 'top-bottom', // defines which position of the element regarding to window should trigger the animation

});
