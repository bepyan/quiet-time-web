import type { ContentType } from '$lib/mockup';
import type { IQTContent } from '@types';
import onAxios from '../onAxios';

export const getQTContent = ({ contentType }: { contentType: ContentType }) => {
	return onAxios<IQTContent>({
		url: `/qt-content/${contentType}`,
		method: 'GET'
	});
};

export const get생명의삶 = () => {
	return onAxios<IQTContent>({
		url: `/생명의삶`,
		method: 'GET'
	});
};

export const get매일성경 = () => {
	return onAxios<IQTContent>({
		url: `/매일성경`,
		method: 'GET'
	});
};
