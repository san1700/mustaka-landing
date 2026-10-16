<script setup lang="ts">
/**
 * index.vue — Landing page utama Mustaka EduOS.
 *
 * Mengorkestrasi 11 bagian landing page sesuai Blueprint Mustaka:
 * 1.  TheNavbar               (Sticky navigation & portal link)
 * 2.  HeroSection             (Headline, sub-copy, dual CTA & executive dashboard preview)
 * 3.  TrustStrip              (Pilar 3 segmen institusi pendidikan)
 * 4.  ProblemSection          (5 masalah nyata sekolah vs solusi Mustaka)
 * 5.  TransformationSection   (Tabel visual Sebelum vs Sesudah)
 * 6.  FeatureShowcase         (Kesiswaan 360, Rombel/Halaqah, Guru, & Multi-tenant)
 * 7.  UseCaseSection          (Solusi K-12 vs Pesantren)
 * 8.  PricingSection          (Paket Starter, Pro, Enterprise transparan)
 * 9.  FaqSection              (Accordion keraguan migrasi, RLS & cloud)
 * 10. CtaBanner               (Modernisasi Sekolah & Yayasan Sekarang)
 * 11. TheFooter               (Navigasi, legalitas & kontak sales)
 *
 * Plus:
 * - LeadModal (Modal penangkap lead cepat via WhatsApp)
 */

const { siteConfig, currentHero } = useMustakaContent()

// State modal penangkap lead
const isLeadModalOpen = ref(false)

function openLeadModal() {
  isLeadModalOpen.value = true
}

// SEO & Meta Tags Editorial B2B
useSeoMeta({
  title: `${siteConfig.productName} — ${siteConfig.tagline}`,
  ogTitle: `${siteConfig.productName} — ${siteConfig.tagline}`,
  description: currentHero.value.subCopy,
  ogDescription: currentHero.value.subCopy,
  ogType: 'website',
  ogSiteName: siteConfig.productName,
  ogImage: '/logo.png',
  twitterCard: 'summary_large_image',
  twitterImage: '/logo.png',
})
</script>

<template>
  <div class="min-h-screen bg-stone-50 text-stone-900 font-sans antialiased selection:bg-emerald-100 selection:text-emerald-900">
    <!-- Bagian 1: Sticky Navbar -->
    <LandingTheNavbar @open-lead-modal="openLeadModal" />

    <main id="main-content">
      <!-- Bagian 2: Hero Section -->
      <LandingHeroSection @open-lead-modal="openLeadModal" />

      <!-- Bagian 3: Trust Strip / Pilar 3 Segmen Institusi -->
      <LandingTrustStrip />

      <!-- Bagian 4: Problem Section -->
      <LandingProblemSection />

      <!-- Bagian 5: Transformation Section -->
      <LandingTransformationSection />

      <!-- Bagian 6: Feature Showcase -->
      <LandingFeatureShowcase />

      <!-- Bagian 7: Solution Use Case Section -->
      <LandingUseCaseSection @open-lead-modal="openLeadModal" />

      <!-- Bagian 8: Pricing & Transparency Section -->
      <LandingPricingSection @open-lead-modal="openLeadModal" />

      <!-- Bagian 9: FAQ Section -->
      <LandingFaqSection />

      <!-- Bagian 10: Final CTA Banner -->
      <LandingCtaBanner @open-lead-modal="openLeadModal" />
    </main>

    <!-- Bagian 11: Footer Lengkap -->
    <LandingTheFooter />

    <!-- Modal Fast Lead Capture ke WhatsApp -->
    <LandingLeadModal v-model="isLeadModalOpen" />
  </div>
</template>
