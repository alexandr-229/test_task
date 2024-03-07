import { formatText } from '../helpers/text';
import { GroupProductList } from '../ui/group-product-list/group-product-list';
import { GroupProductsProps } from '../ui/group-products/group-products.props';
import { useFilter } from './use-filters';

export const usGroupTableOptions = ({ data }: Pick<GroupProductsProps, 'data'>) => {
	const { groupBy } = useFilter();
	
	const columns = [
		{
			title: formatText(groupBy),
			dataIndex: 'groupBy',
			key: 'groupBy',
		},
	];

	const dataSource = Object.keys(data).map((key) => ({
		key,
		groupBy: formatText(key || ''),
	}));

	const expandedRowRender = ({ key }: { key: string }, index: number, indent: number, expanded: boolean) => {
		const products = expanded ? (data[key] || []) : [];
		return <GroupProductList data={products} />
	};

	return {
		columns,
		dataSource,
		expandedRowRender,
	};
};
