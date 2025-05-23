import { useEffect, useRef, useState } from 'react';
import { CirclePlanet } from '../CirclePlanet';
import * as Stars from './Stars';
import * as Stack from './Stack';
import { normalize } from './utils';

//import './styles/index.scss';

export function Portal() {
	const [active, setActive] = useState(false);
	const [rotate, setRotate] = useState({ x: 0, y: -5 });
	const container = useRef();

	const onMouseMove = (e) => {
		const normalizedY = normalize({
			value: e.pageX,
			from: [0, window.innerWidth],
			to: [-20, 0],
		});

		const normalizedX = normalize({
			value: e.pageY,
			from: [0, window.innerHeight],
			to: [-10, 10],
		});

		setRotate({
			x: -1 * normalizedX,
			y: normalizedY,
		});
	};

	useEffect(() => {
		if (!window.matchMedia('(hover: none), (pointer: coarse)')) {
			return;
		}
		setTimeout(() => setActive(true), 400);

		window.addEventListener('mousemove', onMouseMove);

		return () => {
			window.removeEventListener('mousemove', onMouseMove);
		};
	}, []);

	return (
		<div
			className="portal-container overflow-hidden px-24 py-32"
			data-active={active}
			ref={container}
		>
			<div
				className="portal-scene relative flex aspect-portal max-h-screen w-full items-center justify-center"
				style={{
					transform: `rotate3d(0, 1 ,0, ${rotate.y}deg) rotate3d(1, 0 , 0, ${rotate.x}deg)`,
				}}
			>
				<span className="portal-element-orange-stroke"></span>
				<div className="absolute top-0 left-0 overflow-hidden w-full h-full rounded-32">
					<div className="absolute bottom-0 left-0 h-1/2 w-full">
						<CirclePlanet
							color="primary"
							animated={true}
							version="portal"
							{...active}
						/>
					</div>
					<div className="absolute right-0 top-0 h-1/2 w-1/2">
						<CirclePlanet
							color="secondary"
							animated={true}
							version="portal"
							{...active}
						/>
					</div>
				</div>
				<Stars.Left />
				<Stars.Bottom />
				<Stars.Top />

				<Stack.Wordpress />
				<Stack.Next />
				<Stack.React />

				<img
					src="/images/mehdinaut.webp"
					alt="mehdinaut"
					className="portal-element-mehdinaut"
					width={200}
					height={200}
				/>
			</div>
		</div>
	);
}
