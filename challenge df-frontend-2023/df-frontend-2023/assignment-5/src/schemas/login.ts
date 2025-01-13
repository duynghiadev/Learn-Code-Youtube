import { z } from 'zod'

export const loginSchema = z.object({
  email: z.string().trim().email(),
  password: z
    .string()
    .trim()
    .min(8, 'Password must contain at least 8 characters!')
    .regex(/.*[A-Z].*/, 'Password must contain one uppercase character')
    .regex(
      /.*[`~<>?,./!@#$%^&*()\-_+="'|{}[\];:\\].*/,
      'Password must contain one symbol',
    ),
})

export type LoginSchemaType = z.infer<typeof loginSchema>
