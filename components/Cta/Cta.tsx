import { cva, type VariantProps } from 'class-variance-authority'
import type { PropsWithChildren } from 'react'

const styles = cva(
    'font-jetbrains px-24 py-12 text-center rounded-full min-w-160',
    {
        variants: {
            indent: {
                primary: [
                    'bg-primary-500',
                    'hover:bg-primary-400',
                    'transition-colors',
                    'duration-300',
                ],
                secondary: [
                    'bg-transparent',
                    'border',
                    'border-primary-500',
                    'hover:border-primary-400',
                    'transition-colors',
                    'duration-300',
                ],
                disabled: [
                    'bg-base-400',
                    'text-base-200',
                    'cursor-not-allowed',
                ],
            },
        },
    }
)
export type CTAVariantProps = VariantProps<typeof styles>

type CtaProps = {
    url: string
    children: React.ReactNode
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    Required<Pick<CTAVariantProps, 'indent'>>

export function Cta({ url, indent, children }: CtaProps) {
    return (
        <a href={url} className={styles({ indent })}>
            {children}
        </a>
    )
}
