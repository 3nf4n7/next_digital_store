import { z } from "zod";

export const AuthCredentialsValidator = z.object({
    email: z.string().email(),
    password: z.string().min(8, { message: "Размер пароля должен быть больше 7 символов."})
})

export type TAuthCredentialsValidator = z.infer<typeof AuthCredentialsValidator>