import clsx from 'clsx';
import { Select } from 'antd';

import styles from './filters.module.css';
import { Switcher } from '../../../../shared/ui/switcher/switcher';
import { useFilter } from '../../hooks/use-filters';
import { GroupBy } from '../../types/filters';
import { FiltersProps } from './filters.props';
import { formatText } from '../../helpers/text';

const { setGroupBy, setBrands, setTags } = useFilter.getStore();

export const Filters = ({ className, brands, tags, ...props }: FiltersProps) => {
	const { groupBy } = useFilter();

	const displayBrands = brands.map((brand) => ({ label: formatText(brand), value: brand }));
	const displayTags = tags.map((tag) => ({ label: formatText(tag), value: tag }));

	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<Switcher
				label="Group by type"
				className={styles.switcher}
				value={groupBy === GroupBy.TYPE}
				setValue={(value) => setGroupBy(value ? GroupBy.TYPE : GroupBy.NONE)}
			/>
			<Switcher
				label="Group by brand"
				className={styles.switcher}
				value={groupBy === GroupBy.BRAND}
				setValue={(value) => setGroupBy(value ? GroupBy.BRAND : GroupBy.NONE)}
			/>
			<Switcher
				label="Group by category"
				className={styles.switcher}
				value={groupBy === GroupBy.CATEGORY}
				setValue={(value) => setGroupBy(value ? GroupBy.CATEGORY : GroupBy.NONE)}
			/>
			<Select
				mode="multiple"
				allowClear
				placeholder="Select brands"
				onChange={setBrands}
				options={displayBrands}
				className={styles.select}
			/>
			<Select
				mode="multiple"
				allowClear
				placeholder="Select tags"
				onChange={setTags}
				options={displayTags}
				className={styles.select}
			/>
		</div>
	);
};
