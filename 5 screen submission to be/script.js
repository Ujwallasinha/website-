let currentIndex = 0;  

function changeSlide(direction) {
  const slides = document.querySelector('.carousel-wrapper');
  const totalSlides = document.querySelectorAll('.slide').length;

  currentIndex = (currentIndex + direction + totalSlides) % totalSlides;
  const translateValue = -currentIndex * 100 + '%';
  
  slides.style.transform = 'translateX(' + translateValue + ')';
}
