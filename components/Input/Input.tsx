type InputProps = {
    type: 'text' | 'email'
    name: string
    id: string
}

export function Input({ type = 'text', name, id }: InputProps) {
    return (
        <input
            className="rounded-full border border-primary-500 bg-transparent px-12 py-6 font-medium"
            type={type}
            name={name}
            id={id ?? name}
        />
    )
}
