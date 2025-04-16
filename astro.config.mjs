// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import svelte from '@astrojs/svelte';

// https://astro.build/config
export default defineConfig({
	prefetch: true,
	vite: {
		css: {
			transformer: 'lightningcss'
		},
		plugins: [tailwindcss()]
	},
	integrations: [svelte()]
});
