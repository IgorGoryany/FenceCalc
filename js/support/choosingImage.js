import { sideXInput, sideYInput } from '../variables/variables';

export function choosingImage() {
	if (+sideXInput.value >= 3400 && +sideYInput.value > 3000) {
		return '4000X4000';
	}

	if (+sideXInput.value === 3000 && +sideYInput.value === 3000) {
		return '3000X3000';
	}

	if (+sideXInput.value === 3000 && +sideYInput.value > 3000) {
		return '2000X4000';
	}

	if (
		+sideXInput.value > 3000 &&
		+sideXInput.value < 3400 &&
		+sideYInput.value > 3000
	) {
		return '3300X4000';
	}

	if (
		+sideXInput.value > 3000 &&
		+sideXInput.value < 3400 &&
		+sideYInput.value < 3000
	) {
		return '3300X2000';
	}

	if (
		+sideXInput.value > 3000 &&
		+sideXInput.value < 3400 &&
		+sideYInput.value === 3000
	) {
		return '3300X3000';
	}

	if (+sideXInput.value >= 3400 && +sideYInput.value < 3000) {
		return '4000X2000';
	}

	if (+sideXInput.value >= 3400 && +sideYInput.value === 3000) {
		return '4000X3000';
	}

	if (+sideXInput.value < 3000 && +sideYInput.value > 3000) {
		return '2000X4000';
	}

	if (+sideXInput.value < 3000 && +sideYInput.value === 3000) {
		return '2000X3000';
	}

	return '2500X2000';
}
