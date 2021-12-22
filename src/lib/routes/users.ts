import type { QTContent, INotion, IUser } from '@types';
import onAxios from '../onAxios';

export const findUser = ({ name }: { name: string }) => {
	return onAxios<IUser>({
		url: `/users/${name}`,
		method: 'GET'
	});
};

/* ---------------- post ---------------- */

export const registerUser = (data: { name: string }) => {
	return onAxios<QTContent>({
		url: `/users`,
		method: 'POST',
		data
	});
};

export const subscriptNotion = ({ name, notion }: { name: string; notion: INotion }) => {
	return onAxios<QTContent>({
		url: `/users/${name}/notion`,
		method: 'POST',
		data: notion
	});
};

/* ---------------- delete ---------------- */

export const deleteUser = (data: { name: string }) => {
	return onAxios<QTContent>({
		url: `/users`,
		method: 'DELETE',
		data
	});
};

export const unsubscriptNotion = ({ name, notion }: { name: string; notion: INotion }) => {
	return onAxios<QTContent>({
		url: `/users/${name}`,
		method: 'DELETE',
		data: notion
	});
};