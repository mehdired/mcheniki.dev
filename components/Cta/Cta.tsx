import { cva, type VariantProps } from 'class-variance-authority'
import ArrowRight from '@/svgs/arrow-right.svg'

const styles = cva('font-jetbrains  text-center text-base-50 font-bold', {
    variants: {
        indent: {
            primary: [
                'rounded-full',
                'min-w-160',
                'block',
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
                'block',
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
                'flex',
                'items-center',
                'gap-6',
                'hover:text-primary-400',
                'transition-colors',
                'duration-300',
            ],
            disabled: ['bg-base-400', 'text-base-200', 'cursor-not-allowed'],
        },
    },
})
export type CTAVariantProps = VariantProps<typeof styles>

type CtaProps = {
    url: string
    children: string
} & React.ButtonHTMLAttributes<HTMLButtonElement> &
    Pick<CTAVariantProps, 'indent'>

export function Cta({ url, indent = 'primary', children }: CtaProps) {
    return (
        <a href={url} className={styles({ indent })}>
            {children}
            {indent === 'withIcon' && <ArrowRight className="fill-current" />}
        </a>
    )
}
