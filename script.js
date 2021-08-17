const navbar = document.querySelector('.navbar')
const track = document.querySelector('.carousel__track')
const slides = Array.from(track.children)
const nextButton = document.querySelector('.carousel__button--right')
const prevButton = document.querySelector('.carousel__button--left')
const dotsNav = document.querySelector('.carousel__nav')
const dots = Array.from(dotsNav.children)

console.log(slides[2])


const slideWidth = slides[0].getBoundingClientRect().width

navbar.addEventListener('click', function(nav){
    let elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
   nav.target.className = "active";
}) 



const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px'
}

slides.forEach(setSlidePosition)

   
const moveSlide = (track, currentSlide, focusSlide) => {
    track.style.transform = 'translateX(-' + focusSlide.style.left + ')'
    currentSlide.classList.remove('current-slide')
    focusSlide.classList.add('current-slide')

}

prevButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling

    moveSlide(track, currentSlide, prevSlide)
})


nextButton.addEventListener('click', e => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling

    moveSlide(track, currentSlide, nextSlide)
    
})

const nextSliderTime = setInterval(() => {
    const currentSlide = track.querySelector('.current-slide')
    const nextSlide = currentSlide.nextElementSibling

    moveSlide(track, currentSlide, nextSlide)
   
}, 4000);



const prevSliderTime = setInterval(() => {
        const currentSlide = track.querySelector('.current-slide')
    const prevSlide = currentSlide.previousElementSibling

    moveSlide(track, currentSlide, prevSlide)
    }, 10000);

    
    
function stopNext(){
    clearInterval(nextSliderTime)
}

function stopPrev() {
    clearInterval(prevSliderTime)
}

setTimeout(stopNext, 9000)
setTimeout(stopPrev, 18000);

