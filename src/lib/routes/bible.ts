import type { QTContent, ContentType } from '@types';
import onAxios from '../onAxios';

export const getQTContent = ({ contentType }: { contentType: ContentType }) => {
	return onAxios<QTContent>({
		url: `/bible/${contentType}`,
		method: 'GET'
	});
};
