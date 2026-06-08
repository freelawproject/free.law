import Head from 'next/head';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { generateNextSeo } from 'next-seo/pages';
import Layout, { PostColumn } from '../components/layout';
import { H1 } from '../components/headings';
import { PurpleButton } from '../components/button';
import { AlertBox, Spinner } from '../components/widgets';
import { getSortedPostsData } from '../lib/posts';
import {
  ISSUE_OPTIONS,
  getOption,
  isFormOption,
  resolvePrefill,
  validateSubmission,
  PARTNER_BACKGROUND_CHOICES,
  PARTNER_TEAM_SIZE_CHOICES,
  PARTNER_FUNDING_TOTAL_CHOICES,
  PARTNER_FUNDING_STAGE_CHOICES,
  PARTNER_FIELD_LABELS,
} from '../lib/contact-form';
import { HUMAN_CHECK_PROMPT } from '../lib/valid-answers';

export async function getStaticProps() {
  const allPostsData = await getSortedPostsData();
  return { props: { allPostsData } };
}

const inputClass =
  'mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-purple-500 focus:ring-purple-500';

const EMPTY = {
  name: '',
  email: '',
  phone_number: '',
  message: '',
  human_check: '',
  partner_background: [],
  partner_background_other: '',
  partner_current_work: '',
  partner_prior_outreach: '',
  partner_team_size: '',
  partner_founded_year: '',
  partner_funding_total: '',
  partner_funding_stage: '',
  partner_ideal_outcome: '',
};

function Field({ label, htmlFor, error, required, children }) {
  return (
    <div className="mb-4">
      <label htmlFor={htmlFor} className="block font-medium text-gray-800">
        {label}
        {required && (
          <span className="text-red-600" aria-hidden="true">
            {' '}
            *
          </span>
        )}
      </label>
      {children}
      {error && <p className="mt-1 text-sm text-red-600">{error}</p>}
    </div>
  );
}

// Instructions + button(s) shown for the redirect/guidance options.
function TopicContent({ option }) {
  const url = option.url;
  switch (option.key) {
    case 'courtlistener':
      return (
        <div className="space-y-4">
          <p>
            Most questions about CourtListener — your account, the API, data quality, and the like —
            are best handled on CourtListener’s own contact form, where our team can see the details
            they need.
          </p>
          <PurpleButton href={url} target="_blank">
            Go to the CourtListener contact form
          </PurpleButton>
        </div>
      );
    case 'recap':
      return (
        <div className="space-y-4">
          <p>
            The <Link href="https://free.law/recap/">RECAP Suite</Link> (the browser extension, the
            RECAP Archive, and the APIs) is part of CourtListener. Please use CourtListener’s
            contact form so your report reaches the right team.
          </p>
          <PurpleButton href={url} target="_blank">
            Contact us about RECAP
          </PurpleButton>
        </div>
      );
    case 'removal':
      return (
        <div className="space-y-4">
          <p>
            Requests to remove or seal information are handled through CourtListener, where the
            content lives. Please use CourtListener’s form, and be ready to include a link to the
            specific page.
          </p>
          <PurpleButton href={url} target="_blank">
            Go to the removal form
          </PurpleButton>
        </div>
      );
    case 'memberships':
      return (
        <div className="space-y-4">
          <p>
            Memberships and donations are managed through CourtListener. You can give or manage your
            membership in the <Link href="https://donate.free.law">donor portal</Link>, read more in
            our{' '}
            <Link href="https://wiki.free.law/c/courtlistener/help/memberships">
              membership help docs
            </Link>
            , or send us a note.
          </p>
          <PurpleButton href={url} target="_blank">
            Contact us about memberships
          </PurpleButton>
        </div>
      );
    case 'volunteering':
      return (
        <div className="space-y-4">
          <p>
            We’d love your help! Tell us about your skills and availability through our volunteer
            interest survey. If you’re a developer, you can also browse our{' '}
            <Link href="https://github.com/orgs/freelawproject/projects/31/views/1/">
              volunteer board
            </Link>{' '}
            on GitHub.
          </p>
          <PurpleButton href={url} target="_blank">
            Open the volunteer survey
          </PurpleButton>
        </div>
      );
    case 'legal':
      return (
        <AlertBox>
          <div className="py-3 space-y-3">
            <p className="font-bold">We are unable to provide legal advice.</p>
            <p>
              You may wish to contact a qualified attorney, ask your local bar association whether
              it runs a lawyer referral service, or try{' '}
              <Link href="https://www.justia.com/lawyers">Justia’s lawyer directory</Link>. You
              might also look up your local{' '}
              <Link href="https://www.lsc.gov/about-lsc/what-legal-aid/i-need-legal-help">
                legal aid organization
              </Link>
              . Many counties and law schools also run law libraries that are open to the public.
            </p>
          </div>
        </AlertBox>
      );
    default:
      return null;
  }
}

