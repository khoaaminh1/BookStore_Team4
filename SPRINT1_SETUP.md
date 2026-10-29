# Sprint 1 — Getting started in VS Code

## Scope (Master_Plan S1-01 to S1-08)
- S1-01 Sprint planning — document Sprint Goal, capacity, tasks, owners and hours separately in Sprint Backlog.
- S1-02 Customer registration, login and logout — app UI + Supabase Auth.
- S1-03 Admin creates customers/admins, locks/unlocks customers — protected server API.
- S1-04 Customer/Admin authorization — server validates Supabase token and profiles; public schema uses RLS; passwords managed by Supabase Auth.
- S1-05 Daily board, burndown, work log — project management artifacts, not user-facing bookstore features.
- S1-06 Execute acceptance tests and record actual results — see TEST_PLAN_S1.md.
- S1-07 Log CR04 original request on 27 October, with impact/decision deferred to Sprint 2. **Do not fabricate the original request.**
- S1-08 Submit required files separately, **not ZIP**, prefix `HK261_SPM_FP_Team4_` (verify course convention).

## Run locally
1. Clone: `git clone https://github.com/khoaaminh1/BookStore_Team4.git`
2. Checkout branch: `git checkout feature/sprint1-accounts`
3. Open the folder in VS Code.
4. Run `npm install` (then commit the generated package-lock.json to pin resolved dependencies).
5. Copy `.env.example` to `.env.local` and fill the Supabase publishable key from Supabase dashboard -> Project Settings -> API Keys. Keep service role key secret, only in local .env.local and Vercel server settings. Never commit it or prefix it NEXT_PUBLIC_.
6. Run `npm run dev`, open http://localhost:3000.
7. In Vercel project bookstoreg4, configure all three env vars (production/preview as needed). Confirm its Git repository and Root Directory point to this app; deploy a reviewed branch preview first.
8. To initialize first admin, register a user and promote that one user manually in Supabase SQL Editor after confirming their ID. Example:
```sql
update public.profiles set role='admin'
where id = (select id from auth.users where email = 'your-admin-email@example.com');
```
Only execute with an email you control. Do not build a public first-admin registration route.

## Notes
A migration has been applied to the linked Supabase project creating public.profiles, RLS read-own-profile policy, and a trigger for new customer profiles. The API uses the service-role credential only on the server. The endpoint validates each admin request against a live row. Admin lock/unlock calls Supabase Auth ban management.
The UI intentionally treats books, cart, checkout and reports as later sprint scope. No production acceptance testing or submission is claimed.
