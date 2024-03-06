import clsx from 'clsx';

import styles from './main.module.css';
import { MainProps } from './main.props';

export const ProductList = ({ className, ...props }: MainProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>Text</div>
	);
};
