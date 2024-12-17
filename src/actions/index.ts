import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';
import { experimental_AstroContainer } from 'astro/container';

import { verify } from 'hcaptcha';

import { Resend } from 'resend';

import EmailTemplate from '@components/EmailTemplate.astro';

const resend = new Resend(import.meta.env.SECRET_RESEND_API_KEY!);
const secretKey = import.meta.env.SECRET_HCAPTCHA_KEY!;

export const server = {
	sendForm: defineAction({
		accept: 'form',
		input: z.object({
			name: z.string(),
			email: z.string().email(),
			message: z.string(),
			hcaptchaToken: z.string(),
		}),
		handler: async ({ name, email, message, hcaptchaToken }) => {
			try {
				const dataVerify = await verify(secretKey, hcaptchaToken);

				if (!dataVerify.success) {
					return JSON.stringify({ error: dataVerify, success: false });
				}

				const container = await experimental_AstroContainer.create();
				const templateEmailString = await container.renderToString(EmailTemplate, {
					props: { name, email, message },
				});
				const data = await resend.emails.send({
					from: 'Portfolio <noreply@mcheniki.dev>',
					to: ['contact@mcheniki.dev'],
					subject: 'Contact Form Portfolio',
					html: templateEmailString,
				});

				return JSON.stringify({
					success: true,
					name: name,
					email: email,
					message: message,
					data,
				});
			} catch (error) {
				return JSON.stringify({ error, success: false });
			}
		},
	}),
};
