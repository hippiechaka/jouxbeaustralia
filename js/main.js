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
    autoPlay: 3000, //autoplay n 3 sec.
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

document.getElementById('links').onclick = function (event) {
    event = event || window.event;
    var target = event.target || event.srcElement,
        link = target.src ? target.parentNode : target,
        options = {index: link, event: event},
        links = this.getElementsByTagName('a');
    blueimp.Gallery(links, options);
};

});


