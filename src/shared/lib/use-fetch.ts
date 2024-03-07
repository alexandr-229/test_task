import { useEffect, useState } from 'react';

interface Options {
	cacheResponse: boolean;
}

const cacheData: Map<string, any> = new Map();

export const useFetch = <T>(url: string, method: string, options: Partial<Options> = {}) => {
	const [loading, setLoading] = useState<boolean>(false);
	const [error, setError] = useState<boolean>(false);
	const [data, setData] = useState<T>();

	useEffect(() => {
		fetchData();
	}, [url, method]);

	const fetchData = async () => {
		try {
			const cacheKey = `${url}_${method}`;

			if (options.cacheResponse && cacheData.get(cacheKey)) {
				setData(cacheData.get(cacheKey));
				return;
			}

			setLoading(true);
			setError(false);

			const response = await fetch(`${process.env.REACT_APP_BACKEND_URL}${url}`, { method });

			if (response.status >= 400) {
				throw new Error();
			}

			const result: T = await response.json();
			setData(result);

			if (options.cacheResponse) {
				cacheData.set(cacheKey, result);
			}
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
