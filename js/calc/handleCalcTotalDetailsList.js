import {printTotalDetailsList} from '../print/printTotalDetailsList';

export function handleCalcTotalDetailsList() {
	const frame25 = document.getElementsByClassName('frame25');
	const frame20 = document.getElementsByClassName('frame20');
	const pattern25 = document.getElementsByClassName('pattern25');
	const pattern20 = document.getElementsByClassName('pattern20');
	const pattern15 = document.getElementsByClassName('pattern15');

	const totalFrame25 = createArrayFromCollection(frame25);
	const totalFrame20 = createArrayFromCollection(frame20);
	const totalPattern25 = createArrayFromCollection(pattern25);
	const totalPattern20 = createArrayFromCollection(pattern20);
	const totalPattern15 = createArrayFromCollection(pattern15);


	printTotalDetailsList(
		totalFrame25,
		totalFrame20,
		totalPattern25,
		totalPattern20,
		totalPattern15
	);
}


function createArrayFromCollection(collection) {
	const uniqueValues = []
	const totalDetailsList = []

	for (let i = 0; i < collection.length; i++) {
		const item = collection[i].innerText.split(' X ');

		if (!uniqueValues.includes(+item[0])) {
			uniqueValues.push(+item[0]);
			totalDetailsList.push([+item[0], +item[1]]);
		} else {
			totalDetailsList[uniqueValues.indexOf(+item[0])][1] += +item[1];
		}
	}
	totalDetailsList.sort((a, b) => b[1] - a[1])

	return totalDetailsList
}
