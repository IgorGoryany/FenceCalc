import { sideXInput, sideYInput } from '../variables/variables';

import img2000X3000 from '../../img/2000X3000.svg';
import img2000X4000 from '../../img/2000X4000.svg';
import img2500X2000 from '../../img/2500X2000.svg';
import img3000X3000 from '../../img/3000X3000.svg';
import img3300X2000 from '../../img/3300X2000.svg';
import img3300X3000 from '../../img/3300X3000.svg';
import img3300X4000 from '../../img/3300X4000.svg';
import img4000X2000 from '../../img/4000X2000.svg';
import img4000X3000 from '../../img/4000X3000.svg';
import img4000X4000 from '../../img/4000X4000.svg';

export function choosingImage() {
	if (+sideXInput.value >= 3400 && +sideYInput.value > 3000) {
		return img4000X4000;
	}

	if (+sideXInput.value === 3000 && +sideYInput.value === 3000) {
		return img3000X3000;
	}

	if (+sideXInput.value <= 3000 && +sideYInput.value > 3000) {
		return img2000X4000;
	}

	if (
		+sideXInput.value > 3000 &&
		+sideXInput.value < 3400 &&
		+sideYInput.value > 3000
	) {
		return img3300X4000;
	}

	if (
		+sideXInput.value > 3000 &&
		+sideXInput.value < 3400 &&
		+sideYInput.value < 3000
	) {
		return img3300X2000;
	}

	if (
		+sideXInput.value > 3000 &&
		+sideXInput.value < 3400 &&
		+sideYInput.value === 3000
	) {
		return img3300X3000;
	}

	if (+sideXInput.value >= 3400 && +sideYInput.value < 3000) {
		return img4000X2000;
	}

	if (+sideXInput.value >= 3400 && +sideYInput.value === 3000) {
		return img4000X3000;
	}

	if (+sideXInput.value < 3000 && +sideYInput.value === 3000) {
		return img2000X3000;
	}

	return img2500X2000;
}
