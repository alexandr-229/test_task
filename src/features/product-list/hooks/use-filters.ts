import { createStore } from '../../../shared/lib/store';
import { GroupBy, Sort } from '../types/filters';
import { Product } from '../types/product';

interface FiltersState {
	sort: Sort;
	tags: string[];
	brands: string[];
	groupBy: GroupBy;
	sortBy: keyof Pick<Product, 'name' | 'category' | 'brand' | 'price' | 'product_type' | 'rating'>;

	setTags: (tags: string[]) => void;
	setBrands: (brands: string[]) => void;
	setGroupBy: (groupBy: GroupBy) => void;
	setSort: (sortBy: keyof Pick<Product, 'name' | 'category' | 'brand' | 'price' | 'product_type' | 'rating'>, sort: Sort) => void;
}

export const useFilter = createStore<FiltersState>((_, set) => ({
	groupBy: GroupBy.NONE,
	sort: Sort.DESC,
	sortBy: 'name',
	brands: [],
	tags: [],

	setTags: (tags: string[]) => {
		set({ tags });
	},
	setBrands: (brands: string[]) => {
		set({ brands });
	},
	setGroupBy: (groupBy: GroupBy) => {
		set({ groupBy });
	},
	setSort: (sortBy: keyof Pick<Product, 'name' | 'category' | 'brand' | 'price' | 'product_type' | 'rating'>, sort: Sort) => {
		set({ sortBy, sort });
	},
}));
