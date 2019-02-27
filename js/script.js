


  let ham = document.getElementById('ham');
  let menu = document.getElementById('menu');
  let icon = document.getElementById('icon');
  ham.addEventListener('click', function () {
    menu.classList.toggle('nav__menu-show');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
  }, false);


  // increment
  // let i = 1;
  //
  // setInterval(increment, 1000);
  //
  // function increment(){
  //   i = i + 1;
  // }



let slideIndex = 1;
showSlides(slideIndex);

function slide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("slider__box");
  let dots = document.getElementsByClassName("slider__dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active-dot", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active-dot";
}
