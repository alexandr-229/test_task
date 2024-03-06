import { useFetch } from '../../../shared/lib/use-fetch';
import { Product } from '../types/product';

export const useGetProducts = () => {
	const { data, loading, error } = useFetch<Product[]>('/api/v1/products.json', 'GET');

	console.log(data, loading, error)
	
	return {}
};
