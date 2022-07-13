$(document).ready(function(){


    // owl-carousel function 
    $('.carousel').owlCarousel({
        margin:20,
        loop:true,
        autoplayTimeOut:2000,
        autoplayHoverPouse:true,
        responsive:{
            0:{
                item:1,
                nav:false
            },
            600:{
                item:2,
                nav:false
            },
           1000:{
                item:3,
                nav:false
            }

        }


    });
});