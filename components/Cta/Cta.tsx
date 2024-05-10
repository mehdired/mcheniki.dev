import { cva, type VariantProps } from 'class-variance-authority'
import { ReactNode } from 'react'

const styles = cva(
    'font-jetbrains text-base-50 font-bold flex items-center gap-6 justify-center disabled:opacity-75 disabled:pointer-events-none',
    {
        variants: {
            indent: {
                primary: [
                    'rounded-full',
                    'min-w-160',
                    'w-fit',
                    'px-24',
                    'py-12',
                    'bg-primary-500',
                    'hover:bg-primary-400',
                    'transition-colors',
                    'duration-300',
                ],
                secondary: [
                    'rounded-full',
                    'min-w-160',
                    'w-fit',
                    'px-24',
                    'py-12',
                    'bg-transparent',
                    'border',
                    'border-primary-500',
                    'hover:border-primary-400',
                    'transition-colors',
                    'duration-300',
                ],
                withIcon: [
                    'hover:text-primary-400',
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
    url?: string
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<CTAVariantProps, 'indent'>

export function Cta({ url, indent = 'primary', ...rest }: CtaProps) {
    return (
        <>
            {url ? (
                <a href={url} className={styles({ indent })}>
                    {rest.children}
                </a>
            ) : (
                <button className={styles({ indent })} disabled={rest.disabled}>
                    {rest.children}
                </button>
            )}
        </>
    )
}
