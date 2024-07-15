import { NextRequest, NextResponse } from 'next/server';
import NextAuth from "next-auth"
import { authOptions } from './auth-options';

export default NextAuth(authOptions)
