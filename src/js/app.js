import * as flsFunctions from "./modules/functions.js";
import $ from "jquery";
import swal from 'sweetalert';

flsFunctions.isWebp();

$(function() {
    $('#nav-icon1').click(function(){
        $(this).toggleClass('open');
    });

    $('#nav-icon1').click(function(event) {
        $('#nav-icon1, .header_list').toggleClass('active');
        $('body').toggleClass('lock');
    });

});


