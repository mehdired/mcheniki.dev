type TextareaProps = {
	id: string;
	[key: string]: string;
};

export function Textarea({ id, name, ...rest }: TextareaProps) {
	return (
		<textarea
			className="w-full resize-none rounded-12 border-1 border-primary-500 bg-transparent p-12 font-medium"
			cols={50}
			rows={10}
			id={id}
			name={name ?? id}
			{...rest}
		/>
	);
}
