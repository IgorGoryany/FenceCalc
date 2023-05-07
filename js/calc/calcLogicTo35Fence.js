import { lengthCalc } from '../support/lengthCalc';
import { fenceElementsCount } from '../support/fenceElementsCount';
import { sideXInput, sideYInput } from '../variables/variables';

export function calcLogicTo35Fence(pillar, tube, tubeInside, isBigX, isBigY) {
	const [lengthX, lengthY] = [+sideXInput.value, +sideYInput.value];

	const {
		lockCountX,
		divCountX,
		pilarCountX,
		lockCountY,
		divCountY,
		pilarCountY,
	} = fenceElementsCount(isBigX, isBigY);

	const sideX = lengthCalc(lengthX, pillar, pilarCountX, lockCountX, divCountX);
	const sideY = lengthCalc(lengthY, pillar, pilarCountY, lockCountY, divCountY);

	return {
		sideX,
		sideY,

		gate1: lengthX >= 3400 ? sideX : lengthX - pillar * 3 - 510,
		gate2: lengthX >= 3400 ? lengthX - pillar * 4 - 525 - sideX : false,

		insideSideX: sideX - 460 * 2 - tube,

		insideSideY: sideY - 460 * 2 - tube,

		insideGate1:
			lengthX >= 3400
				? sideX - 460 * 2 - tube
				: lengthX - pillar * 3 - 460 - 510,
		insideGate2:
			lengthX >= 3400 ? lengthX - pillar * 4 - 460 - 525 - sideX : false,

		tube,
		tubeInside,

		countX: isBigX ? 2 : 1,
		countY: isBigY ? 2 : 1,
	};
}
