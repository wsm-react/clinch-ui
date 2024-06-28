import { z } from 'zod';
import { mobileRegExp } from './function';

export const signupFormSchema = z.object({
    mobile: z.string()
        .regex(mobileRegExp, "Mobile number must be exactly 10 digits")
        .refine(value => !/\s/.test(value), { message: "Mobile number cannot contain spaces" })
        .refine(value => /^\d+$/.test(value), { message: "Mobile number must contain only digits" })
        .refine(value => value.length === 10, { message: "Mobile number must be exactly 10 digits" }),
    emailId: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    terms: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" })
});



// .refine(value => value === true, "You must agree to the terms and conditions")
