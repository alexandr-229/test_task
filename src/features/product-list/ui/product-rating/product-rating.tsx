import { Progress, Tooltip } from 'antd';

export const ProductRating = (props: number | string | { rating: number }) => {
	const rating = typeof props === 'object' ? props.rating : +props;
	const percent = rating * 20;

	const color = (() => {
		if (rating <= 2) {
			return '#ff4d4f';
		}
		
		if (rating <= 4) {
			return '#e7ea09';
		}

		return '#52c41a';
	})();

	return (
		<Tooltip title={`Product rating: ${rating}`}>
			<Progress percent={percent} strokeColor={color} showInfo={false} />
		</Tooltip> 
	)
};
