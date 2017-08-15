$(document).foundation();

$(document).ready(function(){

	const passwordInput = document.querySelector('#passwordInput');
	const loginBtn = document.querySelector('#loginBtn');
	const loginInput = document.querySelector('#login-name');
	const nameBtn = document.querySelector('#changed-log');
	const sampleLog = document.querySelector('#login-sample');
	const errMsg = document.querySelector('.error-msg');
	const loginBox = document.querySelector(".login-box");
	const passwordError = document.querySelector("#passwordError");
	const loginError = document.querySelector("#loginError");

	nameBtn.addEventListener('click', function(){
		loginBox.classList.toggle('hide')
		sampleLog.classList.toggle('hide');;
	})

	loginBtn.addEventListener('click', function(e){
	e.preventDefault();
		if(passwordInput.value === ""){
			passwordInput.classList.add('error');
			passwordError.classList.remove('hide');
			passwordError.textContent = "write password";
			
		}else{
			var yourPassword = passwordInput.value;
		}

		if(!loginBox.classList.contains('hide')){
			if(loginInput.value === ""){
				loginInput.classList.add('error');
				loginError.classList.remove('hide');
				loginError.textContent = "write login"
			}else {
				var yourLogin = loginInput.value;
			}
		}else {
			return
		}

		if(!yourPassword == "" && !yourLogin == ""){

	  		$.ajax({
	  			type: "post",
	  			data: {
	    			login: yourLogin,
	    			password: yourPassword
	  			},
	  			url: "https://efigence-camp.herokuapp.com/api/login",
	  			error: function(response) {
	  				console.log(response.responseText);
					let errMsg = JSON.parse(response.responseText);
					console.log(errMsg.message);
					passwordError.classList.remove('hide');
					passwordError.textContent = errMsg.message;
					loginError.classList.remove('hide');
					loginError.textContent = errMsg.message;
			
	 			 },
	  			success: function(response) {
	    			console.log(response);
	  			}
			});	
		}else {
			console.log('error');
		}
	});

	passwordInput.addEventListener('focus', function(){
		passwordError.classList.add('hide');
		passwordError.textContent = "";
		passwordInput.classList.remove('error');
	});
	loginInput.addEventListener('focus', function(){
		loginError.classList.add('hide');
		loginError.textContent = "";
		loginInput.classList.remove('error');
	});
});

