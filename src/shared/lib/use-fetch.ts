import { useEffect, useState } from 'react';

export const useFetch = <T>(url: string, method: string) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [data, setData] = useState<T>();

	useEffect(() => {
		fetchData();
	}, [url, method]);

	const fetchData = async () => {
		try {
			setLoading(true);
			setError(false);

			const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}${url}`, { method });

			if (response.status >= 400) {
				throw new Error();
			}

			const result: T = await response.json();
			setData(result);
		} catch(e) {
			console.log(`Failed to fetch: ${e}`);
			setError(true);
		} finally {
			setLoading(false);
		}
	};

	return {
		loading,
		setData,
		error,
		data,
	};
};
