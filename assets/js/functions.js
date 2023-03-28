const slide = document.getElementById('full-slide');
const banner = slide.querySelector('.banner');
const prev = slide.querySelector('.prev');
const next = slide.querySelector('.next');
const slides = banner.querySelectorAll('li');


let currentSlide = 0;
const slideCount = slides.length;


function changeSlide(n) {
  slides[currentSlide].classList.remove('active');
  currentSlide = (n + slideCount) % slideCount;
  slides[currentSlide].classList.add('active');
}


function prevSlide() {
  changeSlide(currentSlide - 1);
}

function nextSlide() {
  changeSlide(currentSlide + 1);
}

prev.addEventListener('click', prevSlide);
next.addEventListener('click', nextSlide);

$( document ).ready(function() {
	
function nav(){
	
	$('.nav-toggle').click(function(){
		
		$('.nav').toggleClass('open');
		
	});
	
}

nav();

document.querySelector('#menu-about').addEventListener('click', function (event) {
	event.preventDefault();
	scroll.animateScroll(document.querySelector('#about'));
  });

});
