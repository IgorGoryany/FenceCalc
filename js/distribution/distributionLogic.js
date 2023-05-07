import {distributionCalcFence} from './distributionCalcFence';
import {select} from "../variables/variables";

export function distributionLogic(sizeX, sizeY) {
	if (sizeX > 3000 && sizeY > 3000) {
		distributionCalcFence(+select.value, true, true);
		return;
	}
	if (sizeX > 3000) {
		distributionCalcFence(+select.value, true);
		return;
	}
	if (sizeY > 3000) {
		distributionCalcFence(+select.value, false, true);
		return;
	}
	distributionCalcFence(+select.value);
}
