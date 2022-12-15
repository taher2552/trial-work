$(document).ready(function(){

    $('.content').slick({
        autoplay: true,
        slidesToShow:3,
        slidesToScroll: 1,
        prevArrow: ".prev-btn",
        nextArrow: ".next-btn",
        responsive:[
            {
                breakpoint:1100,
                settings:{
                    slidesToShow:2
                }
            },
            {
                breakpoint:768,
                settings:{
                    slidesToShow:1
                }
            }
        ]
    
    });
});