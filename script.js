const navbar = document.querySelector('.navbar')
console.log(navbar)


navbar.addEventListener('click', function(e){
    let elems = document.querySelectorAll(".active");
    [].forEach.call(elems, function(el) {
      el.classList.remove("active");
    });
    e.target.className = "active";
}) 
   
  