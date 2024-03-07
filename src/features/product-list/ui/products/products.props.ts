import { Product } from '../../types/product';

export interface ProductsProps {
	data: Product[];
	pagination?: boolean;
}
