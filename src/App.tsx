import { useState } from 'react';
import { config } from './config';

// Icon components
const Icons = {
  layers: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2L2 7l10 5 10-5-10-5z"/>
      <path d="M2 17l10 5 10-5"/>
      <path d="M2 12l10 5 10-5"/>
    </svg>
  ),
  zap: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"/>
    </svg>
  ),
  shield: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/>
    </svg>
  ),
  code: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <polyline points="16 18 22 12 16 6"/>
      <polyline points="8 6 2 12 8 18"/>
    </svg>
  ),
  sparkles: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 3l1.912 5.813a2 2 0 001.275 1.275L21 12l-5.813 1.912a2 2 0 00-1.275 1.275L12 21l-1.912-5.813a2 2 0 00-1.275-1.275L3 12l5.813-1.912a2 2 0 001.275-1.275L12 3z"/>
    </svg>
  ),
};

function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 bg-[#0a0a0a]/80 backdrop-blur-xl">
      <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div 
            className="w-8 h-8 rounded-lg flex items-center justify-center text-white"
            style={{ background: `linear-gradient(135deg, ${config.brand.primaryColor}, ${config.brand.primaryColor}dd)` }}
          >
            {Icons[config.brand.logo as keyof typeof Icons]}
          </div>
          <span className="text-white font-semibold text-lg">{config.brand.name}</span>
        </div>
        <a
          href={config.brand.chromeWebStoreUrl}
          className="text-white text-sm font-medium px-4 py-2 rounded-lg transition-colors"
          style={{ backgroundColor: config.brand.primaryColor }}
          onMouseEnter={(e) => e.currentTarget.style.opacity = '0.9'}
          onMouseLeave={(e) => e.currentTarget.style.opacity = '1'}
        >
          Add to Chrome
        </a>
      </div>
    </nav>
  );
}

