import {
	calcLogicTo15And25Fence,
	calcLogicTo35Fence,
	calcLogicToFrameFence,
	calcLogicToSimpleFence
} from '../calc/entryCalcLogic';
import {print15And25Fence, print35Fence, print5Fence, printFrameFence, printSimpleFence} from '../print/entryPrint';


export function distributionCalcFence(modelNum, isBigX, isBigY) {
	if (modelNum >= 1 && modelNum <= 4 && modelNum !== 3) {
		printSimpleFence(calcLogicToSimpleFence(50, 25, 25, isBigX, isBigY));

		return;
	}

	if (modelNum === 3) {
		printFrameFence(calcLogicToFrameFence(50, 25, isBigX, isBigY));

		return;
	}

	if (modelNum === 5) {
		print5Fence(calcLogicToSimpleFence(40, 20, 20, isBigX, isBigY));

		return;
	}

	if (modelNum === 6 || modelNum === 10) {
		printFrameFence(calcLogicToFrameFence(40, 25, isBigX, isBigY));

		return;
	}

	if (modelNum === 14) {
		printSimpleFence(calcLogicToSimpleFence(40, 25, 25, isBigX, isBigY));

		return;
	}

	if (modelNum === 11) {
		printSimpleFence(calcLogicToSimpleFence(40, 25, 20, isBigX, isBigY));

		return;
	}

	if (modelNum === 15) {
		print15And25Fence(calcLogicTo15And25Fence(40, 25, 20, 240, isBigX, isBigY));

		return;
	}

	if (modelNum === 21 || modelNum === 22) {
		printSimpleFence(calcLogicToSimpleFence(30, 20, 15, isBigX, isBigY));

		return;
	}

	if (modelNum === 20 || modelNum === 23 || modelNum === 24) {
		printFrameFence(calcLogicToFrameFence(30, 20, isBigX, isBigY));

		return;
	}

	if (modelNum === 25) {
		print15And25Fence(calcLogicTo15And25Fence(30, 20, 20, 240, isBigX, isBigY));

		return;
	}

	if (modelNum === 32 || modelNum === 34) {
		printSimpleFence(calcLogicToSimpleFence(25, 20, 15, isBigX, isBigY));

		return;
	}

	if (modelNum === 35) {
		print35Fence(calcLogicTo35Fence(25, 20, 15, isBigX, isBigY));

		return;
	}

	if (modelNum >= 30 && modelNum <= 40) {
		printFrameFence(calcLogicToSimpleFence(25, 20, 15, isBigX, isBigY));
	}
}
