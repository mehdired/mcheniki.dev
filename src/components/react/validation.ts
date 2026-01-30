import { z } from 'zod';

export const formSchema = z.object({
	email: z
		.string()
		.min(1, { message: "L'email est requis" })
		.email({ message: 'Email invalide' })
		.trim(),
	name: z.string().min(1, { message: 'Le nom est requis' }).trim(),
	message: z
		.string()
		.min(10, { message: 'Le message doit contenir au moins 10 caractères' })
		.max(1000, { message: 'Le message est trop long (max 1000 caractères)' })
		.trim(),
});

export type FormattedErrors = z.inferFormattedError<typeof formSchema>;
