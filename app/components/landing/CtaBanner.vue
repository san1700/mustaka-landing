<script setup lang="ts">
// CtaBanner — Seksi penutup ajakan bertindak (Final CTA) sebelum footer.

defineEmits<{
  'open-lead-modal': []
}>()

const { siteConfig } = useMustakaContent()
</script>

<template>
  <section
    class="py-20 bg-stone-900 text-white relative overflow-hidden"
    aria-label="Ajakan Bertindak Terakhir"
  >
    <!-- Background Grid Pattern Accent (Subtle, Monochrome) -->
    <div
      class="absolute inset-0 opacity-[0.03] pointer-events-none"
      style="background-image: radial-gradient(#fff 1px, transparent 1px); background-size: 24px 24px;"
    />

    <div class="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
      <!-- Badge -->
      <div class="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-700 bg-stone-800/80 text-xs font-medium text-emerald-400 mb-6">
        <UIcon name="lucide:sparkles" class="w-3.5 h-3.5" />
        <span>Siap Melangkah Menuju Digitalisasi Nyata?</span>
      </div>

      <!-- Headline -->
      <h2 class="text-3xl sm:text-5xl font-extrabold tracking-tight text-white max-w-3xl mx-auto leading-tight">
        Modernisasi Sekolah & Yayasan Anda Sekarang
      </h2>

      <!-- Subcopy -->
      <p class="mt-5 text-base sm:text-lg text-stone-400 max-w-2xl mx-auto leading-relaxed">
        Tinggalkan administrasi manual yang melelahkan. Dapatkan demonstrasi personal tentang bagaimana Mustaka EduOS dapat menyederhanakan operasional sekolah Anda.
      </p>

      <!-- Action Buttons -->
      <div class="mt-8 flex flex-col sm:flex-row items-center justify-center gap-4">
        <button
          id="final-cta-demo-btn"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg bg-emerald-600 hover:bg-emerald-500 text-white font-semibold text-sm transition-colors shadow-sm"
          @click="$emit('open-lead-modal')"
        >
          <UIcon name="lucide:calendar" class="w-4 h-4" />
          Jadwalkan Sesi Demo Gratis
        </button>

        <a
          :href="siteConfig.appUrl"
          target="_blank"
          rel="noopener noreferrer"
          class="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-lg border border-stone-700 bg-stone-800/60 hover:bg-stone-800 text-stone-300 hover:text-white font-medium text-sm transition-colors"
        >
          <UIcon name="lucide:log-in" class="w-4 h-4" />
          Masuk ke Portal Sekolah
        </a>
      </div>

      <!-- Micro Signals -->
      <div class="mt-10 flex flex-wrap items-center justify-center gap-x-8 gap-y-2 text-xs text-stone-400">
        <div class="flex items-center gap-2">
          <UIcon name="lucide:shield-check" class="w-4 h-4 text-emerald-400" />
          <span>Keamanan Data Terenkripsi</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="lucide:headphones" class="w-4 h-4 text-emerald-400" />
          <span>Dukungan Pendampingan Migrasi</span>
        </div>
        <div class="flex items-center gap-2">
          <UIcon name="lucide:zap" class="w-4 h-4 text-emerald-400" />
          <span>Implementasi Cepat 1-3 Hari</span>
        </div>
      </div>
    </div>
  </section>
</template>
