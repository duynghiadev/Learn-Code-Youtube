import { z } from 'zod'

export const bookSchema = z.object({
  name: z.string().trim().min(5, 'Please input at least 5 characters'),
  author: z
    .string()
    .trim()
    .regex(/^[a-zA-Z\s]+$/i, 'Please input only letters and spaces'),
  topic: z.enum(['Programming', 'Database', 'DevOps']),
})

export type BookSchemaType = z.infer<typeof bookSchema>
