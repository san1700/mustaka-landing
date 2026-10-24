<script setup lang="ts">
/**
 * FaqSection — Accordion FAQ Interaktif.
 * Menjawab keraguan utama Kepala Sekolah, Yayasan, dan Staf TU.
 */

const { faqs } = useMustakaContent()

const openFaqId = ref<string | null>(faqs[0]?.id ?? null)

function toggleFaq(id: string) {
  openFaqId.value = openFaqId.value === id ? null : id
}
</script>

<template>
  <section
    id="faq"
    class="bg-[#FAFAFA] border-b border-[#E2EAE6] scroll-mt-20 py-20 lg:py-28"
    aria-label="Pertanyaan yang Sering Diajukan"
  >
    <div class="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center mb-16">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF7EC] border border-[#C4E3B9] text-xs font-bold text-[#2D7A14] mb-4">
          <UIcon name="lucide:help-circle" class="w-3.5 h-3.5" />
          Tanya Jawab
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11181C] tracking-tight leading-tight">
          Pertanyaan yang Sering Diajukan
        </h2>
        <p class="mt-4 text-base sm:text-lg text-[#455A50] leading-relaxed">
          Semua jawaban seputar keamanan data, migrasi file Excel, fleksibilitas pesantren, dan dukungan server cloud.
        </p>
      </div>

      <!-- FAQ Accordion -->
      <div class="space-y-4">
        <div
          v-for="faq in faqs"
          :key="faq.id"
          class="rounded-2xl border transition-all duration-200 overflow-hidden"
          :class="[
            openFaqId === faq.id
              ? 'bg-white border-[#5EC234] shadow-md ring-1 ring-[#5EC234]/30'
              : 'bg-white border-[#E2EAE6] hover:border-[#C4E3B9]',
          ]"
        >
          <button
            class="w-full text-left px-6 py-5 flex items-center justify-between gap-4 cursor-pointer focus:outline-none"
            :aria-expanded="openFaqId === faq.id"
            @click="toggleFaq(faq.id)"
          >
            <span
              class="text-base sm:text-lg font-bold tracking-tight leading-snug transition-colors"
              :class="openFaqId === faq.id ? 'text-[#11181C]' : 'text-[#11181C]'"
            >
              {{ faq.question }}
            </span>
            <span
              class="shrink-0 w-8 h-8 rounded-full flex items-center justify-center transition-transform duration-200"
              :class="[
                openFaqId === faq.id
                  ? 'bg-[#5EC234] text-white rotate-180'
                  : 'bg-[#EFF7EC] text-[#5EC234] border border-[#C4E3B9]',
              ]"
            >
              <UIcon name="lucide:chevron-down" class="w-4 h-4" />
            </span>
          </button>

          <div
            v-show="openFaqId === faq.id"
            class="px-6 pb-6 pt-1 text-sm sm:text-base text-[#455A50] leading-relaxed border-t border-[#F3F8F5]"
          >
            {{ faq.answer }}
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
