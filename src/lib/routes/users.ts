import type { IUser, UserDTO, SubscriptNotionDTO, CreateNotionDTO } from '@types';
import onAxios from '../onAxios';

export const findUser = ({ name }: { name: string }) => {
	return onAxios<IUser | null>({
		url: `/users/${name}`,
		method: 'GET'
	});
};

/* ---------------- post ---------------- */

export const registerUser = (data: UserDTO) => {
	return onAxios<void>({
		url: `/users`,
		method: 'POST',
		data
	});
};

export const registerNotion = ({ name, ...data }: CreateNotionDTO) => {
	return onAxios<void>({
		url: `/users/${name}/notion`,
		method: 'POST',
		data
	});
};

export const subscriptNotion = ({ name, notion }: SubscriptNotionDTO) => {
	return onAxios<void>({
		url: `/users/${name}/notion/subscription`,
		method: 'POST',
		data: { notion }
	});
};

/* ---------------- delete ---------------- */

export const deleteUser = (data: { name: string }) => {
	return onAxios<void>({
		url: `/users`,
		method: 'DELETE',
		data
	});
};

export const unsubscriptNotion = ({ name, notion }: SubscriptNotionDTO) => {
	return onAxios<void>({
		url: `/users/${name}/notion/subscription`,
		method: 'DELETE',
		data: { notion }
	});
};
