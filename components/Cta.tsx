import { cva, type VariantProps } from 'class-variance-authority';
import type { PropsWithChildren } from 'react';

const styles = cva('font-jetbrains px-25 py-12 text-center rounded-full min-w-160', {
	variants: {
		indent: {
			primary: [
				'bg-primary-500',
				'hover:bg-primary-400',
				'transition-colors',
				'duration-300'
			],
			secondary: [
				'bg-transparent',
				'border',
				'border-primary-500',
				'hover:border-primary-400',
				'transition-colors',
				'duration-300'
			],
			disabled: ['bg-base-400', 'text-base-200', 'cursor-not-allowed']
		}
	}
});

type CtaProps = {
	url: string;
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
	VariantProps<typeof styles>;

export function Cta({ url, indent, children }: PropsWithChildren<CtaProps>) {
	return (
		<a href={url} className={styles({ indent })}>
			{children}
		</a>
	);
}
