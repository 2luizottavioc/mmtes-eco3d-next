import { NextAuthMiddlewareOptions, withAuth } from "next-auth/middleware";
import { NextRequest, NextResponse } from "next/server";

const middleware = (request: NextRequest) => {
    return NextResponse.next();
};

const callbackOptions: NextAuthMiddlewareOptions = {}

export const config = {
    matcher: [
        // '/profile',
        // '/products',
        // '/stock',
        // '/entry',
        // '/sales',
    ], 
}

export default withAuth(middleware, callbackOptions);