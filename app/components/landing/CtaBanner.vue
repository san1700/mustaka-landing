<script setup lang="ts">
/**
 * CtaBanner — Pre-Footer Mint CTA Section.
 * Soft Mint Green (#EFF7EC) dengan border halus dan ajakan bertindak WhatsApp Sales yang terarah.
 */

defineEmits<{
  'open-lead-modal': []
}>()

const { siteConfig } = useMustakaContent()
</script>

<template>
  <section
    class="py-24 lg:py-32 bg-white"
    aria-label="Ajakan Bertindak Terakhir"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Mint Container Box (Lapang & Mewah) -->
      <div class="relative rounded-3xl bg-[#EFF7EC] border border-[#C4E3B9] p-10 sm:p-16 lg:p-20 text-center overflow-hidden shadow-sm">
        <!-- Subtle radial glow decoration -->
        <div
          class="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#5EC234]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          class="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#5EC234]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div class="relative max-w-3xl mx-auto">
          <!-- Mint Badge -->
          <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-[#C4E3B9] text-xs font-bold text-[#2D7A14] mb-6 shadow-2xs">
            <UIcon name="lucide:sparkles" class="w-4 h-4 text-[#5EC234]" />
            <span>Siap Melangkah Menuju Digitalisasi Nyata?</span>
          </div>

          <!-- Headline -->
          <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-[#11181C] leading-[1.15]">
            Modernisasi Sekolah &amp; Yayasan Anda Sekarang
          </h2>

          <!-- Subcopy -->
          <p class="mt-5 text-base sm:text-lg text-[#455A50] leading-relaxed max-w-2xl mx-auto">
            Tinggalkan administrasi manual yang melelahkan. Dapatkan demonstrasi personal tentang bagaimana Mustaka EduOS menyederhanakan operasional sekolah Anda.
          </p>

          <!-- Action Buttons -->
          <div class="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              id="final-cta-demo-btn"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-xl bg-[#5EC234] hover:bg-[#4BAB26] text-white font-bold text-sm transition-all shadow-md shadow-[#5EC234]/25 hover:shadow-lg hover:shadow-[#5EC234]/35 cursor-pointer"
              @click="$emit('open-lead-modal')"
            >
              <UIcon name="lucide:calendar" class="w-4 h-4" />
              <span>Jadwalkan Sesi Demo Gratis</span>
            </button>

            <a
              :href="siteConfig.appUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-4 rounded-xl border border-[#C4E3B9] bg-white hover:bg-[#F3F8F5] text-[#11181C] font-semibold text-sm transition-colors shadow-2xs"
            >
              <UIcon name="lucide:log-in" class="w-4 h-4 text-[#5EC234]" />
              <span>Masuk ke Portal Sekolah</span>
            </a>
          </div>

          <!-- Micro Signals -->
          <div class="mt-12 pt-8 border-t border-[#C4E3B9]/60 flex flex-wrap items-center justify-center gap-x-8 gap-y-3 text-xs text-[#455A50]">
            <div class="flex items-center gap-2 font-medium">
              <UIcon name="lucide:shield-check" class="w-4 h-4 text-[#5EC234]" />
              <span>Keamanan Data Terenkripsi RLS</span>
            </div>
            <div class="flex items-center gap-2 font-medium">
              <UIcon name="lucide:headphones" class="w-4 h-4 text-[#5EC234]" />
              <span>Pendampingan Penuh Migrasi Data</span>
            </div>
            <div class="flex items-center gap-2 font-medium">
              <UIcon name="lucide:zap" class="w-4 h-4 text-[#5EC234]" />
              <span>Implementasi Cepat 1–3 Hari Kerja</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
