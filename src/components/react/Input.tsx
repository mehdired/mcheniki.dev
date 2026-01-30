type InputProps = {
	type: 'text' | 'email';
	name: string;
	id: string;
	[key: string]: string;
};

export function Input({ type = 'text', name, id, ...rest }: InputProps) {
	return (
		<input
			className="peer w-full rounded-full border-1 border-primary-500 bg-transparent px-12 py-6 font-medium"
			type={type}
			name={name}
			id={id ?? name}
			{...rest}
		/>
	);
}
