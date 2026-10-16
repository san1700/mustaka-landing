<script setup lang="ts">
// TransformationSection — Tabel perbandingan visual Sebelum vs Sesudah Mustaka.

const { transformations } = useMustakaContent()
</script>

<template>
  <section
    id="transformation"
    class="bg-stone-50 border-b border-stone-200"
    aria-labelledby="transformation-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <!-- Section header -->
      <div class="text-center max-w-xl mx-auto mb-12">
        <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Transformasi</p>
        <h2
          id="transformation-heading"
          class="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight"
        >
          Cara Lama vs Cara Mustaka
        </h2>
      </div>

      <!-- Comparison table -->
      <div class="border border-stone-200 rounded-xl overflow-hidden bg-white max-w-4xl mx-auto">
        <!-- Table header -->
        <div class="grid grid-cols-2">
          <div class="px-6 py-4 border-r border-stone-200 bg-red-50/50 border-b border-stone-200">
            <div class="flex items-center gap-2">
              <UIcon name="lucide:x-circle" class="w-4 h-4 text-red-400 shrink-0" />
              <span class="text-sm font-bold text-red-700 tracking-tight">Sebelum Mustaka</span>
            </div>
            <p class="text-xs text-red-500 mt-1">Cara Manual & Excel</p>
          </div>
          <div class="px-6 py-4 bg-emerald-50/50 border-b border-stone-200">
            <div class="flex items-center gap-2">
              <UIcon name="lucide:check-circle" class="w-4 h-4 text-emerald-500 shrink-0" />
              <span class="text-sm font-bold text-emerald-700 tracking-tight">Sesudah Mustaka</span>
            </div>
            <p class="text-xs text-emerald-600 mt-1">Platform Cloud Modern</p>
          </div>
        </div>

        <!-- Rows -->
        <div
          v-for="(row, i) in transformations"
          :key="i"
          class="grid grid-cols-2"
          :class="i < transformations.length - 1 ? 'border-b border-stone-100' : ''"
        >
          <!-- Before -->
          <div class="px-6 py-4 border-r border-stone-100 flex items-start gap-3">
            <UIcon name="lucide:circle-dot" class="w-3.5 h-3.5 text-red-300 shrink-0 mt-0.5" aria-hidden="true" />
            <p class="text-sm text-stone-600 leading-relaxed">{{ row.before }}</p>
          </div>
          <!-- After -->
          <div class="px-6 py-4 flex items-start gap-3 bg-emerald-50/20">
            <UIcon name="lucide:arrow-right" class="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" aria-hidden="true" />
            <p class="text-sm text-stone-700 font-medium leading-relaxed">{{ row.after }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
