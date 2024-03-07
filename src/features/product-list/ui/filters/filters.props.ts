import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	loading: boolean;
	brands: string[];
	tags: string[];
}
