import { describe, expect, it } from "vitest";
import { buildLeadAlert } from "./lead-alert";

const lead = {
  name: "Asha Rao",
  email: "asha@example.com",
  phone: undefined,
  company: "Example Pvt Ltd",
  interest: "ai-agents",
  message: "We'd like an AI agent.\nPlease call me.",
};

describe("buildLeadAlert", () => {
  it("includes the enquiry details in a readable plain-text email", () => {
    const { subject, text } = buildLeadAlert(lead, "AI Agents");
    expect(subject).toBe("New enquiry: AI Agents — Asha Rao");
    expect(text).toContain("Email:    asha@example.com");
    expect(text).toContain("Phone:    —");
    expect(text).toContain("We'd like an AI agent.\nPlease call me.");
  });

  it("strips line breaks from the subject so visitor text can't add headers", () => {
    const { subject } = buildLeadAlert(
      { ...lead, name: "Asha\r\nBcc: victim@example.com" },
      "AI Agents",
    );
    expect(subject).not.toMatch(/[\r\n]/);
  });

  it("keeps the subject to a reasonable length", () => {
    const { subject } = buildLeadAlert(
      { ...lead, name: "A".repeat(100) },
      "AI Agents",
    );
    expect(subject.length).toBeLessThanOrEqual(150);
  });
});
