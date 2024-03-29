import styles from './product-colors.module.css';
import { ProductColor } from '../../types/product';
import './product-colors.module.css'

export const ProductColors = (props: ProductColor[] | { colors: ProductColor[] }) => {
	const colors = Array.isArray(props) ? props : props.colors;

	return (
		<div className={styles.wrapper}>
			{colors.map((color) => (
				<div className={styles.color}>
					<div className={styles.colorCircle} style={{ background: color.hex_value }} />
					<p className={styles.colorName}>{color.colour_name}</p>
				</div>
			))}
		</div>
	)
};
