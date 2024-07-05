
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
    console.log("req", req);
    console.log("res", res);


    try {

        return NextResponse.json({
            messege: "ok",
            status: 200,
            success: true,
            data: res
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

export async function POST(req: NextRequest, res: NextResponse) {
    // console.log("req", req);
    // console.log("res", res);
    const newdata = await req.json();
    console.log(newdata);

    try {

        return NextResponse.json({
            messege: "ok",
            status: 200,
            success: true,
            data: newdata
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
