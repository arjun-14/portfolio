export interface Project {
  title: string
  description: string
  tags: string[]
  githubUrl?: string
  liveUrl?: string
  period: string
  featured?: boolean
  img?: string
  height?: number
}

export interface ExperienceItem {
  company: string
  role: string
  period: string
  location: string
  type: 'work' | 'education'
  bullets: string[]
  skills?: string[]
  subRoles?: {
    client: string
    bullets: string[]
  }[]
}

export interface MediaItem {
  title: string
  creator: string
  category: 'playing' | 'reading' | 'watching' | 'listening'
  platform: string
  platformUrl: string
}
