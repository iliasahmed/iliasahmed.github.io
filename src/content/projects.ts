export type Project = {
  slug: string; name: string; title: string; category: string; summary: string;
  role: string; employer: string; period: string; tags: string[]; challenge: string;
  contributions: { title: string; text: string }[]; approach: string; outcome: string;
  visual: 'communication' | 'commerce' | 'fleet' | 'location';
}
export const projects: Project[] = [
  {
    slug: 'globo', name: 'GLOBO', title: 'Connecting people. Across languages.',
    category: 'Real-time language services', visual: 'communication',
    summary: 'Mobile experiences for on-demand interpretation, live communication, and AI-assisted speech.',
    role: 'Mobile Tech Lead', employer: 'GLOBO Language Solutions LLC', period: 'Mar 2022 – Aug 2025',
    tags: ['Android & iOS', 'Jetpack Compose', 'Real-time audio/video', 'AI speech'],
    challenge: 'On-demand interpretation brings people together through live audio and video. The mobile experience needs to bring communication SDKs, notifications, and speech features into a coherent, dependable workflow.',
    contributions: [
      { title: 'End-to-end mobile delivery', text: 'Owned Android and iOS feature delivery from design and implementation through testing, production release, monitoring, and support.' },
      { title: 'Real-time communication', text: 'Built or integrated audio/video workflows with Twilio, Amazon Chime, Dyte, WebSocket, and push notifications.' },
      { title: 'Architecture & modernization', text: 'Migrated Android flows from Java and XML to Kotlin and Jetpack Compose, and led a team of three developers.' },
      { title: 'AI-assisted speech', text: 'Integrated speech translation, speech-to-text, and text-to-speech into mobile communication workflows.' },
    ],
    approach: 'Communication SDKs each bring their own lifecycle and integration concerns. My work connected these capabilities to the mobile application, while using Crashlytics, New Relic, and debugging tools to support production quality.',
    outcome: 'Delivered and supported mobile communication features, modernized Android flows, and guided a small engineering team through ongoing product development.',
  },
  {
    slug: 'evaly', name: 'Evaly', title: 'From discovery to doorstep.',
    category: 'E-commerce & delivery', visual: 'commerce',
    summary: 'Customer-facing shopping and delivery journeys, from product discovery to payments and order tracking.',
    role: 'Lead Software Engineer', employer: 'Evaly.com.bd Ltd', period: 'Jul 2019 – Feb 2022',
    tags: ['Android & iOS', 'Commerce', 'Payments', 'Team leadership'],
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
    summary: 'Android and iOS/Flutter application work for trips, vehicles, reservations, and day-to-day fleet operations.',
    role: 'Lead Mobile Developer', employer: 'Jatri Services Ltd', period: 'Nov 2025 – Present',
    tags: ['Android', 'Flutter', 'API integration', 'Operational workflows'],
    challenge: 'Fleet operations involve connected business processes, from reservations and pricing to trips, approvals, and invoicing. Mobile applications need to represent these states clearly and validate changes against backend rules.',
    contributions: [
      { title: 'Cross-platform delivery', text: 'Lead development and maintenance of Android and iOS/Flutter mobile applications for a Saudi fleet-management platform, remotely through Jatri Services.' },
      { title: 'Operational features', text: 'Work on orders, trips, vehicles, reservations, pricing, approvals, invoicing, and operational statuses.' },
      { title: 'API coordination', text: 'Collaborate with product and backend stakeholders on API behaviour, input validation, and edge cases.' },
      { title: 'Production reliability', text: 'Support debugging, maintenance, and releases across mobile workflows.' },
    ],
    approach: 'A useful operational app needs more than a set of forms. My focus is how information and statuses move between workflows, with clear validation and close coordination between mobile, backend, and product teams.',
    outcome: 'Ongoing development and maintenance of mobile tools for fleet operations, with attention to workflow correctness and release support.',
  },
  {
    slug: 'carbangla', name: 'CarBangla', title: 'Keeping every trip connected.',
    category: 'Ride-hailing & location services', visual: 'location',
    summary: 'Location-aware mobile features for ride booking, live tracking, fares, and in-app communication.',
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
]
