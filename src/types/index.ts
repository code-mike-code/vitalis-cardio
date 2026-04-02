export interface NavLink {
  label: string
  href: string
}

export interface Feature {
  id: number
  icon: string
  title: string
  description: string
}

export interface Service {
  id: number
  title: string
  description: string
  icon: string
  image?: string
}

export interface TeamMember {
  id: number
  name: string
  role: string
  specialization: string
  photo: string
  bio: string
}

export interface ContactInfo {
  address: string
  phone: string
  email: string
  hours: string
}

export interface Stat {
  value: string
  label: string
}

export interface Specialist {
  id: number
  slug: string
  titlePrefix: string
  name: string
  role: string
  specializationSlug: string
  photo: string
  bio: string
  isFounder?: boolean
}

export interface Specialization {
  id: number
  slug: string
  name: string
  menuLabel: string
  description: string
}

export interface PricingItem {
  name: string
  price: string
}

export interface PricingCategory {
  id: number
  title: string
  items: PricingItem[]
}
