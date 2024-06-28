import { z } from 'zod';
import { mobileRegExp } from './function';

export const signupFormSchema = z.object({
    mobile: z.string()
        .regex(mobileRegExp, "Invalid Mobile number")
        .refine(value => /^\d{10}$/.test(value), { message: "Mobile number must be exactly 10 digits and contain only numbers" }),
    // .min(10, { message: "Mobile number must be exactly 10 digits" })
    // .max(10, { message: "Mobile number must be exactly 10 digits" }),
    emailId: z.string()
        .min(1, { message: "This field has to be filled." })
        .email("This is not a valid email."),
    terms: z.boolean().refine(val => val === true, { message: "You must accept the terms and conditions" })
});


// .refine(value => value === true, "You must agree to the terms and conditions")
