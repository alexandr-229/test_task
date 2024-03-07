import clsx from 'clsx';

import styles from './filters.module.css';
import { Switcher } from '../../../../shared/ui/switcher/switcher';
import { useFilter } from '../../hooks/use-filters';
import { GroupBy } from '../../types/filters';
import { FiltersProps } from './filters.props';

const { setGroupBy } = useFilter.getStore();

export const Filters = ({ className, ...props }: FiltersProps) => {
	const { groupBy } = useFilter();

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<Switcher
				label="Group by type"
				value={groupBy === GroupBy.TYPE}
				setValue={(value) => setGroupBy(value ? GroupBy.TYPE : GroupBy.NONE)}
			/>
			<Switcher
				label="Group by brand"
				value={groupBy === GroupBy.BRAND}
				setValue={(value) => setGroupBy(value ? GroupBy.BRAND : GroupBy.NONE)}
			/>
			<Switcher
				label="Group by category"
				value={groupBy === GroupBy.CATEGORY}
				setValue={(value) => setGroupBy(value ? GroupBy.CATEGORY : GroupBy.NONE)}
			/>
		</div>
	);
};
