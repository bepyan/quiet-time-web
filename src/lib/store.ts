import { writable } from 'svelte/store';

const DefaultCopyTemplete = '`월`/`일` 큐티\n\n`본문`\n`책` `장`:`절`';

const setCopyTemplete = () => {
	const { subscribe, set } = writable(localStorage.getItem('copyTemplete') || DefaultCopyTemplete);

	return {
		reset: () => set(DefaultCopyTemplete),
		subscribe,
		keyup: (value) => {
			localStorage.setItem('copyTemplete', value);
			set(value);
		}
	};
};

export const copyTemplete = setCopyTemplete();
