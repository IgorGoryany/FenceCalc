import {lengthCalc} from '../support/lengthCalc';
import {fenceElementsCount} from '../support/fenceElementsCount';
import {sideXInput, sideYInput} from '../variables/variables';


export function calcLogicTo15And25Fence(pillar, tube, tubeInside, jumper, isBigX, isBigY) {
	const [lengthX, lengthY] = [+sideXInput.value, +sideYInput.value];

	const {
		lockCountX,
		divCountX,
		pilarCountX,
		lockCountY,
		divCountY,
		pilarCountY,
	} = fenceElementsCount(isBigX, isBigY);
	const gateCount = lengthX >= 3400 ? 1 : 0;

	const sideX = lengthCalc(lengthX, pillar, pilarCountX, lockCountX, divCountX);
	const sideY = lengthCalc(lengthY, pillar, pilarCountY, lockCountY, divCountY);

	const [sideXRectangle, sideXJumper, rectangleCountX,] = insideCalcLogic(sideX, tube, jumper);
	const [sideYRectangle, sideYJumper, rectangleCountY,] = insideCalcLogic(sideY, tube, jumper);

	let rectangleGateCount = rectangleCountX - 1;
	if (rectangleCountX === 1 && lengthX >= 1600) {

		rectangleGateCount = 1
	}
	if (rectangleCountX === 1 && lengthX > 3000) {
		rectangleGateCount = 2
	}

	return {
		sideX,
		sideY,

		gate1: gateCount ? false : lengthX - pillar * 3 - 510,
		gate2: gateCount ? lengthX - pillar * 4 - 525 - sideX : false,

		sideXRectangle,
		sideXJumper,

		sideYRectangle,
		sideYJumper,

		rectangleSectionGate1:
			gateCount
				? false
				: lengthX - pillar * 3 - 510 - sideXRectangle * rectangleGateCount - sideXJumper * rectangleGateCount,
		rectangleInsideGate1: 500 - tube * 2 - sideXJumper,

		rectangleSectionGate2:
			gateCount
				? lengthX - pillar * 4 - 525 - sideX - sideXRectangle * rectangleGateCount - sideXJumper * rectangleGateCount
				: false,
		rectangleInsideGate2:
			gateCount ? 500 - tube * 2 - sideXJumper : false,

		tube,
		tubeInside,

		rectangleCountX,
		rectangleCountY,

		countX: isBigX ? 2 : 1,
		countY: isBigY ? 2 : 1,

		gateCount,
		rectangleGateCount,
	};

}

function insideCalcLogic(length, tube, jumper) {
	let jumperLength = Infinity;
	let rectangleLength;
	let rectangleCount = 1;

	if (length >= 1600) {
		rectangleCount = 2;
	}
	if (length >= 2800) {
		rectangleCount = 3
	}

	const standardRectangle = [500, 510, 520, 530, 540, 550, 560, 570, 580, 590,
		600, 610, 620, 630, 640, 650, 660, 670, 680, 690, 700, 710, 720, 730, 740,
		750, 760, 770, 780, 790, 800, 810, 820, 830, 840, 850, 860, 870, 880, 890,
		900,
	];
	for (let i = 0; i < standardRectangle.length; i++) {
		const jumperValue = (length - tube - standardRectangle[i] * rectangleCount) / (rectangleCount + 1);
		if (
			Math.abs(jumperValue - jumper) <= Math.abs(jumperLength - jumper) &&
			jumperValue >= 0
		) {
			jumperLength = jumperValue;
			rectangleLength = standardRectangle[i];
		}
		if (jumperValue === jumper) {
			return [rectangleLength, Math.round(jumperLength), rectangleCount];
		}
	}
	return [rectangleLength, Math.round(jumperLength), rectangleCount];
}



