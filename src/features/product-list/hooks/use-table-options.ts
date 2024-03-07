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
	}, [data])

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
		},
		{
			title: 'Category',
			dataIndex: 'category',
			key: 'category',
		},
		{
			title: 'Brand',
			dataIndex: 'brand',
			key: 'brand',
		},
		{
			title: 'Price',
			dataIndex: 'price',
			key: 'price',
		},
		{
			title: 'Product type',
			dataIndex: 'product_type',
			key: 'product_type',
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
		},
	];

	return {
		dataSource,
		columns,
	}
}