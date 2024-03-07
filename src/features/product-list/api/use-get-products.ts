import { useEffect, useMemo } from 'react';
import { useFetch } from '../../../shared/lib/use-fetch';
import { usePagination } from '../hooks/use-pagination';
import { Product } from '../types/product';
import { useFilter } from '../hooks/use-filters';
import { GroupBy } from '../types/filters';

const { setTotal } = usePagination.getStore();

export const useGetProducts = () => {
	const { data: response, loading } = useFetch<Product[]>('/api/v1/products.json', 'GET');
	const { page, count } = usePagination();
	const { groupBy } = useFilter();

	useEffect(() => {
		setTotal(response?.length || 0);
	}, [response]);

	const data = useMemo(() => {
		if (groupBy === GroupBy.NONE) {
			const result = (response || []).slice((page - 1) * count, (page) * count);
			
			return result;
		} else {
			const groupProducts = (response || []).reduce<Record<string, Product[]>>((acc, product) => {
				if (!product[groupBy]) {
					return acc;
				}

				if (acc[product[groupBy] as string]) {
					acc[product[groupBy] as string].push(product);
				} else {
					acc[product[groupBy] as string] = [product];
				}

				return acc;
			}, {});

			const products = Object.fromEntries(Object.entries(groupProducts).slice((page - 1) * count, (page) * count));

			return {
				products,
				total: Object.entries(groupProducts).length,
			};
		}
	}, [response, page, count, groupBy]);
	
	return {
		data,
		loading,
	};
};

