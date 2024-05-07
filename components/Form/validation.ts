import { z } from 'zod'

export const formSchema = z.object({
    email: z.string().min(1, { message: 'Email is required' }).email().trim(),
    name: z.string().min(1, { message: 'Name is required' }).trim(),
    message: z.string().min(1, { message: 'Message is required' }).trim(),
})
