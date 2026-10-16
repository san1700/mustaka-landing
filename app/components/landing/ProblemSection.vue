<script setup lang="ts">
// ProblemSection — Grid 5 masalah nyata sekolah dengan solusi Mustaka.

const { painPoints } = useMustakaContent()
</script>

<template>
  <section
    id="problems"
    class="bg-white border-b border-stone-200"
    aria-labelledby="problems-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <!-- Section header -->
      <div class="max-w-2xl mb-12">
        <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Memahami Masalah Anda</p>
        <h2
          id="problems-heading"
          class="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight leading-snug"
        >
          Apakah Masalah Ini Menghambat Sekolah Anda?
        </h2>
        <p class="mt-3 text-stone-500 leading-relaxed text-sm">
          Kami mendengar keluhan yang sama dari ratusan Kepala Sekolah, Staf TU, dan Pengurus Yayasan di seluruh Indonesia.
          Mustaka dibangun khusus untuk menyelesaikan masalah-masalah nyata ini.
        </p>
      </div>

      <!-- Pain point grid: 2 cols on desktop, last item centered -->
      <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
        <article
          v-for="point in painPoints"
          :key="point.id"
          class="group rounded-xl border border-stone-200 bg-stone-50/40 p-6 hover:border-stone-300 hover:bg-stone-50 transition-colors"
        >
          <!-- Icon + label -->
          <div class="flex items-start gap-3 mb-4">
            <div class="w-8 h-8 rounded-lg bg-red-50 border border-red-100 flex items-center justify-center shrink-0">
              <UIcon :name="point.icon" class="w-4 h-4 text-red-500" />
            </div>
            <h3 class="text-sm font-semibold text-stone-900 tracking-tight leading-snug mt-1">
              {{ point.problem }}
            </h3>
          </div>

          <!-- Impact (pain) -->
          <div class="mb-4">
            <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-1.5">Dampak Nyata</p>
            <p class="text-xs text-stone-600 leading-relaxed">{{ point.impact }}</p>
          </div>

          <!-- Divider -->
          <div class="h-px bg-stone-200 mb-4" />

          <!-- Solution (relief) -->
          <div class="flex items-start gap-2">
            <UIcon name="lucide:check-circle" class="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
            <p class="text-xs text-stone-700 leading-relaxed font-medium">{{ point.solution }}</p>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
