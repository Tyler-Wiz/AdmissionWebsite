let count = 0
let countVisa = 0
let countConsult = 1000
const onePara = document.querySelector('.image_one--para')
const images = document.querySelectorAll('#images')
const para = document.querySelectorAll('.para')
const [
  one, two, three, four, five, six,seven,eight, nine, ten, eleven, twelve, thirteen
  ] = images

  const [
  paraOne, paraTwo, paraThree, paraFour, paraFive, paraSix,paraSeven,
  paraEight, paraNine, paraTen, paraEleven, paraTwelve, paraThirteen
  ] = para


let admissions = setInterval(() => {
    const numbers = document.getElementById('achieve_numbers')
    count++
    numbers.textContent = count  + "+"
    if(count === 550){
    clearInterval(admissions)
  }
}, 10);

let visas = setInterval(() => {
  const visa = document.getElementById('achieve_visa')
  countVisa++
  visa.textContent = countVisa  + "+"
    if(countVisa  === 380){
  clearInterval(visas)
  }
}, 10);

let consults = setInterval(() => {
  const consult = document.getElementById('achieve_consults')
  countConsult+=5
  consult.textContent = countConsult + "+"
  if(countConsult === 3200){
  clearInterval(consults)
  }
}, 10);


$('.slider_items').slick({
  slidesToShow:5,
  slidesToScroll:4,
  dots:true,
  arrows:false,
  autoplay:true,
  autoplaySpeed:3500,
  infinite:true
});

one.addEventListener('mouseover', () => {
  onePara.style.display = 'block'
})

one.addEventListener('mouseout', () => {
  onePara.style.display = 'none'
})

two.addEventListener('mouseover', () => {
  paraTwo.style.display = 'block'
})

two.addEventListener('mouseout', () => {
  paraTwo.style.display = 'none'
})

three.addEventListener('mouseover', () => {
  paraThree.style.display = 'block'
})

three.addEventListener('mouseout', () => {
  paraThree.style.display = 'none'
})


four.addEventListener('mouseover', () => {
  paraFour.style.display = 'block'
})

four.addEventListener('mouseout', () => {
  paraFour.style.display = 'none'
})

five.addEventListener('mouseover', () => {
  paraFive.style.display = 'block'
})

five.addEventListener('mouseout', () => {
  paraFive.style.display = 'none'
})

six.addEventListener('mouseover', () => {
  paraSix.style.display = 'block'
})

six.addEventListener('mouseout', () => {
  paraSix.style.display = 'none'
})

seven.addEventListener('mouseover', () => {
  paraSeven.style.display = 'block'
})

seven.addEventListener('mouseout', () => {
  paraSeven.style.display = 'none'
})

eight.addEventListener('mouseover', () => {
  paraEight.style.display = 'block'
})

eight.addEventListener('mouseout', () => {
  paraEight.style.display = 'none'
})

nine.addEventListener('mouseover', () => {
  paraNine.style.display = 'block'
})

nine.addEventListener('mouseout', () => {
  paraNine.style.display = 'none'
})

ten.addEventListener('mouseover', () => {
  paraTen.style.display = 'block'
})

ten.addEventListener('mouseout', () => {
  paraTen.style.display = 'none'
})

eleven.addEventListener('mouseover', () => {
  paraEleven.style.display = 'block'
})

eleven.addEventListener('mouseout', () => {
  paraEleven.style.display = 'none'
})

twelve.addEventListener('mouseover', () => {
  paraTwelve.style.display = 'block'
})

twelve.addEventListener('mouseout', () => {
  paraTwelve.style.display = 'none'
})

thirteen.addEventListener('mouseover', () => {
  paraThirteen.style.display = 'block'
})

thirteen.addEventListener('mouseout', () => {
  paraThirteen.style.display = 'none'
})

const scrollElements = document.querySelectorAll('.js-scroll')
const navElements = document.querySelector('.nav_scroll')

function isVisible(element){
  const elementDiv = element.getBoundingClientRect()
  let distanceTop = -10;
  return elementDiv.top - window.innerHeight < distanceTop ? true : false
}


window.addEventListener('scroll', () => {
  scrollElements.forEach(el => {
    if(isVisible(el)){
      el.classList.add('scrolled')
    } else {
      el.classList.remove('scrolled')
    }
  })
})

window.addEventListener('scroll', () => {
  let scroll = this.scrollY
  if(scroll < 500){
    navElements.classList.remove('nav_scrolled')
  } else {
    navElements.classList.add('nav_scrolled')
  }
})



