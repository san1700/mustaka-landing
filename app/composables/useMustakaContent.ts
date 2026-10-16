// app/composables/useMustakaContent.ts
// Composable tunggal yang mengekspos semua data landing page dan helper functions.

import {
  siteConfig,
  heroVariants,
  segments,
  painPoints,
  transformations,
  useCases,
  pricingTiers,
  faqs,
  type HeroVariant,
  type PainPoint,
  type Transformation,
  type UseCase,
  type PricingTier,
  type FaqItem,
  type Segment,
} from '~/data/mustaka'
import { features, type Feature } from '~/data/features'

// ─── Lead Form Types ──────────────────────────────────────────────────────────

export interface LeadFormData {
  name: string
  role: string
  school: string
  studentRange: string
  phone: string
}

export type StudentRangeOption = {
  value: string
  label: string
}

export const studentRangeOptions: StudentRangeOption[] = [
  { value: 'under-200', label: '< 200 siswa' },
  { value: '200-500', label: '200 – 500 siswa' },
  { value: '500-1000', label: '500 – 1.000 siswa' },
  { value: 'over-1000', label: '> 1.000 siswa' },
]

// ─── WhatsApp URL Builder ─────────────────────────────────────────────────────

export function buildMustakaWhatsAppUrl(form: LeadFormData): string {
  const rangeLabel =
    studentRangeOptions.find((o) => o.value === form.studentRange)?.label ?? form.studentRange

  const text = [
    'Halo Tim Mustaka, saya tertarik untuk melihat demo dan penawaran aplikasi.',
    '',
    `Nama: ${form.name} (${form.role})`,
    `Sekolah: ${form.school}`,
    `Estimasi Siswa: ${rangeLabel}`,
    `No. HP: ${form.phone}`,
    '',
    'Kapan waktu yang tepat untuk jadwal presentasi demo singkat via Zoom/Google Meet?',
  ].join('\n')

  const encoded = encodeURIComponent(text)
  return `https://wa.me/${siteConfig.salesWhatsapp}?text=${encoded}`
}

// ─── Composable ───────────────────────────────────────────────────────────────

export function useMustakaContent() {
  // Pick the first hero variant as default (can be swapped for A/B testing)
  const currentHero = computed<HeroVariant>(() => heroVariants[0]!)

  return {
    // Site meta
    siteConfig,

    // Section data
    currentHero,
    heroVariants,
    segments: segments as Segment[],
    painPoints: painPoints as PainPoint[],
    transformations: transformations as Transformation[],
    features: features as Feature[],
    useCases: useCases as UseCase[],
    pricingTiers: pricingTiers as PricingTier[],
    faqs: faqs as FaqItem[],

    // Lead form helpers
    studentRangeOptions,
    buildMustakaWhatsAppUrl,
  }
}
