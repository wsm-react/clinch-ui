import { forgotPasswordPayload } from '@/app/interface/api-interface';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest, res: NextResponse) {
    const payload: forgotPasswordPayload = await req.json()
    return new Response("API vi route")
}
