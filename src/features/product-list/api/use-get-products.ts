import { useEffect } from 'react';
import { useFetch } from '../../../shared/lib/use-fetch';
import { usePagination } from '../hooks/use-pagination';
import { Product } from '../types/product';

const { setTotal } = usePagination.getStore();

export const useGetProducts = () => {
	const { data: response, loading } = useFetch<Product[]>('/api/v1/products.json', 'GET');
	const { page, count } = usePagination();

	useEffect(() => {
		setTotal(response?.length || 0);
	}, [response]);

	const data = (response || []).slice((page - 1) * count, (page) * count);
	
	return {
		data,
		loading,
	};
};

