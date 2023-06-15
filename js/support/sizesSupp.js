import {sideXInput, sideYInput} from "../variables/variables";
import img2000X4000 from "../../img/2000X4000.svg";

export function sizesSupp(image) {
	let sizes = `<span class="top">${sideXInput.value}</span>
					 <span class="left">${sideYInput.value}</span>`;

	let isReverse = false;

	if (image === img2000X4000) {
		sizes = `<span class="top">${sideYInput.value}</span>
					<span class="left">${sideXInput.value}</span>`;

		isReverse = true
	}
	return {sizes, isReverse}
}
