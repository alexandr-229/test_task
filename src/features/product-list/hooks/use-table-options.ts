import { useMemo } from 'react';
import { ProductsProps } from '../ui/products/products.props';
import { ProductImage } from '../ui/product-image/product-image';
import { ProductRating } from '../ui/product-rating/product-rating';
import { ProductColors } from '../ui/product-colors/product-colors';
import { formatText } from '../helpers/text';

export const useTableOptions = ({ data }: Pick<ProductsProps, 'data'>) => {
	const dataSource = useMemo(() => {
		const result = data.map((product) => ({
			key: product.id.toString(),
			name: product.name,
			image: product.image_link,
			category: formatText(product.category || ''),
			brand: formatText(product.brand || ''),
			price: `${product.price_sign || ''}${product.price}`,
			product_type: formatText(product.product_type || ''),
			colors: product.product_colors,
			rating: product.rating || 0,
		}));

		return result;
	}, [data]);

	const getSorter = (key: keyof typeof dataSource[number]) => {
		return {
			compare: (a: typeof dataSource[number], b: typeof dataSource[number], sort?: 'descend' | 'ascend' | null) => {
				console.log(sort);

				return 0;
			},
		};
	};

	const columns = [
		{
			title: 'Image',
			dataIndex: 'image',
			key: 'image',
			render: ProductImage
		},
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			sorter: getSorter('name'),
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
			sorter: getSorter('category'),
		},
		{
			title: 'Brand',
			dataIndex: 'brand',
			key: 'brand',
			sorter: getSorter('brand'),
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
			sorter: getSorter('price'),
		},
		{
			title: 'Product type',
			dataIndex: 'product_type',
			key: 'product_type',
			sorter: getSorter('product_type'),
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
			sorter: getSorter('rating'),
		},
	];

	return {
		dataSource,
		columns,
	}
}