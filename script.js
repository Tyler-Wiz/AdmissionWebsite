let count = 0
let countVisa = 0
let countConsult = 1000
const onePara = document.querySelector('.image_one--para')
const images = document.querySelectorAll('#images')
const para = document.querySelectorAll('.para')
const [one, two, three, four, five, six] = images
const [paraOne, paraTwo, paraThree, paraFour, paraFive, paraSix] = para

console.log(four)

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


$('.slider_items').slick({
  slidesToShow:5,
  slidesToScroll:1,
  dots:true,
  arrows:false,
  autoplay:true,
  autoplaySpeed:1500,
  infinite:true
});