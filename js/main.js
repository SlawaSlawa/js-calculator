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
		if (data === '=') {
			renderInInput(getResult(string));
			string = '';
		}else {
				string += data;
				renderInInput(string);
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