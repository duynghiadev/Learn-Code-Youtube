import { z } from 'zod'

export const registerSchema = z
  .object({
    fullName: z
      .string()
      .trim()
      .min(3, 'Fullname must contain at least 3 characters!'),
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
    passwordConfirmation: z
      .string()
      .trim()
      .min(8, 'Password must contain at least 8 characters!')
      .regex(/.*[A-Z].*/, 'Password must contain one uppercase character')
      .regex(
        /.*[`~<>?,./!@#$%^&*()\-_+="'|{}[\];:\\].*/,
        'Password must contain one symbol',
      ),
  })
  .refine((data) => data.password === data.passwordConfirmation, {
    message: 'Password does not match confirmation',
    path: ['passwordConfirmation'],
  })

export type RegisterSchemaType = z.infer<typeof registerSchema>
