import { NextRequest, NextResponse } from "next/server";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  try {
    const { password } = await req.json();

    // Use environment variable for admin password, default to a strong one if not set
    const adminPassword = process.env.ADMIN_PASSWORD || "QuarixAdmin2026!";

    if (password === adminPassword) {
      // Set a simple auth cookie
      const cookieStore = await cookies();
      cookieStore.set("quarix_admin_auth", "true", {
        httpOnly: true,
        secure: process.env.NODE_ENV === "production",
        sameSite: "lax",
        path: "/",
        maxAge: 60 * 60 * 24 * 7, // 1 week
      });

      return NextResponse.json({ success: true });
    }

    return NextResponse.json({ error: "Invalid password" }, { status: 401 });
  } catch {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
