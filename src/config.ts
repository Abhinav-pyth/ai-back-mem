// ============================================================
// 🎯 YOUR CHROME EXTENSION CONFIG
// Edit everything here to customize your landing page!
// ============================================================

export const config = {
  // ─── BRANDING ───────────────────────────────────────────
  brand: {
    name: "YourExtension",
    tagline: "Save Your AI Context, Reuse It in Every Chat",
    logo: "layers", // icon name: "layers" | "zap" | "shield" | "code" | "sparkles"
    primaryColor: "#10b981", // emerald green - change to your brand color
    chromeWebStoreUrl: "https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID",
  },

  // ─── HERO SECTION ───────────────────────────────────────
  hero: {
    headline: "Start every AI chat with the right background.",
    subheadline:
      "Tired of retyping the same background every time you open a new chat? YourExtension is a free Chrome extension for saving the role, facts, rules, and tone you reuse, then inserting it into a new ChatGPT, Claude, or Gemini chat.",
    ctaPrimary: "Add to Chrome — It's Free",
    ctaSecondary: "See how it works",
    badge: "Free Chrome Extension",
  },

  // ─── WHY SECTION (3 key benefits) ──────────────────────
  whySection: {
    eyebrow: "Why YourExtension",
    title: "Why AI tools keep giving you generic answers",
    subtitle:
      "It's not a smarter-prompt problem. It's that the AI knows nothing about your business until you tell it — every single time.",
    features: [
      {
        number: "1",
        title: "No More Generic Answers",
        description:
          "AI gives generic responses because it knows nothing about your context. Save your role, rules, and tone once, and every answer sounds like it came from you.",
      },
      {
        number: "2",
        title: "Quick-Fill Variables",
        description:
          "Swap in a client name, topic, or detail right before you send. No retyping the rest of your prompt.",
      },
      {
        number: "3",
        title: "You Stay in Control",
        description:
          "YourExtension drops the finished text right into your chat box. It never sends for you. You always review first.",
      },
    ],
  },

  // ─── USE CASES / WORKFLOW TABS ─────────────────────────
  useCases: {
    eyebrow: "Designed for Every Workflow",
    title: "Built for however you work",
    subtitle:
      "Whether you write copy, manage clients, lead projects, or review documents, YourExtension keeps your essential background ready.",
    mainTabs: [
      { id: "teams", label: "Companies & Teams" },
      { id: "freelancers", label: "Freelancers" },
    ],
    subTabs: [
      { id: "marketing", label: "Marketing & Content" },
      { id: "sales", label: "Sales & Client Relations" },
      { id: "operations", label: "Operations & Management" },
      { id: "consulting", label: "Consulting & Legal" },
    ],
    example: {
      category: "Content & Social",
      packName: "Brand Voice & Audience Profile",
      packTitle: "Keep every draft strictly in your brand voice",
      packDescription:
        "Save your audience profile, preferred tone, banned buzzwords, and formatting rules once. Drop them into your chat before generating articles, newsletters, or ad copy.",
      variables: [
        { label: "Topic / Product", value: '"Your product or topic"' },
        { label: "Target Audience", value: '"Your ideal audience"' },
        { label: "Tone", value: '"Your desired tone"' },
      ],
      messagePreview: {
        sections: [
          {
            label: "Who You Are",
            content: "Act as a Senior Brand Strategist for our product.",
          },
          {
            label: "What They Should Know",
            content:
              'Audience: Your target audience. Never use artificial hype words or generic corporate jargon.',
          },
          {
            label: "What You Need Right Now",
            content:
              'Draft a short overview about "your topic" maintaining your desired tone.',
          },
        ],
      },
    },
  },

  // ─── HOW IT WORKS ──────────────────────────────────────
  howItWorks: {
    eyebrow: "Simple Workflow",
    title: "How it works in practice",
    subtitle: "From setup to one-click insertion in three natural steps.",
    steps: [
      {
        number: "1",
        title: "Create your pack",
        description:
          "Add your guidelines, rules, and optional variables in the clean extension popup.",
      },
      {
        number: "2",
        title: "Open any AI chat",
        description:
          "Navigate to ChatGPT, Claude, or Gemini whenever you are ready to start a task.",
      },
      {
        number: "3",
        title: "Fill blanks & insert",
        description:
          "Pick your pack, fill in anything that's changed, and click Insert. The full message appears in your chat box, ready for you to check.",
      },
    ],
  },

  // ─── COMPATIBILITY ─────────────────────────────────────
  compatibility: {
    eyebrow: "Universal Compatibility",
    title: "Works right where you already chat",
    subtitle: "Seamlessly integrated into the most popular AI interfaces.",
    platforms: [
      { name: "ChatGPT", url: "chatgpt.com", color: "#10a37f" },
      { name: "Claude", url: "claude.ai", color: "#d97706" },
      { name: "Gemini", url: "gemini.google.com", color: "#4285f4" },
    ],
    comingSoon: "More AI platforms coming soon.",
  },

  // ─── PRIVACY ───────────────────────────────────────────
  privacy: {
    title: "Private & Secure",
    description:
      "YourExtension keeps your data on your device. It never reads or sends your chat text — the only network calls it makes are anonymous usage events.",
    points: [
      "Everything you save stays on your own device, never on our servers.",
      "YourExtension never reads or saves the text of your conversations.",
      "Back up or move your data anytime with one click.",
    ],
    privacyPolicyUrl: "#",
  },

  // ─── PRICING ───────────────────────────────────────────
  pricing: {
    eyebrow: "Pricing",
    title: "Simple pricing that benefits you",
    subtitle:
      "Start with our generous free plan or upgrade when you need more.",
    plans: [
      {
        name: "Free",
        price: "$0",
        period: "",
        badge: "",
        tagline: "Included by default",
        features: [
          "Up to 3 saved packs",
          "All supported AI chats",
          "Full customization",
          "Local backup & export",
          "No account required",
        ],
        cta: "Get Started Free",
        ctaUrl: "https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID",
        highlighted: false,
        footnote: "Perfect for everyday personal and professional use.",
      },
      {
        name: "Pro",
        price: "US$19.99",
        period: "lifetime",
        badge: "Popular",
        tagline: "Founding Member price — first 100-250 buyers.",
        features: [
          "Unlimited saved packs",
          "All supported AI chats",
          "Full customization",
          "Priority feature updates",
          "Cross-device sync",
        ],
        cta: "Claim founding price",
        ctaUrl: "https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID",
        highlighted: true,
        footnote: "One-time payment. No subscription.",
      },
    ],
    comparison: [
      { feature: "Saved Packs", free: "Up to 3", pro: "Unlimited" },
      { feature: "Supported chats", free: "ChatGPT, Claude, Gemini", pro: "ChatGPT, Claude, Gemini" },
      { feature: "Customization", free: "✓", pro: "✓" },
      { feature: "Local backup & export", free: "✓", pro: "✓" },
      { feature: "Cross-device sync", free: "—", pro: "✓" },
      { feature: "Priority updates", free: "—", pro: "✓" },
      { feature: "Account required", free: "No", pro: "Optional" },
    ],
  },

  // ─── FAQ ───────────────────────────────────────────────
  faq: {
    title: "Frequently asked questions",
    subtitle: "Everything you need to know about how YourExtension works.",
    questions: [
      {
        q: "Does YourExtension read or store my chat conversations?",
        a: "No. YourExtension never reads or records the text of your conversations. It only looks for the chat box on the page, nothing else.",
      },
      {
        q: "Will YourExtension send messages automatically?",
        a: "Never. YourExtension places the finished text right where you'd normally type. You always review and send the message yourself.",
      },
      {
        q: "What happens if I clear my browser data?",
        a: "Since your data is stored locally, clearing extension storage will remove it. Use the built-in export button anytime to save a backup and restore whenever you need.",
      },
      {
        q: "Do I need an account to use the free version?",
        a: "No. You can create and use up to 3 complete packs immediately without creating an account or providing an email address.",
      },
    ],
  },

  // ─── FINAL CTA ─────────────────────────────────────────
  finalCta: {
    title: "Stop starting from zero with every new chat.",
    subtitle:
      "Add YourExtension to Chrome, write your context once, and let ChatGPT, Claude, and Gemini actually sound like they know your business.",
    buttonText: "Add to Chrome — It's Free",
    buttonUrl: "https://chromewebstore.google.com/detail/YOUR_EXTENSION_ID",
  },

  // ─── FOOTER ────────────────────────────────────────────
  footer: {
    copyright: "© 2025 YourExtension. All rights reserved.",
    links: [
      { label: "Privacy Policy", url: "#" },
      { label: "Terms", url: "#" },
      { label: "Contact", url: "#" },
    ],
  },
};
