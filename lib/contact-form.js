// Shared contact-form logic used by both the page (client, for UX) and the API
// route (server, authoritative). Mirrors the relevant parts of CourtListener's
// ContactForm (cl/simple_pages/forms.py), but trimmed to the options free.law
// actually owns — the rest of the dropdown redirects to CourtListener.

import { isValidAnswer } from './valid-answers';

// The dropdown. Three interaction types:
//   - 'form'     : collects input and creates a Zoho Desk ticket
//   - 'redirect' : shows instructions + a button to another site (no ticket)
//   - 'guidance' : shows informational text only (no inputs, no ticket)
export const ISSUE_OPTIONS = [
  { key: 'support', label: 'Support', type: 'form', fields: 'general' },
  {
    key: 'courtlistener',
    label: 'CourtListener',
    type: 'redirect',
    url: 'https://www.courtlistener.com/contact/',
  },
  {
    key: 'recap',
    label: 'RECAP Suite',
    type: 'redirect',
    url: 'https://www.courtlistener.com/contact/?issue_type=recap',
  },
  { key: 'botslaw', label: 'Bots.law', type: 'form', fields: 'general' },
  { key: 'partnerships', label: 'Partnerships', type: 'form', fields: 'partnership' },
  {
    key: 'removal',
    label: 'Case Removal',
    type: 'redirect',
    url: 'https://www.courtlistener.com/contact/?issue_type=removal',
  },
  {
    key: 'memberships',
    label: 'Memberships & Donations',
    type: 'redirect',
    url: 'https://www.courtlistener.com/contact/?issue_type=memberships',
  },
  {
    key: 'volunteering',
    label: 'Volunteering',
    type: 'redirect',
    url: 'https://forms.free.law/freelawproject1/form/VolunteerInterestSurvey/formperma/tzOQIIz8hDbbk1Cy2YAKlQbj1bP55sFQACK32i3gn4s',
  },
  { key: 'legal', label: 'Legal Help', type: 'guidance' },
];

// Deep links from other sites (and CL's own keys) map onto our options so
// /contact/?issue_type=recap etc. preselect the right entry.
export const PREFILL_ALIASES = {
  api: 'courtlistener',
  data_quality: 'courtlistener',
};

export function getOption(key) {
  return ISSUE_OPTIONS.find((o) => o.key === key) || null;
}

export function isFormOption(key) {
  const o = getOption(key);
  return !!o && o.type === 'form';
}

export function resolvePrefill(key) {
  if (!key) return '';
  const direct = getOption(key);
  if (direct) return key;
  return PREFILL_ALIASES[key] || '';
}

// Request-type label sent to Zoho Desk as cf.cf_request_type.
const REQUEST_TYPES = {
  support: 'General Support',
  partnerships: 'Partnership Inquiry',
  botslaw: 'Bots.law',
};

export function requestTypeFor(key) {
  return REQUEST_TYPES[key] || 'General Support';
}

// Env var holding the Zoho Desk agent ID to assign each form option to.
const ASSIGNEE_ENV = {
  support: 'ZOHO_DESK_AGENT_SUPPORT',
  partnerships: 'ZOHO_DESK_AGENT_PARTNERSHIPS',
  botslaw: 'ZOHO_DESK_AGENT_BOTSLAW',
};

export function assigneeEnvFor(key) {
  return ASSIGNEE_ENV[key] || '';
}

// ---- Partnership field choices (ported verbatim from CL forms.py) ----

export const PARTNER_BACKGROUND_CHOICES = [
  ['founder', 'Founder / Co-founder'],
  ['dev', 'Developer / Engineer'],
  ['legal', 'Legal Professional'],
  ['academic', 'Researcher / Academic'],
  ['investor', 'Investor / VC'],
  ['other', 'Other'],
];

export const PARTNER_TEAM_SIZE_CHOICES = [
  ['', 'Select a team size'],
  ['solo', 'Solo'],
  ['2_5', '2–5'],
  ['6_10', '6–10'],
  ['11_25', '11-25'],
  ['26_100', '26-100'],
  ['101_1000', '101-1,000'],
  ['1001_10000', '1,001-10,000'],
  ['10001_plus', '10,001+'],
];

export const PARTNER_FUNDING_TOTAL_CHOICES = [
  ['', 'Select an option'],
  ['none', 'None'],
  ['lt_50k', '< $50k'],
  ['50_250k', '$50k–$250k'],
  ['250k_1m', '$250k–$1m'],
  ['gt_1m', '$1m+'],
];

export const PARTNER_FUNDING_STAGE_CHOICES = [
  ['', 'Select an option'],
  ['not_pursuing', 'Not pursuing'],
  ['fundraising', 'Fundraising'],
  ['pre_seed', 'Pre-seed'],
  ['seed', 'Seed'],
  ['series_a_plus', 'Series A+'],
];

