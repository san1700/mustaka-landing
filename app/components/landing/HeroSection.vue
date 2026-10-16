<script setup lang="ts">
/**
 * HeroSection — Seksi pembuka halaman editorial B2B dengan headline, value proposition,
 * tombol aksi ganda, dan live interactive preview dashboard eksekutif.
 */

defineEmits<{
  'open-lead-modal': []
}>()

const { currentHero } = useMustakaContent()
</script>

<template>
  <section
    class="relative bg-white border-b border-stone-200 overflow-hidden"
    aria-labelledby="hero-headline"
  >
    <!-- Background Technical Grid Pattern (Subtle 1px monochrome) -->
    <div
      class="absolute inset-0 opacity-[0.025] pointer-events-none"
      style="background-image: radial-gradient(#1c1917 1px, transparent 1px); background-size: 28px 28px;"
      aria-hidden="true"
    />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

        <!-- Left Column: Copy & Value Proposition (5 Cols on Desktop) -->
        <div class="lg:col-span-5 max-w-xl">
          <!-- Editorial Pill Badge -->
          <div class="inline-flex items-center gap-2 mb-6 px-3 py-1 border border-stone-200/80 rounded-full bg-stone-50/80 shadow-2xs">
            <span class="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span class="text-xs font-semibold text-stone-700 tracking-tight">
              Mustaka EduOS v2.4
            </span>
            <span class="text-stone-300">|</span>
            <span class="text-xs text-stone-500 font-medium">
              Sistem Operasi Pendidikan
            </span>
          </div>

          <!-- Main Headline -->
          <h1
            id="hero-headline"
            class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-stone-900 tracking-tight leading-[1.12] mb-6"
          >
            {{ currentHero.headline }}
          </h1>

          <!-- Sub-copy -->
          <p class="text-base sm:text-lg text-stone-600 leading-relaxed mb-8">
            {{ currentHero.subCopy }}
          </p>

          <!-- Dual CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3">
            <button
              id="hero-demo-btn"
              class="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 active:bg-emerald-800 rounded-xl transition-all shadow-sm shadow-emerald-700/20"
              @click="$emit('open-lead-modal')"
            >
              <UIcon name="lucide:calendar" class="w-4 h-4" />
              <span>Jadwalkan Demo Gratis</span>
            </button>

            <a
              href="#feature-showcase"
              class="inline-flex items-center justify-center gap-2 px-5 py-3 text-sm font-semibold text-stone-700 border border-stone-200/90 hover:border-stone-300 hover:bg-stone-50/80 rounded-xl transition-colors bg-white shadow-2xs"
              @click.prevent="() => document.querySelector('#feature-showcase')?.scrollIntoView({ behavior: 'smooth' })"
            >
              <UIcon name="lucide:play-circle" class="w-4 h-4 text-stone-400" />
              <span>Jelajahi Fitur</span>
            </a>
          </div>

          <!-- Trust Micro-Signals -->
          <div class="mt-10 pt-6 border-t border-stone-100 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-stone-500">
            <span class="flex items-center gap-1.5 font-medium">
              <UIcon name="lucide:shield-check" class="w-4 h-4 text-emerald-600" />
              Row-Level Security
            </span>
            <span class="flex items-center gap-1.5 font-medium">
              <UIcon name="lucide:cloud" class="w-4 h-4 text-emerald-600" />
              Zero Server Maintenance
            </span>
            <span class="flex items-center gap-1.5 font-medium">
              <UIcon name="lucide:database" class="w-4 h-4 text-emerald-600" />
              Migrasi Excel Otomatis
            </span>
          </div>
        </div>

        <!-- Right Column: Interactive Dashboard Artifact (7 Cols on Desktop) -->
        <div class="lg:col-span-7">
          <div class="relative">
            <!-- Subtle backdrop structural accent frame -->
            <div
              class="absolute -inset-3 rounded-3xl border border-stone-200/60 bg-stone-50/60 -z-10 hidden sm:block"
              aria-hidden="true"
            />
            <!-- High density executive dashboard component -->
            <LandingVizVizExecutiveDashboard />
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
