import { createStore } from '../../../shared/lib/store';

interface PaginationState {
	page: number;
	count: number;
	total: number;

	setPage: (page: number) => void;
	setTotal: (page: number) => void;
	setCount: (count: number) => void;
}

export const usePagination = createStore<PaginationState>((_, set) => ({
	page: 1,
	count: 10,
	total: 0,

	setTotal: (total: number) => {
		set({ total });
	},
	setPage: (page: number) => {
		set({ page });
	},
	setCount: (count: number) => {
		set({ count });
	},
}));
