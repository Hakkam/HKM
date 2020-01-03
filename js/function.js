/*global $*/
$(function () {
    'use strict';
    var elem = document.documentElement,
        x = false,
        winHei = $(window).height(),
        answer = 1,
        $win = $(window);

    $(".ar-column").on("click", function () {
        $(this).addClass("clicked-lang");
        $(".en-column").addClass("n-clicked-lang");
        setTimeout(function () {
            $('.first-seen').css("opacity", "0");

        }, 500);
        setTimeout(function () {
            $('.first-seen').css("display", "none");

        }, 3500);

        //        ===============================
        setTimeout(function () {
            $('header .header-content h1').addClass('ready-name');
            $('header .header-content p').addClass('ready-info');
            $('header .bottom-nav .fas').addClass('red');
            $('.lines').addClass('tall');
            $('header .top ul li').addClass('rdy');

        }, 3500);


        setTimeout(function () {
            $('.load-parent').fadeOut(500);

        }, 3000);
    });

    //for browser tab
    $win.focus(function () {
        document.title = "حكم عبدالله | مصمم ومطور مواقع";
    });

    $win.blur(function () {
        document.title = "نود عودتك سريعاً !";
    });


    $('.indc ul li').on('click', function () {
        $(this).addClass("chosen").siblings().removeClass("chosen")
        var ind = $(this).index();
        $('.testim .row').eq(ind).removeClass('hidden').siblings('.row').addClass('hidden');

        $('.testim .row:not(.hidden) .col-md-5').animate({
            left: "0px",
            opacity: "1"
        }, 500);
        $('.testim .row .col-md-5:first-child').css({
            left: "-50px",
            opacity: "0"
        })
        $('.testim .row .col-md-5:last-child').css({
            left: "50px",
            opacity: "0"
        })

        $('.testim .num-now').text("0" + ++ind);
        console.log(ind)
    })
    $("header .fas").on('click', function () {
        $('html,body').animate({
            scrollTop: winHei
        }, 1000);
    });

    //cases indicatorsvar n = 0;
    $(".fa-long-arrow-alt-right").on('click', function () {

        $('.cases-ind').eq(0).addClass('ope').siblings('.cases-ind').removeClass('ope');
    });
    $(".fa-long-arrow-alt-left").on('click', function () {

        $('.cases-ind').eq(1).addClass('ope').siblings('.cases-ind').removeClass('ope');


    });

    $(".cases .card-content .more").on('click', function () {
        $('<div class="flash"></div>').appendTo('body')
    });


    $("header .bottom-nav .fas.red").on('click', function () {
        $('html,body').animate({
            scrollTop: winHei
        }, 1000);
    });
    $("#about").on("click", function () {
        if ($(".nav").hasClass('apeer')) {
            $(".nav").addClass('vanish');

            function explode() {
                $(".nav").removeClass('apeer');
            }
            setTimeout(explode, 1000);
        } else {
            $(".nav").removeClass('vanish');
            $(".nav").addClass('apeer');
        }
        $("header nav.top").toggleClass('rdy');
        $(" body ").toggleClass('stiky-header');

        $("ul li").each(function (i) {
            setTimeout(function () {
                $("ul li")
                    .eq(i)
                    .toggleClass("show");
            }, 500 * (i + 1));
        });
    });
    $(".nav ul li").click(function () {
        var id = $(this).attr('data-section');
        $('html, body').animate({
            scrollTop: $("#" + id).offset().top
        }, 1000);

        function explode() {
            $(".nav").removeClass('apeer');
            $("header nav.top").removeClass('rdy');
            $(".nav").addClass('vanish');
            $("ul li").toggleClass("show");
            $(" body ").toggleClass('stiky-header');
        }
        setTimeout(explode, 1000);
    });
    $(window).scroll(function () {
        if ($(window).scrollTop() > 200) {
            $('header .top ul').addClass('f-nav');
        } else {
            $('header .top ul').removeClass('f-nav');

        }
    });
});
