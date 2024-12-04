import { defineConfig } from 'astro/config'
import tailwind from '@astrojs/tailwind';
import svgr from "vite-plugin-svgr";

import react from '@astrojs/react';

import cloudflare from '@astrojs/cloudflare';

export default defineConfig({
    integrations: [
        tailwind({
            applyBaseStyles: false,
        }),
        react({
            include: ['**/react/*'],
        })
    ],

    output: 'hybrid',
    adapter: cloudflare(),
    vite: {
        plugins: [
            svgr({
                include: '**/*.svg?react',
                svgrOptions: {
                    plugins: ['@svgr/plugin-svgo', '@svgr/plugin-jsx'],
                    svgoConfig: {
                        plugins: ['preset-default', 'removeTitle', 'removeDesc', 'removeDoctype', 'cleanupIds'],
                    },
                },
            }),
        ],
    }
})
