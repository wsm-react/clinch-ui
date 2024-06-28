import { NextApiRequest, NextApiResponse } from 'next';
import { NextResponse } from 'next/server';

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

export function GET(req: NextApiRequest, res: NextApiResponse) {

    // return new Response("Hi");

    try {
        return NextResponse.json({
            messege: "ok",
            success: true,
            req: req
        }, {
            status: 200
        });

    } catch (error) {
        return NextResponse
            .json(({
                messege: "Error",
                error,
            }.error,
            {
                status: 500
            }))
    }

    // const {
    //     assigned_to,
    //     event_type_uuid,
    //     event_type_name,
    //     event_start_time,
    //     event_end_time,
    //     invitee_uuid,
    //     invitee_full_name,
    //     invitee_email,
    //     answer_1
    // }: SignupQueryParams = req.query;

    // // You can perform any necessary operations with the query parameters here

    // res.status(200).json({
    //     assigned_to,
    //     event_type_uuid,
    //     event_type_name,
    //     event_start_time,
    //     event_end_time,
    //     invitee_uuid,
    //     invitee_full_name,
    //     invitee_email,
    //     answer_1
    // });
}


export async function POST(req: NextApiRequest, res: NextApiResponse) {
    // const body = await req.json();

    return new Response(JSON.stringify(res));
}
