export function lengthCalc(length, pillar, pilarCount, lockCount, divCount) {
	const x = (length - pillar * pilarCount - 15 * lockCount) / divCount;

	if (x % 10 > 0 && x % 10 <= 5) {
		return 5 - (x % 10) + x;
	}

	if (x % 10 > 5) {
		return 10 - (x % 10) + x;
	}
	return x;
}
