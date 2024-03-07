import { SyntheticEvent } from 'react';

import styles from './product-image.module.css';

export const ProductImage = (src: string) => {
	const handleOnError = (event: SyntheticEvent<HTMLImageElement, Event>) => {
		if ('src' in event.target) {
			event.target.src = '/makeup.png';
		}
	};
	
	return <img src={src} alt="Product image" onError={handleOnError} className={styles.image} />
};
