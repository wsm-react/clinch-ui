import { Nunito_Sans, Poppins } from 'next/font/google';

export const nunito_sans_init = Nunito_Sans({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-nunito_sans',
    weight: ['200', '300', '400', '500', '600', '700', '800', '900']
});

export const poppins_init = Poppins({
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-poppins',
    weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900']
});


export const nunitoSansFont = nunito_sans_init.className;
export const poppinsFont = poppins_init.className;
