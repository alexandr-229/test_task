import { Product } from '../../types/product';

export interface ProductsProps {
	data: Product[];
	customSort?: boolean;
	pagination?: boolean;
}
