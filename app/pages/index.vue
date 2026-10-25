<script setup lang="ts">
/**
 * index.vue — Landing page utama Mustaka EduOS.
 *
 * Alur Halaman Ramping (6 Section Utama yang Padat Bobot & Bernapas):
 * 1. Hero Section & Trust Strip
 * 2. Komparasi Masalah & Transformasi Nyata (Cara Lama vs Dengan Mustaka)
 * 3. Core Features (4 Modul Utama dengan Tab Visualisasi Interaktif)
 * 4. Pilar Institusi (Sekolah K-12, Pesantren & Boarding, Yayasan Multi-Sekolah)
 * 5. Paket Harga Transparan (3 Tier: Starter, Pro, Yayasan)
 * 6. FAQ Keamanan Data (Row-Level Security) & Final CTA WhatsApp Sales
 *
 * Plus:
 * - Header Sticky Navbar & Main Footer
 * - Dialog Demo Scheduling Modal Overlay (Fast WhatsApp Lead Flow)
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
  <div class="min-h-screen bg-[#FAFAFA] text-[#11181C] font-sans antialiased selection:bg-[#EFF7EC] selection:text-[#2D7A14]">
    <!-- Header: Sticky Navbar -->
    <LandingTheNavbar @open-lead-modal="openLeadModal" />

    <main id="main-content">
      <!-- 1. Hero Section & Social Proof Trust Strip -->
      <LandingHeroSection @open-lead-modal="openLeadModal" />
      <LandingTrustStrip />

      <!-- 2. Komparasi Masalah & Transformasi Nyata (Cara Lama vs Dengan Mustaka) -->
      <LandingTransformationSection />

      <!-- 3. Core Features (4 Modul Utama dengan Tab Visualisasi Interaktif) -->
      <LandingFeatureShowcase />

      <!-- 4. Pilar Institusi (Sekolah Formal K-12, Pesantren, Yayasan) -->
      <LandingUseCaseSection @open-lead-modal="openLeadModal" />

      <!-- 5. Paket Harga Transparan (3 Tier: Starter, Pro, Yayasan) -->
      <LandingPricingSection @open-lead-modal="openLeadModal" />

      <!-- 6. FAQ Keamanan Data & Final CTA WhatsApp Sales -->
      <LandingFaqSection />
      <LandingCtaBanner @open-lead-modal="openLeadModal" />
    </main>

    <!-- Main Footer -->
    <LandingTheFooter />

    <!-- Dialog: Demo Scheduling Modal Overlay -->
    <LandingLeadModal v-model="isLeadModalOpen" />
  </div>
</template>
