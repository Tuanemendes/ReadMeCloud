window.addEventListener('scroll', function () {
  var header = document.querySelector('#header');
  header.classList.toggle('scrolling', window.scrollY > 0);

});

// Carousel
var carousel = document.getElementById('carousel');
var carouselInstance = new bootstrap.Carousel(carousel, {
  interval: 10000,
  slidesPerView: 3,
  wrap: true
});

function downloadPDF() {
  var element = document.getElementById('container-pdf');
  var opt = {
    margin: 0.23,
    filename: 'myfile.pdf',
    image: { type: 'jpeg', quality: 0.98 },
    html2canvas: { scale: 2 },
    enableLinks: true,
    jsPDF: { unit: 'in', format: 'letter', orientation: 'portrait' },
    pagebreak: { before: '.beforeClass', after: ['#after1', '#after2'], avoid: 'img' }
  };

  html2pdf().set(opt).from(element).save();

}

function toggleNav() {
  var navList = document.getElementById('nav-list');
  navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('menu-toggle').addEventListener('click', toggleNav);
