import {choosingImage} from '../support/choosingImage';
import {handleCloseResult} from '../support/handleCloseResult';
import {result, select, sideXInput, total,} from '../variables/variables';
import {handleCalcTotalDetailsList} from '../calc/handleCalcTotalDetailsList';
import {sizesSupp} from "../support/sizesSupp";
import {fenceSideChoose} from "../support/fenceSideChoose";

export function print35Fence({
	                             sideX,
	                             sideY,

	                             gate1,
	                             gate2,

	                             insideSideX,

	                             insideSideY,

	                             insideGate1,
	                             insideGate2,

	                             insideSideXCount,
	                             insideSideYCount,
	                             insideGate1Count,
	                             insideGate2Count,

	                             tube,
	                             tubeInside,

	                             countX,
	                             countY,
	                             gateCount,
                             }) {
	const number = document.getElementsByClassName('result')
		? document.getElementsByClassName('result').length + 1
		: 1;

	const image = choosingImage();

	const {sizes, isReverse} = sizesSupp(image);

	let dop460 = 1;
	if (+sideXInput.value >= 3400) {
		dop460 = 3;
	}

	result.insertAdjacentHTML(
		'afterbegin',

		`
	<div class="result">
		<span class="number">${number}.</span>
		<span class="close"></span>
		<div class="scheme">
			${sizes}
			<img alt="Ограда" src="${image}" 
			class="${fenceSideChoose(isReverse)}" 
			/>
			<span class="model">№&nbsp;${select.value}</span>
		</div>
	
		<div class="values">
			<div class="outside">
				<h2>${tube} X ${tube}</h2>
				<div class="frame${tube}">${sideY} X ${4 * countY}</div>
				<div class="frame${tube}">${sideX} X ${2 * countX}</div>
				<div class="frame${tube}">${gate1} X 2</div>
				${gate2 ? `<div class="frame${tube}"> ${gate2} X 2</div>` : ''}
			</div>

			<div class="inside">
				<h2>${tubeInside} X ${tubeInside}</h2>
				<div class="pattern${tubeInside}">${insideSideY} X ${4 * insideSideYCount * countY}</div>
				<div class="pattern${tubeInside}">${insideSideX} X ${2 * insideSideXCount * countX}</div>
				<div class="pattern${tubeInside}">${insideGate1} X ${2 * insideGate1Count}</div>
				${
			insideGate2
				? `<div class="pattern${tubeInside}">${insideGate2} X ${2 * insideGate2Count}</div>`
				: ''
		}
				<div class="pattern${tubeInside}">460 X ${
			((insideSideXCount + 1) * countX)
			+ ((insideSideYCount + 1) * countY * 2)
			+ insideGate1Count + insideGate2Count + gateCount
		}</div>
				</div>
		</div>
		
	</div>
	<hr />
	`
	);
	const close = document.getElementsByClassName('close');

	close[0].addEventListener('click', handleCloseResult);

	if (total.classList.contains('active')) {
		handleCalcTotalDetailsList();
	}
}
