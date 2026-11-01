-- TheMangalore.in — contact enquiries (leads) and product waitlist.
--
-- How to run: Supabase dashboard → SQL Editor → New query → paste this whole
-- file → Run. Safe to run more than once.
--
-- Security model: Row Level Security (RLS) is ON and there are NO policies,
-- so the public (anon / publishable key) can neither read nor write these
-- tables. Only the website's server writes to them, using the secret key,
-- which never leaves the server.

create table if not exists public.leads (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  name        text not null check (char_length(name) between 2 and 100),
  email       text not null check (char_length(email) <= 254),
  phone       text check (char_length(phone) <= 20),
  company     text check (char_length(company) <= 100),
  interest    text not null check (char_length(interest) <= 50),
  message     text not null check (char_length(message) between 10 and 2000),
  -- For your own follow-up tracking in the dashboard.
  status      text not null default 'new'
              check (status in ('new', 'contacted', 'qualified', 'closed'))
);

create index if not exists leads_created_at_idx on public.leads (created_at desc);

create table if not exists public.waitlist (
  id          uuid primary key default gen_random_uuid(),
  created_at  timestamptz not null default now(),
  email       text not null unique check (char_length(email) <= 254),
  name        text check (char_length(name) <= 100)
);

alter table public.leads    enable row level security;
alter table public.waitlist enable row level security;

-- Belt and braces: remove any default table privileges from public roles.
revoke all on public.leads    from anon, authenticated;
revoke all on public.waitlist from anon, authenticated;
