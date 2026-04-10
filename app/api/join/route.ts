import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";
import { getSupabase } from "@/lib/supabase";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, portfolio, role, otherRole, message } = await req.json();

    if (!name || !email || !role) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    const displayRole = role === "Other" && otherRole ? otherRole : role;

    const supabase = getSupabase();

    // Save to Supabase
    const { error: dbError } = await supabase.from("team_applications").insert([
      {
        name,
        email,
        portfolio,
        role: displayRole,
        message,
        source: "quarix.one/join",
      },
    ]);

    if (dbError) {
      console.error("[join/route] Supabase insert error:", dbError);
    }

    await resend.emails.send({
      from: "QuariX Careers <noreply@quarix.one>",
      to: ["Quarixone@gmail.com"],
      replyTo: email,
      subject: `New Application: ${displayRole} — ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#000;color:#fff;padding:32px;border-radius:12px;border:1px solid #222;">
          <h2 style="margin:0 0 8px;font-size:20px;font-weight:800;color:#fff;">New Team Application</h2>
          <p style="margin:0 0 24px;font-size:13px;color:#666;">Received via quarix.one/join</p>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 14px;background:#111;border-radius:8px 8px 0 0;border-bottom:1px solid #222;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">Applicant</span><br/>
                <span style="font-size:14px;color:#fff;font-weight:600;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 14px;background:#111;border-bottom:1px solid #222;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">Email</span><br/>
                <a href="mailto:${email}" style="font-size:14px;color:#aaa;">${email}</a>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 14px;background:#111;border-bottom:1px solid #222;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">Role Applied For</span><br/>
                <span style="font-size:14px;color:#fff;font-weight:600;">${displayRole}</span>
              </td>
            </tr>
            ${portfolio ? `
            <tr>
              <td style="padding:10px 14px;background:#111;border-bottom:1px solid #222;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">Portfolio / GitHub</span><br/>
                <a href="${portfolio}" target="_blank" style="font-size:14px;color:#aaa;">${portfolio}</a>
              </td>
            </tr>` : ""}
            ${message ? `
            <tr>
              <td style="padding:10px 14px;background:#111;border-radius:0 0 8px 8px;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">About</span><br/>
                <span style="font-size:14px;color:#ccc;white-space:pre-wrap;line-height:1.6;">${message}</span>
              </td>
            </tr>` : ""}
          </table>

          <p style="margin:24px 0 0;font-size:12px;color:#444;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[join/route]", err);
    return NextResponse.json({ error: "Failed to submit application. Please try again." }, { status: 500 });
  }
}
