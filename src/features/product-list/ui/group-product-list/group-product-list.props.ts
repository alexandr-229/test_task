import { DetailedHTMLProps, HTMLAttributes } from 'react';
import { Product } from '../../types/product';

export interface GroupProductListProps extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
	data: Product[];
}
