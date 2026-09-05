// Single source of truth for business details and page content.
// Edit here and every page updates.

export const site = {
  name: 'One2One Insurance Advisors',
  shortName: 'One2One',
  tagline: 'Independent Medicare Advisors',
  region: 'Murrysville, PA',
  url: 'https://one2oneadvisor.com',
  phone: '(724) 575-7628',
  phoneHref: 'tel:+17245757628',
  email: 'chris@one2oneadvisor.com',
  address: {
    street: '3925 Reed Blvd, Suite 202',
    city: 'Murrysville',
    state: 'PA',
    zip: '15668',
  },
  // Approximate coordinates for schema.org. Fine-tune from Google Maps if desired.
  geo: { lat: 40.4331, lng: -79.6953 },
  mapsUrl: 'https://www.google.com/maps/search/?api=1&query=3925+Reed+Blvd+Suite+202+Murrysville+PA+15668',
  mapsEmbed: 'https://www.google.com/maps?q=3925+Reed+Blvd,+Murrysville,+PA+15668&output=embed',
  // TODO: confirm office hours with Chris. The previous site did not list any.
  hours: [
    { day: 'Monday to Friday', open: '9:00 AM', close: '5:00 PM' },
    { day: 'Evenings and weekends', note: 'By appointment' },
  ],
  hoursSchema: [{ days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'], opens: '09:00', closes: '17:00' }],
  // TODO: add real profile URLs. Empty strings hide the icon in the footer.
  social: {
    facebook: '',
    x: '',
    instagram: '',
  },
  // TODO: CMS requires third-party marketers to state how many organizations and
  // plans they represent. Fill in the two numbers before launch.
  disclaimer: {
    organizations: '[number]',
    products: '[number]',
  },
  // Evergreen announcement shown above the header. Set text to '' to hide it.
  announcement: {
    text: 'Medicare Annual Enrollment runs October 15 to December 7.',
    cta: 'Book your free plan review',
    href: '/contact/',
  },
};

export const areasServed = [
  'Murrysville', 'Monroeville', 'Export', 'Delmont', 'Greensburg', 'Irwin', 'North Huntingdon',
  'Plum', 'Penn Hills', 'Latrobe', 'Jeannette', 'Westmoreland County', 'Allegheny County',
];

export type TeamMember = {
  name: string;
  initials: string;
  role: string;
  bio: string;
  long: string;
  email?: string;
};

export const team: TeamMember[] = [
  {
    name: 'Chris Grieco',
    initials: 'CG',
    role: 'Owner & Lead Advisor',
    bio: 'Pitt engineering grad with an analytical approach to Medicare planning. Chris founded One2One to bring unbiased, personalized guidance to Western PA.',
    long: 'Chris studied engineering at the University of Pittsburgh, and it shows in how he works: gather the facts, compare every option side by side, and recommend the one the numbers support. He founded One2One so people in Western Pennsylvania could get straight answers about Medicare from someone who is not tied to a single carrier.',
    email: 'chris@one2oneadvisor.com',
  },
  {
    name: 'Darla Grieco',
    initials: 'DG',
    role: 'Office Manager',
    bio: 'Passionate about making Medicare simple and stress-free, Darla guides clients through every step of the process.',
    long: 'Darla keeps the office running and keeps every client informed. From the first phone call to the day your new card arrives in the mail, she makes sure nothing falls through the cracks and that you always know what happens next.',
  },
  {
    name: 'Jen',
    initials: 'J',
    role: 'Medicare Advisor',
    bio: 'Dedicated to helping clients understand their options and find the coverage that fits their lifestyle and budget.',
    long: 'Jen works one-on-one with clients to explain how each plan actually works in daily life: which doctors are in network, what a prescription will cost, and what happens if your needs change. Her goal is a plan you understand and feel good about.',
  },
];

export type Service = {
  slug: string;
  icon: string;
  title: string;
  short: string;
  bullets: string[];
};

export const services: Service[] = [
  {
    slug: 'turning-65',
    icon: 'cake',
    title: 'Turning 65',
    short: 'Your first Medicare decision is the biggest one. We walk you through every step, starting 3 to 4 months before your birthday.',
    bullets: ['Explain Parts A, B, C, and D in plain English', 'Map out your enrollment window so you avoid penalties', 'Compare plans that include your doctors and prescriptions'],
  },
  {
    slug: 'advantage-vs-supplement',
    icon: 'scale',
    title: 'Advantage vs. Supplement',
    short: 'Two very different ways to cover what Original Medicare does not. We show you the real trade-offs so you can choose with confidence.',
    bullets: ['Side-by-side comparison of costs and coverage', 'Network and travel considerations', 'Extra benefits like dental, vision, and hearing'],
  },
  {
    slug: 'prescription-drugs',
    icon: 'pill',
    title: 'Prescription Drug Coverage',
    short: 'The cheapest premium is not always the cheapest plan. We run your actual medications through every plan to find your true cost.',
    bullets: ['Part D and Medicare Advantage drug comparisons', 'Pharmacy network and mail-order options', 'Alerts when a plan changes its drug list'],
  },
  {
    slug: 'annual-review',
    icon: 'calendar',
    title: 'Free Annual Plan Review',
    short: 'Plans change every year. Every fall we review your coverage and switch you only if something better is available.',
    bullets: ['Review benefits, costs, and provider networks', 'Check that your doctors and drugs are still covered', 'Handle the paperwork if a change makes sense'],
  },
  {
    slug: 'working-past-65',
    icon: 'briefcase',
    title: 'Still Working Past 65',
    short: 'Keeping employer coverage? You may still need to enroll in part of Medicare. We help you decide what to take now and what to delay.',
    bullets: ['Coordinate Medicare with employer or spousal coverage', 'Avoid late enrollment penalties', 'Plan your transition when you do retire'],
  },
  {
    slug: 'dental-vision-hearing',
    icon: 'smile',
    title: 'Dental, Vision & Hearing',
    short: 'Original Medicare does not cover them. Many Medicare Advantage plans include allowances for all three. We find the ones that fit.',
    bullets: ['Compare allowances and provider networks', 'Understand what is and is not included', 'Stand-alone options when they make sense'],
  },
];

export const steps = [
  {
    n: '01',
    title: 'Schedule a call',
    text: 'Pick a time that works for you. We can meet by phone, by video, at our Murrysville office, or at your kitchen table.',
  },
  {
    n: '02',
    title: 'We listen first',
    text: 'Your doctors, your prescriptions, your budget, how you like to travel. The right plan depends on the details, so we start there.',
  },
  {
    n: '03',
    title: 'We compare every option',
    text: 'Because we are independent, we compare plans across carriers and show you the trade-offs side by side, in plain English.',
  },
  {
    n: '04',
    title: 'We stay with you',
    text: 'Enrollment is just the start. We review your plan every year, alert you to changes, and answer questions whenever they come up.',
  },
];

export const faqs = [
  {
    q: 'When should I start looking into Medicare?',
    a: 'We recommend starting at least 3–4 months before turning 65. Even if you plan to continue working, your Medicare options should be reviewed — early planning avoids penalties.',
  },
  {
    q: 'Who is eligible for Medicare?',
    a: 'Medicare eligibility is triggered in four circumstances: turning 65, being granted full disability (after 24 months), being diagnosed with Stage 4 ESRD, or being diagnosed with ALS. Each has its own enrollment windows.',
  },
  {
    q: 'Does Original Medicare cover dental, vision, and hearing?',
    a: 'No — Original Medicare does not cover dental, vision, or hearing. However, most Medicare Advantage plans offer benefit allowances for these services. We can help you find a plan that fits.',
  },
  {
    q: 'Is there really no cost for your services?',
    a: 'Correct — all of our Medicare consultation services are completely free to you. Our compensation comes directly from the insurance companies, keeping our advice unbiased.',
  },
  {
    q: "What's the difference between Medicare Advantage and a Supplement?",
    a: "Medicare Advantage replaces Original Medicare with a bundled plan, often including extra benefits. A Supplement works alongside Original Medicare to cover out-of-pocket costs. We'll help you decide which fits best.",
  },
  {
    q: 'What happens if my plan changes next year?',
    a: "Medicare plans can change benefits, costs, and provider networks annually. That's why we do a free plan review every year to make sure you're still on the best option — and switch you if something better is available.",
  },
  {
    q: 'Do I have to come to your office?',
    a: 'No. We are happy to meet at our Murrysville office, but most clients prefer a phone or video call, and we can also come to you anywhere in the Pittsburgh area.',
  },
  {
    q: 'Which insurance companies do you work with?',
    a: 'We are independent, so we are not tied to any single carrier. We compare plans from the major carriers offering Medicare coverage in Western Pennsylvania and recommend the one that fits you best.',
  },
];

export const medicareParts = [
  { part: 'A', name: 'Hospital insurance', text: 'Inpatient hospital stays, skilled nursing facility care, hospice, and some home health care. Most people pay no premium for Part A.' },
  { part: 'B', name: 'Medical insurance', text: 'Doctor visits, outpatient care, preventive services, lab work, and durable medical equipment. Part B has a monthly premium and an annual deductible.' },
  { part: 'C', name: 'Medicare Advantage', text: 'Private plans that bundle Parts A and B, usually Part D, and often extras like dental, vision, and hearing. They use provider networks and replace Original Medicare.' },
  { part: 'D', name: 'Prescription drug coverage', text: 'Stand-alone plans from private insurers that cover prescription drugs. Each plan has its own list of covered drugs (a formulary) and pharmacy network.' },
];

export const enrollmentPeriods = [
  { name: 'Initial Enrollment Period', when: '7 months around your 65th birthday', text: 'Starts 3 months before the month you turn 65 and ends 3 months after. This is when most people first sign up for Parts A and B.' },
  { name: 'Annual Enrollment Period', when: 'October 15 to December 7', text: 'Change Medicare Advantage or Part D plans for the coming year. New coverage begins January 1. This is when we do your free annual review.' },
  { name: 'Medicare Advantage Open Enrollment', when: 'January 1 to March 31', text: 'If you are in a Medicare Advantage plan, you can switch to another Advantage plan or return to Original Medicare once during this window.' },
  { name: 'Special Enrollment Periods', when: 'Triggered by life events', text: 'Losing employer coverage, moving out of your plan area, or other qualifying events can open a window to enroll or change plans outside the normal dates.' },
];
