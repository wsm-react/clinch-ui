
import { NextApiRequest, NextApiResponse } from 'next';
import { NextRequest, NextResponse } from 'next/server';



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
