$(document).ready(function(){
  $('.slideHome').owlCarousel({
    //smartSpeed:450,
	singleItem: true,
    pagination: true,
    loop: true,
    margin: 0,
    nav: true,
    controls: true,
    items: 1,
    slideSpeed: 300,
    paginationSpeed: 400,
    autoPlay: true,
    navText: [
        "<i class='fa fa-angle-left' aria-hidden='true'></i>",
        "<i class='fa fa-angle-right' aria-hidden='true'></i>"],


});

$(".next").click(function() {
    owl.trigger('owl.next');
})
$(".prev").click(function() {
    owl.trigger('owl.prev');
})



});


