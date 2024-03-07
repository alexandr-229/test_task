import { useMemo } from 'react';
import { useFetch } from '../../../shared/lib/use-fetch';
import { usePagination } from '../hooks/use-pagination';
import { Product } from '../types/product';
import { useFilter } from '../hooks/use-filters';
import { GroupBy } from '../types/filters';

const { setTotal } = usePagination.getStore();

const getUrl = (selectedTags: string[]) => {
	const options: Record<string, string> = {};
	if (selectedTags.length) {
		options.product_tags = selectedTags.join(',');
	}

	const root = '/api/v1/products.json';
	const query = new URLSearchParams(options).toString();

	const result = `${root}?${query}`;

	return result;
};

export const useGetProducts = () => {
	const { groupBy, tags: selectedTags, brands: selectedBrands } = useFilter();
	const { data: response, loading } = useFetch<Product[]>(getUrl(selectedTags), 'GET');
	const { data: brandsResponse } = useFetch<Product[]>('/api/v1/products.json', 'GET');
	const { page, count } = usePagination();

	const data = useMemo(() => {
		// APIs do not support multi-brand selection
		const filteredProducts = (response || []).filter((product) => selectedBrands.length ? selectedBrands.includes(product.brand || '') : true)

		if (groupBy === GroupBy.NONE) {
			const result = filteredProducts.slice((page - 1) * count, (page) * count);

			setTotal(filteredProducts.length);
			
			return result;
		} else {
			const groupProducts = filteredProducts.reduce<Record<string, Product[]>>((acc, product) => {
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

			setTotal(Object.entries(groupProducts).length);

			return products;
		}
	}, [response, page, count, groupBy, selectedTags, selectedBrands]);

	const brands = Array.from(new Set((brandsResponse || []).map((product) => product.brand).filter(Boolean) as string[]))
	const tags = Array.from(new Set((response || []).flatMap((product) => product.tag_list)))
	
	return {
		tags,
		data,
		brands,
		loading,
	};
};

