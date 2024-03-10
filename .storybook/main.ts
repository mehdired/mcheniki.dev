import type { StorybookConfig } from '@storybook/nextjs';
import TsconfigPathsPlugin from 'tsconfig-paths-webpack-plugin';

const config: StorybookConfig = {
	stories: ['../components/**/*.stories.mdx', '../components/**/*.stories.@(js|jsx|ts|tsx)'],
	addons: [
		'@storybook/addon-links',
		'@storybook/addon-essentials',
		'@storybook/addon-onboarding',
		'@storybook/addon-interactions'
	],
	staticDirs: ['../public'],
	framework: {
		name: '@storybook/nextjs',
		options: {}
	},
	webpackFinal: async (config) => {
		if (config.resolve) {
			config.resolve.plugins = [
				...(config.resolve.plugins || []),
				new TsconfigPathsPlugin({
					extensions: config.resolve.extensions
				})
			];
		}
		return config;
	},
	docs: {
		autodocs: 'tag'
	}
};
export default config;
