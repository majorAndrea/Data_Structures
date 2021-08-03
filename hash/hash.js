// NOT COMPLETED
// This is not a serious implementation, it's just to
// learn how hash tables work under the hood.

const hash = (key, arrayLength) => {
	let total = 0;

	for (let char of key) {
		const value = char.charCodeAt(0) - 96;
		total = (total + value) % arrayLength;
	}

	return total;
}
