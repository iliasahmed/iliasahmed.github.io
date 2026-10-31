export const skills = [
  { category: 'Native Android', items: ['Kotlin', 'Jetpack Compose', 'Coroutines & Flow', 'MVVM / MVI', 'Clean Architecture'] },
  { category: 'iOS & cross-platform', items: ['Swift', 'SwiftUI & UIKit', 'Combine', 'Swift concurrency', 'Flutter', 'Kotlin Multiplatform'] },
  { category: 'Real-time & AI', items: ['WebSocket', 'Twilio', 'Dyte', 'Amazon Chime', 'AI speech integrations'] },
  { category: 'Delivery & quality', items: ['GitHub Actions', 'CircleCI', 'Fastlane', 'Firebase', 'Unit & UI testing'] },
] as const
// Additional owner-discussion context. Deliberately not rendered as verified production expertise.
export const backendReview = {
  reviewBeforePublishing: true,
  technologies: ['NestJS', 'MongoDB', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Vue.js'],
  note: 'Confirm public wording and depth of experience before adding individual backend technologies to the website.',
}
