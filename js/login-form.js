$(document).foundation();

$(document).ready(function(){

	var passwordInput = document.querySelector('#passwordInput');
	var loginBtn = document.querySelector('#loginBtn');

	loginBtn.addEventListener('click', function(e){
	e.preventDefault();
		if(passwordInput.value === "" || passwordInput.value === 'Did you forget your password?'){
			passwordInput.classList.add('error');
			passwordInput.setAttribute("type","text")
			passwordInput.value = 'Did you forget your password?';
			
		}else{
			console.log(passwordInput.value);
		 	window.location.replace("index.html");
  			return false;
		}
	});

	passwordInput.addEventListener('focus', function(){

		passwordInput.value = "";
		passwordInput.setAttribute("type","password");
		passwordInput.classList.remove('error');
	});
});

