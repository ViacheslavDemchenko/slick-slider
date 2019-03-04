 $('.slider').slick({
 	slidesToShow: 1,
 	slidesToScroll: 1,
 	arrows: true,
 	fade: true,
 	asNavFor: '.slider-nav-thumbnails',
 	infinite: true,
 	prevArrow: '<button type="button" class="slick-arrow slick-prev"><span>Previous</span></button>',
	nextArrow: '<button type="button" class="slick-arrow slick-next"><span>Next</span></button>'
 });

 $('.slider-nav-thumbnails').slick({
 	slidesToShow: 4,
 	slidesToScroll: 1,
 	asNavFor: '.slider',
 	dots: false,
 	focusOnSelect: true,
 	arrows: true,
 	infinite: true,
 	prevArrow: '<span type="button" class="prev-thumb"><span>Previous</span></span>',
 	nextArrow: '<span type="button" class="next-thumb"><span>Previous</span></span>'
 });

 //remove active class from all thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');

 //set active class to first thumbnail slides
 $('.slider-nav-thumbnails .slick-slide').eq(0).addClass('slick-active');

 // On before slide change match active thumbnail to current slide
 $('.slider').on('beforeChange', function (event, slick, currentSlide, nextSlide) {
 	var mySlideNumber = nextSlide;
 	$('.slider-nav-thumbnails .slick-slide').removeClass('slick-active');
 	$('.slider-nav-thumbnails .slick-slide').eq(mySlideNumber).addClass('slick-active');
});

//UPDATED 
  
$('.slider').on('afterChange', function(event, slick, currentSlide){   
  $('.content').hide();
  $('.content[data-id=' + (currentSlide + 1) + ']').show();
});
