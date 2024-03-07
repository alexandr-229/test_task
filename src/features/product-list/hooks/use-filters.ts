import { createStore } from '../../../shared/lib/store';
import { GroupBy } from '../types/filters';

interface FiltersState {
	groupBy: GroupBy;

	setGroupBy: (groupBy: GroupBy) => void;
}

export const useFilter = createStore<FiltersState>((_, set) => ({
	groupBy: GroupBy.NONE,

	setGroupBy: (groupBy: GroupBy) => {
		set({ groupBy });
	},
}));
