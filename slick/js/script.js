$(document).ready(function () {
    $('.slider').slick({
        arrows: true,
        dots: true,
        adaptiveHeight: true,
        //adaptiveHeight: true -слайдер подстраивается по высоте под размер слайдов
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        easing: 'ease',
        ////easing: 'easeInElastic' - функция плавности анимации https://easings.net/ru
        infinite: true,
        //infinite: false - выкл. бесконечную прокрутку сайта затемняет стрелку, если нельзя листать
        //style scc - .slider .slick-arrow.slick-disabled
        initialSlide: 0,
        autoplay: false,
        //autoplay: true - автоматическая прокрутка сладов
        autoplaySpeed: 1500,
        //autoplaySpeed: 1500 - период прокрутки autoplay
        pauseOnFocus: true,
        //pauseOnFocus: true - останавливает слайдер при наведении мыши на слайд
        pauseOnHover: true,
        //pauseOnHover: true - останавливает слайдер при наведении мыши на слайдер
        pauseOnDotsHover: true,
        //pauseOnDotsHover: true - останавливает слайдер при наведении мыши на точки
        draggable: false,
        //draggable: true - прокрутка слайдов с помощью перетягивания мышью на компе
        swipe: true,
        //swype: true - прокрутка слайдов с помощью перетягивания мышью на тачскринах
        touchThreshold: 10,
        //touchThreshold: 5 - прокрутка слайдера свайпом на тачскринах
        touchMove: true,
        //touchMove: true - вкл. все возможности использования слайдера на тачскринах
        waitForAnimate: false,
        //waitForAnimate: true - определяет на сколько быстро будет переключение слайдера, без ожидания окончания анимации
        centerMode: false,
        //centerMode: true - устанавливает главный слайд по центру( по умолчанию false) .slider__item.slick-center
        variableWidth: false,
        //variableWidth: true - определяет ширину слайдов
        rows: 1,
        //rows: 2 - количество слайдов в ряд
        slidesPerRow: 1,

        //вертикальный слайдер
        //vertical: true,
        //verticalSwiper: true,
        //asNavFor: '.sliderbig' - связывает оба слайдера, или все подключенные по классам
        //asNavFor: '.sliderbig',
        responsive: [{
                breakpoint: 1150,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1
                }
            }
        ],
        //mobileFirst: true,
        //mobileFirst: true - меняет значение с max-width на min-width
        //mobileFirst: false,
        //appendArrows: перемещает стрелки, index.html div class="content"
        //appendArrows:$('.content'),
        //appendArrows: перемещает точки, index.html div class="content" 
        //appendDots: $('.content'),
    });


    //$('.sliderbig').slick({
    //    arrows: false,
    //    fade: true,
    //    asNavFor: '.slider',
    //});

    //---------------------------события слайдера

    //$('.slider').on('beforeChange', function (event, slick, curretSlide, nextSlide) {
    //    console.log(currentSlide);

    //});

    //$('.slider').on('afterChange', function (event, slick, curretSlide) {
    //    console.log(currentSlide);

    //});

    //вызов метода

    //$('.slider').slick('setPosition'); перезагрузка, отображение слайдера

    //пролистывает до определённого слайда, напр. при клике по определённой ссылке
    //$('.slider').slick('goTo', 3);

    //пролистывает до определённого слайда, напр. при клике по определённой ссылке
    //$('.link_l').click(function (event) {
    //    $('.slider').slick('slickPrev');
    //});

    //$('.link_r').click(function (event) {
    //    $('.slider').slick('slickNext');
    //});

    //при клике на объект вкл. автопрокрутку
    //$('.link_play').click(function (event) {
    //    $('.slider').slick('slickPlay');
    //});
    //при клике на объект вкл. паузу в прокрутке слайдов

    //$('.link_pause').click(function (event) {
    //    $('.slider').slick('slickPause');
    //});



    //управление содержимым слайдера, добавление объекта
    //$('.slider').slick('slickAdd' , '<div class="newslide">123</div>');

    //$('.link_add').click(function (event) {
    //    $('.slider').slick('slickAdd', '<div class="newslide">123</div>');
    //    return false;
    //});

    //$('.link_remove').click(function (event) {
    //    $('.slider').slick('slickRemove', 0);
    //    return false;
    //});

    //отключение слайдера
    //$('.slider').slick('unslick');

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