AOS.init({
    duration: 800,
    easing: "slide"
}),
function(e) {
    "use strict";
    e(window).stellar({
        responsive: !1,
        parallaxBackgrounds: !0,
        parallaxElements: !0,
        horizontalScrolling: !1,
        hideDistantElements: !1,
        scrollProperty: "scroll"
    }),
    e(".js-fullheight").css("height", e(window).height()),
    e(window).resize(function() {
        e(".js-fullheight").css("height", e(window).height())
    }),
    setTimeout(function() {
        e("#ftco-loader").length > 0 && e("#ftco-loader").removeClass("show")
    }, 1),
    e.Scrollax(),
    e(".carousel-cause").owlCarousel({
        autoplay: !0,
        center: !0,
        loop: !0,
        items: 1,
        margin: 30,
        stagePadding: 0,
        nav: !0,
        navText: ['<span class="ion-ios-arrow-back">', '<span class="ion-ios-arrow-forward">'],
        responsive: {
            0: {
                items: 1,
                stagePadding: 0
            },
            600: {
                items: 2,
                stagePadding: 50
            },
            1e3: {
                items: 3,
                stagePadding: 100
            }
        }
    }),
    e("nav .dropdown").hover(function() {
        var t = e(this);
        t.addClass("show"),
        t.find("> a").attr("aria-expanded", !0),
        t.find(".dropdown-menu").addClass("show")
    }, function() {
        var t = e(this);
        t.removeClass("show"),
        t.find("> a").attr("aria-expanded", !1),
        t.find(".dropdown-menu").removeClass("show")
    }),
    e("#dropdown04").on("show.bs.dropdown", function() {
        console.log("show")
    }),
    e(window).scroll(function() {
        var t = e(this).scrollTop()
          , a = e(".ftco_navbar")
          , n = e(".js-scroll-wrap");
        t > 150 && !a.hasClass("scrolled") && a.addClass("scrolled"),
        t < 150 && a.hasClass("scrolled") && a.removeClass("scrolled sleep"),
        t > 350 && (a.hasClass("awake") || a.addClass("awake"),
        n.length > 0 && n.addClass("sleep")),
        t < 350 && (a.hasClass("awake") && (a.removeClass("awake"),
        a.addClass("sleep")),
        n.length > 0 && n.removeClass("sleep"))
    });
    var t, a = {
        Android: function() {
            return navigator.userAgent.match(/Android/i)
        },
        BlackBerry: function() {
            return navigator.userAgent.match(/BlackBerry/i)
        },
        iOS: function() {
            return navigator.userAgent.match(/iPhone|iPad|iPod/i)
        },
        Opera: function() {
            return navigator.userAgent.match(/Opera Mini/i)
        },
        Windows: function() {
            return navigator.userAgent.match(/IEMobile/i)
        },
        any: function() {
            return a.Android() || a.BlackBerry() || a.iOS() || a.Opera() || a.Windows()
        }
    };
    e("#section-counter").waypoint(function(t) {
        if ("down" === t && !e(this.element).hasClass("ftco-animated")) {
            var a = e.animateNumber.numberStepFactories.separator(",");
            e(".number").each(function() {
                var t = e(this)
                  , n = t.data("number");
                console.log(n),
                t.animateNumber({
                    number: n,
                    numberStep: a
                }, 7e3)
            })
        }
    }, {
        offset: "95%"
    }),
    t = 0,
    e(".ftco-animate").waypoint(function(a) {
        "down" !== a || e(this.element).hasClass("ftco-animated") || (t++,
        e(this.element).addClass("item-animate"),
        setTimeout(function() {
            e("body .ftco-animate.item-animate").each(function(t) {
                var a = e(this);
                setTimeout(function() {
                    var e = a.data("animate-effect");
                    "fadeIn" === e ? a.addClass("fadeIn ftco-animated") : "fadeInLeft" === e ? a.addClass("fadeInLeft ftco-animated") : "fadeInRight" === e ? a.addClass("fadeInRight ftco-animated") : a.addClass("fadeInUp ftco-animated"),
                    a.removeClass("item-animate")
                }, 50 * t, "easeInOutExpo")
            })
        }, 100))
    }, {
        offset: "95%"
    }),
    e(".smoothscroll[href^='#'], #ftco-nav ul li a[href^='#']").on("click", function(t) {
        t.preventDefault();
        var a = this.hash
          , n = e(".navbar-toggler");
        e("html, body").animate({
            scrollTop: e(a).offset().top
        }, 700, "easeInOutExpo", function() {
            window.location.hash = a
        }),
        n.is(":visible") && n.click()
    }),
    e("body").on("activate.bs.scrollspy", function() {
        console.log("nice")
    }),
    e(".image-popup").magnificPopup({
        type: "image",
        closeOnContentClick: !0,
        closeBtnInside: !1,
        fixedContentPos: !0,
        mainClass: "mfp-no-margins mfp-with-zoom",
        gallery: {
            enabled: !0,
            navigateByImgClick: !0,
            preload: [0, 1]
        },
        image: {
            verticalFit: !0
        },
        zoom: {
            enabled: !0,
            duration: 300
        }
    }),
    e(".popup-youtube, .popup-vimeo, .popup-gmaps").magnificPopup({
        disableOn: 700,
        type: "iframe",
        mainClass: "mfp-fade",
        removalDelay: 160,
        preloader: !1,
        fixedContentPos: !1
    }),
    e("#appointment_date").datepicker({
        format: "m/d/yyyy",
        autoclose: !0
    }),
    e("#appointment_time").timepicker()
}(jQuery),
document.addEventListener("DOMContentLoaded", function() {
    let e = document.getElementById("butterflyBtn");
    function t(e, t) {
        let a = e.getBoundingClientRect();
        for (let n = 0; n < 7; n++) {
            let o = document.createElement("span");
            o.classList.add("click" === t ? "butterfly" : "butterfly-hover"),
            o.innerText = "\uD83D\uDC95",
            o.style.top = a.top + "px",
            o.style.left = a.right + "px",
            o.style.setProperty("--randomX", 100 * Math.random() - 50 + "px"),
            o.style.setProperty("--randomY", 100 * Math.random() - 50 + "px"),
            document.body.appendChild(o),
            setTimeout(function() {
                o.remove()
            }, 2500)
        }
    }
    document.addEventListener("DOMContentLoaded", function() {
        let e = document.querySelector(".your-button-class");
        e && e.addEventListener("click", function(a) {
            a.preventDefault(),
            t(a.target, "click");
            let n = e.getAttribute("href");
            setTimeout(function() {
                window.location.href = n
            }, 1e3)
        })
    }),
    e && e.addEventListener("mouseenter", function(e) {
        t(e.target, "hover")
    })
});