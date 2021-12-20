import type { Content } from '@types';
import onAxios from '../onAxios';

export const getQTContent = () => {
	return onAxios<Content>({
		url: `/bible`,
		method: 'GET'
	});
};
