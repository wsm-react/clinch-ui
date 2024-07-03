import { parseURLSearchParams } from '@/utility/function';
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';

interface SignupQueryParams {
    assigned_to?: string;
    event_type_uuid?: string;
    event_type_name?: string;
    event_start_time?: string;
    event_end_time?: string;
    invitee_uuid?: string;
    invitee_full_name?: string;
    invitee_email?: string;
    answer_1?: string;
}

export async function GET(req: NextRequest, res: NextResponse) {

    try {
        const searchParams = req.nextUrl.searchParams;
        const parsedParams = parseURLSearchParams(searchParams);

        return NextResponse.json({
            messege: "ok",
            status: 200,
            success: true,
            data: parsedParams
        }, { status: 200 });

        // return NextResponse.redirect("/");

    } catch (error) {
        return NextResponse
            .json(({
                messege: "Error",
                error,
            }.error, { status: 500 }));
    }

}
