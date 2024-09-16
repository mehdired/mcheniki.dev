import localFont from 'next/font/local';

export const jetbrains = localFont({
	variable: '--font-jetbrains',
	src: [
		{
			path: '../public/fonts/JetBrainsMono-Italic.woff2',
			weight: '400',
			style: 'italic'
		},
		{
			path: '../public/fonts/JetBrainsMono-SemiBold.woff2',
			weight: '600'
		},
		{
			path: '../public/fonts/JetBrainsMono-Bold.woff2',
			weight: '700'
		},
		{
			path: '../public/fonts/JetBrainsMono-BoldItalic.woff2',
			weight: '700',
			style: 'italic'
		}
	]
});

export const roundo = localFont({
	variable: '--font-roundo',
	src: [
		{
			path: '../public/fonts/Roundo-Light.woff2',
			weight: '300'
		},
		{
			path: '../public/fonts/Roundo-Regular.woff2',
			weight: '400'
		},
		{
			path: '../public/fonts/Roundo-SemiBold.woff2',
			weight: '600'
		},
		{
			path: '../public/fonts/Roundo-Medium.woff2',
			weight: '500'
		}
	]
});
