import { z } from 'zod';
import { mobileRegExp } from './function';

export const signupFormSchema = z.object({
    mobile: z.string()
        .regex(mobileRegExp, "Invalid Mobile number"),
    // .min(10, { message: "Mobile number is not valid." })
    // .max(10, { message: "Mobile number is not valid." }),

    emailAddress: z.string().min(1, { message: "This field has to be filled." })
        .email("This is not a valid email.")
})
