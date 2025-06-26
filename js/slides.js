const slides = document.querySelectorAll('.slide');
let current = 0;

console.log(1234);

setInterval(() => {
  slides[current].classList.remove('active');
  current = (current + 1) % slides.length;
  slides[current].classList.add('active');
}, 3000);