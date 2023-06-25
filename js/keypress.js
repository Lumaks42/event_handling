let el;

function charCount(e) {
	let textEntered, charDisplay, counter, lastKey;
	textEntered = document.getElementById('message').value;
	charDisplay = document.getElementById('charactersLeft');
	counter = (180 - (textEntered.length));
	charDisplay.textContent = counter;

	lastKey = document.getElementById('lastKey');
	lastKey.textContent = 'ASCII-код последней нажатой клавиши: ' + e.keyCode;
} 

el = document.getElementById('message');
el.addEventListener('keypress', charCount, false);

