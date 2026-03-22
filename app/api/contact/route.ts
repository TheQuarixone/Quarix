import { Resend } from "resend";
import { NextRequest, NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const { name, email, phone, service, message } = await req.json();

    if (!name || !email || !service || !message) {
      return NextResponse.json({ error: "Missing required fields." }, { status: 400 });
    }

    await resend.emails.send({
      from: "QuariX Contact <noreply@quarix.one>",
      to: ["Quarixone@gmail.com"],
      replyTo: email,
      subject: `New enquiry: ${service} — from ${name}`,
      html: `
        <div style="font-family:sans-serif;max-width:600px;margin:0 auto;background:#000;color:#fff;padding:32px;border-radius:12px;border:1px solid #222;">
          <h2 style="margin:0 0 8px;font-size:20px;font-weight:800;color:#fff;">New Project Enquiry</h2>
          <p style="margin:0 0 24px;font-size:13px;color:#666;">Received via quarix.one/contact</p>

          <table style="width:100%;border-collapse:collapse;">
            <tr>
              <td style="padding:10px 14px;background:#111;border-radius:8px 8px 0 0;border-bottom:1px solid #222;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">Name</span><br/>
                <span style="font-size:14px;color:#fff;font-weight:600;">${name}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 14px;background:#111;border-bottom:1px solid #222;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">Email</span><br/>
                <a href="mailto:${email}" style="font-size:14px;color:#aaa;">${email}</a>
              </td>
            </tr>
            ${phone ? `
            <tr>
              <td style="padding:10px 14px;background:#111;border-bottom:1px solid #222;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">Phone</span><br/>
                <span style="font-size:14px;color:#fff;">${phone}</span>
              </td>
            </tr>` : ""}
            <tr>
              <td style="padding:10px 14px;background:#111;border-bottom:1px solid #222;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">Service Requested</span><br/>
                <span style="font-size:14px;color:#fff;font-weight:600;">${service}</span>
              </td>
            </tr>
            <tr>
              <td style="padding:10px 14px;background:#111;border-radius:0 0 8px 8px;">
                <span style="font-size:10px;text-transform:uppercase;letter-spacing:0.12em;color:#555;">Project Details</span><br/>
                <span style="font-size:14px;color:#ccc;white-space:pre-wrap;line-height:1.6;">${message}</span>
              </td>
            </tr>
          </table>

          <p style="margin:24px 0 0;font-size:12px;color:#444;">Reply directly to this email to respond to ${name}.</p>
        </div>
      `,
    });

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("[contact/route]", err);
    return NextResponse.json({ error: "Failed to send message. Please try again." }, { status: 500 });
  }
}
