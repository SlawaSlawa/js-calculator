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
	// if (data.indexOf('+')) {

	// }
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
		}else {
			string += data;
			renderInInput(string);
		}
		if (data === 'c') {
			string = '';
			clearInput();
		}

}

function keyboardHandler(key) {
	console.log(key);
	key = key.key;
	switch(key) {
  	case '0':
		console.log(key);
		createVomiting(key);
    break

  	case '1':
		console.log(key);
		createVomiting(key);
    break;

    case '2':
		console.log(key);
		createVomiting(key);
    break;

    case '3':
		console.log(key);
		createVomiting(key);
    break;

    case '4':
		console.log(key);
		createVomiting(key);
    break;

    case '5':
		console.log(key);
		createVomiting(key);
    break;

    case '6':
		console.log(key);
		createVomiting(key);
    break;

    case '7':
		console.log(key);
		createVomiting(key);
    break;

    case '8':
		console.log(key);
		createVomiting(key);
    break;

    case '9':
		console.log(key);
		createVomiting(key);
    break;

    case '+':
		console.log(key);
		createVomiting(key);
    break;

    case '-':
		console.log(key);
		createVomiting(key);
    break;

    case '/':
		console.log(key);
		createVomiting(key);
    break;

    case '*':
		console.log(key);
		createVomiting(key);
    break;

    case '.':
		console.log(key);
		createVomiting(key);
    break;

    case 'c':
		console.log(key);
		createVomiting(key);
    break;

    case '=':
		console.log(key);
		createVomiting(key);

    case 'Enter':
		console.log(key);
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

window.addEventListener('keypress', keyboardHandler);