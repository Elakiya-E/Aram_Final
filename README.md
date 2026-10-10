# Aram Analytics website

A responsive Next.js App Router landing page with an editable content module, reduced-motion-aware animations, and a contact form that opens a pre-filled email draft.

## Run locally

```bash
npm install
npm run dev
```

## Before publishing

- Set `NEXT_PUBLIC_CONTACT_EMAIL` in `.env.local` to the inbox that should receive website enquiries. The form uses the visitor's configured email app; it does not send or store messages on a server.
- Replace the illustrative project concepts in `content/site.ts` with approved case studies. The current cards are explicitly labeled as concepts and make no client or performance claims.
- Review the service descriptions and Zoho partner/reselling language in `content/site.ts` and `app/page.tsx` to confirm they accurately describe the business.
- Add approved contact, company, and legal details to the footer and metadata before launch.

## Checks

```bash
npm run typecheck
npm run build
```
