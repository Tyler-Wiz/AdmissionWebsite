const navbar = document.querySelector('.navbar')
const track = document.querySelector('.carousel')
const slides = Array.from(track.children)
const dotnav = document.querySelector('.dots-container')
const dots = document.getElementsByClassName('dot');
const totalSlides = slides.length;
let slidePosition = 0;

navbar.addEventListener('click', function(nav){
    let elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
   nav.target.className = "active";
}) 

const updateSlidePosition = () => {
  slides.forEach(slide => {
    slide.classList.remove('carousel__item--visible');
    slide.classList.add('carousel__item--hidden');
  })
  let trackSlide =  slides[slidePosition]
  trackSlide.classList.add('carousel__item--visible');
}

setInterval(() => {
    if (slidePosition === totalSlides - 1) {
      slidePosition = 0;
    } else {
      slidePosition++;
    }
    updateSlidePosition();
}, 7000);

Array.from(dots).forEach(function(element, index) {
  element.setAttribute('data-index', index);
  element.setAttribute('aria-label', 'Go to slide #' + (index + 1));
  element.addEventListener('click', updateSlideOnDotClick);
});

function updateSlideOnDotClick(){
  slidePosition = parseInt(this.getAttribute('data-index'));
  updateSlidePosition();
  for (i = 0; i < dots.length; i++) {
    dots[i].classList.add('active');
  }
}

for (i = 0; i < dots.length; i++) {
  dots[i].classList.remove('active');
}
