import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { email, name, agencyName } = await request.json()

    if (!email || !name) {
      return NextResponse.json(
        { error: 'Email and name are required' },
        { status: 400 }
      )
    }

    const resendKey = process.env.RESEND_API_KEY
    if (resendKey) {
      // Notify Moe of the new lead
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'WorkflowClick <noreply@workflowclick.com>',
          to: ['moe@workflowclick.com', 'chase@chasealdridge.com'],
          headers: { 'X-Priority': '1', 'X-MSMail-Priority': 'High', Importance: 'High' },
          subject: `New Playbook Download: ${name}${agencyName ? ` (${agencyName})` : ''}`,
          html: `
            <h2>New Playbook Download</h2>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Agency:</strong> ${agencyName || 'Not provided'}</p>
            <p><strong>Time:</strong> ${new Date().toLocaleString('en-US', { timeZone: 'America/New_York', dateStyle: 'full', timeStyle: 'short' })} EST</p>
            <hr />
            <p><em>This person downloaded "The Insurance Agency Cold Email Playbook" from workflowclick.com/playbook</em></p>
          `,
        }),
      })

      // Send the playbook to the requester
      await fetch('https://api.resend.com/emails', {
        method: 'POST',
        headers: {
          Authorization: `Bearer ${resendKey}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          from: 'Moe at WorkflowClick <moe@workflowclick.com>',
          to: [email],
          subject: 'Your Insurance Agency Cold Email Playbook',
          html: `
            <p>Hi ${name.split(' ')[0]},</p>
            <p>Thanks for downloading the playbook. Here is what you will find inside:</p>
            <ul>
              <li>Why cold email works for commercial insurance prospecting</li>
              <li>3 sample email sequences (contractors, manufacturers, professional services)</li>
              <li>The infrastructure setup most agencies get wrong</li>
              <li>CAN-SPAM and state compliance checklist</li>
              <li>ROI math by line of business</li>
            </ul>
            <p><strong>The playbook PDF is attached to this email.</strong></p>
            <p>If you have questions or want to talk about what a cold email pipeline looks like for your agency, reply to this email or <a href="https://workflowclick.com/contact">book a strategy call</a>.</p>
            <p>Moe Randera<br/>Founder, WorkflowClick</p>
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
