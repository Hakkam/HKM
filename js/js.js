/*global $*/
$(function () {
    'use strict';


    setTimeout(function () {
        $('.load-parent').fadeOut(500);

    }, 2000);

    setTimeout(function () {
        $('header .header-content h1').addClass('ready-name');
        $('header .header-content p').addClass('ready-info');
        $('header .bottom-nav .fas').addClass('red');
        $('.lines').addClass('tall');
        $('header .top ul li').addClass('rdy');

    }, 2500);
});
