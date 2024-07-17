import vine from '@vinejs/vine';

export const apiForgotPasswordSchema = vine.object({
    email: vine.string().email(),
    terms: vine.literal(true)
})
