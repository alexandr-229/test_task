import { Sort, SortProduct } from '../types/filters';

export const sortProducts = (a: SortProduct, b: SortProduct, key: keyof SortProduct | null, sort: Sort) => {
	if (!key) {
		return 0;
	}

	if ((typeof a[key] === 'number' && typeof b[key] === 'number') || key === 'rating' || key === 'price') {
		const result = sort === Sort.DESC
			? +(a[key] || 0) - +(b[key] || 0)
			: +(b[key] || 0) - +(a[key] || 0)

		return result;
	}

	if (typeof a[key] === 'string' && typeof b[key] === 'string') {
		const result = sort === Sort.DESC
			? a.name.localeCompare(b.name)
			: b.name.localeCompare(a.name);

		return result;
	}

	return 0;
};
