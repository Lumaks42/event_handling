let elUsername = document.getElementById('username');
let elMsg = document.getElementById('feedback');

function checkUsername(minLength) {
	if(elUsername.value.length < minLength) {
		elMsg.textContent = "Username must be " + minLength + " charactres or more";
	}else{
		elMsg.innerHTML='';
	}
}

elUsername.addEventListener('blur', function() {
	checkUsername(5);
}, false);