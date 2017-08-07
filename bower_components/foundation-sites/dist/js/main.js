$(document).foundation();

$(document).foundation();

$(document).ready(function(){
var nav = document.querySelector('.footer-nav');
var hamburgerBtn = document.querySelector('.hamburger');

hamburgerBtn.addEventListener('click', function(){
	nav.classList.toggle('openNav');
});
	});

$(document).foundation();

$(document).ready(function(){

	var paswordInput = document.querySelector('#passwordInput');
	var loginBtn = document.querySelector('#loginBtn');

	loginBtn.addEventListener('click', function(e){

		if(paswordInput.value === "" || paswordInput.value === 'Did you forget your password?'){
			paswordInput.classList.add('error');
			passwordInput.setAttribute("type","text")
			paswordInput.value = 'Did you forget your password?';
			e.preventDefault();
		}else{
			console.log(passwordInput.value);
		}
	});

	passwordInput.addEventListener('focus', function(){

		passwordInput.value = "";
		passwordInput.setAttribute("type","password");
		passwordInput.classList.remove('error');
	});
});