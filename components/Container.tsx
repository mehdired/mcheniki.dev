import { ClassAttributes } from 'react'

type ContainerProps = {
    [key: string]: string | React.ReactNode
}

export function Container({ children, ...rest }: ContainerProps) {
    return (
        <div className={`container mx-auto px-24 ${rest.className}`}>
            {children}
        </div>
    )
}
