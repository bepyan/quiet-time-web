import type { ContentType } from '$lib/mockup';
import type { IQTContent } from '@types';
import onAxios from '../onAxios';

export const getQTContent = ({ contentType }: { contentType: ContentType }) => {
	if (contentType === '생명의삶') {
		return get생명의삶();
	} else if (contentType === '매일성경') {
		return get매일성경('기본');
	} else if (contentType === '매일성경 순') {
		return get매일성경('순');
	} else if (contentType === '매일성경 영어') {
		return get매일성경('영어');
	}
};

export const get생명의삶 = () => {
	return onAxios<IQTContent>({
		url: `/living-life`,
		method: 'GET'
	});
};

export const get매일성경 = (bible = '기본') => {
	return onAxios<IQTContent>({
		url: `/daily-bible`,
		method: 'GET',
		params: {
			bible
		}
	});
};
