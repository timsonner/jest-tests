import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';

// UnoCSS imports:
import UnoCss from 'unocss/vite'
import { extractorSvelte } from '@unocss/core'

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: preprocess(),

	kit: {
		adapter: adapter(),

		// hydrate the <div id="svelte"> element in src/app.html
		target: '#svelte',

		vite: {
			plugins: [
				UnoCss({
					extractors: [extractorSvelte],
					/* options */
					// these presets don't exist yet, but this is where you load them
					// PresetTailwind
				})
			],
			server: {	// hot module reloading workaround
				hmr: {  // if using gitpod, set port to 443(https), otherwise, 3000
					clientPort: process.env.HMR_HOST ? 443 : 3000,
					host: process.env.HMR_HOST ? process.env.HMR_HOST.substring("https://".length) : "localhost"
				}  // trims the length of https:// from begining of string, provides a non https url
			}
		}
	}
};

export default config;