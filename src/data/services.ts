import type { Area } from "./areas";

export interface ServiceFeature {
  title: string;
  description: string;
}

export interface ServiceFaq {
  question: string;
  answer: string;
}

export interface LocationService {
  slug: string;
  name: string;
  shortName: string;
  schemaType: string;
  metaTitleTemplate: string;
  metaDescriptionTemplate: string;
  heroHeadlineTemplate: string;
  heroSubTemplate: string;
  introTemplate: string;
  areaBodyTemplate: string;
  features: ServiceFeature[];
  faqs: ServiceFaq[];
  relatedServices: string[];
}

// Template interpolation helper
export function t(template: string, area: Area): string {
  return template
    .replace(/\{area\.name\}/g, area.name)
    .replace(/\{area\.tagline\}/g, area.tagline)
    .replace(/\{area\.knownFor\}/g, area.knownFor)
    .replace(/\{area\.landmark0\}/g, area.landmarks[0])
    .replace(/\{area\.landmark1\}/g, area.landmarks[1])
    .replace(/\{area\.landmark2\}/g, area.landmarks[2])
    .replace(/\{area\.businessHub0\}/g, area.businessHubs[0])
    .replace(/\{area\.businessContext\}/g, area.businessContext)
    .replace(/\{area\.residentialContext\}/g, area.residentialContext)
    .replace(/\{area\.description\}/g, area.description);
}

