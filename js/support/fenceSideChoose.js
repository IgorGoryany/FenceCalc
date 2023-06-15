export function fenceSideChoose(isReverse) {

	const isLeft = document
		.getElementById('leftFence')
		.children[0]
		.classList
		.contains('active')

	if (isLeft && isReverse) {
		return 'reverseX'
	}

	if (isLeft) return 'reverse'

	return ''
}
