import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface SwitcherProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	label: string;
	value: boolean;
	setValue: (value: boolean) => void;
}
