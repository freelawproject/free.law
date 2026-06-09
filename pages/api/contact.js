// Contact form endpoint. Deploys as a Netlify serverless function. Validates a
// submission, runs the spam checks, and creates a Zoho Desk ticket. Only the
// three "form" dropdown options reach here; the rest redirect client-side.

import {
  validateSubmission,
  buildTicketBody,
  requestTypeFor,
  assigneeEnvFor,
  isFormOption,
} from '../../lib/contact-form';
import { createTicket } from '../../lib/zoho';

// Light CSRF defense: only accept POSTs whose Origin matches our own host.
function sameOrigin(req) {
  const origin = req.headers.origin;
  if (!origin) return true; // non-browser / same-origin fetch without Origin
  try {
    return new URL(origin).host === req.headers.host;
  } catch {
    return false;
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ ok: false });
  }
  if (!sameOrigin(req)) {
    return res.status(403).json({ ok: false });
  }

  const data = req.body && typeof req.body === 'object' ? req.body : {};

  if (!isFormOption(data.issue_type)) {
    return res.status(400).json({ ok: false, errors: { issue_type: 'Please choose a topic.' } });
  }

  const errors = validateSubmission(data);
  if (Object.keys(errors).length > 0) {
    return res.status(400).json({ ok: false, errors });
  }

  try {
    const assigneeEnv = assigneeEnvFor(data.issue_type);
    await createTicket({
      subject: String(data.phone_number || ''),
      email: String(data.email || ''),
      contactName: String(data.name || ''),
      description: buildTicketBody(data, req.headers['user-agent'] || 'Unknown'),
      requestType: requestTypeFor(data.issue_type),
      assigneeId: (assigneeEnv && process.env[assigneeEnv]) || '',
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    // Never surface Zoho specifics to the user; the page shows a generic
    // message with the info@free.law fallback.
    console.error('Contact form submission failed:', err);
    return res.status(502).json({ ok: false });
  }
}