function PartnershipFields({ values, errors, update, toggleBackground }) {
  const backgrounds = values.partner_background || [];
  return (
    <fieldset className="mb-2">
      <legend className="sr-only">Partnership details</legend>

      <fieldset className="mb-4">
        <legend className="block font-medium text-gray-800">
          What’s your background?
          <span className="text-red-600" aria-hidden="true">
            {' '}
            *
          </span>
        </legend>
        <div className="mt-1 space-y-1 pl-1">
          {PARTNER_BACKGROUND_CHOICES.map(([value, optionLabel]) => (
            <label key={value} className="flex items-center gap-2">
              <input
                type="checkbox"
                className="rounded border-gray-300 text-purple-700 focus:ring-purple-500"
                checked={backgrounds.includes(value)}
                onChange={() => toggleBackground(value)}
              />
              <span>{optionLabel}</span>
            </label>
          ))}
          {backgrounds.includes('other') && (
            <div>
              <input
                type="text"
                aria-label="Other background"
                maxLength={120}
                className={inputClass}
                value={values.partner_background_other}
                onChange={(e) => update('partner_background_other', e.target.value)}
              />
              {errors.partner_background_other && (
                <p className="mt-1 text-sm text-red-600">{errors.partner_background_other}</p>
              )}
            </div>
          )}
        </div>
        {errors.partner_background && (
          <p className="mt-1 text-sm text-red-600">{errors.partner_background}</p>
        )}
      </fieldset>

      <Field
        label={PARTNER_FIELD_LABELS.partner_current_work}
        htmlFor="partner_current_work"
        error={errors.partner_current_work}
        required
      >
        <input
          id="partner_current_work"
          type="text"
          maxLength={500}
          className={inputClass}
          value={values.partner_current_work}
          onChange={(e) => update('partner_current_work', e.target.value)}
        />
      </Field>

      <Field
        label={PARTNER_FIELD_LABELS.partner_prior_outreach}
        htmlFor="partner_prior_outreach"
        error={errors.partner_prior_outreach}
        required
      >
        <textarea
          id="partner_prior_outreach"
          rows={3}
          className={inputClass}
          value={values.partner_prior_outreach}
          onChange={(e) => update('partner_prior_outreach', e.target.value)}
        />
      </Field>

      <Field
        label={PARTNER_FIELD_LABELS.partner_team_size}
        htmlFor="partner_team_size"
        error={errors.partner_team_size}
        required
      >
        <select
          id="partner_team_size"
          className={inputClass}
          value={values.partner_team_size}
          onChange={(e) => update('partner_team_size', e.target.value)}
        >
          {PARTNER_TEAM_SIZE_CHOICES.map(([value, optionLabel]) => (
            <option key={value} value={value}>
              {optionLabel}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label={PARTNER_FIELD_LABELS.partner_founded_year}
        htmlFor="partner_founded_year"
        error={errors.partner_founded_year}
        required
      >
        <input
          id="partner_founded_year"
          type="number"
          min={1800}
          max={9999}
          className={inputClass}
          value={values.partner_founded_year}
          onChange={(e) => update('partner_founded_year', e.target.value)}
        />
      </Field>

      <Field
        label={PARTNER_FIELD_LABELS.partner_funding_total}
        htmlFor="partner_funding_total"
        error={errors.partner_funding_total}
        required
      >
        <select
          id="partner_funding_total"
          className={inputClass}
          value={values.partner_funding_total}
          onChange={(e) => update('partner_funding_total', e.target.value)}
        >
          {PARTNER_FUNDING_TOTAL_CHOICES.map(([value, optionLabel]) => (
            <option key={value} value={value}>
              {optionLabel}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label={PARTNER_FIELD_LABELS.partner_funding_stage}
        htmlFor="partner_funding_stage"
        error={errors.partner_funding_stage}
        required
      >
        <select
          id="partner_funding_stage"
          className={inputClass}
          value={values.partner_funding_stage}
          onChange={(e) => update('partner_funding_stage', e.target.value)}
        >
          {PARTNER_FUNDING_STAGE_CHOICES.map(([value, optionLabel]) => (
            <option key={value} value={value}>
              {optionLabel}
            </option>
          ))}
        </select>
      </Field>

      <Field
        label={PARTNER_FIELD_LABELS.partner_ideal_outcome}
        htmlFor="partner_ideal_outcome"
        error={errors.partner_ideal_outcome}
        required
      >
        <textarea
          id="partner_ideal_outcome"
          rows={3}
          className={inputClass}
          value={values.partner_ideal_outcome}
          onChange={(e) => update('partner_ideal_outcome', e.target.value)}
        />
      </Field>
    </fieldset>
  );
}

export default function Contact({ allPostsData }) {
  const router = useRouter();
  const [issueType, setIssueType] = useState('');
  const [values, setValues] = useState(EMPTY);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState('idle'); // idle | submitting | submitted | error

  // Preselect from ?issue_type= (supports CL's keys via aliases).
  useEffect(() => {
    if (!router.isReady) return;
    const prefill = resolvePrefill(router.query.issue_type);
    if (prefill) setIssueType(prefill);
  }, [router.isReady, router.query.issue_type]);

  const option = getOption(issueType);
  const isForm = isFormOption(issueType);
  const isPartnerships = issueType === 'partnerships';

  function changeTopic(value) {
    setIssueType(value);
    setErrors({});
    if (status !== 'submitting') setStatus('idle');
  }

  function update(field, value) {
    setValues((v) => ({ ...v, [field]: value }));
  }

  function toggleBackground(value) {
    setValues((v) => {
      const has = v.partner_background.includes(value);
      return {
        ...v,
        partner_background: has
          ? v.partner_background.filter((x) => x !== value)
          : [...v.partner_background, value],
      };
    });
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const payload = { ...values, issue_type: issueType };
    const clientErrors = validateSubmission(payload);
    if (Object.keys(clientErrors).length > 0) {
      setErrors(clientErrors);
      return;
    }
    setErrors({});
    setStatus('submitting');
    try {
      const res = await fetch('/api/contact/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload),
      });
      if (res.ok) {
        setStatus('submitted');
        return;
      }
      if (res.status === 400) {
        const body = await res.json().catch(() => ({}));
        setErrors(body.errors || {});
        setStatus('idle');
        return;
      }
      setStatus('error');
    } catch {
      setStatus('error');
    }
  }

  return (
    <Layout allPosts={allPostsData} home={false}>
      <Head>
        {generateNextSeo({
          title: 'Contact Us',
          description: 'Get in touch with Free Law Project.',
          openGraph: { type: 'website', url: 'https://free.law/contact/' },
        })}
      </Head>
      <PostColumn>
        <div className="pt-10">
          <H1>Contact Us</H1>
        </div>

        {status === 'submitted' ? (
          <AlertBox>
            <div className="py-4 space-y-2">
              <p className="font-bold">Thank you — your message is on its way.</p>
              <p>
                We endeavor to reply to every message as quickly as possible. If you need to reach
                us another way, email <Link href="mailto:info@free.law">info@free.law</Link>.
              </p>
            </div>
          </AlertBox>
        ) : (
          <>
            <p className="mb-6">Choose a topic below and we’ll point you in the right direction.</p>

            <div className="mb-6">
              <label htmlFor="issue_type" className="block font-medium text-gray-800">
                How can we help?
              </label>
              <select
                id="issue_type"
                className={inputClass}
                value={issueType}
                onChange={(e) => changeTopic(e.target.value)}
              >
                <option value="">Select a topic</option>
                {ISSUE_OPTIONS.map((o) => (
                  <option key={o.key} value={o.key}>
                    {o.label}
                  </option>
                ))}
              </select>
            </div>

            {/* Redirect / guidance options */}
            {option && option.type !== 'form' && (
              <div className="mb-6">
                <TopicContent option={option} />
              </div>
            )}

            {/* Form options */}
            {isForm && (
              <form onSubmit={handleSubmit} noValidate>
                {status === 'error' && (
                  <div className="mb-4">
                    <AlertBox>
                      <div className="py-3">
                        Sorry, something went wrong sending your message. Please try again, or email{' '}
                        <Link href="mailto:info@free.law">info@free.law</Link>.
                      </div>
                    </AlertBox>
                  </div>
                )}

                {issueType === 'support' && (
                  <p className="mb-4 text-gray-700">
                    Working with CourtListener? Account, API, data-quality, and RECAP questions are
                    best sent through{' '}
                    <Link href="https://www.courtlistener.com/contact/">
                      CourtListener’s contact form
                    </Link>
                    . Use this form for questions about Free Law Project itself.
                  </p>
                )}

                <Field label="Name" htmlFor="name" error={errors.name} required>
                  <input
                    id="name"
                    type="text"
                    className={inputClass}
                    value={values.name}
                    onChange={(e) => update('name', e.target.value)}
                  />
                </Field>

                <Field label="Email" htmlFor="email" error={errors.email} required>
                  <input
                    id="email"
                    type="email"
                    className={inputClass}
                    value={values.email}
                    onChange={(e) => update('email', e.target.value)}
                  />
                </Field>

                <Field label="Subject" htmlFor="phone_number" error={errors.phone_number} required>
                  <input
                    id="phone_number"
                    type="text"
                    maxLength={150}
                    autoComplete="off"
                    className={inputClass}
                    value={values.phone_number}
                    onChange={(e) => update('phone_number', e.target.value)}
                  />
                </Field>

                {isPartnerships && (
                  <PartnershipFields
                    values={values}
                    errors={errors}
                    update={update}
                    toggleBackground={toggleBackground}
                  />
                )}

                <Field
                  label={isPartnerships ? 'Is there anything else we should know?' : 'Message'}
                  htmlFor="message"
                  error={errors.message}
                  required={!isPartnerships}
                >
                  <textarea
                    id="message"
                    rows={5}
                    className={inputClass}
                    value={values.message}
                    onChange={(e) => update('message', e.target.value)}
                  />
                </Field>

                <Field
                  label={HUMAN_CHECK_PROMPT}
                  htmlFor="human_check"
                  error={errors.human_check}
                  required
                >
                  <input
                    id="human_check"
                    type="text"
                    autoComplete="off"
                    className={inputClass}
                    value={values.human_check}
                    onChange={(e) => update('human_check', e.target.value)}
                  />
                </Field>

                <div className="flex items-center gap-3 pt-2">
                  <PurpleButton type="submit" disabled={status === 'submitting'}>
                    Send Message
                  </PurpleButton>
                  {status === 'submitting' && <Spinner extraClasses="w-6 h-6 border-2" />}
                </div>
              </form>
            )}
          </>
        )}
      </PostColumn>
    </Layout>
  );
}
