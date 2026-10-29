// Portfolio data — update projects, links, and contact here
export const SITE = {
  name: 'Devi Sri Prasad',
  initials: 'DSP',
  tagline: 'I build useful things for the web.',
  subTagline:
    'Web developer and AI automation engineer based in Telangana, India. ' +
    'I work with small businesses and creators who need software that actually does something.',
  location: 'Telangana, India',
  available: true,
  email: 'nakkadevisriprasad@gmail.com',
  github: 'https://github.com/Dsp023',
  linkedin: '',                   // ← add if you want it shown
  whatsapp: '',                   // ← e.g. 'https://wa.me/919xxxxxxxxx'
} as const

export type Project = {
  id: string
  title: string
  category: string
  description: string
  contribution: string
  tech: string[]
  liveUrl?: string
  githubUrl?: string
  image?: string
  status: 'featured' | 'placeholder'
}

export const PROJECTS: Project[] = [
  {
    id: 'ember-restaurant',
    title: 'Ember — Fine Dining',
    category: 'Demo · Business Website',
    description:
      'A full restaurant landing page with tabbed menu, reservation form, and live-fire brand identity. ' +
      'Built to show local businesses what a premium web presence looks like.',
    contribution:
      'Designed and built end-to-end — layout, typography system, menu interaction, form handling, and mobile responsiveness.',
    tech: ['Mobile Responsive', 'Tabbed Menu', 'Reservation Form', 'Fast Loading'],
    liveUrl: '/demos/restaurant.html',
    githubUrl: '',
    image: '/images/ember-preview.png',
    status: 'featured',
  },
  {
    id: 'automation-explainer',
    title: 'Lead Automation — Before & After',
    category: 'Demo · AI Workflow Automation',
    description:
      'A visual explainer showing a clinic\'s manual lead process vs. a fully automated workflow. ' +
      'Built so business owners immediately understand what they\'re getting — no tech jargon.',
    contribution:
      'Designed the narrative flow, visual comparison layout, and wrote all copy targeted at non-technical business owners.',
    tech: ['Instant Lead Response', 'Auto Follow-up', 'Spreadsheet Logging', '8 hrs/week saved'],
    liveUrl: '/demos/automation.html',
    githubUrl: '',
    image: '/images/automation-preview.png',
    status: 'featured',
  },
  {
    id: 'instagram-dm-funnel',
    title: 'Instagram DM Customer Acquisition Funnel',
    category: 'Demo · Social Commerce Automation',
    description:
      'Turn Instagram reel comments ("Price?", "Size?") into structured sales leads inside Google Sheets in under 5 seconds with zero manual typing.',
    contribution:
      'Engineered the n8n webhook trigger, Gemini AI conversational context model, instant payment link generator, and Google Sheets CRM sync.',
    tech: ['5s Instant DM', 'Gemini AI Intent', 'Payment Link Close', 'Google Sheets CRM'],
    liveUrl: '/demos/instagram-automation.html',
    githubUrl: '',
    image: '/images/insta-mockup.jpg',
    status: 'featured',
  },
  {
    id: 'missed-call-recovery',
    title: 'Missed-Call WhatsApp Booking Recovery',
    category: 'Demo · Revenue Protection Automation',
    description:
      'Instantly catches clients who call diagnostic labs, clinics, or services when lines are busy or after-hours, recovering 35–45% of lost revenue.',
    contribution:
      'Designed the telephony webhook listener, 30-second WhatsApp intercept sequence, Cal.com slot reservation, and CRM lead protection.',
    tech: ['Telephony Webhook', '<30s WhatsApp Intercept', 'Cal.com Self-Booking', 'Zero Lost Callers'],
    liveUrl: '/demos/missed-call-automation.html',
    githubUrl: '',
    image: '/images/missed-call-mockup.jpg',
    status: 'featured',
  },
  {
    id: 'aura-clinic',
    title: 'Aura Aesthetics & Dental Sanctuary',
    category: 'Demo · Premium Medical Clinic',
    description:
      'Luminous Swiss clinical luxury web sanctuary for cosmetic dermatology and digital dentistry in Jubilee Hills. Features interactive before-after evidence, US-FDA tech showcase, and live calendar slot reservation.',
    contribution:
      'Designed and built end-to-end — luminous light medical aesthetic, interactive before-after clinical evidence slider, treatment category filter, and calendar appointment concierge.',
    tech: ['Clinical Evidence Slider', 'Instant Calendar Booking', 'US-FDA Tech Showcase', 'Luminous Medical UI'],
    liveUrl: '/demos/clinic.html',
    githubUrl: '',
    image: 'https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&fit=crop&w=1000&q=80',
    status: 'featured',
  },
  {
    id: 'celestia-realestate',
    title: 'The Celestia — Sky Mansions',
    category: 'Demo · Luxury Real Estate',
    description:
      'High-converting property showcase for multi-crore sky villas in Kokapet, Neopolis featuring interactive floor plans and VIP site tour reservation.',
    contribution:
      'Architected the high-intent lead funnel, interactive 3D floor plan switcher, biophilic visual gallery, and VIP site preview scheduler.',
    tech: ['Interactive Floor Plans', 'VIP Tour Booking', 'High-Ticket Lead Funnel', 'Architectural Gallery'],
    liveUrl: '/demos/realestate.html',
    githubUrl: '',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80',
    status: 'featured',
  },
]

export type Service = {
  id: string
  title: string
  description: string
  deliverables: string[]
  startingAt: string
}

export const SERVICES: Service[] = [
  {
    id: 'websites',
    title: 'Business Websites',
    description:
      'Clean, fast, mobile-first websites for small businesses, freelancers, and local services. ' +
      'Built to load quickly and look professional on any device.',
    deliverables: [
      'Responsive design (mobile + desktop)',
      'Contact form and basic SEO',
      'Deployed and live within agreed timeline',
      'Source code handed over',
    ],
    startingAt: '₹2,000',
  },
  {
    id: 'ai-automation',
    title: 'AI Workflow Automation',
    description:
      'Automate repetitive business tasks using AI and workflow tools. ' +
      'Useful for lead management, content processing, and data extraction.',
    deliverables: [
      'Workflow scoped and agreed upfront',
      'Built with n8n, Node.js, or suitable tools',
      'Tested and handed over with documentation',
    ],
    startingAt: '₹1,500',
  },
  {
    id: 'content-automation',
    title: 'Creator Workflow Automation',
    description:
      'Automate parts of a YouTube or content creation pipeline — research, scripting, ' +
      'thumbnail ideation, or repurposing content across platforms.',
    deliverables: [
      'End-to-end workflow for one content task',
      'AI-assisted with human review checkpoints',
      'Documentation for ongoing use',
    ],
    startingAt: '₹1,000',
  },
]
