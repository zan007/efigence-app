$(document).foundation();

$(document).ready(function(){
var nav = document.querySelector('.footer-nav');
var hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', function(){
	nav.classList.toggle('openNav');
});
	});
