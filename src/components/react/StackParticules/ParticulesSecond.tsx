'use client';

import { useEffect, useMemo, useState } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { type ISourceOptions, MoveDirection, OutMode } from '@tsparticles/engine';
import { loadSlim } from '@tsparticles/slim';

export function ParticulesSecond() {
	const [, setInit] = useState(false);

	// this should be run only once per application lifetime
	useEffect(() => {
		initParticlesEngine(async (engine) => {
			// you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
			// this loads the tsparticles package bundle, it's the easiest method for getting everything ready
			// starting from v2 you can add only the features you need reducing the bundle size
			//await loadAll(engine);
			//await loadFull(engine);
			await loadSlim(engine);
			//await loadBasic(engine);
		}).then(() => {
			setInit(true);
		});
	}, []);

	const options: ISourceOptions = useMemo(
		() => ({
			background: {
				color: {
					value: 'transparent',
				},
			},
			fullScreen: false,
			fpsLimit: 120,
			interactivity: {
				events: {
					onClick: {
						enable: false,
						mode: 'push',
					},
					onHover: {
						enable: false,
						mode: 'repulse',
					},
				},
				modes: {
					push: {
						quantity: 4,
					},
					repulse: {
						distance: 200,
						duration: 0.4,
					},
				},
			},
			particles: {
				collisions: {
					mode: 'bounce',
					enable: true,
				},
				reduceDuplicates: true,
				color: {
					value: '#ffffff',
				},
				links: {
					color: '#ffffff',
					distance: 3000,
					enable: true,
					opacity: 0.5,
					width: 1,
				},
				move: {
					direction: MoveDirection.none,
					enable: true,
					outModes: {
						default: OutMode.bounce,
					},
					random: false,
					speed: 0.1,
					straight: false,
				},
				number: {
					density: {
						enable: false,
					},
					value: 2,
				},
				shape: {
					type: 'image',
					options: {
						image: [
							{
								src: '/images/analytics.svg',
								width: 1,
								height: 1,
							},
							{
								src: '/images/other.svg',
								width: 1,
								height: 1,
							},
						],
					},
				},
				size: {
					value: {
						min: 20,
						max: 25,
					},
				},
			},
			detectRetina: true,
		}),
		[],
	);

	return <Particles id="second" className="h-full w-full" options={options} />;
}
