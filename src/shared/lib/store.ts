import { useSyncExternalStore } from 'react';

export const createStore = <T>(create: (get: () => T, set: (partial: Partial<T>) => void) => T) => {
	let store: T;
	const subscribers: Set<() => void> = new Set();

	const api = {
		getStore: () => {
			return store;
		},
		setStore: (partial: Partial<T>) => {
			store = {
				...store,
				...partial,
			};

			subscribers.forEach((subscriber) => subscriber());
		},
		subscribe: (subscriber: () => void) => {
			subscribers.add(subscriber);

			return () => {
				subscribers.delete(subscriber);
			};
		},
	};

	store = create(api.getStore, api.setStore);

	const result = () => {
		const useValue = useSyncExternalStore(
			api.subscribe,
			api.getStore,
			api.getStore,
		);

		return useValue;
	};

	Object.assign(result, api);

	return result as {
		(): T,
		getStore: () => T,
		setStore: (partial: Partial<T>) => void,
	};
};
