import { total, totalCalc } from '../variables/variables';
function handleCloseResult() {
	this.removeEventListener('click', handleCloseResult);

	this.closest('.result').nextElementSibling.remove();
	this.closest('.result').remove();
	renameNumber();
	if (!result.children.length) {
		total.classList.remove('active');
		totalCalc.classList.remove('active');
		totalCalc.innerText = 'Список деталей';
	}

	if (total.classList.contains('active')) {
		handleCalcTotalDetailsList();
	}
}

function renameNumber() {
	const numberItems = document.getElementsByClassName('number');

	for (let i = 0; i < numberItems.length; i++) {
		numberItems[i].innerText = `${numberItems.length - i}.`;
	}
}
export { handleCloseResult };
