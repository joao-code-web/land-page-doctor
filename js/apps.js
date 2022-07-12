function listaMobile() {

    $('.container-img').click(function(){
        $('.menu-mobile > ul').slideToggle(1000);
    });

}

listaMobile();


function scrollAnimate() {
    $('nav a').click(function(){
        var href = $(this).attr('href');
        var offSetTop = $(href).offset().top;

        $('html,body').animate({
            'scrollTop': offSetTop
        },2000);
        return false;
    });
}

scrollAnimate();

// slide slick

$('.mosaic .container .mosaic-wraper').slick({
    centerMode: false,
    slidesToShow: 6,
    arrow: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 3,
            }
        },
        {
            breakpoint: 580,
            settings: {
                arrows: false,
                centerMode: true,
                slidesToShow: 2,
            }
        },
        {
            breakpoint: 380,
            settings: {
                slidesToShow: 1,
                arrows: false,
                centerMode: true,
            }
        }
    ]
});

$('.tratamentos-container .container').slick({
    centerMode: false,
    slidesToShow: 3,
    arrows: false,
    infinite: false,
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: false,
                dots: true,
                infinite: false,
                centerMode: false,
                slidesToShow: 1,
            }
        },
        {
            breakpoint: 480,
            settings: {
                arrow: false,
                dots: true,
                infinite: false,
                centerMode:false,
                slidesToShow: 1,
            }
        }
    ]
});

$('.container-depoimentos .container').slick({
    centerMode: false,
    slidesToShow: 1,
    infinite: false,
    dots: true,
    arrows: false,

});