import { Product } from '../../types/product';

export interface GroupProductsProps {
	total: number;
	data: Record<string, Product[]>;
}
