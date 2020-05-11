export const trampoline = (fun) => {
	return (...args) => {
		let result = fun(...args);
		while (typeof result === 'function') {
			result = result();
		}
		return result;
	};
};
export const get = function (iterable, path) {
	if (typeof path === 'string') path = path.split('.');
	if (!Array.isArray(path)) return undefined;
	let firstProp = path.shift();
	const subPath =
      typeof firstProp === 'string' ? firstProp.split('.') : [firstProp];
	firstProp = subPath.shift();
	path.unshift(...subPath);
	const current = iterable[firstProp];
	return current && path.length ? get(current, path) : current;
};
export const last = (array, n) => {
	if (array == null) return void 0;
	if (!n) return array[array.length - 1];

	return array.slice(Math.max(array.length - n, 0));
};

export const sortBy = (iteratee = (value) => value, reverse) => (a, b) => {
	const first = iteratee(a);
	const second = iteratee(b);
	if (first === second) return 0;
	if (first > second) return reverse ? -1 : 1;

	return reverse ? 1 : -1;
};

export const accumulate = (acc, value) => acc + value;