export const PARTNER_FIELD_LABELS = {
  partner_current_work: 'What are you currently working on?',
  partner_prior_outreach: 'What have you tried, or which organizations have you already talked to?',
  partner_team_size: 'How many people are on your team?',
  partner_founded_year: 'When was your company founded? (Year)',
  partner_funding_total: 'How much funding have you raised so far?',
  partner_funding_stage: "What's the current status of your VC funding?",
  partner_ideal_outcome: "What's the ideal outcome you'd like from connecting with us?",
};

function labelFor(choices, value) {
  const match = choices.find(([v]) => v === value);
  return match ? match[1] : value || '';
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

/**
 * Validate a submission. Returns an object mapping field name -> error message;
 * an empty object means valid. Used by the client for inline UX and re-run by
 * the API route as the authoritative check. The 3-digit honeypot is handled
 * separately (server-only, silent), not here.
 */
export function validateSubmission(data) {
  const errors = {};
  const issue = data.issue_type || '';

  if (!isFormOption(issue)) {
    errors.issue_type = 'Please choose a topic.';
    return errors;
  }

  if (!String(data.name || '').trim()) {
    errors.name = 'Please tell us your name.';
  }
  const email = String(data.email || '').trim();
  if (!email) {
    errors.email = 'Please provide your email address.';
  } else if (!EMAIL_RE.test(email)) {
    errors.email = 'Please provide a valid email address.';
  }
  const subject = String(data.phone_number || '').trim();
  if (!subject) {
    errors.phone_number = 'Please add a subject.';
  } else if (subject.length > 150) {
    errors.phone_number = 'Please keep the subject under 150 characters.';
  }
  if (!isValidAnswer(data.human_check)) {
    errors.human_check = 'Please name a U.S. state or territory.';
  }

  if (issue === 'partnerships') {
    const required = {
      partner_current_work: "Please tell us what you're working on.",
      partner_prior_outreach:
        "Please tell us what you've tried and/or who you've contacted about this.",
      partner_team_size: 'Please select your team size.',
      partner_founded_year: 'Please tell us when your organization was founded.',
      partner_ideal_outcome: 'What are your expectations from contacting us?',
      partner_funding_total: "Please tell us how much funding you've raised so far.",
      partner_funding_stage: 'Please tell us the status of your VC funding if any.',
    };
    for (const [field, message] of Object.entries(required)) {
      if (!String(data[field] || '').trim()) errors[field] = message;
    }
    const backgrounds = Array.isArray(data.partner_background) ? data.partner_background : [];
    if (backgrounds.length === 0) {
      errors.partner_background = 'Please specify at least one background.';
    } else if (
      backgrounds.includes('other') &&
      !String(data.partner_background_other || '').trim()
    ) {
      errors.partner_background_other = 'Please specify your background.';
    }
  } else {
    // support / botslaw: a message is required.
    if (!String(data.message || '').trim()) {
      errors.message = 'Please include a message.';
    }
  }

  return errors;
}

function escapeHtml(value) {
  return String(value == null ? '' : value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// Build the HTML body for the Zoho Desk ticket description. User input is
// HTML-escaped, then newlines become <br>; fields are separated by a blank
// line. Mirrors CL's render_email_body, minus the logged-in fields.
export function buildTicketBody(data, userAgent = 'Unknown') {
  const issue = data.issue_type || '';
  const line = (label, value) => `${label}: ${escapeHtml(value)}`.replace(/\n/g, '<br>');

  const lines = [
    'Submitted via the free.law contact form',
    line('Subject', data.phone_number || ''),
    line('From', data.name || ''),
    line('User Email', data.email || ''),
    line('Issue Type', getOption(issue)?.label || 'Unknown'),
  ];

  if (issue === 'partnerships') {
    const backgrounds = (Array.isArray(data.partner_background) ? data.partner_background : [])
      .map((v) => labelFor(PARTNER_BACKGROUND_CHOICES, v))
      .join(', ');
    lines.push(
      line('Background', backgrounds),
      line('Background (other)', data.partner_background_other || ''),
      line('Current Work', data.partner_current_work || ''),
      line('Team Size', labelFor(PARTNER_TEAM_SIZE_CHOICES, data.partner_team_size)),
      line('Founded Year', data.partner_founded_year || ''),
      line('Funding Total', labelFor(PARTNER_FUNDING_TOTAL_CHOICES, data.partner_funding_total)),
      line('Funding Stage', labelFor(PARTNER_FUNDING_STAGE_CHOICES, data.partner_funding_stage)),
      line('Prior Outreach', data.partner_prior_outreach || ''),
      line('Ideal Outcome', data.partner_ideal_outcome || '')
    );
  }

  lines.push(`Message:<br>${escapeHtml(data.message || '').replace(/\n/g, '<br>')}`);
  lines.push(line('Browser', userAgent));

  return lines.join('<br><br>');
}
