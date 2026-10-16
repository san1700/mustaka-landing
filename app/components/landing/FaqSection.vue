<script setup lang="ts">
// FaqSection — Seksi pertanyaan umum (FAQ) dengan accordion interaktif.

const { faqs } = useMustakaContent()

const openFaqId = ref<string | null>(faqs[0]?.id ?? null)

function toggleFaq(id: string) {
  openFaqId.value = openFaqId.value === id ? null : id
}
</script>

<template>
  <section
    id="faq"
    class="py-20 bg-white border-b border-stone-200"
    aria-label="Pertanyaan yang Sering Diajukan"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-200 bg-stone-50 text-xs font-semibold text-stone-600 mb-4 tracking-wider uppercase">
          Tanya Jawab
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p class="mt-4 text-base text-stone-600">
          Semua yang perlu Anda ketahui tentang implementasi, keamanan data, dan migrasi sistem ke Mustaka EduOS.
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="rounded-xl border border-stone-200 bg-stone-50/50 transition-all duration-200 overflow-hidden"
          :class="{ 'bg-white shadow-sm border-stone-300': openFaqId === faq.id }"
        >
          <button
            class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
            :aria-expanded="openFaqId === faq.id"
            @click="toggleFaq(faq.id)"
          >
            <span class="text-base font-semibold text-stone-900 leading-snug">
              {{ faq.question }}
            </span>
            <span
              class="shrink-0 w-7 h-7 rounded-full bg-stone-100 flex items-center justify-center text-stone-600 transition-transform duration-200"
              :class="{ 'rotate-180 bg-emerald-50 text-emerald-600': openFaqId === faq.id }"
            >
              <UIcon name="lucide:chevron-down" class="w-4 h-4" />
            </span>
          </button>

          <div
            v-show="openFaqId === faq.id"
            class="px-6 pb-6 pt-1 text-sm text-stone-600 leading-relaxed border-t border-stone-100/80"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>

      <!-- Still Have Questions Banner -->
      <div class="mt-12 p-6 rounded-xl border border-stone-200 bg-stone-50 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 class="text-sm font-semibold text-stone-900">
            Punya pertanyaan lain yang belum terjawab?
          </h3>
          <p class="text-xs text-stone-500 mt-1">
            Tim konsultan pendidikan kami siap membantu menjelaskan secara mendalam via WhatsApp.
          </p>
        </div>
        <a
          href="#pricing"
          class="shrink-0 inline-flex items-center gap-1.5 px-4 py-2 rounded-lg bg-white border border-stone-200 text-xs font-semibold text-stone-700 hover:bg-stone-50 transition-colors shadow-xs"
        >
          <UIcon name="lucide:message-circle-question" class="w-4 h-4 text-emerald-600" />
          Hubungi Konsultan
        </a>
      </div>
    </div>
  </section>
</template>
