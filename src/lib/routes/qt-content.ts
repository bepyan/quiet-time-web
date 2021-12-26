import type { IQTContent, ContentType } from '@types';
import onAxios from '../onAxios';

export const getQTContent = ({ contentType }: { contentType: ContentType }) => {
	return onAxios<IQTContent>({
		url: `/qt-content/${contentType}`,
		method: 'GET'
	});
};
