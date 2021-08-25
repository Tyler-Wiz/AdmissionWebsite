const navbar = document.querySelector('.navbar')
const track = document.querySelector('.carousel')
const slides = Array.from(track.children)
const dotnav = document.querySelector('.dots-container')
const dots = document.getElementsByClassName('dot');
const totalSlides = slides.length;
let slidePosition = 0;
let count = 0
let countTwo = 0
let countThree = 0
const clientNumbersOne = document.querySelector('.counterOne')
const clientNumbersTwo = document.querySelector('.counterTwo')
const clientNumbersThree = document.querySelector('.counterThree')


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
}, 5000);

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

    let counting = setInterval(() => {
      count++
      clientNumbersOne.textContent = count  + "+"
      if(count === 550){
        clearInterval(counting)
      }
    }, 10);
 


let countingTwo = setInterval(() => {
  countTwo++
  clientNumbersTwo.textContent = countTwo  + "+"
  if(countTwo === 1900){
    clearInterval(countingTwo)
  }
}, 3);


let countingThree = setInterval(() => {
  countThree++
  clientNumbersThree.textContent = countThree + "+"
  if(countThree === 380){
    clearInterval(countingThree)
  }
}, 10);


  function changeNavBg(){
    let scrollValue = window.scrollY;
    const navbarBg = document.querySelector('#navbarBg')
    
    if(scrollValue < 520){
        navbarBg.classList.remove('navbarBg')
    } else {
      navbarBg.classList.add('navbarBg')
    }
  }

window.addEventListener('scroll', changeNavBg)
