'use strict';

const btnsList = document.querySelectorAll('.caluclator__btn');
const calculatorInput = document.querySelector('.calculator__input');
let string = '';

btnsList.forEach(btn => {
    btn.addEventListener('click', handlerBtn);
});

function handlerBtn(evt) {
    const target = evt.target;
    createVomiting(target.dataset.btnValue);
}

function createVomiting(data) {
		if (string === '' && data === '=') {
			string = '';
			renderInInput(string);
		}else if (data === '=') {
			renderInInput(getResult(string));
		}else if (string === '' && data === '*') {
			string = '';
			renderInInput(string);
		}else if (string === '' && data === '+') {
			string = '';
			renderInInput(string);
		}else if (string === '' && data === '/') {
			string = '';
			renderInInput(string);
		}else if (string === '' && data === '.') {
			string = '';
			renderInInput(string);
		}else {
			string += data;
			renderInInput(string);
		}
		if (data === 'c') {
			string = '';
			clearInput();
		}


		if (string.indexOf('+') > 0 && string[string.indexOf('++')]) {
			string = string.split('');
			string.pop();
			string = string.join('');
			renderInInput(string);
		}

		if (string.indexOf('-') > 0 && string[string.indexOf('--')]) {
			string = string.split('');
			string.pop();
			string = string.join('');
			renderInInput(string);
		}

		if (string.indexOf('*') > 0 && string[string.indexOf('**')]) {
			string = string.split('');
			string.pop();
			string = string.join('');
			renderInInput(string);
		}

		if (string.indexOf('/') > 0 && string[string.indexOf('//')]) {
			string = string.split('');
			string.pop();
			string = string.join('');
			renderInInput(string);
		}

		if (string.indexOf('.') > 0 && string[string.indexOf('..')]) {
			string = string.split('');
			string.pop();
			string = string.join('');
			renderInInput(string);
		}
}

function keyboardHandler(key) {
	console.log(key);
	key.preventDefault();
	key = key.key;

	switch(key) {
  	case '0':
		createVomiting(key);
    break

  	case '1':
		createVomiting(key);
    break;

    case '2':
		createVomiting(key);
    break;

    case '3':
		createVomiting(key);
    break;

    case '4':
		createVomiting(key);
    break;

    case '5':
		createVomiting(key);
    break;

    case '6':
		createVomiting(key);
    break;

    case '7':
		createVomiting(key);
    break;

    case '8':
		createVomiting(key);
    break;

    case '9':
		createVomiting(key);
    break;

    case '+':
		createVomiting(key);
    break;

    case '-':
		createVomiting(key);
    break;

    case '/':
		createVomiting(key);
    break;

    case '*':
		createVomiting(key);
    break;

    case '.':
		createVomiting(key);
    break;

    case 'c':
		createVomiting(key);
    break;

    case '=':
		createVomiting(key);

    case 'Enter':
		createVomiting('=');
    break;

}

}

function getResult(vomiting) {
	let result = eval(vomiting);
	return(result);
}

function renderInInput(str) {
	calculatorInput.value = str;
}

function clearInput() {
	calculatorInput.value = '';
}

calculatorInput.addEventListener('keypress', keyboardHandler);