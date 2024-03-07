import { createStore } from '../../../shared/lib/store';
import { GroupBy } from '../types/filters';

interface FiltersState {
	tags: string[];
	brands: string[];
	groupBy: GroupBy;

	setTags: (tags: string[]) => void;
	setBrands: (brands: string[]) => void;
	setGroupBy: (groupBy: GroupBy) => void;
}

export const useFilter = createStore<FiltersState>((_, set) => ({
	groupBy: GroupBy.NONE,
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
}));
