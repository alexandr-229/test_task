import clsx from 'clsx';
import { Switch } from 'antd';

import styles from './switcher.module.css';
import { SwitcherProps } from './switcher.props';

export const Switcher = ({ setValue, value, label, className, ...props }: SwitcherProps) => {
	return (
		<div className={clsx(styles.wrapper, className)} {...props}>
			<Switch onChange={(checked) => setValue(checked)} checked={value} />
			<p>{label}</p>
		</div>
	);
};
