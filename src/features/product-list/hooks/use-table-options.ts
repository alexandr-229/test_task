import { useMemo } from 'react';
import { ProductsProps } from '../ui/products/products.props';
import { ProductImage } from '../ui/product-image/product-image';
import { ProductRating } from '../ui/product-rating/product-rating';
import { ProductColors } from '../ui/product-colors/product-colors';
import { formatText } from '../helpers/text';
import { useFilter } from './use-filters';
import { Sort, SortProduct } from '../types/filters';
import { sortProducts } from '../helpers/products';

const { setSort } = useFilter.getStore();

export const useTableOptions = ({ data, customSort }: Pick<ProductsProps, 'data' | 'customSort'>) => {
	const dataSource = useMemo(() => {
		const result = data.map((product) => ({
			key: product.id.toString(),
			name: product.name,
			image: product.image_link,
			category: formatText(product.category || ''),
			brand: formatText(product.brand || ''),
			price: product.price || '0',
			display_price: `${product.price_sign || ''}${product.price}`,
			product_type: formatText(product.product_type || ''),
			colors: product.product_colors,
			rating: product.rating || 0,
		}));

		return result;
	}, [data]);

	const getSorter = (key: keyof SortProduct) => {
		return {
			sorter: {
				compare: (a: typeof dataSource[number], b: typeof dataSource[number], sort?: 'descend' | 'ascend' | null) => {
					if (!customSort) {
						setSort(key, sort === 'ascend' ? Sort.ASC : Sort.DESC);
						return 0;
					}
	
					const result = sortProducts(a, b, key, sort === 'ascend' ? Sort.ASC : Sort.DESC);

					return result;
				},
			}
		};
	};

	const columns = [
		{
			title: 'Image',
			dataIndex: 'image',
			key: 'image',
			width: 120,
			render: ProductImage
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			width: 400,
			...getSorter('name')
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			...getSorter('category'),
		},
		{
			title: 'Brand',
			dataIndex: 'brand',
			key: 'brand',
			...getSorter('brand'),
		},
		{
			title: 'Price',
			dataIndex: 'display_price',
			key: 'display_price',
			...getSorter('price'),
		},
		{
			title: 'Product type',
			dataIndex: 'product_type',
			key: 'product_type',
			...getSorter('product_type'),
		},
		{
			title: 'Colors',
			dataIndex: 'colors',
			key: 'colors',
			width: 200,
			render: ProductColors,
		},
		{
			title: 'Rating',
			dataIndex: 'rating',
			key: 'rating',
			width: 200,
			render: ProductRating,
			...getSorter('rating'),
		},
	];

	return {
		dataSource,
		columns,
	}
}