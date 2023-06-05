

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

  html2canvas(element).then(function (canvas) {
    var imgData = canvas.toDataURL('image/png');
    var doc = new jsPDF('p', 'mm', 'a4');

    var margin = 13;

    var imgWidth = doc.internal.pageSize.getWidth() - (margin * 2);
    var imgHeight = (canvas.height * imgWidth) / canvas.width;

    doc.addImage(imgData, 'PNG', margin, margin, imgWidth, imgHeight);
    doc.save('curriculo.pdf');
  });
}

function toggleNav() {
  var navList = document.getElementById('nav-list');
  navList.style.display = navList.style.display === 'block' ? 'none' : 'block';
}

document.getElementById('menu-toggle').addEventListener('click', toggleNav);
