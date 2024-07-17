import { NextRequest, NextResponse } from 'next/server';
import NextAuth from "next-auth"
import { authOptions } from './auth-options';

const apiHandler = NextAuth(authOptions);

// for check requestes
export { apiHandler as GET, apiHandler as POST }
