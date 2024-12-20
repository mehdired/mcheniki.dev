import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import svgr from 'vite-plugin-svgr';
import { loadEnv } from 'vite';

const { PUBLIC_URL_WEBSITE } = loadEnv(process.env.NODE_ENV, process.cwd(), '');

import react from '@astrojs/react';

import sitemap from '@astrojs/sitemap';

import node from '@astrojs/node';

export default defineConfig({
	experimental: {
		svg: true,
	},
	site: PUBLIC_URL_WEBSITE ?? 'http://localhost:4321',
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react({
			include: ['**/react/*'],
		}),
		sitemap(),
	],
	adapter: node({
		mode: 'standalone',
	}),
	vite: {
		plugins: [
			svgr({
				include: '**/*.svg?react',
				svgrOptions: {
					plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
					svgoConfig: {
						plugins: [
							'preset-default',
							'removeTitle',
							'removeDesc',
							'removeDoctype',
							'cleanupIds',
						],
					},
				},
			}),
		],
	},
});
