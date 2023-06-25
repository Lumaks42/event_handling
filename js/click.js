let msg = '<div class=\"header\"><a id=\"close\"href="#">закрыть X</a></div>';
msg += '<div><h2>Техническое обслуживание</h2>';
msg += 'С 12 до 13 часов на сервере производится техническое обслуживание.';
msg += '</br> Во время обслуживания могут происходить незначительные сбои в работе сайта.</div>';

let elNote = document.createElement('div');
elNote.setAttribute('id', 'note');
elNote.innerHTML = msg;
document.body.appendChild(elNote);

let dismissNote = () => {
	document.body.removeChild(elNote);
}

let elClose = document.getElementById('close');
elClose.addEventListener('click', dismissNote, false);