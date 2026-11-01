export type Project = {
  slug: string; name: string; title: string; category: string; summary: string;
  contributionSummary: string;
  role?: string; employer?: string; period?: string; meta?: { label: string; value: string }[]; attribution?: string;
  tags: string[]; challenge: string;
  contributions: { title: string; text: string }[]; approach: string; outcome: string;
  visual: 'communication' | 'commerce' | 'fleet' | 'location' | 'finance';
  mobileAppsTitle?: string; mobileAppsIntro?: string;
  mobileApps?: { name: string; platform: string; art: 'language' | 'marketplace' | 'food' | 'fleet' | 'finance'; linkLabel?: string; linkUrl?: string; summary: string; screenshot?: string; screenshotAlt?: string; screenshotCaption?: string }[];
}
export const projects: Project[] = [
  {
    slug: 'globo', name: 'GLOBO', title: 'Connecting people. Across languages.',
    category: 'Real-time language services', visual: 'communication',
    summary: 'Mobile apps for video calls, group video calls, audio calls, and real-time AI translation.',
    contributionSummary: 'Contributed to GLOBO’s iOS and Android apps, including live calls and real-time AI translation.',
    role: 'Mobile Tech Lead', employer: 'GLOBO Language Solutions LLC', period: 'Mar 2022 – Aug 2025',
    tags: ['Video calls', 'Group video calls', 'Audio calls', 'Real-time AI translation'],
    mobileAppsTitle: 'GLOBO mobile apps',
    mobileAppsIntro: 'I built GLOBO’s mobile apps as Mobile Tech Lead, working with a three-person team. The point-of-access app evolved from GLOBO HQ into GLOBO Connect. GLOBO GO is a Flutter app for managing interpreters.',
    mobileApps: [
      {
        name: 'GLOBO Connect', platform: 'iOS', art: 'language', linkLabel: 'View on the App Store',
        linkUrl: 'https://apps.apple.com/us/app/globo-connect/id1444091064',
        summary: 'GLOBO Connect for iPhone and iPad, for on-demand and scheduled voice or video interpreting.',
      },
      {
        name: 'GLOBO Connect', platform: 'Android', art: 'language', linkLabel: 'View on Google Play',
        linkUrl: 'https://play.google.com/store/apps/details?id=com.globolanguage',
        summary: 'GLOBO Connect for Android phones and tablets, bringing voice and video interpreting into mobile workflows.',
      },
      {
        name: 'GLOBO GO', platform: 'Linguist app', art: 'language', linkLabel: 'See GLOBO release notes',
        linkUrl: 'https://www.helloglobo.com/release-notes',
        summary: 'A Flutter app for managing interpreters, described in GLOBO’s public product notes.',
      },
    ],
    challenge: 'On-demand interpretation brings people together through live audio and video. The mobile experience needs to bring communication SDKs, notifications, and speech features into a coherent, dependable workflow.',
    contributions: [
      { title: 'iOS & Android app delivery', text: 'Built and delivered GLOBO mobile applications across iOS and Android, taking features from design and implementation through testing, production release, monitoring, and support as Mobile Tech Lead.' },
      { title: 'Live calls', text: 'Built and integrated one-to-one video calls, group video calls, and audio calls for GLOBO’s interpreting workflows, using Twilio, Amazon Chime, Dyte, WebSocket, and push notifications.' },
      { title: 'Architecture & modernization', text: 'Migrated Android flows from Java and XML to Kotlin and Jetpack Compose, and led a team of three developers.' },
      { title: 'Real-time AI translation', text: 'Integrated real-time AI translation alongside speech-to-text and text-to-speech in mobile communication workflows.' },
    ],
    approach: 'Communication SDKs each bring their own lifecycle and integration concerns. My work connected these capabilities to the mobile application, while using Crashlytics, New Relic, and debugging tools to support production quality.',
    outcome: 'Delivered and supported live audio and video calling, real-time AI translation, and modernized Android experiences while guiding a three-person team.',
  },
  {
    slug: 'evaly', name: 'Evaly', title: 'From discovery to doorstep.',
    category: 'E-commerce & delivery', visual: 'commerce',
    summary: 'Customer-facing shopping and delivery journeys, from product discovery to payments and order tracking.',
    contributionSummary: 'Led seven mobile developers across shopping, payments, ordering, and delivery tracking.',
    role: 'Lead Software Engineer', employer: 'Evaly.com.bd Ltd', period: 'Jul 2019 – Feb 2022',
    tags: ['Android & iOS', 'Commerce', 'Payments', 'Team leadership'],
    mobileAppsTitle: 'Evaly & eFood mobile apps',
    mobileAppsIntro: 'I built the Evaly and eFood apps across Android and iOS as Lead Software Engineer, while leading a seven-person mobile team. Archived screens preserve a view of apps that are no longer listed in their stores.',
    mobileApps: [
      {
        name: 'Evaly', platform: 'Android', art: 'marketplace', linkLabel: 'View Google Play listing',
        linkUrl: 'https://play.google.com/store/apps/details?id=bd.com.evaly.evalyshop',
        summary: 'Marketplace shopping journeys across discovery, cart, checkout, payments, wallet, and order tracking.',
      },
      {
        name: 'Evaly', platform: 'iOS', art: 'marketplace',
        screenshot: '/evaly-ios-archive.png',
        screenshotAlt: 'Archived Evaly iPhone screen showing product discovery and shopping categories.',
        screenshotCaption: 'Archived iPhone screenshot',
        summary: 'The iPhone and iPad marketplace app for browsing products and managing customer orders.',
      },
      {
        name: 'eFood', platform: 'Android & iOS', art: 'food',
        screenshot: '/efood-archive.png',
        screenshotAlt: 'Archived eFood Android screen showing food search and menu items.',
        screenshotCaption: 'Archived Android screenshot',
        summary: 'Android and iOS food-ordering apps for restaurant discovery, payments, promotions, and delivery tracking.',
      },
    ],
    challenge: 'Commerce applications connect many dependent steps: finding a product, managing a cart, paying, placing an order, and following delivery. Each step needs to work with complex backend APIs and a consistent customer journey.',
    contributions: [
      { title: 'Mobile engineering leadership', text: 'Led a team of seven mobile developers across Android and iOS.' },
      { title: 'Shopping journeys', text: 'Developed e-commerce, classifieds, and food-delivery applications, including product discovery, cart, and checkout flows.' },
      { title: 'Payments & fulfilment', text: 'Worked on payments, wallets, order placement, and delivery tracking.' },
      { title: 'Integration & delivery', text: 'Contributed API integration, testing, and release support for customer-facing mobile experiences.' },
    ],
    approach: 'The engineering focus was the complete customer journey: connecting mobile screens to backend operations and handling the transitions between shopping, payment, ordering, and tracking.',
    outcome: 'Contributed to consumer commerce and delivery applications while leading mobile engineering across two platforms. This describes historical employment work, not the current availability of these services.',
  },
  {
    slug: 'fms', name: 'FMS', title: 'Complex operations. Clear workflows.',
    category: 'Fleet management', visual: 'fleet',
    summary: 'Primarily backend and frontend development for fleet operations, with mobile engineering as a secondary responsibility.',
    contributionSummary: 'Primary backend and frontend work, alongside secondary mobile development for fleet operations.',
    role: 'Lead Software Engineer', employer: 'Jatri Services Ltd', period: 'Nov 2025 – Present',
    tags: ['Backend development', 'Frontend development', 'Mobile apps', 'Flutter'],
    mobileAppsTitle: 'eJourney Driver app',
    mobileAppsIntro: 'eJourney Driver is a Flutter app for drivers, listed on Google Play for Android. It supports directions, communication with operations support, and driving guidance.',
    mobileApps: [
      {
        name: 'eJourney Driver', platform: 'Android', art: 'fleet',
        linkLabel: 'View on Google Play',
        linkUrl: 'https://play.google.com/store/apps/details?id=ai.ejourney.driver&hl=en',
        summary: 'A Flutter driver app for directions, operations support, and driving guidance.',
      },
    ],
    challenge: 'Fleet operations involve connected business processes, from reservations and pricing to trips, approvals, and invoicing. Mobile applications need to represent these states clearly and validate changes against backend rules.',
    contributions: [
      { title: 'Backend & frontend development', text: 'My primary work is building and maintaining backend services and frontend workflows for orders, trips, vehicles, reservations, pricing, approvals, and invoicing.' },
      { title: 'Secondary mobile responsibility', text: 'Alongside that work, lead Android and iOS/Flutter development and maintenance for the Saudi fleet-management platform through Jatri Services.' },
      { title: 'Operational features', text: 'Work on orders, trips, vehicles, reservations, pricing, approvals, invoicing, and operational statuses.' },
      { title: 'APIs & validation', text: 'Connect operational workflows across APIs and interfaces, accounting for input validation, status changes, and edge cases.' },
      { title: 'Production reliability', text: 'Support debugging, maintenance, and releases across mobile workflows.' },
    ],
    approach: 'I focus first on the backend and frontend workflows that support fleet operations, while also contributing to the mobile apps that drivers and teams use in the field.',
    outcome: 'Ongoing backend and frontend contribution, with mobile development as a secondary part of the work across fleet workflows.',
  },
  {
    slug: 'carbangla', name: 'CarBangla', title: 'Keeping every trip connected.',
    category: 'Ride-hailing & location services', visual: 'location',
    summary: 'Location-aware mobile features for ride booking, live tracking, fares, and in-app communication.',
    contributionSummary: 'Built Android and iOS features for booking, GPS tracking, payments, and trip management.',
    role: 'Software Engineer / Senior Software Engineer', employer: 'Carbangla Ltd', period: 'Dec 2017 – Jun 2019',
    tags: ['Android & iOS', 'GPS & maps', 'Live tracking', 'Ride booking'],
    challenge: 'Ride-booking applications coordinate location, routing, fares, and trip status. The experience must keep people informed as a trip moves from booking through completion, including when location work continues in the background.',
    contributions: [
      { title: 'Booking & trip management', text: 'Built and maintained Android and iOS features for ride booking, fares, and trip management.' },
      { title: 'Location systems', text: 'Worked with GPS, maps, routing, background services, and real-time location updates.' },
      { title: 'Connected journeys', text: 'Integrated APIs and in-app communication into the ride experience.' },
      { title: 'Payments & wallets', text: 'Contributed payment and wallet flows supporting mobile trip workflows.' },
    ],
    approach: 'Location-aware applications need to coordinate background work with what the user sees. My work brought maps, routing, real-time updates, and API integrations into the booking and trip experience.',
    outcome: 'Built and maintained mobile capabilities spanning ride discovery, booking, tracking, communication, and payment.',
  },
  {
    slug: 'qcoom', name: 'QCoom', title: 'A connected customer shopping experience.',
    category: 'E-commerce & mobile shopping', visual: 'commerce',
    summary: 'A customer shopping app spanning product discovery, purchases, and delivery updates.',
    contributionSummary: 'Mobile app contribution across QCoom’s Android and iOS customer shopping experience.',
    meta: [
      { label: 'Product', value: 'QCoom customer shopping app' },
      { label: 'Platforms', value: 'Android & iOS' },
    ],
    attribution: 'This portfolio entry describes my mobile app contribution to QCoom. Product context is based on the public store listing; it does not imply endorsement by Qcoom Limited.',
    tags: ['Android & iOS', 'E-commerce', 'Product discovery', 'Delivery tracking'],
    mobileAppsTitle: 'QCoom customer apps',
    mobileAppsIntro: 'Android is linked to the live Google Play listing. The iOS card uses an archived App Store screen.',
    mobileApps: [
      {
        name: 'QCoom', platform: 'Android', art: 'marketplace',
        linkLabel: 'View on Google Play',
        linkUrl: 'https://play.google.com/store/apps/details?id=com.qcoom.qcustomer',
        summary: 'Customer shopping app for product discovery, purchases, and delivery tracking.',
      },
      {
        name: 'QCoom', platform: 'iOS', art: 'marketplace',
        screenshot: '/qcoom-ios-archive.webp',
        screenshotAlt: 'Archived QCoom iPhone screen showing the e-commerce storefront and product categories.',
        screenshotCaption: 'Archived App Store screenshot',
        summary: 'Archived iPhone app screen showing the e-commerce storefront and product categories.',
      },
    ],
    challenge: 'A broad shopping catalog needs to make product discovery, purchasing, and delivery updates understandable across mobile devices.',
    contributions: [
      { title: 'Customer mobile apps', text: 'Worked on QCoom’s customer shopping experience across the Android app and iOS app.' },
      { title: 'Shopping journeys', text: 'The public listing describes product browsing and search, purchases, and real-time delivery tracking and notifications.' },
    ],
    approach: 'Focused on the customer-facing mobile journey from finding products through placing an order and following delivery updates. No unverified implementation stack or performance figures are claimed here.',
    outcome: 'The QCoom customer app brings product browsing, purchasing, and delivery updates together across Android and iOS.',
  },
  {
    slug: 'moneybase', name: 'Moneybase', title: 'Clear journeys for adding money.',
    category: 'Digital finance', visual: 'finance',
    summary: 'A finance app for payments, banking, card management, and investing.',
    contributionSummary: 'Contributed to Moneybase add-money features during a four-month period.',
    meta: [
      { label: 'Product', value: 'Moneybase mobile app' },
      { label: 'Duration', value: '4 months' },
    ],
    attribution: 'My four-month contribution focused on add-money features. This case study does not imply endorsement by Moneybase Ltd.',
    tags: ['Mobile apps', 'Fintech', 'Payments', 'Add money'],
    mobileAppsTitle: 'Moneybase app',
    mobileAppsIntro: 'The public Android listing describes Moneybase’s wider digital finance app. My contribution was to add-money features.',
    mobileApps: [
      {
        name: 'Moneybase', platform: 'Android', art: 'finance',
        linkLabel: 'View on Google Play',
        linkUrl: 'https://play.google.com/store/apps/details?id=com.moneybase&hl=en',
        summary: 'Digital finance app for payments, banking, cards, and investments.',
      },
    ],
    challenge: 'Digital finance apps need clear, dependable journeys for actions that move money into an account.',
    contributions: [
      { title: 'Add-money features', text: 'Worked on add-money features in the Moneybase mobile app during a four-month period.' },
    ],
    approach: 'Within an app that brings together payments, banking, cards, and investing, my work focused on its add-money features.',
    outcome: 'Contributed to add-money functionality within Moneybase’s wider mobile finance experience.',
  },
]
