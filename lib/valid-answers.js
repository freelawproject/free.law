// Accepted answers for the "prove you're human" check on the contact form.
//
// This is a lightweight, accessible alternative to a third-party CAPTCHA: we
// ask the user to name a U.S. state or territory and validate the answer
// server-side against this set. It stops naive/random bots while staying fully
// usable with a screen reader or keyboard. It is acceptable for AI bots to pass
// this; the goal is only to deflect dumb spam.

export const HUMAN_CHECK_PROMPT = 'Name a U.S. state or territory to prove you’re human';

// Full names of the 50 states + DC + the 5 inhabited territories.
const NAMES = [
  'Alabama',
  'Alaska',
  'Arizona',
  'Arkansas',
  'California',
  'Colorado',
  'Connecticut',
  'Delaware',
  'Florida',
  'Georgia',
  'Hawaii',
  'Idaho',
  'Illinois',
  'Indiana',
  'Iowa',
  'Kansas',
  'Kentucky',
  'Louisiana',
  'Maine',
  'Maryland',
  'Massachusetts',
  'Michigan',
  'Minnesota',
  'Mississippi',
  'Missouri',
  'Montana',
  'Nebraska',
  'Nevada',
  'New Hampshire',
  'New Jersey',
  'New Mexico',
  'New York',
  'North Carolina',
  'North Dakota',
  'Ohio',
  'Oklahoma',
  'Oregon',
  'Pennsylvania',
  'Rhode Island',
  'South Carolina',
  'South Dakota',
  'Tennessee',
  'Texas',
  'Utah',
  'Vermont',
  'Virginia',
  'Washington',
  'West Virginia',
  'Wisconsin',
  'Wyoming',
  'District of Columbia',
  'Washington DC',
  'Washington D.C.',
  'Puerto Rico',
  'Guam',
  'American Samoa',
  'Northern Mariana Islands',
  'U.S. Virgin Islands',
  'United States Virgin Islands',
  'Virgin Islands',
];

// Two-letter postal abbreviations (states + DC + territories).
const ABBREVIATIONS = [
  'AL',
  'AK',
  'AZ',
  'AR',
  'CA',
  'CO',
  'CT',
  'DE',
  'FL',
  'GA',
  'HI',
  'ID',
  'IL',
  'IN',
  'IA',
  'KS',
  'KY',
  'LA',
  'ME',
  'MD',
  'MA',
  'MI',
  'MN',
  'MS',
  'MO',
  'MT',
  'NE',
  'NV',
  'NH',
  'NJ',
  'NM',
  'NY',
  'NC',
  'ND',
  'OH',
  'OK',
  'OR',
  'PA',
  'RI',
  'SC',
  'SD',
  'TN',
  'TX',
  'UT',
  'VT',
  'VA',
  'WA',
  'WV',
  'WI',
  'WY',
  'DC',
  'PR',
  'GU',
  'AS',
  'MP',
  'VI',
];

/**
 * Normalize a free-text answer for exact comparison: lowercase, strip
 * punctuation, and collapse whitespace. "U.S. Virgin Islands", "  virgin
 * islands ", and "Virgin Islands" all normalize to "virgin islands".
 */
export function normalize(value) {
  return String(value || '')
    .toLowerCase()
    .replace(/[^a-z0-9\s]/g, ' ')
    .replace(/\s+/g, ' ')
    .trim();
}

const VALID_ANSWERS = new Set([...NAMES, ...ABBREVIATIONS].map(normalize));

/** True if the answer exactly matches a known state/territory name or abbreviation. */
export function isValidAnswer(value) {
  return VALID_ANSWERS.has(normalize(value));
}
