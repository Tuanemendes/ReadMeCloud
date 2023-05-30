

window.addEventListener('scroll', function () {
    var header = document.querySelector('#header');
    header.classList.toggle('scrolling', window.scrollY > 0);

});