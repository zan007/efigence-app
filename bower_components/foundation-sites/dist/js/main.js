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

	const passwordInput = document.querySelector('#passwordInput');
	const loginBtn = document.querySelector('#loginBtn');
	const loginInput = document.querySelector('#login-name');
	const nameBtn = document.querySelector('#changed-log');
	const sampleLog = document.querySelector('#login-sample');
	const errMsg = document.querySelector('.error-msg')

	nameBtn.addEventListener('click', function(){
		loginInput.classList.toggle('hide')
		sampleLog.classList.toggle('hide')
	})


	loginBtn.addEventListener('click', function(e){
	e.preventDefault();
		if(passwordInput.value === "" || passwordInput.value === 'Did you forget your password?'){
			passwordInput.classList.add('error');
			passwordInput.setAttribute("type","text")
			passwordInput.value = 'Did you forget your password?';
			yourLogin = "Your Login!";
	    	loginInput.classList.add('error');
			
		}else{
			let yourLogin = loginInput.value;
			let yourPassword = passwordInput.value;
	  		$.ajax({
	  			type: "post",
	  			data: {
	    			login: yourLogin,
	    			password: yourPassword
	  			},
	  			url: "https://efigence-camp.herokuapp.com/api/login",
	  			error: function(response) {
	  				 console.log(response.responseText);
						errMsg.textContent = response.responseText
	    			passwordInput.value = 'Did you forget your password?';
	    			yourLogin = "Your Login!";
	    			loginInput.classList.add('error');		
	 			 },
	  			success: function(response) {
	    			console.log(response);
	  			}
			});	
		}
	});

	passwordInput.addEventListener('focus', function(){

		passwordInput.value = "";
		passwordInput.setAttribute("type","password");
		passwordInput.classList.remove('error');
	});
	loginInput.addEventListener('focus', function(){

		loginInput.value = "";
		loginInput.classList.remove('error');
	});
});

