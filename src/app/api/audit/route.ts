import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const body = await request.json()
    const { email, domain, zipCode, audience } = body

    if (!email) {
      return NextResponse.json(
        { error: 'Email is required' },
        { status: 400 }
      )
    }

    const isAgency = audience === 'agency'
    const subject = isAgency
      ? `New Market Report Request: ${zipCode}`
      : `New Audit Request: ${domain}`

    const detailHtml = isAgency
      ? `<p><strong>Zip Code:</strong> ${zipCode}</p>`
      : `<p><strong>Domain:</strong> ${domain}</p>`

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
          from: 'WorkFlowClick <noreply@workflowclick.com>',
          to: ['moe@workflowclick.com', 'chase@chasealdridge.com'],
          subject,
          html: `
            <h2>${isAgency ? 'New Custom Market Report Request' : 'New Deliverability Audit Request'}</h2>
            <p><strong>Email:</strong> ${email}</p>
            ${detailHtml}
            <p><strong>Audience:</strong> ${audience || 'unknown'}</p>
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
