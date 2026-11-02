import { useState } from 'react';

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-white font-semibold text-lg">Backstory</span>
        </div>
        <a
          href="https://chromewebstore.google.com/detail/backstory/njoklgfbemippmgbmhichgbnialalfcb"
          className="bg-emerald-500 hover:bg-emerald-600 text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
        >
          Add to Chrome
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="hero-gradient pt-32 pb-20 px-6">
      <div className="max-w-4xl mx-auto text-center">
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          Start every AI chat with the<br className="hidden md:block" /> right background.
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          Tired of retyping the same background every time you open a new chat? Backstory is a free Chrome extension — a simple AI productivity tool — for saving the role, facts, rules, and tone you reuse, then inserting it into a new ChatGPT, Claude, or Gemini chat for you to review and send.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href="https://chromewebstore.google.com/detail/backstory/njoklgfbemippmgbmhichgbnialalfcb"
            className="bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            Add to Chrome
          </a>
          <a
            href="#use-cases"
            className="border border-white/10 hover:border-white/20 text-white font-medium px-8 py-3.5 rounded-lg transition-colors text-base"
          >
            See real-world examples
          </a>
        </div>
        
        {/* Mockup */}
        <HeroMockup />
      </div>
    </section>
  );
}

function HeroMockup() {
  return (
    <div className="max-w-3xl mx-auto mt-8">
      <div className="rounded-xl border border-white/10 bg-[#111111] overflow-hidden shadow-2xl">
        {/* Browser bar */}
        <div className="flex items-center gap-2 px-4 py-3 border-b border-white/5 bg-[#0d0d0d]">
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-red-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-yellow-500/60"></div>
            <div className="w-3 h-3 rounded-full bg-green-500/60"></div>
          </div>
          <div className="flex-1 text-center text-xs text-gray-500">
            claude.ai / chatgpt.com / gemini.google.com
          </div>
        </div>
        
        {/* Extension popup */}
        <div className="p-5">
          <div className="text-left">
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Your Context Packs</p>
            <div className="space-y-2 mb-5">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-emerald-500/10 border border-emerald-500/20">
                <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>
                </div>
                <div>
                  <p className="text-sm text-white font-medium">Brand Voice & Content</p>
                  <p className="text-xs text-gray-500">Role, audience, guidelines & 3 quick-fill blanks</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 00-3-3.87"/><path d="M16 3.13a4 4 0 010 7.75"/></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Client Pitch Brief</p>
                  <p className="text-xs text-gray-600">Value props, objection handlers, tone</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Executive Summary Formatter</p>
                  <p className="text-xs text-gray-600">Meeting takeaways & action item table</p>
                </div>
              </div>
            </div>
            
            {/* Status badge */}
            <div className="flex items-center gap-2 mb-4">
              <span className="px-2 py-1 rounded-md bg-emerald-500/10 text-emerald-400 text-xs font-medium">Backstory Ready</span>
              <span className="px-2 py-1 rounded-md bg-white/5 text-gray-500 text-xs">Inserted into draft</span>
            </div>
            
            {/* Chat input mockup */}
            <div className="rounded-lg border border-white/10 bg-[#0a0a0a] p-4">
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "Act as our Senior Brand Strategist. Audience: Busy creators and professionals. Please draft an introductory overview for our Spring Launch, keeping the tone warm, clear, and reassuring."
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-gray-600">Review your draft and click Send when ready...</p>
                <button className="bg-emerald-500 text-white text-xs px-4 py-1.5 rounded-md font-medium">Send</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhyBackstorySection() {
  const features = [
    {
      num: "1",
      title: "No More Generic Answers",
      desc: "ChatGPT gives generic responses because it knows nothing about your business. Give it your role, your rules, and your tone once, and every answer sounds like it actually came from you."
    },
    {
      num: "2",
      title: "Quick-Fill Blanks",
      desc: "Swap in a client name, topic, or detail right before you send. No retyping the rest."
    },
    {
      num: "3",
      title: "You Stay in Control",
      desc: "Backstory drops the finished text right into your chat box. It never hits send for you. You always read it over first."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Why Backstory</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Why ChatGPT keeps giving you generic answers
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          It's not a smarter-prompt problem. It's that the AI knows nothing about your business until you tell it, every single time.
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {features.map((f, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-[#111111] p-6 card-glow hover:border-emerald-500/20 transition-colors">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center mb-4">
                <span className="text-emerald-400 font-bold text-lg">{f.num}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{f.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{f.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function WorkflowSection() {
  const [activeTab, setActiveTab] = useState('marketing');
  const [activeSubTab, setActiveSubTab] = useState('content');

  const tabs = [
    { id: 'marketing', label: 'Companies & Teams' },
    { id: 'freelancers', label: 'Freelancers' }
  ];

  const subTabs = [
    { id: 'content', label: 'Marketing & Content' },
    { id: 'sales', label: 'Sales & Client Relations' },
    { id: 'ops', label: 'Operations & Management' },
    { id: 'consulting', label: 'Consulting & Legal' }
  ];

  return (
    <section id="use-cases" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Designed for Every Workflow</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Built for however you work
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          Whether you write copy, manage clients, lead projects, or review documents, Backstory keeps your essential background ready.
        </p>

        {/* Main tabs */}
        <div className="flex justify-center gap-2 mb-6">
          {tabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                  : 'text-gray-400 hover:text-white border border-white/5'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {subTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveSubTab(tab.id)}
              className={`px-4 py-1.5 rounded-md text-xs font-medium transition-colors ${
                activeSubTab === tab.id
                  ? 'bg-white/10 text-white'
                  : 'text-gray-500 hover:text-gray-300'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-emerald-400 text-sm">Content & Social</span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 text-sm">Brand Voice & Audience Profile</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              Keep every draft strictly in your brand voice
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              Save your audience profile, preferred tone, banned buzzwords, and formatting rules once. Drop them into your chat before generating articles, newsletters, or ad copy.
            </p>
            
            <p className="text-sm text-gray-500 mb-3">Fill these in before you insert:</p>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-xs text-gray-500 w-28">Topic / Product:</span>
                <span className="text-sm text-white">"Local-first browser extensions"</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-xs text-gray-500 w-28">Target Audience:</span>
                <span className="text-sm text-white">"Busy professionals & creators"</span>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <span className="text-xs text-gray-500 w-28">Tone:</span>
                <span className="text-sm text-white">"Warm, clear, and reassuring"</span>
              </div>
            </div>
          </div>

          {/* Right side - message preview */}
          <div className="rounded-xl border border-white/10 bg-[#111111] p-5">
            <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">Your Message, Ready to Send</p>
            <div className="space-y-4">
              <div>
                <p className="text-xs text-emerald-400 font-medium mb-1">Who You Are</p>
                <p className="text-sm text-gray-300">Act as a Senior Brand Strategist for our product.</p>
              </div>
              <div>
                <p className="text-xs text-emerald-400 font-medium mb-1">What They Should Know</p>
                <p className="text-sm text-gray-300">Audience: Busy professionals & creators who value time and privacy. Never use artificial hype words or generic corporate jargon.</p>
              </div>
              <div>
                <p className="text-xs text-emerald-400 font-medium mb-1">What You Need Right Now</p>
                <p className="text-sm text-gray-300">Draft a short overview about "Local-first browser extensions" maintaining a warm, clear, and reassuring tone.</p>
              </div>
            </div>
            <div className="mt-5 pt-4 border-t border-white/5">
              <p className="text-xs text-gray-500">One click inserts this directly into ChatGPT, Claude, or Gemini</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  const steps = [
    {
      num: "1",
      title: "Create your pack",
      desc: "Add your guidelines, rules, and optional variables in the clean extension popup."
    },
    {
      num: "2",
      title: "Open any AI chat",
      desc: "Navigate to ChatGPT, Claude, or Gemini whenever you are ready to start a task."
    },
    {
      num: "3",
      title: "Fill blanks & insert",
      desc: "Pick your pack, fill in anything that's changed, and click Insert. The full message appears in your chat box, ready for you to check."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Simple Workflow</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          How it works in practice
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          From setup to one-click insertion in three natural steps.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {steps.map((step, i) => (
            <div key={i} className="relative rounded-xl border border-white/5 bg-[#111111] p-6 hover:border-emerald-500/20 transition-colors">
              <div className="w-12 h-12 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-5">
                <span className="text-emerald-400 font-bold text-xl">{step.num}</span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CompatibilitySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Universal Compatibility</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Works right where you already chat
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          Seamlessly integrated into the most popular AI interfaces.
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          <div className="rounded-xl border border-white/5 bg-[#111111] p-8 text-center hover:border-emerald-500/20 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-[#10a37f]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#10a37f" strokeWidth="1.5">
                <path d="M12 2a10 10 0 1010 10A10 10 0 0012 2zm0 3a2 2 0 11-2 2 2 2 0 012-2zm4 11H8v-1a4 4 0 018 0z"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">ChatGPT</h3>
            <p className="text-gray-500 text-sm">chatgpt.com</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-[#111111] p-8 text-center hover:border-emerald-500/20 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-[#d97706]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#d97706" strokeWidth="1.5">
                <path d="M12 2L2 7l10 5 10-5-10-5z"/><path d="M2 17l10 5 10-5"/><path d="M2 12l10 5 10-5"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Claude</h3>
            <p className="text-gray-500 text-sm">claude.ai</p>
          </div>
          <div className="rounded-xl border border-white/5 bg-[#111111] p-8 text-center hover:border-emerald-500/20 transition-colors">
            <div className="w-16 h-16 rounded-2xl bg-[#4285f4]/10 flex items-center justify-center mx-auto mb-4">
              <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="#4285f4" strokeWidth="1.5">
                <circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/>
              </svg>
            </div>
            <h3 className="text-white font-semibold text-lg mb-1">Gemini</h3>
            <p className="text-gray-500 text-sm">gemini.google.com</p>
          </div>
        </div>
        
        <p className="text-center text-gray-500 text-sm mb-4">More AI platforms coming soon.</p>
        <p className="text-center text-gray-600 text-xs max-w-xl mx-auto">
          ChatGPT, Claude, and Gemini are trademarks of their respective owners. Backstory is not affiliated with OpenAI, Anthropic, or Google.
        </p>
      </div>
    </section>
  );
}

function PrivacySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="rounded-2xl border border-white/5 bg-[#111111] p-8 md:p-12">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 rounded-lg bg-emerald-500/10 flex items-center justify-center">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">Private & Secure</h2>
          </div>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            Backstory keeps your Context Packs on your device. It never reads or sends your chat text — the only network calls it ever makes are an anonymous, content-free usage event and an optional license check if you verify a Pro key.
          </p>

          <div className="space-y-4">
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p className="text-gray-300 text-sm">Everything you save stays on your own device, never on our servers.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p className="text-gray-300 text-sm">Backstory never reads or saves the text of your conversations.</p>
            </div>
            <div className="flex items-start gap-3">
              <div className="w-5 h-5 rounded-full bg-emerald-500/20 flex items-center justify-center mt-0.5 flex-shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="3"><polyline points="20 6 9 17 4 12"/></svg>
              </div>
              <p className="text-gray-300 text-sm">Back up or move your packs anytime with one click.</p>
            </div>
          </div>

          <a href="#" className="inline-block mt-6 text-emerald-400 text-sm hover:text-emerald-300 transition-colors">
            Read our complete Privacy Policy →
          </a>
        </div>
      </div>
    </section>
  );
}

function PricingSection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span className="text-emerald-400 text-sm font-medium uppercase tracking-wider">Pricing</span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Simple pricing that benefits you
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          Start with our generous free plan or upgrade when you need unlimited packs.
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Free plan */}
          <div className="rounded-xl border border-white/5 bg-[#111111] p-8">
            <h3 className="text-white font-semibold text-xl mb-2">Free</h3>
            <div className="mb-1">
              <span className="text-3xl font-bold text-white">$0</span>
            </div>
            <p className="text-gray-500 text-sm mb-6">Included by default</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Up to 3 Context Packs
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                All supported chats (ChatGPT, Claude, Gemini)
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Full section and quick-fill customization
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Local JSON backup & export
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                No account or credit card required
              </li>
            </ul>
            <p className="text-gray-500 text-xs">Perfect for everyday personal and professional use.</p>
          </div>

          {/* Pro plan */}
          <div className="rounded-xl border border-emerald-500/20 bg-[#111111] p-8 relative">
            <div className="absolute -top-3 right-6 px-3 py-1 bg-emerald-500 text-white text-xs font-medium rounded-full">
              Popular
            </div>
            <h3 className="text-white font-semibold text-xl mb-2">Pro</h3>
            <div className="mb-1">
              <span className="text-3xl font-bold text-white">US$19.99</span>
              <span className="text-gray-400 text-sm ml-2">lifetime</span>
            </div>
            <p className="text-emerald-400 text-sm mb-6">Founding Member price: first 100-250 buyers. Then US$29.99.</p>
            <ul className="space-y-3 mb-8">
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Unlimited Context Packs
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                All supported chats (ChatGPT, Claude, Gemini)
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Full section and quick-fill customization
              </li>
              <li className="flex items-center gap-2 text-sm text-gray-300">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#10b981" strokeWidth="2"><polyline points="20 6 9 17 4 12"/></svg>
                Priority feature updates
              </li>
            </ul>
            <a
              href="https://chromewebstore.google.com/detail/backstory/njoklgfbemippmgbmhichgbnialalfcb"
              className="block w-full text-center bg-emerald-500 hover:bg-emerald-600 text-white font-medium py-3 rounded-lg transition-colors"
            >
              Claim founding price
            </a>
            <p className="text-gray-500 text-xs mt-3 text-center">One-time payment. No subscription.</p>
          </div>
        </div>

        {/* Comparison table */}
        <details className="group">
          <summary className="text-center text-emerald-400 text-sm cursor-pointer hover:text-emerald-300 transition-colors list-none">
            <span className="inline-flex items-center gap-1">
              Compare Free and Pro plans
              <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
            </span>
          </summary>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 text-gray-300 font-medium">Free<br/><span className="text-xs text-gray-500">$0</span></th>
                  <th className="text-center py-3 pl-4 text-gray-300 font-medium">Pro<br/><span className="text-xs text-gray-500">US$19.99 lifetime</span></th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-gray-400">Context Packs</td>
                  <td className="py-3 px-4 text-center text-gray-300">Up to 3</td>
                  <td className="py-3 pl-4 text-center text-emerald-400">Unlimited</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-gray-400">Supported chats</td>
                  <td className="py-3 px-4 text-center text-gray-300">ChatGPT, Claude, Gemini</td>
                  <td className="py-3 pl-4 text-center text-gray-300">ChatGPT, Claude, Gemini</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-gray-400">Sections & quick-fill blanks</td>
                  <td className="py-3 px-4 text-center text-gray-300">✓</td>
                  <td className="py-3 pl-4 text-center text-gray-300">✓</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-gray-400">Local JSON backup & export</td>
                  <td className="py-3 px-4 text-center text-gray-300">✓</td>
                  <td className="py-3 pl-4 text-center text-gray-300">✓</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-gray-400">Restore purchase on another device</td>
                  <td className="py-3 px-4 text-center text-gray-600">—</td>
                  <td className="py-3 pl-4 text-center text-gray-300">✓</td>
                </tr>
                <tr className="border-b border-white/5">
                  <td className="py-3 pr-4 text-gray-400">Priority feature updates</td>
                  <td className="py-3 px-4 text-center text-gray-600">—</td>
                  <td className="py-3 pl-4 text-center text-gray-300">✓</td>
                </tr>
                <tr>
                  <td className="py-3 pr-4 text-gray-400">Account required</td>
                  <td className="py-3 px-4 text-center text-gray-300">No</td>
                  <td className="py-3 pl-4 text-center text-gray-300 text-xs">Only if you choose to restore</td>
                </tr>
              </tbody>
            </table>
          </div>
        </details>
      </div>
    </section>
  );
}

function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);
  
  const faqs = [
    {
      q: "Does Backstory read or store my chat conversations?",
      a: "No. Backstory never reads or records the text of your conversations. It only looks for the chat box on the page, nothing else."
    },
    {
      q: "Will Backstory send messages automatically?",
      a: "Never. Backstory places the finished text right where you'd normally type. You always review and send the message yourself."
    },
    {
      q: "What happens if I clear my browser history or cache?",
      a: "Since your packs are stored locally in your browser, clearing extension storage will remove them. You can use the built-in Copy JSON button anytime to save a local backup copy and restore your packs whenever you need."
    },
    {
      q: "Do I need an account to use the free version?",
      a: "No. You can create and use up to 3 complete Context Packs immediately without creating an account or providing an email address."
    }
  ];

  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          Frequently asked questions
        </h2>
        <p className="text-gray-400 text-center mb-12">
          Everything you need to know about how Backstory works.
        </p>

        <div className="space-y-3">
          {faqs.map((faq, i) => (
            <div key={i} className="rounded-xl border border-white/5 bg-[#111111] overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full text-left px-6 py-4 flex items-center justify-between"
              >
                <span className="text-white font-medium text-sm pr-4">{faq.q}</span>
                <svg
                  className={`w-5 h-5 text-gray-500 flex-shrink-0 transition-transform ${openIndex === i ? 'rotate-180' : ''}`}
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <polyline points="6 9 12 15 18 9"/>
                </svg>
              </button>
              {openIndex === i && (
                <div className="px-6 pb-4">
                  <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function CTASection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          Stop starting from zero with every new chat.
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          Add Backstory to Chrome, write your context once, and let ChatGPT, Claude, and Gemini actually sound like they know your business.
        </p>
        <a
          href="https://chromewebstore.google.com/detail/backstory/njoklgfbemippmgbmhichgbnialalfcb"
          className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-medium px-8 py-3.5 rounded-lg transition-colors"
        >
          Add to Chrome
        </a>
      </div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 px-6">
      <div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <div className="w-6 h-6 rounded-md bg-gradient-to-br from-emerald-400 to-emerald-600 flex items-center justify-center">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M12 2L2 7l10 5 10-5-10-5z"/>
              <path d="M2 17l10 5 10-5"/>
              <path d="M2 12l10 5 10-5"/>
            </svg>
          </div>
          <span className="text-gray-400 text-sm">Backstory</span>
        </div>
        <div className="flex items-center gap-6">
          <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Privacy Policy</a>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Terms</a>
          <a href="#" className="text-gray-500 text-sm hover:text-gray-300 transition-colors">Contact</a>
        </div>
        <p className="text-gray-600 text-xs">© 2025 Backstory. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default function App() {
  return (
    <div className="min-h-screen bg-[#0a0a0a]">
      <Navbar />
      <main>
        <HeroSection />
        <WhyBackstorySection />
        <WorkflowSection />
        <HowItWorksSection />
        <CompatibilitySection />
        <PrivacySection />
        <PricingSection />
        <FAQSection />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
}
