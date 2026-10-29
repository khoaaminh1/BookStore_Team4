# Sprint 1 — F1 test cases (execution template)

Actual Results must be filled in *after* executing the cases against the test environment; never confuse expected with actual. Record tester, date, build SHA and evidence for each test.

| ID | Given | When | Then / Expected result | Actual result | Status |
| --- | --- | --- | --- | --- | --- |
| F1-T01 | Guest, valid unique email | Register with 8+ character password | Account created; confirmation message or email confirmation depending on Auth settings | Not executed | Pending |
| F1-T02 | Guest, invalid email | Submit registration | Client/server validation prevents invalid registration | Not executed | Pending |
| F1-T03 | Existing verified customer | Sign in with correct password | Authenticated session created | Not executed | Pending |
| F1-T04 | Existing customer | Sign in with wrong password | Safe error; no session | Not executed | Pending |
| F1-T05 | Signed-in customer | Sign out | Session cleared | Not executed | Pending |
| F1-T06 | Signed-in admin | Create customer with valid fields | New customer is in Auth and profiles | Not executed | Pending |
| F1-T07 | Signed-in admin | Lock customer | Supabase Auth account banned; profile shows locked | Not executed | Pending |
| F1-T08 | Locked customer | Attempt fresh sign-in | Login rejected | Not executed | Pending |
| F1-T09 | Signed-in admin | Unlock customer | Ban removed and login works again | Not executed | Pending |
| F1-T10 | Signed-in customer | Call GET/POST/PATCH /api/admin with bearer JWT | 403 Forbidden | Not executed | Pending |
| F1-T11 | Guest | Call GET /api/admin without token | 403 Forbidden | Not executed | Pending |
| F1-T12 | Signed-in admin | Create another admin | Admin role recorded; new admin has authorized functions | Not executed | Pending |
| F1-T13 | Any user | Query another user's public.profiles via publishable key | No other profile returned (RLS) | Not executed | Pending |
| F1-T14 | Admin | Attempt self-lock or lock another admin | Request rejected | Not executed | Pending |

## Evidence and issue log
For each execution, add steps, observed output, screenshot/link, tester, date, and pass/fail. Note: some Supabase sessions may remain valid briefly after an account ban; this demo API checks locked status live on every privileged call. For strict real-time lockout of all customer APIs, add session revocation and access checks before adding more protected business endpoints.
