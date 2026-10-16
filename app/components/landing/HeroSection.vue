<script setup lang="ts">
// HeroSection — Seksi pembuka halaman dengan headline, sub-copy, CTA, dan dashboard preview.

defineEmits<{
  'open-lead-modal': []
}>()

const { currentHero } = useMustakaContent()
</script>

<template>
  <section
    class="bg-white border-b border-stone-200"
    aria-labelledby="hero-headline"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-24">
      <div class="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">

        <!-- Left: Copy -->
        <div class="max-w-xl">
          <!-- Pre-headline label -->
          <div class="inline-flex items-center gap-2 mb-6 px-3 py-1.5 border border-stone-200 rounded-full bg-stone-50">
            <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
            <span class="text-xs font-medium text-stone-500">
              Platform Manajemen Pendidikan Terpadu
            </span>
          </div>

          <!-- Headline -->
          <h1
            id="hero-headline"
            class="text-3xl sm:text-4xl lg:text-[2.6rem] font-bold text-stone-900 tracking-tight leading-[1.15] mb-6"
          >
            {{ currentHero.headline }}
          </h1>

          <!-- Sub-copy -->
          <p class="text-base text-stone-500 leading-relaxed mb-8">
            {{ currentHero.subCopy }}
          </p>

          <!-- CTA Group -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button
              id="hero-demo-btn"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-lg transition-colors shadow-sm"
              @click="$emit('open-lead-modal')"
            >
              <UIcon name="lucide:calendar" class="w-4 h-4" />
              Jadwalkan Demo Gratis
            </button>
            <a
              href="#feature-showcase"
              class="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-sm font-semibold text-stone-700 border border-stone-200 hover:border-stone-300 hover:bg-stone-50 rounded-lg transition-colors"
              @click.prevent="() => document.querySelector('#feature-showcase')?.scrollIntoView({ behavior: 'smooth' })"
            >
              <UIcon name="lucide:play-circle" class="w-4 h-4" />
              Lihat Fitur Lengkap
            </a>
          </div>

          <!-- Trust micro-signals -->
          <div class="mt-8 flex flex-wrap items-center gap-4 text-xs text-stone-400">
            <span class="flex items-center gap-1.5">
              <UIcon name="lucide:shield-check" class="w-3.5 h-3.5 text-emerald-500" />
              Row-Level Security
            </span>
            <span class="flex items-center gap-1.5">
              <UIcon name="lucide:cloud" class="w-3.5 h-3.5 text-emerald-500" />
              Cloud — Tanpa Server Fisik
            </span>
            <span class="flex items-center gap-1.5">
              <UIcon name="lucide:headset" class="w-3.5 h-3.5 text-emerald-500" />
              Pendampingan Migrasi Data
            </span>
          </div>
        </div>

        <!-- Right: Dashboard Preview -->
        <div class="relative">
          <!-- Subtle glow ring — structural, bukan dekoratif neon -->
          <div
            class="absolute -inset-4 rounded-2xl border border-stone-100 bg-stone-50"
            aria-hidden="true"
          />
          <div class="relative">
            <LandingVizVizExecutiveDashboard />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
