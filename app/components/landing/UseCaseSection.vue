<script setup lang="ts">
// UseCaseSection — Pilihan solusi untuk Sekolah K-12 vs Pesantren & Boarding School.

defineEmits<{
  'open-lead-modal': []
}>()

const { useCases } = useMustakaContent()
</script>

<template>
  <section
    id="use-cases"
    class="bg-white border-b border-stone-200"
    aria-labelledby="use-cases-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
      <!-- Section header -->
      <div class="text-center max-w-xl mx-auto mb-12">
        <p class="text-xs font-semibold text-stone-400 uppercase tracking-widest mb-3">Solusi Spesifik</p>
        <h2
          id="use-cases-heading"
          class="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight"
        >
          Pilih Solusi Sesuai Institusi Anda
        </h2>
        <p class="mt-3 text-stone-500 text-sm leading-relaxed">
          Mustaka fleksibel untuk berbagai model lembaga pendidikan — tidak ada pendekatan satu ukuran untuk semua.
        </p>
      </div>

      <!-- Use case cards -->
      <div class="grid grid-cols-1 md:grid-cols-2 gap-6">
        <article
          v-for="uc in useCases"
          :key="uc.id"
          class="rounded-xl border border-stone-200 overflow-hidden hover:border-stone-300 transition-colors"
        >
          <!-- Card header -->
          <div class="px-6 py-5 border-b border-stone-200 bg-stone-50 flex items-start gap-4">
            <div
              class="w-10 h-10 rounded-lg border border-stone-200 bg-white flex items-center justify-center shrink-0"
              aria-hidden="true"
            >
              <UIcon :name="uc.icon" class="w-5 h-5 text-stone-600" />
            </div>
            <div>
              <h3 class="text-sm font-bold text-stone-900 tracking-tight">{{ uc.title }}</h3>
              <p class="text-xs text-stone-500 mt-0.5">{{ uc.subtitle }}</p>
              <span class="inline-flex items-center gap-1 mt-1.5 text-[10px] font-medium text-stone-400">
                <UIcon name="lucide:users" class="w-3 h-3" />
                {{ uc.audience }}
              </span>
            </div>
          </div>

          <!-- Feature highlights -->
          <div class="px-6 py-5">
            <p class="text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-3">Yang Anda Dapatkan</p>
            <ul class="space-y-2.5">
              <li
                v-for="highlight in uc.highlights"
                :key="highlight"
                class="flex items-start gap-2.5"
              >
                <UIcon name="lucide:check" class="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                <span class="text-sm text-stone-600 leading-snug">{{ highlight }}</span>
              </li>
            </ul>
          </div>

          <!-- CTA -->
          <div class="px-6 pb-6">
            <button
              :id="`usecase-cta-${uc.id}`"
              class="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-sm font-semibold text-stone-700 border border-stone-200 hover:border-emerald-300 hover:text-emerald-700 hover:bg-emerald-50 rounded-lg transition-colors"
              @click="$emit('open-lead-modal')"
            >
              <UIcon name="lucide:calendar" class="w-4 h-4" />
              {{ uc.cta }}
            </button>
          </div>
        </article>
      </div>
    </div>
  </section>
</template>
