import { DetailedHTMLProps, HTMLAttributes } from 'react';

export interface FiltersProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	brands: string[];
	tags: string[];
}
