import clsx from 'clsx';

import styles from './main.module.css';
import { MainProps } from './main.props';
import { useGetProducts } from '../../api/use-get-products';

export const ProductList = ({ className, ...props }: MainProps) => {
	const {} = useGetProducts();

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>Text</div>
	);
};
