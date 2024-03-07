import clsx from 'clsx';

import { Products } from '../products/products';
import styles from './group-product-list.module.css';
import { GroupProductListProps } from './group-product-list.props';
import { useEffect, useState } from 'react';

export const GroupProductList = ({ data, className, style, ...props }: GroupProductListProps) => {
	const [maxHeight, setMaxHeight] = useState(0);

	useEffect(() => {
		setMaxHeight(data.length * 133 + 55);
	}, [data]);

	return (
		<div
			className={clsx(styles.wrapper, className)}
			style={{
				...style,
				maxHeight,
			}}
			{...props}
		>
			<Products data={data} pagination={false} customSort />
		</div>
	);
};
