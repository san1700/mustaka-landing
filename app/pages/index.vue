<script setup lang="ts">
/**
 * index.vue — Landing page utama Mustaka EduOS.
 *
 * Mengikuti urutan visual persis dari desain Figma & mustaka_lp.md:
 * 1. Header - Sticky Navbar (`#fitur`, `#solusi`, `#transformasi`, `#harga`, `#faq`)
 * 2. Hero Section (Headline + portal.mustaka.id Profil Siswa 360° + 3 floating pills)
 * 3. Section - Trust Strip (Bar logo institusi pendidikan)
 * 4. Core Features Section (Grid 4 kartu fitur soft mint dengan panah bulat)
 * 5. Section - Mid-Page Forest Green ("Masih Bergantung pada File Excel yang Tercecer?")
 * 6. Institution Pillars Section (Kontainer gelap 3 kolom K-12, Pesantren, Yayasan)
 * 7. Transformasi & FAQ Section (Sebelum vs Sesudah Mustaka & Accordion FAQ)
 * 8. Pricing Section (3 kartu harga: Starter, Pro highlight gelap, Enterprise)
 * 9. Section - Pre-Footer Mint CTA & Main Footer
 * 10. Dialog - Demo Scheduling Modal Overlay (Fast WhatsApp Lead Flow)
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
    <!-- 1. Header: Sticky Navbar -->
    <LandingTheNavbar @open-lead-modal="openLeadModal" />

    <main id="main-content">
      <!-- 2. Hero Section -->
      <LandingHeroSection @open-lead-modal="openLeadModal" />

      <!-- 3. Section: Trust Strip (Bar logo institusi) -->
      <LandingTrustStrip />

      <!-- 4. Core Features Section (Grid 4 kartu mint + panah bulat) -->
      <LandingFeatureShowcase />

      <!-- 5. Section: Mid-Page Forest Green Banner -->
      <LandingProblemSection />

      <!-- 6. Institution Pillars Section (Kontainer gelap 3 kolom) -->
      <LandingUseCaseSection @open-lead-modal="openLeadModal" />

      <!-- 7. Transformasi & FAQ Section -->
      <LandingTransformationSection />
      <LandingFaqSection />

      <!-- 8. Pricing Section (3 kartu harga, Pro highlight gelap) -->
      <LandingPricingSection @open-lead-modal="openLeadModal" />

      <!-- 9. Section: Pre-Footer Mint CTA -->
      <LandingCtaBanner @open-lead-modal="openLeadModal" />
    </main>

    <!-- Main Footer -->
    <LandingTheFooter />

    <!-- Dialog: Demo Scheduling Modal Overlay -->
    <LandingLeadModal v-model="isLeadModalOpen" />
  </div>
</template>
