export const navLinks = [
  { href: "/", label: "Home" },
  { href: "/services", label: "Services" },
  { href: "/process", label: "Process" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
] as const;

export const services = [
  {
    id: "manual-exploratory",
    name: "Manual and exploratory testing",
    summary: "Find critical defects before customers do.",
    whoFor:
      "Teams about to launch, demo to investors, or ship a major feature with little structured testing.",
    outcomes: [
      "Highest-risk user journeys are exercised",
      "Release-blocking and high-severity bugs are documented",
      "Founders and engineers know what is safe to ship and what is not",
    ],
    deliverables: [
      "Test charter / session notes",
      "Bug reports with steps, severity, and evidence",
      "Risk summary for the release",
    ],
    notIncluded:
      "Building a full regression suite, writing production code, or 24/7 on-call.",
  },
  {
    id: "strategy-process",
    name: "Test strategy and process setup",
    summary: "Help the team decide what to test, when, and how.",
    whoFor:
      "Startups that test ad hoc, disagree on “done,” or keep missing the same class of bugs.",
    outcomes: [
      "A shared quality bar for the product",
      "A practical test approach that matches team size and release cadence",
      "Clear ownership: what Gatekeeper QA does vs. what the product team does",
    ],
    deliverables: [
      "Lightweight test strategy",
      "Priority areas (risk-based)",
      "Definition of ready / done for quality",
      "Recommended tooling and rituals",
    ],
    notIncluded:
      "Replacing the product manager, rewriting the entire backlog, or enterprise process frameworks.",
  },
  {
    id: "automation",
    name: "Test automation",
    summary:
      "Build maintainable automated checks so regressions are caught in CI.",
    whoFor:
      "Teams that ship often and cannot afford to re-test everything by hand each time.",
    outcomes: [
      "Repeatable coverage on critical paths",
      "Faster feedback on pull requests or main-branch builds",
      "Less reliance on last-minute manual regression",
    ],
    deliverables: [
      "Automation approach (what to automate vs. leave manual)",
      "Automated checks (starting with Playwright for web flows)",
      "How to run them locally and in CI",
      "Handover notes so the team can maintain the suite",
    ],
    notIncluded:
      "Automating everything, flaky record-and-playback dumps, or owning the product’s entire CI platform.",
  },
  {
    id: "api-integration",
    name: "API and integration testing",
    summary:
      "Validate backend contracts and the workflows that connect systems.",
    whoFor:
      "Products where the UI is thin and risk lives in APIs, billing, auth, or third-party integrations.",
    outcomes: [
      "Broken contracts and edge cases are found before they reach the UI",
      "Integrations have explicit expected behavior",
      "Failures are easier to isolate (client vs. API vs. partner)",
    ],
    deliverables: [
      "API test plan for priority endpoints and flows",
      "Automated or scripted API checks where they add value",
      "Defect reports with request/response evidence",
      "Notes on contract gaps and error handling",
    ],
    notIncluded:
      "Rewriting APIs, security pentesting as a full offering, or load testing unless scoped separately.",
  },
  {
    id: "release-support",
    name: "Release quality support",
    summary:
      "Improve confidence immediately before and after a release.",
    whoFor:
      "Teams with a hard ship date who need a focused quality gate, not a long-term program.",
    outcomes: [
      "A go / no-go view based on evidence",
      "Known issues ranked by user and business impact",
      "A short post-release watch list",
    ],
    deliverables: [
      "Release test plan (time-boxed)",
      "Execution results and bug list",
      "Release recommendation (ship / ship with caveats / hold)",
      "Suggested follow-up tests for the next sprint",
    ],
    notIncluded:
      "Taking product-launch decisions for the company, or standing in as full-time release manager unless agreed.",
  },
] as const;

export const serviceMixes = [
  {
    situation: "First launch",
    mix: "Strategy + exploratory + release support",
  },
  {
    situation: "Recurring shipping",
    mix: "Exploratory + automation + release support",
  },
  {
    situation: "API-heavy product",
    mix: "Strategy + API testing + automation",
  },
] as const;

export const outOfScope = [
  "Full security / penetration testing as a primary product",
  "Large enterprise staff-augmentation programs",
  "24/7 production monitoring",
] as const;

export const processSteps = [
  "Understand",
  "Prioritize risk",
  "Test",
  "Report",
  "Advise",
] as const;
