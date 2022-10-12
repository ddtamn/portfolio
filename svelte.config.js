import adapter from '@sveltejs/adapter-static';

const dev = 'production' === 'development';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			pages: 'docs',
			assets: 'docs',
			fallback: 'index.html'
		}),
		paths: {
			base: dev ? '' : '/portfolio'
		}
	}
};

export default config;
