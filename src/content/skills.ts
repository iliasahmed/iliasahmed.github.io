export const skills = [
  {
    category: 'Android development',
    description: 'Native applications, modern interfaces, and background work.',
    items: ['Kotlin & Java', 'Android SDK & XML', 'Jetpack Compose', 'Coroutines & Flow', 'ViewModel & LiveData', 'Navigation & Paging', 'WorkManager & push notifications'],
  },
  {
    category: 'Architecture & data',
    description: 'Maintainable mobile codebases and reliable access to data.',
    items: ['Clean Architecture', 'MVVM & MVI', 'Modular app design', 'Repository & use case patterns', 'Offline-first architecture', 'Room & DataStore', 'REST API integration'],
  },
  {
    category: 'iOS development',
    description: 'Native iOS interfaces and asynchronous application logic.',
    items: ['Swift & Objective-C', 'SwiftUI, UIKit & Storyboard', 'Swift concurrency & async/await', 'Combine & Actors', 'CoreBluetooth', 'Protocol-oriented programming', 'The Composable Architecture'],
  },
  {
    category: 'Cross-platform',
    description: 'Shared and cross-platform applications for Android and iOS.',
    items: ['Flutter & Dart', 'Kotlin Multiplatform', 'Provider & Riverpod', 'Redux, Recoil & MobX'],
  },
  {
    category: 'Real-time communication',
    description: 'Connected mobile experiences for live communication and location.',
    items: ['WebSocket', 'Twilio, Amazon Chime & Dyte', 'Audio & video calling', 'Real-time media streaming', 'In-app communication', 'GPS, maps & live location'],
  },
  {
    category: 'AI & mobile intelligence',
    description: 'AI-assisted features and integrations for mobile workflows.',
    items: ['OpenAI API & AI assistants', 'AI agents, MCP servers & tool calling', 'Speech translation, speech-to-text & text-to-speech', 'AI chat interfaces & chatbots', 'RAG & prompt engineering', 'TensorFlow Lite & mobile AI prototyping', 'Intelligent automation'],
  },
  {
    category: 'Testing & quality',
    description: 'Testing and investigation throughout development and release.',
    items: ['JUnit, MockK & Turbine', 'Espresso & Compose UI testing', 'Unit, UI & integration testing', 'Test automation & code review', 'Android Profiler & ANR investigation', 'Crashlytics, New Relic & Sentry', 'Memory leak & performance investigation'],
  },
  {
    category: 'Delivery & product',
    description: 'Release workflows, monitoring, and feedback after launch.',
    items: ['Git, GitHub & GitHub Actions', 'Gradle, CircleCI & Fastlane', 'Google Play Console & TestFlight', 'Firebase & Firebase Analytics', 'Release validation & production support', 'Product metrics & user feedback'],
  },
  {
    category: 'Technical leadership',
    description: 'Guiding mobile delivery with product and engineering teams.',
    items: ['Mobile technical leadership', 'Architecture & code reviews', 'Mentoring & delivery planning', 'Cross-functional collaboration', 'Remote team collaboration', 'Release ownership'],
  },
] as const
// Additional owner-discussion context. Deliberately not rendered as verified production expertise.
export const backendReview = {
  reviewBeforePublishing: true,
  technologies: ['NestJS', 'MongoDB', 'PostgreSQL', 'Prisma', 'Redis', 'Docker', 'Vue.js'],
  note: 'Confirm public wording and depth of experience before adding individual backend technologies to the website.',
}
