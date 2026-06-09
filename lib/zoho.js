// Minimal Zoho Desk client. No SDK — plain HTTPS, mirroring CourtListener's
// ZohoDeskClient.create_ticket (cl/lib/zoho.py). Desk's built-in CRM
// integration creates/links the contact, so we never touch the CRM API.
//
// Auth: Zoho access tokens last ~1 hour. At free.law's volume (~75/day) we
// simply refresh from the long-lived refresh token on each invocation rather
// than caching — stateless and simple for a serverless function.

const ACCOUNTS_BASE = 'https://accounts.zoho.com'; // US data center
const DESK_BASE = 'https://desk.zoho.com/api/v1';

/** Exchange the refresh token for a short-lived access token. */
export async function getAccessToken() {
  const res = await fetch(`${ACCOUNTS_BASE}/oauth/v2/token`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    body: new URLSearchParams({
      refresh_token: process.env.ZOHO_REFRESH_TOKEN,
      client_id: process.env.ZOHO_CLIENT_ID,
      client_secret: process.env.ZOHO_CLIENT_SECRET,
      grant_type: 'refresh_token',
    }),
  });

  if (!res.ok) {
    throw new Error(`Zoho token refresh failed: ${res.status}`);
  }
  const data = await res.json();
  if (!data.access_token) {
    // Zoho returns 200 with an "error" field on some failures.
    throw new Error(`Zoho token refresh returned no access_token: ${data.error || 'unknown'}`);
  }
  return data.access_token;
}

/**
 * Create a Zoho Desk ticket.
 * @param {object} opts
 * @param {string} opts.subject       Ticket subject (the user-typed subject).
 * @param {string} opts.email         Submitter email (links/creates the contact).
 * @param {string} opts.contactName   Submitter full name.
 * @param {string} opts.description   HTML ticket body.
 * @param {string} opts.requestType   cf_request_type value (e.g. "General Support").
 * @param {string} [opts.assigneeId]  Zoho Desk agent ID; omitted leaves it unassigned.
 */
export async function createTicket({
  subject,
  email,
  contactName,
  description,
  requestType,
  assigneeId = '',
}) {
  const accessToken = await getAccessToken();

  const payload = {
    subject,
    email,
    departmentId: process.env.ZOHO_DESK_DEPARTMENT_ID,
    description,
    cf: { cf_request_type: requestType },
    contact: { lastName: contactName, email },
  };
  if (assigneeId) payload.assigneeId = assigneeId;

  const res = await fetch(`${DESK_BASE}/tickets`, {
    method: 'POST',
    headers: {
      Authorization: `Zoho-oauthtoken ${accessToken}`,
      orgId: process.env.ZOHO_DESK_ORG_ID,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload),
  });

  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    throw new Error(`Zoho Desk ticket creation failed: ${res.status} ${detail}`);
  }
  return res.json();
}
