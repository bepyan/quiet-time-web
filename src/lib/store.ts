import type { ICopyTemplete } from '@types';
import moment from 'moment';
import { writable, get } from 'svelte/store';
import { getKoDay } from './moment';

const DefaultCopyTemplete = '`월`/`일` (`요일`) `QT책`\n\n`본문`\n`책` `장`:`절`';

const setCopyTemplete = () => {
	const { subscribe, set } = writable(localStorage.getItem('copyTemplete') || DefaultCopyTemplete);

	return {
		subscribe,
		keyup: (value) => {
			localStorage.setItem('copyTemplete', value);
			set(value);
		},
		reset: () => set(DefaultCopyTemplete),
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
