import { Table } from 'antd';

import styles from './products.module.css';
import { ProductsProps } from './products.props';
import { usePagination } from '../../hooks/use-pagination';
import { useTableOptions } from '../../hooks/use-table-options';
import { useEffect } from 'react';

const { setCount, setPage } = usePagination.getStore();

export const Products = ({ data, customSort = false, pagination = true }: ProductsProps) => {
	const { columns, dataSource } = useTableOptions({ data, customSort });
	const { total, count, page } = usePagination();

	useEffect(() => {
		if (!pagination) {
			return;
		}

		setCount(10);
		setPage(1);
	}, []);

	const handleOnChangePagination = (page: number, pageSize: number) => {
		setPage(page);
		setCount(pageSize);
	};

	const paginationOptions = pagination
		? { total, current: page, pageSize: count, onChange: handleOnChangePagination }
		: false;

	return (
		<Table
			id='table'
			showSorterTooltip
			columns={columns}
			dataSource={dataSource}
			rowClassName={styles.row}
			pagination={paginationOptions}
		/>
	);
};
