

window.addEventListener('scroll', function () {
    var header = document.querySelector('#header');
    header.classList.toggle('scrolling', window.scrollY > 0);

});

// Carousel
var carousel = document.getElementById('carousel');
var carouselInstance = new bootstrap.Carousel(carousel, {
    interval: 5000,
    slidesPerView: 3, 
    wrap: true 
});
