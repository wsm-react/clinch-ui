// import { withAuth } from '@kinde-oss/kinde-auth-nextjs/server'
// import { NextRequest, NextResponse } from 'next/server';
// // import { NextApiRequest } from 'next';

// export default function middleware(req: NextRequest) {
//     // console.log(req);
//     return withAuth(req);
// }

// export const configKinde = {
//     matcher: ['/admin/login']
// }

import { clerkMiddleware } from "@clerk/nextjs/server";

export default clerkMiddleware();

export const config = {
    matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};
