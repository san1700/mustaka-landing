<script setup lang="ts">
/**
 * ProblemSection — Mid-Page Forest Green Banner.
 * "Masih Bergantung pada File Excel yang Tercecer?"
 * Palet: #133019 ke #214D28 dengan aksen #5EC234.
 */

const { painPoints } = useMustakaContent()
</script>

<template>
  <section
    id="masalah"
    class="relative overflow-hidden scroll-mt-20"
    aria-labelledby="problems-heading"
    style="background: linear-gradient(145deg, #133019 0%, #214D28 65%, #183d21 100%);"
  >
    <!-- Background subtle mesh -->
    <div
      class="absolute inset-0 opacity-[0.05] pointer-events-none"
      style="background-image: radial-gradient(#ffffff 1px, transparent 1px); background-size: 28px 28px;"
      aria-hidden="true"
    />

    <!-- Forest glow accent -->
    <div
      class="absolute -top-24 left-1/2 -translate-x-1/2 w-[700px] h-[350px] rounded-full opacity-25 pointer-events-none blur-3xl"
      style="background: radial-gradient(ellipse, #5EC234 0%, transparent 70%);"
      aria-hidden="true"
    />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#5EC234]/15 border border-[#5EC234]/30 text-xs font-bold text-[#A8E080] mb-6">
          <UIcon name="lucide:alert-triangle" class="w-4 h-4 text-[#5EC234]" />
          Masalah Operasional Sekolah
        </span>
        <h2
          id="problems-heading"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-white tracking-tight leading-[1.15]"
        >
          Masih Bergantung pada<br />
          <span class="text-[#5EC234]">File Excel yang Tercecer?</span>
        </h2>
        <p class="mt-5 text-[#A3C9A8] text-base sm:text-lg leading-relaxed">
          Kami mendengar keluhan yang sama dari ratusan Kepala Sekolah, Staf TU, dan Pengurus Yayasan di seluruh Indonesia. Inilah mengapa Mustaka hadir.
        </p>
      </div>

      <!-- Pain Points Grid -->
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <article
          v-for="point in painPoints.slice(0, 6)"
          :key="point.id"
          class="group relative rounded-2xl border border-white/12 bg-white/6 hover:bg-white/10 backdrop-blur-md p-6 sm:p-7 hover:border-[#5EC234]/50 transition-all duration-300"
        >
          <!-- Icon + problem label -->
          <div class="flex items-start gap-3.5 mb-4">
            <div class="w-11 h-11 rounded-xl bg-[#5EC234]/20 border border-[#5EC234]/30 flex items-center justify-center shrink-0 shadow-xs">
              <UIcon :name="point.icon" class="w-5 h-5 text-[#5EC234]" />
            </div>
            <h3 class="text-base font-bold text-white tracking-tight leading-snug mt-1">
              {{ point.problem }}
            </h3>
          </div>

          <!-- Impact -->
          <p class="text-xs sm:text-sm text-[#86B898] leading-relaxed mb-5">
            {{ point.impact }}
          </p>

          <!-- Divider -->
          <div class="h-px bg-white/10 mb-5" />

          <!-- Solution -->
          <div class="flex items-start gap-2.5">
            <UIcon name="lucide:check-circle-2" class="w-4 h-4 text-[#5EC234] shrink-0 mt-0.5" />
            <p class="text-xs sm:text-sm text-white/95 leading-relaxed font-medium">
              {{ point.solution }}
            </p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
