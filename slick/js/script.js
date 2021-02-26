$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        //adaptiveHeight: true -слайдер подстраивается по высоте под размер слайдов
        slidesToShow: 3,
        slidesToScroll: 2,
        speed: 500,
        easing: 'easeInElastic',
        //easing: 'easeInElastic' - функция плавности анимации https://easings.net/ru
        infinite: false,
        //infinite: false - выкл. бесконечную прокрутку сайта затемняет стрелку, если нельзя листать
        //style scc - .slider .slick-arrow.slick-disabled
        autoplay: true,
        //autoplay: true - автоматическая прокрутка сладов
        autoplaySpeed: 1500,
        //autoplaySpeed: 1500 - период прокрутки autoplay
    });
});





































































//$(document).ready(function(){
//	$('.slider').slick({
//		arrows:true,
//		dots:true,
//		slidesToShow:3,
//		autoplay:true,
//		speed:1000,
//		autoplaySpeed:800,
//		responsive:[
//			{
//				breakpoint: 768,
//				settings: {
//					slidesToShow:2
//				}
//			},
//			{
//				breakpoint: 550,
//				settings: {
//					slidesToShow:1
//				}
//			}
//		]
//	});
//});