<script setup lang="ts">
// PricingSection — Seksi harga & transparansi dengan 3 tingkatan paket.

defineEmits<{
  'open-lead-modal': []
}>()

const { pricingTiers } = useMustakaContent()
</script>

<template>
  <section
    id="pricing"
    class="py-20 bg-stone-50 border-b border-stone-200"
    aria-label="Pilihan Paket & Investasi"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto text-center mb-16">
        <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-stone-200 bg-white text-xs font-semibold text-stone-600 mb-4 tracking-wider uppercase">
          Investasi Transparan
        </div>
        <h2 class="text-3xl sm:text-4xl font-bold text-stone-900 tracking-tight">
          Investasi Terjangkau, Nilai Efisiensi Maksimal
        </h2>
        <p class="mt-4 text-base text-stone-600 leading-relaxed">
          Pilih paket yang paling cocok dengan ukuran dan tahap pertumbuhan lembaga pendidikan Anda. Tanpa biaya tersembunyi.
        </p>
      </div>

      <!-- Pricing Cards Grid -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div
          v-for="tier in pricingTiers"
          :key="tier.id"
          class="relative flex flex-col rounded-xl border bg-white p-8 transition-shadow duration-200"
          :class="[
            tier.isPopular
              ? 'border-emerald-600 ring-2 ring-emerald-600/20 shadow-lg'
              : 'border-stone-200 shadow-sm hover:shadow-md',
          ]"
        >
          <!-- Popular Badge -->
          <div
            v-if="tier.isPopular"
            class="absolute -top-3.5 left-1/2 -translate-x-1/2 px-3 py-1 rounded-full bg-emerald-600 text-white text-xs font-semibold tracking-wide uppercase shadow-sm"
          >
            Paling Diminati
          </div>

          <!-- Header Tier -->
          <div class="mb-6">
            <span class="text-xs font-semibold tracking-wider text-stone-500 uppercase">
              {{ tier.tagline }}
            </span>
            <h3 class="text-2xl font-bold text-stone-900 mt-1">
              {{ tier.name }}
            </h3>
            <p class="text-xs text-stone-500 mt-2 min-h-8">
              {{ tier.target }}
            </p>
          </div>

          <!-- Price Display -->
          <div class="py-4 border-y border-stone-100 mb-6">
            <div class="text-3xl font-extrabold text-stone-900 tracking-tight">
              {{ tier.priceLabel }}
            </div>
            <div class="text-xs text-stone-500 mt-1">
              {{ tier.priceNote }}
            </div>
          </div>

          <!-- Feature List -->
          <div class="flex-1 space-y-3 mb-8">
            <p class="text-xs font-semibold text-stone-900 tracking-wide uppercase">
              Fitur yang Termasuk:
            </p>
            <ul class="space-y-2.5 text-sm text-stone-600">
              <li
                v-for="(feature, idx) in tier.features"
                :key="idx"
                class="flex items-start gap-2.5"
              >
                <UIcon
                  name="lucide:check"
                  class="w-4 h-4 text-emerald-600 shrink-0 mt-0.5"
                />
                <span class="leading-snug">{{ feature }}</span>
              </li>
            </ul>
          </div>

          <!-- Action Button -->
          <button
            class="w-full py-2.5 px-4 rounded-lg font-semibold text-sm transition-colors text-center"
            :class="[
              tier.ctaVariant === 'primary'
                ? 'bg-emerald-600 hover:bg-emerald-700 text-white shadow-sm'
                : 'bg-stone-50 hover:bg-stone-100 text-stone-900 border border-stone-200',
            ]"
            @click="$emit('open-lead-modal')"
          >
            {{ tier.cta }}
          </button>
        </div>
      </div>

      <!-- Trust Note Footer -->
      <div class="mt-12 text-center text-xs text-stone-500">
        <p>Butuh implementasi khusus untuk yayasan dengan lebih dari 5 sekolah? Konsultasikan arsitektur data & dedicated server bersama kami.</p>
      </div>
    </div>
  </section>
</template>
