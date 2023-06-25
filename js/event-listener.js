function checkUsername(){
	let elMsg = document.getElementById('feedback');
	if(this.value.length < 5) {
		elMsg.textContent = "Имя пользователя должно содержать не менее 5 символов";
	}else{
		elMsg.textContent =''
	}
}

let elUsername = document.getElementById('username');
elUsername.addEventListener('blur', checkUsername, false);