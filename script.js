const navbar = document.querySelector('.navbar')
console.log(navbar)


navbar.addEventListener('click', function(nav){
    let elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
   nav.target.className = "active";
}) 
   
  