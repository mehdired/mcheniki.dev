type InputProps = {
    type: 'text' | 'email'
}

export function Input({ type = 'text' }: InputProps) {
    return (
        <input
            className="rounded-full border border-primary-500 bg-transparent px-12 py-6 font-roundo font-medium"
            type={type}
        />
    )
}
