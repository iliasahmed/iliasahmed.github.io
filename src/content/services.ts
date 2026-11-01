export const services = [
  { icon: 'mobile', title: 'Mobile app development', text: 'Build a new Android or iOS app, or extend an existing one. Implement core journeys, connect APIs, and support testing and release.', detail: 'Native Android · iOS · Flutter · Kotlin Multiplatform' },
  { icon: 'web', title: 'Full-stack web applications', text: 'Build product interfaces and application logic that connect the customer experience to the data and workflows behind it.', detail: 'Web interfaces · Application logic · Data connections' },
  { icon: 'api', title: 'Backend APIs & integrations', text: 'Connect a product to business systems, payments, real-time communication, or AI services through APIs.', detail: 'REST APIs · System integrations · Real-time features' },
  { icon: 'architecture', title: 'Software architecture & modernization', text: 'Make an existing product easier to evolve: assess the codebase, identify practical improvements, and modernize its structure and delivery practices.', detail: 'Codebase reviews · Modernization · Maintainability' },
] as const
export const process = [
  ['Understand', 'Start with your users, business goals, and the problem worth solving.'],
  ['Plan', 'Map the core journeys, technical approach, and a practical delivery scope.'],
  ['Build', 'Develop in clear increments, with regular communication and feedback.'],
  ['Test & release', 'Check the real workflows, refine the details, and prepare for production.'],
  ['Improve', 'Use production feedback to guide fixes, maintenance, and the next features.'],
] as const
