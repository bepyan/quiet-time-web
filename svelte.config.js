import static_adapter from '@sveltejs/adapter-static';
import preprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	preprocess: preprocess(),
	kit: {
		target: '#svelte',
		adapter: static_adapter(),
		paths: {
			base: '/quiet-time-web'
		}
	}
};

export default config;
