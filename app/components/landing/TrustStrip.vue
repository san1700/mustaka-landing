<script setup lang="ts">
// TrustStrip — 3 pilar segmen institusi dengan deskripsi singkat.

const { segments } = useMustakaContent()
</script>

<template>
  <section class="border-b border-stone-200 bg-stone-50" aria-label="Segmen institusi yang dilayani">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
      <!-- Label -->
      <p class="text-center text-xs font-semibold text-stone-400 uppercase tracking-widest mb-8">
        Solusi yang dirancang untuk
      </p>

      <!-- Segment grid -->
      <div class="grid grid-cols-1 sm:grid-cols-3 divide-y sm:divide-y-0 sm:divide-x divide-stone-200 border border-stone-200 rounded-xl overflow-hidden bg-white">
        <div
          v-for="segment in segments"
          :key="segment.id"
          class="flex items-start gap-4 px-6 py-6 hover:bg-stone-50/60 transition-colors"
        >
          <!-- Icon container -->
          <div
            class="w-9 h-9 rounded-lg border border-stone-200 bg-white flex items-center justify-center shrink-0 mt-0.5"
            aria-hidden="true"
          >
            <UIcon :name="segment.icon" class="w-4.5 h-4.5 text-stone-600" />
          </div>

          <!-- Text -->
          <div>
            <h3 class="text-sm font-semibold text-stone-900 tracking-tight">{{ segment.label }}</h3>
            <p class="text-xs text-stone-500 leading-relaxed mt-1">{{ segment.description }}</p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
