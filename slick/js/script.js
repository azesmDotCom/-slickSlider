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
        autoplay: false,
        //autoplay: true - автоматическая прокрутка сладов
        autoplaySpeed: 1500,
        //autoplaySpeed: 1500 - период прокрутки autoplay
        //pauseOnFocus: true,
        //pauseOnFocus: true - останавливает слайдер при наведении мыши на слайд
        //pauseOnHover: true,
        //pauseOnHover: true - останавливает слайдер при наведении мыши на слайдер
        //pauseOnDotsHover: true,
        //pauseOnDotsHover: true - останавливает слайдер при наведении мыши на точки
        //draggable: true,
        //draggable: true - прокрутка слайдов с помощью перетягивания мышью на компе
        //swipe: true,
        //swype: true - прокрутка слайдов с помощью перетягивания мышью на тачскринах
        //touchThreshold: 5,
        //touchThreshold: 5 - прокрутка слайдера свайпом на тачскринах
        //touchMove: true,
        //touchMove: true - вкл. все возможности использования слайдера на тачскринах
        //waitForAnimate: true,
        //waitForAnimate: true - определяет на сколько быстро будет переключение слайдера, без ожидания окончания анимации
        //centerMode: true,
        //centerMode: true - устанавливает главный слайд по центру( по умолчанию false) .slider__item.slick-center
        //variableWidth: true,
        //variableWidth: true - определяет ширину слайдов
        //rows: 1,
        //rows: 2 - количество слайдов в ряд
        //slidesPerRow: 2,

        //вертикальный слайдер
        //vertical: true,
        //verticalSwiper: true,
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