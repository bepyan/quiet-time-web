import { respond } from '@sveltejs/kit/ssr';
import root from './generated/root.svelte';
import { set_paths, assets } from './runtime/paths.js';
import { set_prerendering } from './runtime/env.js';
import * as user_hooks from "./hooks.js";

const template = ({ head, body }) => "<!DOCTYPE html>\n<html lang=\"en\">\n\n<head>\n\t<meta charset=\"utf-8\" />\n\t<meta name=\"description\" content=\"Svelte demo app\" />\n\t<link rel=\"icon\" href=\"/favicon.png\" />\n\t<meta name=\"viewport\" content=\"width=device-width, initial-scale=1\" />\n\t" + head + "\n</head>\n\n<body>\n\t<div id=\"svelte\">" + body + "</div>\n</body>\n\n</html>";

let options = null;

const default_settings = { paths: {"base":"/quiet-time-web","assets":""} };

// allow paths to be overridden in svelte-kit preview
// and in prerendering
export function init(settings = default_settings) {
	set_paths(settings.paths);
	set_prerendering(settings.prerendering || false);

	const hooks = get_hooks(user_hooks);

	options = {
		amp: false,
		dev: false,
		entry: {
			file: assets + "/_app/start-1f3e182e.js",
			css: [assets + "/_app/assets/start-61d1577b.css"],
			js: [assets + "/_app/start-1f3e182e.js",assets + "/_app/chunks/vendor-f68496aa.js",assets + "/_app/chunks/paths-28a87002.js"]
		},
		fetched: undefined,
		floc: false,
		get_component_path: id => assets + "/_app/" + entry_lookup[id],
		get_stack: error => String(error), // for security
		handle_error: (error, request) => {
			hooks.handleError({ error, request });
			error.stack = options.get_stack(error);
		},
		hooks,
		hydrate: true,
		initiator: undefined,
		load_component,
		manifest,
		paths: settings.paths,
		prerender: true,
		read: settings.read,
		root,
		service_worker: null,
		router: true,
		ssr: true,
		target: "#svelte",
		template,
		trailing_slash: "never"
	};
}

// input has already been decoded by decodeURI
// now handle the rest that decodeURIComponent would do
const d = s => s
	.replace(/%23/g, '#')
	.replace(/%3[Bb]/g, ';')
	.replace(/%2[Cc]/g, ',')
	.replace(/%2[Ff]/g, '/')
	.replace(/%3[Ff]/g, '?')
	.replace(/%3[Aa]/g, ':')
	.replace(/%40/g, '@')
	.replace(/%26/g, '&')
	.replace(/%3[Dd]/g, '=')
	.replace(/%2[Bb]/g, '+')
	.replace(/%24/g, '$');

const empty = () => ({});

const manifest = {
	assets: [{"file":"favicon.png","size":1571,"type":"image/png"},{"file":"robots.txt","size":67,"type":"text/plain"}],
	layout: "src/routes/__layout.svelte",
	error: ".svelte-kit/build/components/error.svelte",
	routes: [
		{
						type: 'page',
						pattern: /^\/$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/index.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/subscription\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/subscription.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					},
		{
						type: 'page',
						pattern: /^\/setting\/?$/,
						params: empty,
						a: ["src/routes/__layout.svelte", "src/routes/setting.svelte"],
						b: [".svelte-kit/build/components/error.svelte"]
					}
	]
};

// this looks redundant, but the indirection allows us to access
// named imports without triggering Rollup's missing import detection
const get_hooks = hooks => ({
	getSession: hooks.getSession || (() => ({})),
	handle: hooks.handle || (({ request, resolve }) => resolve(request)),
	handleError: hooks.handleError || (({ error }) => console.error(error.stack)),
	externalFetch: hooks.externalFetch || fetch
});

const module_lookup = {
	"src/routes/__layout.svelte": () => import("../../src/routes/__layout.svelte"),".svelte-kit/build/components/error.svelte": () => import("./components/error.svelte"),"src/routes/index.svelte": () => import("../../src/routes/index.svelte"),"src/routes/subscription.svelte": () => import("../../src/routes/subscription.svelte"),"src/routes/setting.svelte": () => import("../../src/routes/setting.svelte")
};

const metadata_lookup = {"src/routes/__layout.svelte":{"entry":"pages/__layout.svelte-10036366.js","css":["assets/pages/__layout.svelte-444d5d57.css","assets/Toast-d819ed04.css"],"js":["pages/__layout.svelte-10036366.js","chunks/vendor-f68496aa.js","chunks/paths-28a87002.js","chunks/Toast-ab21f2bf.js"],"styles":[]},".svelte-kit/build/components/error.svelte":{"entry":"error.svelte-9c658cd4.js","css":[],"js":["error.svelte-9c658cd4.js","chunks/vendor-f68496aa.js"],"styles":[]},"src/routes/index.svelte":{"entry":"pages/index.svelte-a32d90d2.js","css":["assets/pages/index.svelte-81d0a1e7.css","assets/Toast-d819ed04.css"],"js":["pages/index.svelte-a32d90d2.js","chunks/vendor-f68496aa.js","chunks/Toast-ab21f2bf.js"],"styles":[]},"src/routes/subscription.svelte":{"entry":"pages/subscription.svelte-a0e5df16.js","css":["assets/pages/subscription.svelte-24c0cb05.css"],"js":["pages/subscription.svelte-a0e5df16.js","chunks/vendor-f68496aa.js"],"styles":[]},"src/routes/setting.svelte":{"entry":"pages/setting.svelte-6d939f9f.js","css":["assets/pages/setting.svelte-8cf39e00.css"],"js":["pages/setting.svelte-6d939f9f.js","chunks/vendor-f68496aa.js"],"styles":[]}};

async function load_component(file) {
	const { entry, css, js, styles } = metadata_lookup[file];
	return {
		module: await module_lookup[file](),
		entry: assets + "/_app/" + entry,
		css: css.map(dep => assets + "/_app/" + dep),
		js: js.map(dep => assets + "/_app/" + dep),
		styles
	};
}

export function render(request, {
	prerender
} = {}) {
	const host = request.headers["host"];
	return respond({ ...request, host }, options, { prerender });
}