export const locationServices: LocationService[] = [
  {
    slug: "commercial-cleaning",
    name: "Commercial Cleaning",
    shortName: "Commercial",
    schemaType: "CommercialCleaning",
    metaTitleTemplate:
      "Commercial Cleaning Services in {area.name} | Briany's Cleaning",
    metaDescriptionTemplate:
      "Professional commercial cleaning in {area.name}, Gauteng. Briany's Cleaning Services provides fully insured, contract-based commercial cleaning for offices, warehouses, and business premises in {area.name}. Get a free quote today.",
    heroHeadlineTemplate: "Commercial Cleaning in {area.name}",
    heroSubTemplate:
      "Professional, contract-based commercial cleaning for businesses across {area.name} and surrounding areas. Fully insured, vetted staff, transparent pricing.",
    introTemplate:
      "{area.name} is a city defined by {area.knownFor} — and the businesses that operate here hold their service providers to high standards. Whether your company occupies a single floor near {area.landmark0} or an entire campus in {area.businessHub0}, Briany's Cleaning Services delivers the consistent, professional commercial cleaning your premises deserve.",
    areaBodyTemplate:
      "{area.businessContext} We have spent years building relationships with businesses across {area.name}, and we understand the specific demands that come with operating in a precinct as active and professionally competitive as this one. Our commercial cleaning teams are fully equipped, background-checked, and trained to work around your operating hours — minimising disruption while maximising results.",
    features: [
      {
        title: "Flexible Scheduling",
        description:
          "We clean before hours, after hours, or on weekends — structured entirely around your business operations.",
      },
      {
        title: "Dedicated Account Manager",
        description:
          "Every commercial contract gets a named account manager who knows your premises and your standards.",
      },
      {
        title: "Industrial Equipment",
        description:
          "We arrive fully equipped with professional-grade machinery and eco-friendly cleaning solutions.",
      },
      {
        title: "Fully Insured",
        description:
          "All staff are fully insured and bonded. Your premises and assets are protected on every visit.",
      },
      {
        title: "Compliance Ready",
        description:
          "We can provide cleaning documentation and sign-off sheets for compliance and audit purposes.",
      },
      {
        title: "Scalable Contracts",
        description:
          "From a single small office to a multi-floor commercial building, our contracts scale with your needs.",
      },
    ],
    faqs: [
      {
        question: "How quickly can you start a commercial cleaning contract?",
        answer:
          "In most cases we can begin a new commercial contract within 3–5 business days of signing. For urgent requirements we will do our best to accommodate a faster start.",
      },
      {
        question: "Do you provide all cleaning equipment and supplies?",
        answer:
          "Yes. Our teams arrive fully equipped with all machinery, tools, and eco-friendly cleaning solutions. You do not need to provide anything.",
      },
      {
        question: "Can we adjust the scope of cleaning as our business grows?",
        answer:
          "Absolutely. Our commercial contracts are designed to be flexible. We can add or remove services, adjust frequencies, and scale up or down as your requirements change.",
      },
      {
        question: "Are your staff background checked?",
        answer:
          "Yes. Every member of our team undergoes a thorough background check and identity verification before joining us. We also carry full liability insurance.",
      },
    ],
    relatedServices: [
      "office-cleaning",
      "regular-contracts",
      "carpet-cleaning",
    ],
  },
  {
    slug: "office-cleaning",
    name: "Office Cleaning",
    shortName: "Office",
    schemaType: "OfficeCleaning",
    metaTitleTemplate:
      "Office Cleaning Services in {area.name} | Briany's Cleaning",
    metaDescriptionTemplate:
      "Expert office cleaning in {area.name}. Briany's Cleaning Services delivers reliable, daily or weekly office cleaning for businesses in {area.name}, Gauteng. Vetted staff, eco-friendly products, no long-term lock-in.",
    heroHeadlineTemplate: "Office Cleaning in {area.name}",
    heroSubTemplate:
      "A clean office is a productive office. Reliable, professional office cleaning for businesses throughout {area.name} — on your schedule, to your standard.",
    introTemplate:
      "A clean, well-maintained office sends a clear message — to your staff, your clients, and anyone who walks through the door. In {area.name}, a precinct known for {area.knownFor}, that message carries real weight. Whether your office is a five-person co-working space near {area.landmark0} or a multi-department floor in {area.businessHub0}, Briany's delivers office cleaning that genuinely meets professional expectations.",
    areaBodyTemplate:
      "{area.businessContext} Our office cleaning teams are trained to work quietly, efficiently, and thoroughly — whether we are cleaning before your staff arrive in the morning, or doing a thorough deep-clean over the weekend. We use eco-friendly, SABS-approved cleaning products that are effective without leaving harsh chemical residues in the spaces where your people spend their working day.",
    features: [
      {
        title: "Daily or Weekly Cleaning",
        description:
          "Choose the frequency that works for your team and your budget.",
      },
      {
        title: "Desk & Workstation Cleaning",
        description:
          "Thorough cleaning of all work surfaces, screens, and equipment.",
      },
      {
        title: "Kitchen & Bathroom Sanitation",
        description:
          "Full sanitisation of office kitchens, bathrooms, and communal areas.",
      },
      {
        title: "Waste Management",
        description: "Emptying bins, recycling separation, and waste removal.",
      },
      {
        title: "Floor Care",
        description:
          "Vacuuming, mopping, and periodic deep-cleaning of all floor types.",
      },
      {
        title: "Window Cleaning",
        description:
          "Internal window and glass partition cleaning for a bright, professional environment.",
      },
    ],
    faqs: [
      {
        question: "How do you handle office security and access?",
        answer:
          "We work with your facilities or management team to arrange access in whatever way suits your security requirements — alarm codes, key collection, or supervised access.",
      },
      {
        question: "Do we need to be in the office when you clean?",
        answer:
          "Not at all. Most of our clients prefer us to clean outside of business hours. We are happy to work unsupervised once a cleaning protocol has been agreed.",
      },
      {
        question: "Can I book a once-off office deep-clean before a contract?",
        answer:
          "Yes. We often begin with a once-off deep-clean so that ongoing maintenance cleaning starts from the best possible baseline.",
      },
    ],
    relatedServices: [
      "commercial-cleaning",
      "carpet-cleaning",
      "regular-contracts",
    ],
  },
  {
    slug: "house-cleaning",
    name: "House Cleaning",
    shortName: "Domestic",
    schemaType: "HouseCleaning",
    metaTitleTemplate:
      "House Cleaning Services in {area.name} | Briany's Cleaning",
    metaDescriptionTemplate:
      "Professional house cleaning in {area.name}, Gauteng. Briany's Cleaning Services offers reliable domestic cleaning for homes in {area.name} — vetted cleaners, eco-friendly products, flexible scheduling. Book your free quote.",
    heroHeadlineTemplate: "House Cleaning in {area.name}",
    heroSubTemplate:
      "Trusted, professional domestic cleaning for homes throughout {area.name}. Vetted cleaners, eco-friendly products, flexible scheduling that works around your life.",
    introTemplate:
      "Your home is your sanctuary — and keeping it spotless should not have to be another item on an already full to-do list. In {area.name}, where residents take genuine pride in their properties, Briany's Cleaning Services provides domestic house cleaning that is thorough, trustworthy, and consistently excellent. From the townhouse clusters near {area.landmark0} to the family homes in {area.businessHub0}, we bring the same professional standard to every home we clean.",
    areaBodyTemplate:
      "{area.residentialContext} Our domestic cleaning teams are carefully selected, background-checked, and trained in our cleaning standards before they ever enter a client's home. We bring all our own eco-friendly cleaning products and equipment — you do not need to provide anything. Just tell us when works for you, and we will take care of the rest.",
    features: [
      {
        title: "Full House Cleans",
        description:
          "Comprehensive cleaning of every room, surface, bathroom, and kitchen.",
      },
      {
        title: "Spring & Deep Cleans",
        description:
          "Intensive once-off deep cleans for seasonal refreshes or move-in/move-out.",
      },
      {
        title: "Weekly or Fortnightly",
        description:
          "Regular scheduled cleaning that keeps your home in perfect condition.",
      },
      {
        title: "Vetted & Trusted",
        description:
          "All our domestic cleaners are background-checked and reference-verified.",
      },
      {
        title: "Eco-Friendly Products",
        description:
          "Non-toxic, family-safe cleaning solutions that are gentle on your home and the environment.",
      },
      {
        title: "Flexible Scheduling",
        description:
          "Morning, afternoon, or specific days — we work around your schedule.",
      },
    ],
    faqs: [
      {
        question: "Do I need to be home when the cleaner arrives?",
        answer:
          "No. Many of our domestic clients provide a key or access code. We treat every home with the same care and respect whether the owner is present or not.",
      },
      {
        question: "What is included in a standard house clean?",
        answer:
          "A standard clean covers all bedrooms, living areas, bathrooms, and the kitchen — including surfaces, floors, mirrors, appliances (exterior), and communal areas.",
      },
      {
        question: "Can I request the same cleaner every visit?",
        answer:
          "Yes, we do our best to send the same team member each time so that your cleaner becomes familiar with your home and preferences.",
      },
    ],
    relatedServices: [
      "carpet-cleaning",
      "regular-contracts",
      "office-cleaning",
    ],
  },
  {
    slug: "hotel-cleaning",
    name: "Hotel & Hall Cleaning",
    shortName: "Hospitality",
    schemaType: "HotelCleaning",
    metaTitleTemplate:
      "Hotel & Hall Cleaning in {area.name} | Briany's Cleaning Services",
    metaDescriptionTemplate:
      "Professional hotel and hall cleaning in {area.name}, Gauteng. Briany's Cleaning Services provides fast-turnaround, hospitality-grade cleaning for hotels, guesthouses, lodges, and function venues in {area.name}.",
    heroHeadlineTemplate: "Hotel & Hall Cleaning in {area.name}",
    heroSubTemplate:
      "Fast, thorough, hospitality-grade cleaning for hotels, guesthouses, and function venues across {area.name}. We understand that guest experience begins the moment they walk through the door.",
    introTemplate:
      "In the hospitality industry, cleanliness is not a nice-to-have — it is the foundation of every guest review, every rebooking, and every referral. {area.name}'s hospitality sector, centred around venues near {area.landmark0} and throughout the {area.businessHub0} precinct, demands cleaning contractors who understand the pace and precision of the industry. Briany's Cleaning Services has been trusted by hospitality venues across Gauteng for years.",
    areaBodyTemplate:
      "{area.businessContext} Our hotel cleaning teams operate with the speed and thoroughness that turnaround schedules demand. We train our staff specifically for hospitality environments — understanding room protocols, linen handling, replenishment standards, and the non-negotiable expectation of guest-ready presentation. Whether you need daily room servicing, deep cleans between events, or post-function cleanup, we deliver.",
    features: [
      {
        title: "Room Turnaround Cleaning",
        description:
          "Fast, thorough room preparation between guest checkouts and check-ins.",
      },
      {
        title: "Common Area Cleaning",
        description:
          "Lobbies, corridors, lifts, restaurants, and facilities cleaned to presentation standard.",
      },
      {
        title: "Linen Management Support",
        description:
          "Stripping and making beds, handling linen according to your protocols.",
      },
      {
        title: "Deep Cleans",
        description:
          "Periodic deep cleans for rooms, bathrooms, kitchens, and facilities.",
      },
      {
        title: "Event Hall Cleaning",
        description:
          "Pre-event setup cleaning and thorough post-function cleanup.",
      },
      {
        title: "Hospitality-Trained Staff",
        description:
          "Our team understands guest-facing environments and the standards required.",
      },
    ],
    faqs: [
      {
        question: "Can you handle same-day turnaround for multiple rooms?",
        answer:
          "Yes. Our hospitality teams are staffed and trained for rapid room turnaround. We can schedule multiple teams for larger properties.",
      },
      {
        question: "Do you clean function halls after late-night events?",
        answer:
          "Absolutely. We provide early-morning post-event cleanup services, often beginning at first light so the venue is ready for the next booking.",
      },
      {
        question: "Do you supply cleaning products and equipment for hotels?",
        answer:
          "Yes, we supply all our own materials. For hospitality clients we can also stock your in-room amenity supplies if required.",
      },
    ],
    relatedServices: [
      "event-cleaning",
      "commercial-cleaning",
      "carpet-cleaning",
    ],
  },
  {
    slug: "event-cleaning",
    name: "Pre & Post Event Cleaning",
    shortName: "Event",
    schemaType: "EventCleaning",
    metaTitleTemplate:
      "Event Cleaning Services in {area.name} | Briany's Cleaning",
    metaDescriptionTemplate:
      "Professional pre and post event cleaning in {area.name}, Gauteng. Briany's Cleaning Services sets the stage and handles the cleanup for functions, conferences, weddings, and corporate events across {area.name}.",
    heroHeadlineTemplate: "Event Cleaning in {area.name}",
    heroSubTemplate:
      "We set the stage before your guests arrive and leave no trace when they go. Professional pre and post event cleaning for venues across {area.name}.",
    introTemplate:
      "{area.name} hosts some of Gauteng's most significant events — corporate functions near {area.landmark0}, conferences at {area.businessHub0}, social gatherings, and community celebrations that bring people together. Whatever the occasion, the state of the venue reflects directly on the organiser. Briany's Cleaning Services ensures that your event space is immaculate before the first guest arrives and fully restored after the last one leaves.",
    areaBodyTemplate:
      "We understand the pressure of event deadlines. Our event cleaning teams are experienced in working with tight turnaround windows, coordinating with venue managers, and completing preparation or cleanup without interfering with other event logistics. Whether you need a thorough pre-event clean of {area.landmark0} or a complete post-function restoration of a banquet facility in {area.businessHub0}, we have the teams and the equipment to deliver.",
    features: [
      {
        title: "Pre-Event Setup Clean",
        description:
          "Full venue clean before guest arrival — floors, surfaces, bathrooms, and entry areas.",
      },
      {
        title: "During-Event Refresh",
        description:
          "Ongoing bathroom maintenance and public area tidying during large events.",
      },
      {
        title: "Post-Event Full Cleanup",
        description:
          "Complete venue restoration — rubbish removal, floor cleaning, and surface sanitisation.",
      },
      {
        title: "Linen and Décor Assistance",
        description:
          "Assisting with the setup or breakdown of table linen and basic décor as required.",
      },
      {
        title: "Waste Management",
        description:
          "Sorting, bagging, and removing all event waste to appropriate collection points.",
      },
      {
        title: "Same-Day Turnaround",
        description:
          "We work to your event schedule, including early mornings, late nights, and weekends.",
      },
    ],
    faqs: [
      {
        question: "How far in advance should I book event cleaning?",
        answer:
          "We recommend booking at least one week in advance for events. For large or complex functions, two weeks' notice ensures we can staff the job appropriately.",
      },
      {
        question: "Can you clean during the event as well as before and after?",
        answer:
          "Yes. For large events we can station a cleaning team on site throughout the function to maintain bathrooms and public areas.",
      },
      {
        question: "Do you handle outdoor event venues?",
        answer:
          "Yes, we clean outdoor and semi-outdoor venues. Our teams are equipped for all environments.",
      },
    ],
    relatedServices: ["hotel-cleaning", "commercial-cleaning", "house-cleaning"],
  },
  {
    slug: "carpet-cleaning",
    name: "Carpet Cleaning",
    shortName: "Carpet",
    schemaType: "CarpetCleaning",
    metaTitleTemplate:
      "Carpet Cleaning Services in {area.name} | Briany's Cleaning",
    metaDescriptionTemplate:
      "Professional carpet cleaning in {area.name}, Gauteng. Briany's Cleaning Services offers steam and dry carpet cleaning for homes and businesses in {area.name}. Removes stains, allergens, and odours. Get a free quote.",
    heroHeadlineTemplate: "Carpet Cleaning in {area.name}",
    heroSubTemplate:
      "Restore the life of your carpets with professional steam and dry cleaning. Serving homes and businesses across {area.name} with eco-friendly solutions and same-day drying.",
    introTemplate:
      "Gauteng's dust, high foot traffic, and dry Highveld climate are tough on carpets. Whether you own a home near {area.landmark0} or manage an office building in {area.businessHub0}, the carpets in your property are taking a daily beating — and surface vacuuming only goes so far. Briany's professional carpet cleaning service uses hot water extraction and dry-cleaning technology to remove deep-set stains, trapped allergens, and stubborn odours that ordinary cleaning cannot reach.",
    areaBodyTemplate:
      "We have cleaned carpets across {area.name} in every setting imaginable — the large-area carpets of corporate boardrooms, the high-traffic passages of apartment blocks, the bedroom suites of family homes, and the function rooms of event venues. Our equipment is professional-grade and our technicians are trained to assess each carpet type individually, using the right method and the right solution to restore your carpets without damaging the fibres.",
    features: [
      {
        title: "Hot Water Extraction",
        description:
          "Deep steam cleaning that penetrates carpet fibres to lift embedded dirt, allergens, and bacteria.",
      },
      {
        title: "Dry Carpet Cleaning",
        description:
          "Low-moisture cleaning for delicate carpets or areas where minimal drying time is required.",
      },
      {
        title: "Stain Treatment",
        description:
          "Targeted pre-treatment for wine, coffee, pet, and other stubborn stains.",
      },
      {
        title: "Odour Elimination",
        description:
          "Professional deodorising treatments that neutralise pet, smoke, and general odours.",
      },
      {
        title: "Allergen Reduction",
        description:
          "Deep extraction removes dust mites, pet dander, and other allergens from carpet pile.",
      },
      {
        title: "Commercial & Residential",
        description:
          "We clean carpets in all settings — homes, offices, hotels, schools, and function venues.",
      },
    ],
    faqs: [
      {
        question: "How long does carpet cleaning take to dry?",
        answer:
          "Hot water extraction carpets typically dry within 4–8 hours depending on the carpet type, room ventilation, and humidity. Dry cleaning methods can leave carpets ready to use within an hour.",
      },
      {
        question: "Can you remove old or set-in stains?",
        answer:
          "In most cases yes, though very old or chemically set stains may only be partially reduced. We assess stains before cleaning and provide honest feedback on expected outcomes.",
      },
      {
        question: "Is carpet cleaning safe for pets and children?",
        answer:
          "Yes. We use eco-friendly, non-toxic cleaning solutions that are safe for pets and children once dry.",
      },
      {
        question: "Do you clean area rugs and oriental rugs?",
        answer:
          "Yes. We clean area rugs and can advise on the appropriate method based on the rug's material and construction.",
      },
    ],
    relatedServices: ["house-cleaning", "office-cleaning", "regular-contracts"],
  },
  {
    slug: "regular-contracts",
    name: "Regular Cleaning Contracts",
    shortName: "Contracts",
    schemaType: "RecurringCleaning",
    metaTitleTemplate:
      "Regular Cleaning Contracts in {area.name} | Briany's Cleaning",
    metaDescriptionTemplate:
      "Flexible recurring cleaning contracts in {area.name}, Gauteng. Briany's Cleaning Services offers daily, weekly, and monthly cleaning contracts for homes and businesses in {area.name}. Consistent quality, no hassle.",
    heroHeadlineTemplate: "Regular Cleaning Contracts in {area.name}",
    heroSubTemplate:
      "Consistent, reliable cleaning on your schedule — no admin, no chasing. Regular cleaning contracts for homes and businesses across {area.name}.",
    introTemplate:
      "The best-kept homes and businesses in {area.name} share one thing in common: they have a cleaning routine that works. Rather than scrambling for a cleaner when things get out of hand, they have a regular, trusted arrangement with Briany's Cleaning Services — showing up on schedule, delivering consistent results, and adapting as their needs change. If your home is near {area.landmark0} or your business operates in {area.businessHub0}, a regular cleaning contract is the most efficient way to maintain the standard you need.",
    areaBodyTemplate:
      "{area.description} Our regular cleaning contracts are built for long-term relationships. We assign the same cleaning team to each client wherever possible, so your cleaner knows your space, your preferences, and your standards. Contracts are available weekly, fortnightly, or monthly — for both residential and commercial clients — with no long minimum terms and complete flexibility to adjust frequency as circumstances change.",
    features: [
      {
        title: "Weekly, Fortnightly or Monthly",
        description:
          "Choose the frequency that matches your space and your budget.",
      },
      {
        title: "Same Team Every Visit",
        description:
          "We assign a consistent team so they know your property and preferences.",
      },
      {
        title: "Flexible Contracts",
        description:
          "No long lock-in periods. Adjust your contract as your needs change.",
      },
      {
        title: "Priority Scheduling",
        description:
          "Contract clients receive priority booking for ad-hoc and additional cleans.",
      },
      {
        title: "Residential and Commercial",
        description: "Contracts available for homes, offices, and all business types.",
      },
      {
        title: "Annual Contract Discount",
        description:
          "Lock in a discounted rate by committing to an annual cleaning schedule.",
      },
    ],
    faqs: [
      {
        question: "Is there a minimum contract period?",
        answer:
          "We offer month-to-month contracts with no long minimum term, as well as annual contracts that come with a discounted rate.",
      },
      {
        question: "What happens if I need to skip a scheduled clean?",
        answer:
          "We ask for 24 hours' notice for cancellations where possible. We will reschedule your clean to the next available slot.",
      },
      {
        question: "Can a contract cover both my home and my business?",
        answer:
          "Absolutely. We offer multi-property contracts and can manage the scheduling for both your domestic and commercial cleaning needs.",
      },
    ],
    relatedServices: ["house-cleaning", "office-cleaning", "commercial-cleaning"],
  },
];

export function getService(slug: string): LocationService | undefined {
  return locationServices.find((s) => s.slug === slug);
}
