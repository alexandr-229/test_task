import Skeleton from 'react-loading-skeleton';

import styles from './loader.module.css';
import { LoaderProps } from './loader.props';
import 'react-loading-skeleton/dist/skeleton.css';


export const Loader = ({ loading, children }: LoaderProps) => {
	if (loading) {
		return (
			<div className={styles.wrapper}>
				<Skeleton
					count={8}
					className={styles.skeleton}
					containerClassName={styles.containerSkeleton}
					highlightColor="rgba(0, 0, 0, 0.1)"
				/>
			</div>
		)
	}

	return (
		<div>
			{children}
		</div>
	)
};
