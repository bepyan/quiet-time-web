import axios, { AxiosInstance, AxiosRequestConfig } from 'axios';

const baseURL = 'https://quiet-time-server.herokuapp.com/api';

const instance: AxiosInstance = axios.create({
	baseURL
	// timeout: 5000,
});

instance.interceptors.request.use(
	(config) => ({
		...config,
		headers: {
			'Content-Type': 'application/json',
			...config.headers
		}
	}),
	(error) => {
		alert(error.message);
		return Promise.reject(error);
	}
);

instance.interceptors.response.use(
	(res) => {
		console.log(`[Axios ${res.status}] ${res.config.url}`);
		return res;
	},
	async (error) => {
		const { status, data, config } = error.response;
		console.log(`[ Error ${status} ] ${config.url}`, data);
		return Promise.reject(error);
	}
);

interface APIReturnType<T> {
	data?: T;
	message?: string;
}

export type onAxiosResult<T> = Promise<APIReturnType<T>>;

const onAxios = async <T>(props: AxiosRequestConfig): onAxiosResult<T> => {
	try {
		return await instance(props);
	} catch (e) {
		return e?.response?.data;
	}
};

export default onAxios;
