-- TheMangalore.in — give the website's server access to the form tables.
--
-- Newer Supabase projects don't grant table access to API roles
-- automatically, so even the server (secret key = "service_role") is denied
-- until access is granted explicitly. The public roles (anon, authenticated)
-- stay locked out — see 0001.
--
-- How to run: Supabase dashboard → SQL Editor → New query → paste → Run.
-- Safe to run more than once.

grant select, insert, update, delete on public.leads    to service_role;
grant select, insert, update, delete on public.waitlist to service_role;
