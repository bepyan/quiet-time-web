import type { ICopyTemplete } from '@types';
import moment from 'moment';
import { writable, get } from 'svelte/store';
import { getKoDay } from './moment';

const DefaultCopyTemplete = '`월`/`일` (`요일`) `QT책`\n\n`본문`\n`책` `장`:`절`';

const setCopyTemplete = () => {
	const { subscribe, set } = writable(
		(typeof window !== 'undefined' && localStorage.getItem('copyTemplete')) || DefaultCopyTemplete
	);

	const setValue = (value) => {
		localStorage.setItem('copyTemplete', value);
		set(value);
	};

	return {
		subscribe,
		keyup: (value) => setValue(value),
		reset: () => setValue(DefaultCopyTemplete),
		transferTemplete: (
			{ book, capter, contentType, verse, text }: ICopyTemplete,
			templete?: string
		) => {
			const _copyTemplete = templete || get(copyTemplete);

			const result = _copyTemplete
				.replace('`월`', moment().format('MM'))
				.replace('`일`', moment().format('DD'))
				.replace('`요일`', getKoDay())
				.replace('`QT책`', contentType)
				.replace('`책`', book)
				.replace('`본문`', text)
				.replace('`장`', capter + '')
				.replace('`절`', verse + '');

			return result;
		}
	};
};

export const copyTemplete = setCopyTemplete();

const setToast = () => {
	const { subscribe, set } = writable({ show: false, text: '' });

	return {
		subscribe,
		onToast: (text: string, time = 3000) => {
			set({ show: true, text });
			setTimeout(() => set({ show: false, text }), time);
		}
	};
};

export const toast = setToast();

const setLoading = () => {
	const { subscribe, set } = writable(false);

	return {
		subscribe,
		handle: (fn) => async (e?: unknown) => {
			try {
				set(true);
				await fn(e);
			} finally {
				set(false);
			}
		}
	};
};

export const loading = setLoading();
