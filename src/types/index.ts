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

export interface LocalizedSpecialistFields {
  role?: string
  bio?: string
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
  translations?: { en?: LocalizedSpecialistFields; ua?: LocalizedSpecialistFields }
}

export interface SpecializationInfoSection {
  title: string
  content: string
}

export interface SpecializationServiceGroup {
  title: string
  items: string[]
}

export interface LocalizedSpecializationFields {
  name?: string
  menuLabel?: string
  description?: string
  conditionsLabel?: string
  conditions?: string[]
  examinationsLabel?: string
  examinations?: string[]
  serviceGroups?: SpecializationServiceGroup[]
  infoSections?: SpecializationInfoSection[]
}

export interface Specialization {
  id: number
  slug: string
  name: string
  menuLabel: string
  description: string
  hideFromMenu?: boolean
  conditions?: string[]
  conditionsLabel?: string
  examinations?: string[]
  examinationsLabel?: string
  serviceGroups?: SpecializationServiceGroup[]
  infoSections?: SpecializationInfoSection[]
  translations?: { en?: LocalizedSpecializationFields; ua?: LocalizedSpecializationFields }
}

export interface PricingItem {
  name: string
  price: string
}

export interface PricingSection {
  subtitle: string
  slug?: string
  items: PricingItem[]
}

export interface LocalizedPricingItem {
  name?: string
}

export interface LocalizedPricingSection {
  subtitle?: string
  items?: LocalizedPricingItem[]
}

export interface LocalizedPricingCategory {
  title?: string
  sections?: LocalizedPricingSection[]
}

export interface PricingCategory {
  id: number
  title: string
  items?: PricingItem[]
  sections?: PricingSection[]
  translations?: { en?: LocalizedPricingCategory; ua?: LocalizedPricingCategory }
}
