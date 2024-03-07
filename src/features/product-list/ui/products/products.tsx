import { Table } from 'antd';

import styles from './products.module.css';
import { ProductsProps } from './products.props';
import { usePagination } from '../../hooks/use-pagination';
import { useTableOptions } from '../../hooks/use-table-options';

const { setCount, setPage } = usePagination.getStore();

export const Products = ({ data }: ProductsProps) => {
	const { columns, dataSource } = useTableOptions({ data });
	const { total, count, page } = usePagination();

	const handleOnChangePagination = (page: number, pageSize: number) => {
		setPage(page);
		setCount(pageSize);
	};

	return (
		<Table
			columns={columns}
			dataSource={dataSource}
			rowClassName={styles.row}
			pagination={{
				total,
				current: page,
				pageSize: count,
				onChange: handleOnChangePagination,
			}}
		/>
	);
};
