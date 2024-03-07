import { Switch } from 'antd';

import styles from './switcher.module.css';
import { SwitcherProps } from './switcher.props';

export const Switcher = ({ setValue, value, label }: SwitcherProps) => {
	return (
		<div className={styles.wrapper}>
			<Switch onChange={(checked) => setValue(checked)} checked={value} />
			<p>{label}</p>
		</div>
	);
};
