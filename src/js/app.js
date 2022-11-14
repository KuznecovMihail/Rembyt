import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";
import Swiper, { Autoplay, Navigation, Pagination } from 'swiper';


flsFunctions.isWebp();

const swiper = new Swiper('.swiper', {
    
    modules: [Navigation, Pagination],
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    pagination: {
        el: '.swiper-pagination',
        clickable: true
    },
    slidesPerView: 1,
    spaceBetween: 20,
    breakpoints: {
        1260:{
            slidesPerView: 3 
        },
        850:{
            slidesPerView: 2 
        }
    },
    centeredSlides: true,
    grabCursor: true,
    simulateTouch: true,
    keyboard: {
        enabled: true,
        onlyInViewport: true,
        pageUpDown: true
    },
    autoplay:{
        delay: 5000,
        disableOnInteraction: true
    }
    

});

$(function() {
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });

    $('#nav-icon1').click(function(event) {
        $('#nav-icon1, .header_list').toggleClass('active');
        $('body').toggleClass('lock');
    });

});


