import { defineAction } from 'astro:actions';
import { z } from 'astro:schema';

export const server = {
    sendForm: defineAction({
        accept: 'form',
        input: z.object({
            name: z.string()
        }),
        handler: async (input) => {
            return `hello ${input.name}`
        }
    })
}
