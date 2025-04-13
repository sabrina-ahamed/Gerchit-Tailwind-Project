$(".slide").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: false,
  dots: true,
  variableWidth: true,
});

$('.galary_slide').slick({
  arrows : false,
  slidesToShow: 4,
  slidesToScroll:1,
  centerMode: true,
  centerPadding: '10px',
  variableWidth: true,
  autoplay: true,
  autoplaySpeed: 2000,
}
);