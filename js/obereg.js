$(document).ready(function(){


$(".btn-menu").click(function(){
  $(this).toggleClass("active");
  if(!$("header").hasClass("m-header-page")){
    $("header").toggleClass("active");
  }
});
////////////////////////////////////

$(".list-nav-collapse").hover(function(){
  $(this).closest("li").addClass("active");
},function(){
  $(this).closest("li").removeClass("active");
});

$(".list-nav-collapse").click(function(){
   $(this).find("i").toggleClass("opened");
});

////////////////////////////////////

$('.slider-for').slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  fade: true,
  asNavFor: '.slider-nav'
});
$('.slider-nav').slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  asNavFor: '.slider-for',
  focusOnSelect: true,
  arrows: false
});

/////////////////////////////////////

$('.main-slider').slick({
  fade: true,
  dots: true,
  arrows: false
});

$(".m-slider-controls .arrows-right-large").click(function(){
  $('.main-slider').slick("slickNext");
});
$(".m-slider-controls .arrows-left-large").click(function(){
  $('.main-slider').slick("slickPrev");
});

//////////////////////////////////

$(".btn-search").click(function(e){
  e.preventDefault();
  $(".b-search").toggleClass("active");
});

//////////////////////////////////

 $(".scroll").click(function(event){     
        event.preventDefault();
        $('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
    });

/////////////////////////////

$(".form-validate").validate({
        rules: {
        company: "required",
        phone: "required",
        email: "required",
        comment: "required"
      },
      messages: {
        company: false,
        phone: false,
        email: false,
        comment: false
      }

});
/////////////////////////////
          var myMap;

          // Дождёмся загрузки API и готовности DOM.
          ymaps.ready(init);

          function init () {
              // Создание экземпляра карты и его привязка к контейнеру с
              // заданным id ("map").
              myMap = new ymaps.Map('map', {
                  // При инициализации карты обязательно нужно указать
                  // её центр и коэффициент масштабирования.
                  center: [55.80239628, 49.21062750], // Москва
                  zoom: 15,
                  controls:[]
              });

          var myPlacemark = new ymaps.Placemark([55.80239628, 49.21062750],
             {
            // Свойства.
            hintContent: 'г. Казань, ул. Проспект Победы 202, офис 323'
        },
            {
            iconImageHref: 'i/icons/mark.png',
            iconImageSize: [73, 97],
            iconImageOffset: [0, 0]
            });

          myMap.behaviors.disable('scrollZoom');
          myMap.geoObjects.add(myPlacemark);

          }

});