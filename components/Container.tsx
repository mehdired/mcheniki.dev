type ContainerProps = {
    customClass?: string
    children: React.ReactNode
}

export function Container({ customClass, children }: ContainerProps) {
    return <div className={`container ${customClass}`}>{children}</div>
}
