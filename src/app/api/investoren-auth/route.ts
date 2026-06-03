import { NextRequest, NextResponse } from "next/server";

const PASSWORD = "Davederninja";

export async function POST(request: NextRequest) {
  try {
    const { password } = await request.json();
    if (password === PASSWORD) {
      const response = NextResponse.json({ success: true });
      response.cookies.set("investoren_auth", "granted", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "strict",
        maxAge: 60 * 60 * 24 * 7,
        path: "/",
      });
      return response;
    }
    return NextResponse.json({ success: false }, { status: 401 });
  } catch {
    return NextResponse.json({ success: false }, { status: 400 });
  }
}
