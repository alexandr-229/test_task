import { Table } from 'antd';

import { GroupProductsProps } from './group-products.props';
import { usGroupTableOptions } from '../../hooks/use-group-table-options';
import { usePagination } from '../../hooks/use-pagination';
import { useEffect } from 'react';
import { useFilter } from '../../hooks/use-filters';

const { setCount, setPage } = usePagination.getStore();

export const GroupProducts = ({ data, total }: GroupProductsProps) => {
	const { columns, dataSource, expandedRowRender} = usGroupTableOptions({ data });
	const { page, count } = usePagination();
	const { groupBy } = useFilter();

	useEffect(() => {
		setCount(10);
		setPage(1);
	}, [groupBy]);

	const handleOnChangePagination = (page: number, pageSize: number) => {
		setPage(page);
		setCount(pageSize);
	};

	return (
		<Table
			columns={columns}
			dataSource={dataSource}
			pagination={{
				total,
				current: page,
				pageSize: count,
				onChange: handleOnChangePagination,
			}}
			expandable={{
				expandedRowRender,
			}}
		/>
	)
};
