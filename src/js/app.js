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

const openPopUp = document.querySelector('open_pop_up');
const closePopUp = document.querySelector('close_pop_up');
const PopUp = document.querySelector('pop_up');

$(document).ready(function() {

	//E-mail Ajax Send
	$("form").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "mail.php", //Change
			data: th.serialize()
		}).done(function() {
			alert("Thank you!");
			setTimeout(function() {
				// Done Functions
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});

});

$(function() {
    $('.open_pop_up').click(function(event){
        event.preventDefault();
        $('.pop_up').toggleClass('open');
        $('body').toggleClass('lock');
    });
    $('.close_pop_up').click(function(){
        $('.pop_up').removeClass('open');
        $('body').removeClass('lock');
    });

});

$(function() {
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });

    $('#nav-icon1').click(function(event) {
        $('#nav-icon1, .header_list').toggleClass('active');
        $('body').toggleClass('lock');
    });
    $('.header_item_link').click(function(event) {
        $('#nav-icon1, .header_list').removeClass('active');
        $('body').removeClass('lock');
        $('#nav-icon1').removeClass('open');
    });

});


