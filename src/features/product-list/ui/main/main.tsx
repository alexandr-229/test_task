import clsx from 'clsx';

import styles from './main.module.css';
import { MainProps } from './main.props';
import { Products } from '../products/products';
import { useGetProducts } from '../../api/use-get-products';
import { Loader } from '../loader/loader';
import { Filters } from '../filters/filters';
import { GroupProducts } from '../group-products/group-products';

export const ProductList = ({ className, ...props }: MainProps) => {
	const { data, brands, tags, loading } = useGetProducts();

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<Filters className={styles.filters} brands={brands} tags={tags} />
			<Loader loading={loading}>
				{Array.isArray(data) ? (
					<Products data={data} />
				) : (
					<GroupProducts data={data.products} total={data.total} />
				)}
			</Loader>
		</div>
	);
};
