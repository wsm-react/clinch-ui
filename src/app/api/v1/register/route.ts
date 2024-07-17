
import { NextRequest, NextResponse } from 'next/server';
// import { loginFormSchema } from '@/_lib/form-schema/login-fm';

type ErrorObject = {
    [key: string]: string;
};

export async function POST(req: NextRequest) {
    // const body = await req.json();
    // return NextResponse.json(body, { status: 200 })

    try {
        const body = await req.json();

        // Validate the request body
        // loginFormSchema.parse(body);

        // If validation passes, proceed with your logic
        return NextResponse.json(body, { status: 200 });
    } catch (e: any) {
        // if (e instanceof z.ZodError) {
        //     // Initialize the errors object with the proper type
        //     const errors: ErrorObject = {};

        //     // Format the errors as an object
        //     e.errors.forEach((err: { path: any[]; message: string; }) => {
        //         errors[err.path.join('.')] = err.message;
        //     });

        //     return NextResponse.json(errors, { status: 400 });
        // }

        // Handle any other errors
        return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
    }
}
