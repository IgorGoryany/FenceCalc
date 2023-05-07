import { printTotalDetailsList } from '../print/printTotalDetailsList';

export function handleCalcTotalDetailsList() {
	const frame25 = document.getElementsByClassName('frame25');
	const frame20 = document.getElementsByClassName('frame20');
	const pattern25 = document.getElementsByClassName('pattern25');
	const pattern20 = document.getElementsByClassName('pattern20');
	const pattern15 = document.getElementsByClassName('pattern15');

	const uniqueValuesFrame25 = [];
	const totalFrame25 = [];

	const uniqueValuesFrame20 = [];
	const totalFrame20 = [];

	const uniqueValuesPattern25 = [];
	const totalPattern25 = [];

	const uniqueValuesPattern20 = [];
	const totalPattern20 = [];

	const uniqueValuesPattern15 = [];
	const totalPattern15 = [];

	for (let i = 0; i < frame25.length; i++) {
		const item = frame25[i].innerText.split(' X ');

		if (uniqueValuesFrame25.indexOf(+item[0]) === -1) {
			uniqueValuesFrame25.push(+item[0]);
			totalFrame25.push([+item[0], +item[1]]);
		} else {
			totalFrame25[uniqueValuesFrame25.indexOf(+item[0])][1] += +item[1];
		}
	}

	for (let i = 0; i < frame20.length; i++) {
		const item = frame20[i].innerText.split(' X ');

		if (uniqueValuesFrame20.indexOf(+item[0]) === -1) {
			uniqueValuesFrame20.push(+item[0]);
			totalFrame20.push([+item[0], +item[1]]);
		} else {
			totalFrame20[uniqueValuesFrame20.indexOf(+item[0])][1] += +item[1];
		}
	}

	for (let i = 0; i < pattern25.length; i++) {
		const item = pattern25[i].innerText.split(' X ');

		if (uniqueValuesPattern25.indexOf(+item[0]) === -1) {
			uniqueValuesPattern25.push(+item[0]);
			totalPattern25.push([+item[0], +item[1]]);
		} else {
			totalPattern25[uniqueValuesPattern25.indexOf(+item[0])][1] += +item[1];
		}
	}

	for (let i = 0; i < pattern20.length; i++) {
		const item = pattern20[i].innerText.split(' X ');

		if (uniqueValuesPattern20.indexOf(+item[0]) === -1) {
			uniqueValuesPattern20.push(+item[0]);
			totalPattern20.push([+item[0], +item[1]]);
		} else {
			totalPattern20[uniqueValuesPattern20.indexOf(+item[0])][1] += +item[1];
		}
	}

	for (let i = 0; i < pattern15.length; i++) {
		const item = pattern15[i].innerText.split(' X ');

		if (uniqueValuesPattern15.indexOf(+item[0]) === -1) {
			uniqueValuesPattern15.push(+item[0]);
			totalPattern15.push([+item[0], +item[1]]);
		} else {
			totalPattern15[uniqueValuesPattern15.indexOf(+item[0])][1] += +item[1];
		}
	}

	printTotalDetailsList(
		totalFrame25,
		totalFrame20,
		totalPattern25,
		totalPattern20,
		totalPattern15
	);
}
