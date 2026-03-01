import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, domain } = await request.json()

    if (!email || !domain) {
      return NextResponse.json(
        { error: 'Email and domain are required' },
        { status: 400 }
      )
    }

    // Send notification email via Resend
    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'WorkflowClick <noreply@workflowclick.com>',
          to: ['moe@workflowclick.com'],
          subject: `New Audit Request: ${domain}`,
          html: `
            <h2>New Deliverability Audit Request</h2>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Domain:</strong> ${domain}</p>
            <p><strong>Time:</strong> ${new Date().toISOString()}</p>
          `,
        }),
      })
    }

    return NextResponse.json({ success: true })
  } catch {
    return NextResponse.json(
      { error: 'Failed to process request' },
      { status: 500 }
    )
  }
}
