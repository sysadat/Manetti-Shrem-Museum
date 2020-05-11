let countdownDate = new Date("May 10, 2020 12:00:00").getTime();
let currentDate = new Date().getTime();
let remainingTime = Math.floor((countdownDate - currentDate) / 1000);

setInterval(function() {
  document.getElementById("pageCount").textContent = (remainingTime--).toLocaleString();
}, 1000)


let slideIndex = 1;
showPic(slideIndex);

function changeSlides(n) {
  showPic(slideIndex += n);
}

function currSlide(n) {
  showPic(slideIndex = n);
}

function showPic(n) {
  let i;
  let slides = document.getElementsByClassName("slideshow");
  let circles = document.getElementsByClassName("circle");
  if (n > slides.length) { slideIndex = 1 }
  if (n < 1) { slideIndex = slides.length};
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
    circles[i].className = circles[i].className.replace(" initiated", "");
  }
  slides[slideIndex - 1].style.display = "block";
  circles[slideIndex - 1].className += " initiated";
}
