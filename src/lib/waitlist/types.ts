// Shared by the server logic and the browser form (no heavy imports).
import type { FormState } from "@/lib/forms/types";

export const waitlistFields = ["email"] as const;

export type WaitlistField = (typeof waitlistFields)[number];

export type WaitlistFormState = FormState<WaitlistField>;
