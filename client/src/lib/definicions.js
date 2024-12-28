import { z } from 'zod'

export const SignupFormSchema = z.object({
  firstName: z
    .string({ message: 'El nombre debe tener al menos 3 letras.' })
    .min(3, { message: 'El nombre debe tener al menos 3 letras.' })
    .trim(),
  lastName: z
    .string({ message: 'Complete este campo con su apellido.' })
    .trim(),
  country: z
    .string({ message: 'Necesitamos conocer donde reside.' })
    .trim(),
  email: z
    .string()
    .email({ message: 'Por favor, ingresar un email válido.' })
    .trim(),
  prefix: z
    .string({ message: 'Complete campo de codigo de su área.' })
    .trim(),
  phone: z
    .string({ message: 'Complete campo de número de telefono.' }),
  password: z
    .string()
    .min(8, { message: 'Debe tener un mínimo de 8 caracteres' })
    .regex(/[a-zA-Z]/, { message: 'Debe contener al menos 1 letra.' })
    .regex(/[0-9]/, { message: 'Debe contener al menos 1 numero.' })
    .regex(/[^a-zA-Z0-9]/, {
      message: 'Debe contener al menos 1 caracter especial.',
    })
    .trim(),
  confirm: z
    .string({message: 'Confirmar contraseña'})
    .trim(),
  role: z
    .string({ message: 'Elegir 1 opcion' })
})
  .refine((data) => data.password === data.confirm, {
    message: "No coinciden contraseñas",
    path: ["confirm"], // path of error
  })

export const SignInFormSchema = z.object({
  email: z
    .string()
    .email({ message: 'Por favor, ingresar un email válido.' })
    .trim(),
  password: z
    .string()
    .trim(),
})
