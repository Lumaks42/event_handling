let elForm, elTermsHint, elSelectPackage, elPackageHint, elTerms;
elForm = document.getElementById('formSignup');
elSelectPackage = document.getElementById('package');
elPackageHint = document.getElementById('packageHint');
elTerms = document.getElementById('terms');
elTermsHint = document.getElementById('termsHint');

function packageHint() {
	let package = this.options[this.selectedIndex].value;
	if(package == 'monthly') {
		elPackageHint.innerHTML = 'Сэкономтие 100 р, оплатив подписку на год!';
	}else{
		elPackageHint.innerHTML = 'Прекрасный выбор!';
	}
}

function checkTerms(event) {
	if(!elTerms.checked) {
		elTermsHint.innerHTML = 'Вы должны согласиться с условиями соглашения.';
		event.parentDefault();
	}
}

elForm.addEventListener('submit', checkTerms, false);
elSelectPackage.addEventListener('change', packageHint, false);