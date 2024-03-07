import clsx from 'clsx';

import styles from './main.module.css';
import { MainProps } from './main.props';
import { Products } from '../products/products';
import { useGetProducts } from '../../api/use-get-products';

export const ProductList = ({ className, ...props }: MainProps) => {
	const { data, loading } = useGetProducts();

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<Products loading={loading} data={data} />
		</div>
	);
};