function HeroSection() {
  return (
    <section className="pt-32 pb-20 px-6" style={{ background: `radial-gradient(ellipse at top, ${config.brand.primaryColor}15 0%, transparent 60%)` }}>
      <div className="max-w-4xl mx-auto text-center">
        <div 
          className="inline-block px-4 py-1.5 rounded-full text-sm font-medium mb-6 border"
          style={{ 
            backgroundColor: `${config.brand.primaryColor}15`,
            borderColor: `${config.brand.primaryColor}30`,
            color: config.brand.primaryColor
          }}
        >
          {config.hero.badge}
        </div>
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-tight mb-6">
          {config.hero.headline}
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto mb-8 leading-relaxed">
          {config.hero.subheadline}
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <a
            href={config.brand.chromeWebStoreUrl}
            className="text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:scale-105"
            style={{ backgroundColor: config.brand.primaryColor }}
          >
            {config.hero.ctaPrimary}
          </a>
          <a
            href="#how-it-works"
            className="border border-white/10 hover:border-white/20 text-white font-medium px-8 py-3.5 rounded-lg transition-colors"
          >
            {config.hero.ctaSecondary}
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
            {config.compatibility.platforms.map(p => p.url).join(' / ')}
          </div>
        </div>
        
        {/* Extension popup */}
        <div className="p-5">
          <div className="text-left">
            <p className="text-xs text-gray-500 mb-3 uppercase tracking-wider">Your Saved Packs</p>
            <div className="space-y-2 mb-5">
              <div 
                className="flex items-center gap-3 p-3 rounded-lg border"
                style={{ 
                  backgroundColor: `${config.brand.primaryColor}15`,
                  borderColor: `${config.brand.primaryColor}30`
                }}
              >
                <div 
                  className="w-8 h-8 rounded-lg flex items-center justify-center"
                  style={{ backgroundColor: `${config.brand.primaryColor}20` }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke={config.brand.primaryColor} strokeWidth="2">
                    <path d="M12 20h9"/>
                    <path d="M16.5 3.5a2.121 2.121 0 013 3L7 19l-4 1 1-4L16.5 3.5z"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-white font-medium">{config.useCases.example.packName}</p>
                  <p className="text-xs text-gray-500">Role, audience, guidelines & variables</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4-4v2"/>
                    <circle cx="9" cy="7" r="4"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Client Pitch Brief</p>
                  <p className="text-xs text-gray-600">Value props, objection handlers, tone</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                <div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#6b7280" strokeWidth="2">
                    <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                    <polyline points="14 2 14 8 20 8"/>
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-400 font-medium">Executive Summary</p>
                  <p className="text-xs text-gray-600">Meeting takeaways & action items</p>
                </div>
              </div>
            </div>
            
            {/* Status */}
            <div className="flex items-center gap-2 mb-4">
              <span 
                className="px-2 py-1 rounded-md text-xs font-medium"
                style={{ 
                  backgroundColor: `${config.brand.primaryColor}15`,
                  color: config.brand.primaryColor
                }}
              >
                Ready
              </span>
              <span className="px-2 py-1 rounded-md bg-white/5 text-gray-500 text-xs">
                Insert into draft
              </span>
            </div>
            
            {/* Chat input */}
            <div className="rounded-lg border border-white/10 bg-[#0a0a0a] p-4">
              <p className="text-sm text-gray-300 italic leading-relaxed">
                "{config.useCases.example.messagePreview.sections.map(s => s.content).join(' ')}"
              </p>
              <div className="mt-4 flex items-center justify-between">
                <p className="text-xs text-gray-600">Review and click Send when ready...</p>
                <button 
                  className="text-white text-xs px-4 py-1.5 rounded-md font-medium"
                  style={{ backgroundColor: config.brand.primaryColor }}
                >
                  Send
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function WhySection() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span 
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: config.brand.primaryColor }}
          >
            {config.whySection.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {config.whySection.title}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          {config.whySection.subtitle}
        </p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {config.whySection.features.map((feature, i) => (
            <div 
              key={i} 
              className="rounded-xl border border-white/5 bg-[#111111] p-6 hover:border-opacity-20 transition-colors"
              style={{ ['--hover-border' as any]: `${config.brand.primaryColor}30` }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = `${config.brand.primaryColor}30`}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
            >
              <div 
                className="w-10 h-10 rounded-lg flex items-center justify-center mb-4"
                style={{ backgroundColor: `${config.brand.primaryColor}15` }}
              >
                <span className="font-bold text-lg" style={{ color: config.brand.primaryColor }}>
                  {feature.number}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{feature.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function UseCasesSection() {
  const [activeTab, setActiveTab] = useState(config.useCases.mainTabs[0].id);
  const [activeSubTab, setActiveSubTab] = useState(config.useCases.subTabs[0].id);

  return (
    <section className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span 
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: config.brand.primaryColor }}
          >
            {config.useCases.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {config.useCases.title}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-10">
          {config.useCases.subtitle}
        </p>

        {/* Main tabs */}
        <div className="flex justify-center gap-2 mb-6">
          {config.useCases.mainTabs.map(tab => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2 rounded-lg text-sm font-medium transition-colors ${
                activeTab === tab.id
                  ? 'border'
                  : 'text-gray-400 hover:text-white border border-white/5'
              }`}
              style={activeTab === tab.id ? {
                backgroundColor: `${config.brand.primaryColor}15`,
                color: config.brand.primaryColor,
                borderColor: `${config.brand.primaryColor}30`
              } : {}}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Sub tabs */}
        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {config.useCases.subTabs.map(tab => (
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

        {/* Content */}
        <div className="grid md:grid-cols-2 gap-8 items-start">
          <div>
            <div className="flex items-center gap-2 mb-3">
              <span className="text-sm" style={{ color: config.brand.primaryColor }}>
                {config.useCases.example.category}
              </span>
              <span className="text-gray-600">•</span>
              <span className="text-gray-400 text-sm">{config.useCases.example.packName}</span>
            </div>
            <h3 className="text-2xl font-bold text-white mb-4">
              {config.useCases.example.packTitle}
            </h3>
            <p className="text-gray-400 mb-6 leading-relaxed">
              {config.useCases.example.packDescription}
            </p>
            
            <p className="text-sm text-gray-500 mb-3">Fill these in before you insert:</p>
            <div className="space-y-3">
              {config.useCases.example.variables.map((variable, i) => (
                <div key={i} className="flex items-center gap-3 p-3 rounded-lg bg-white/5 border border-white/5">
                  <span className="text-xs text-gray-500 w-28">{variable.label}:</span>
                  <span className="text-sm text-white">{variable.value}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Message preview */}
          <div className="rounded-xl border border-white/10 bg-[#111111] p-5">
            <p className="text-xs text-gray-500 mb-4 uppercase tracking-wider">Your Message, Ready to Send</p>
            <div className="space-y-4">
              {config.useCases.example.messagePreview.sections.map((section, i) => (
                <div key={i}>
                  <p 
                    className="text-xs font-medium mb-1"
                    style={{ color: config.brand.primaryColor }}
                  >
                    {section.label}
                  </p>
                  <p className="text-sm text-gray-300">{section.content}</p>
                </div>
              ))}
            </div>
            <div className="mt-5 pt-4 border-t border-white/5">
              <p className="text-xs text-gray-500">
                One click inserts this directly into {config.compatibility.platforms.map(p => p.name).join(', ')}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-20 px-6">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-4">
          <span 
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: config.brand.primaryColor }}
          >
            {config.howItWorks.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {config.howItWorks.title}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          {config.howItWorks.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {config.howItWorks.steps.map((step, i) => (
            <div 
              key={i} 
              className="rounded-xl border border-white/5 bg-[#111111] p-6 transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = `${config.brand.primaryColor}30`}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
            >
              <div 
                className="w-12 h-12 rounded-full flex items-center justify-center mb-5 border"
                style={{ 
                  backgroundColor: `${config.brand.primaryColor}15`,
                  borderColor: `${config.brand.primaryColor}30`
                }}
              >
                <span className="font-bold text-xl" style={{ color: config.brand.primaryColor }}>
                  {step.number}
                </span>
              </div>
              <h3 className="text-white font-semibold text-lg mb-3">{step.title}</h3>
              <p className="text-gray-400 text-sm leading-relaxed">{step.description}</p>
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
          <span 
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: config.brand.primaryColor }}
          >
            {config.compatibility.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {config.compatibility.title}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          {config.compatibility.subtitle}
        </p>

        <div className="grid md:grid-cols-3 gap-6 mb-8">
          {config.compatibility.platforms.map((platform, i) => (
            <div 
              key={i} 
              className="rounded-xl border border-white/5 bg-[#111111] p-8 text-center transition-colors"
              onMouseEnter={(e) => e.currentTarget.style.borderColor = `${config.brand.primaryColor}30`}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(255,255,255,0.05)'}
            >
              <div 
                className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4"
                style={{ backgroundColor: `${platform.color}15` }}
              >
                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke={platform.color} strokeWidth="1.5">
                  <circle cx="12" cy="12" r="10"/>
                  <path d="M12 6v6l4 2"/>
                </svg>
              </div>
              <h3 className="text-white font-semibold text-lg mb-1">{platform.name}</h3>
              <p className="text-gray-500 text-sm">{platform.url}</p>
            </div>
          ))}
        </div>
        
        <p className="text-center text-gray-500 text-sm mb-4">{config.compatibility.comingSoon}</p>
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
            <div 
              className="w-10 h-10 rounded-lg flex items-center justify-center"
              style={{ backgroundColor: `${config.brand.primaryColor}15` }}
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke={config.brand.primaryColor} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
                <path d="M7 11V7a5 5 0 0110 0v4"/>
              </svg>
            </div>
            <h2 className="text-2xl font-bold text-white">{config.privacy.title}</h2>
          </div>
          
          <p className="text-gray-400 mb-8 leading-relaxed">
            {config.privacy.description}
          </p>

          <div className="space-y-4">
            {config.privacy.points.map((point, i) => (
              <div key={i} className="flex items-start gap-3">
                <div 
                  className="w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0"
                  style={{ backgroundColor: `${config.brand.primaryColor}20` }}
                >
                  <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke={config.brand.primaryColor} strokeWidth="3">
                    <polyline points="20 6 9 17 4 12"/>
                  </svg>
                </div>
                <p className="text-gray-300 text-sm">{point}</p>
              </div>
            ))}
          </div>

          <a 
            href={config.privacy.privacyPolicyUrl}
            className="inline-block mt-6 text-sm transition-colors hover:opacity-80"
            style={{ color: config.brand.primaryColor }}
          >
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
          <span 
            className="text-sm font-medium uppercase tracking-wider"
            style={{ color: config.brand.primaryColor }}
          >
            {config.pricing.eyebrow}
          </span>
        </div>
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {config.pricing.title}
        </h2>
        <p className="text-gray-400 text-center max-w-2xl mx-auto mb-14">
          {config.pricing.subtitle}
        </p>

        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {config.pricing.plans.map((plan, i) => (
            <div 
              key={i} 
              className={`rounded-xl bg-[#111111] p-8 relative ${
                plan.highlighted ? 'border-2' : 'border border-white/5'
              }`}
              style={plan.highlighted ? { borderColor: `${config.brand.primaryColor}40` } : {}}
            >
              {plan.badge && (
                <div 
                  className="absolute -top-3 right-6 px-3 py-1 text-white text-xs font-medium rounded-full"
                  style={{ backgroundColor: config.brand.primaryColor }}
                >
                  {plan.badge}
                </div>
              )}
              <h3 className="text-white font-semibold text-xl mb-2">{plan.name}</h3>
              <div className="mb-1">
                <span className="text-3xl font-bold text-white">{plan.price}</span>
                {plan.period && (
                  <span className="text-gray-400 text-sm ml-2">{plan.period}</span>
                )}
              </div>
              <p 
                className="text-sm mb-6"
                style={{ color: plan.highlighted ? config.brand.primaryColor : '#6b7280' }}
              >
                {plan.tagline}
              </p>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, j) => (
                  <li key={j} className="flex items-center gap-2 text-sm text-gray-300">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke={config.brand.primaryColor} strokeWidth="2">
                      <polyline points="20 6 9 17 4 12"/>
                    </svg>
                    {feature}
                  </li>
                ))}
              </ul>
              <a
                href={plan.ctaUrl}
                className={`block w-full text-center text-white font-medium py-3 rounded-lg transition-all hover:scale-105 ${
                  plan.highlighted ? '' : 'bg-white/10 hover:bg-white/15'
                }`}
                style={plan.highlighted ? { backgroundColor: config.brand.primaryColor } : {}}
              >
                {plan.cta}
              </a>
              <p className="text-gray-500 text-xs mt-3 text-center">{plan.footnote}</p>
            </div>
          ))}
        </div>

        {/* Comparison table */}
        <details className="group">
          <summary className="text-center text-sm cursor-pointer hover:opacity-80 transition-opacity list-none" style={{ color: config.brand.primaryColor }}>
            <span className="inline-flex items-center gap-1">
              Compare plans
              <svg className="w-4 h-4 transition-transform group-open:rotate-180" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </span>
          </summary>
          <div className="mt-8 overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="border-b border-white/5">
                  <th className="text-left py-3 pr-4 text-gray-500 font-medium">Feature</th>
                  <th className="text-center py-3 px-4 text-gray-300 font-medium">
                    {config.pricing.plans[0].name}
                    <br/><span className="text-xs text-gray-500">{config.pricing.plans[0].price}</span>
                  </th>
                  <th className="text-center py-3 pl-4 text-gray-300 font-medium">
                    {config.pricing.plans[1].name}
                    <br/><span className="text-xs text-gray-500">{config.pricing.plans[1].price}</span>
                  </th>
                </tr>
              </thead>
              <tbody>
                {config.pricing.comparison.map((row, i) => (
                  <tr key={i} className="border-b border-white/5">
                    <td className="py-3 pr-4 text-gray-400">{row.feature}</td>
                    <td className="py-3 px-4 text-center text-gray-300">{row.free}</td>
                    <td className="py-3 pl-4 text-center" style={{ color: row.pro === '✓' ? config.brand.primaryColor : row.pro === '—' ? '#4b5563' : '#d1d5db' }}>
                      {row.pro}
                    </td>
                  </tr>
                ))}
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
  
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-white text-center mb-4">
          {config.faq.title}
        </h2>
        <p className="text-gray-400 text-center mb-12">
          {config.faq.subtitle}
        </p>

        <div className="space-y-3">
          {config.faq.questions.map((faq, i) => (
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

function FinalCTA() {
  return (
    <section className="py-20 px-6">
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
          {config.finalCta.title}
        </h2>
        <p className="text-gray-400 mb-8 max-w-xl mx-auto">
          {config.finalCta.subtitle}
        </p>
        <a
          href={config.finalCta.buttonUrl}
          className="inline-block text-white font-medium px-8 py-3.5 rounded-lg transition-all hover:scale-105"
          style={{ backgroundColor: config.brand.primaryColor }}
        >
          {config.finalCta.buttonText}
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
          <div 
            className="w-6 h-6 rounded-md flex items-center justify-center text-white"
            style={{ background: `linear-gradient(135deg, ${config.brand.primaryColor}, ${config.brand.primaryColor}dd)` }}
          >
            {Icons[config.brand.logo as keyof typeof Icons]}
          </div>
          <span className="text-gray-400 text-sm">{config.brand.name}</span>
        </div>
        <div className="flex items-center gap-6">
          {config.footer.links.map((link, i) => (
            <a 
              key={i} 
              href={link.url}
              className="text-gray-500 text-sm hover:text-gray-300 transition-colors"
            >
              {link.label}
            </a>
          ))}
        </div>
        <p className="text-gray-600 text-xs">{config.footer.copyright}</p>
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
        <WhySection />
        <UseCasesSection />
        <HowItWorksSection />
        <CompatibilitySection />
        <PrivacySection />
        <PricingSection />
        <FAQSection />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
