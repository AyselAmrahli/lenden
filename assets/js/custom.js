
// ***Aysel Amrahli***

// carousel animation
// first item
$('#ay-carousel').find('.item.active').find('.carousel-caption').animate({'opacity': 1}, 1000);
// on slide
$('#ay-carousel').on('slid.bs.carousel', function () {
	var $item = $('#ay-carousel');
  	var $item_active = $item.find('.item.active');
  	$item_active.find('.carousel-caption').animate({'opacity': 1}, 1000);
  	$item.find('.carousel-caption').css('opacity','0');
})

// header navbar fixed on scroll
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.bottom-header').addClass('fixed');
    } else {
        $('.bottom-header').removeClass('fixed');
    }
});
// header navbar fixed on scroll for Pages
$(window).bind('scroll', function () {
    if ($(window).scrollTop() > 50) {
        $('.bottom-header-two').css({
          'background-color':'#fff',
          'top':'0'
        });
        $('.bottom-header-two').addClass('box-shadow');
    } else {
        $('.bottom-header-two').css({
          'background-color':'transparent',
          'top':'50px'
        });
        $('.bottom-header-two').removeClass('box-shadow');
    }
});

$('#ay-few-words').appear(function(){
  $('#ay-few-words img').addClass('animated fadeInRight');
});

$('#ay-new-project').appear(function(){
  $('#ay-new-project .project-video').addClass('animated fadeInRight');
});

$('.ay-counter').each(function() {
  $(this).appear(function() {
    var number = $(this).find('.counter-timer').attr('data-to');
    $(this).find('.counter-timer').countTo({from: 0, to: number, speed: 1500, refreshInterval: 30});
  });
});

$('.grid').masonry({
  // options
  itemSelector: '.grid-item',
  columnWidth: 200
});

// init Isotope
var $grid = $('.grid').isotope({
  // options
});
// filter items on button click
$('.list-inline').on( 'click', 'li', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// flter buttons active scripts
$('.filter-list li').on('click',function(){
	$('.filter-list').find('.active').removeClass('active');
	$(this).addClass('active');
})

// youtubepopup
 jQuery("a.video-popup").YouTubePopUp();

 // OwlCarousel
 $('.mention-carousel').owlCarousel({
 	    items: 1,
 	    loop:true,
 	    autoplay:true,
 	    interval:3000
 });

 $('.client-carousel').owlCarousel({
 	items:5,
 	loop:true,
  dots: false,
 	autoplay:true,
 	interval:3000
 })

 // scroll-up
$("#scroll-up").on("click",scrol2);

function scrol2() {
	$("body").stop().animate({"scrollTop":$("#ay-header").offset().top},1000,"swing");
	$("#scroll-up").fadeOut('slow');

}
  $(window).scroll(function() {
    if ($(document).scrollTop() > 50) {
      $("#scroll-up").fadeIn('slow');
    } else {
      $("#scroll-up").fadeOut('1000');
    }
  });
