import { Product } from './product';

export enum GroupBy {
	NONE = 'none',
	TYPE = 'product_type',
	BRAND = 'brand',
	CATEGORY = 'category',
}

export enum Sort {
	ASC = 'asc',
	DESC = 'desc',
}

export type SortProduct = Pick<Product, 'name' | 'category' | 'brand' | 'price' | 'product_type' | 'rating'>;
