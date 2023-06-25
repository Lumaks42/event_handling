function setup() {
	let textInput;
	textInput = document.getElementById('message');
	textInput.focus();
}

window.addEventListener('DOMNodeInserted', setup, false);

window.addEventListener('beforeunload', function(event) {
	let message = 'Вывели данные, которая не будут сохранены';
	(event || window.event).returnValue = message;
	return message;
});