import { forgotPasswordPayload } from '@/app/interface/api-interface';
import { NextRequest, NextResponse } from 'next/server';
import vine, { errors } from '@vinejs/vine'
import { apiForgotPasswordSchema } from '@/_lib/validator/schema';

export async function POST(req: NextRequest, res: NextResponse) {

    try {
        const payload: forgotPasswordPayload = await req.json()
        // return new Response("API vi route")

        const validator = vine.compile(apiForgotPasswordSchema);
        const output = await validator.validate(payload);
        return NextResponse.json(output, { status: 200 })

    } catch (error) {
        if (error instanceof errors.E_VALIDATION_ERROR) {
            // console.log(error.status)
            return NextResponse.json(error.messages, { status: error.status })
        }
    }
}
