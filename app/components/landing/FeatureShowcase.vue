<script setup lang="ts">
/**
 * FeatureShowcase — Komponen utama fitur interaktif bergaya Linear/Stripe.
 *
 * Layout: 2 kolom asimetris
 *   - Kiri  (col-span-4): Navigasi vertikal bertab dengan ikon lucide
 *   - Kanan (col-span-8): Kanvas pratinjau dengan sub-visualisasi nyata
 *
 * Data diambil dari app/data/features.ts.
 * Tidak ada gradien dekoratif, tidak ada emoji.
 */

import { features, type Feature, type FeatureVisualizationType } from '~/data/features'

// ── State ────────────────────────────────────────────────────────────────────
const activeId = ref<string>(features[0]!.id)

const activeFeature = computed<Feature>(
  () => features.find((f) => f.id === activeId.value) ?? features[0]!,
)

// ── Viz component map ────────────────────────────────────────────────────────
// Menggunakan resolveComponent agar bundler tidak tree-shake komponen ini.
const vizMap: Record<FeatureVisualizationType, ReturnType<typeof resolveComponent>> = {
  student360: resolveComponent('LandingVizVizStudent360'),
  auditLog: resolveComponent('LandingVizVizAuditLog'),
  learningGroup: resolveComponent('LandingVizVizLearningGroup'),
  teacherAssignment: resolveComponent('LandingVizVizTeacherAssignment'),
  multiTenant: resolveComponent('LandingVizVizMultiTenant'),
  announcement: resolveComponent('LandingVizVizAnnouncement'),
}

const currentViz = computed(() => vizMap[activeFeature.value.visualization])

// ── Persona badge helper ─────────────────────────────────────────────────────
const personaLabel: Record<Feature['persona'], string> = {
  yayasan: 'Untuk Ketua Yayasan',
  'kepala-sekolah': 'Untuk Kepala Sekolah',
  'staf-tu': 'Untuk Staf TU',
}

// ── Keyboard accessibility ────────────────────────────────────────────────────
function handleKeydown(event: KeyboardEvent, id: string) {
  if (event.key === 'Enter' || event.key === ' ') {
    event.preventDefault()
    activeId.value = id
  }
}
</script>

<template>
  <section
    id="feature-showcase"
    class="border-y border-stone-200 bg-white"
    aria-label="Fitur Utama Mustaka EduOS"
  >
    <!-- Section label -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-10">
      <div class="flex items-center gap-3 mb-4">
        <div class="h-px flex-1 bg-stone-200" />
        <span class="text-[11px] font-semibold tracking-widest text-stone-400 uppercase">
          Fitur Platform
        </span>
        <div class="h-px flex-1 bg-stone-200" />
      </div>
      <h2 class="text-2xl sm:text-3xl font-bold text-stone-900 tracking-tight text-center leading-snug">
        Satu Sistem. Semua yang Dibutuhkan Institusi Pendidikan.
      </h2>
      <p class="mt-3 text-stone-500 text-center max-w-xl mx-auto leading-relaxed text-sm">
        Bukan sekadar form input nilai. Mustaka adalah operating system lengkap untuk administrasi,
        akademik, SDM, dan keamanan data sekolah Anda.
      </p>
    </div>

    <!-- Main showcase grid -->
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
      <div class="border border-stone-200 rounded-xl overflow-hidden">
        <div class="grid grid-cols-1 lg:grid-cols-12">

          <!-- ─── LEFT: Vertical navigation (4 cols) ──────────────────────── -->
          <nav
            class="lg:col-span-4 border-b lg:border-b-0 lg:border-r border-stone-200 bg-stone-50/60"
            aria-label="Navigasi fitur"
          >
            <ul role="tablist" aria-orientation="vertical" class="py-2">
              <li
                v-for="feature in features"
                :key="feature.id"
                role="presentation"
              >
                <button
                  :id="`tab-${feature.id}`"
                  role="tab"
                  :aria-selected="activeId === feature.id"
                  :aria-controls="`panel-${feature.id}`"
                  :tabindex="activeId === feature.id ? 0 : -1"
                  class="w-full text-left flex items-start gap-3.5 px-5 py-4 transition-colors group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-inset focus-visible:ring-stone-400 relative"
                  :class="[
                    activeId === feature.id
                      ? 'bg-white text-stone-900'
                      : 'text-stone-500 hover:text-stone-700 hover:bg-stone-100/60',
                  ]"
                  @click="activeId = feature.id"
                  @keydown="handleKeydown($event, feature.id)"
                >
                  <!-- Active indicator bar -->
                  <span
                    v-if="activeId === feature.id"
                    class="absolute left-0 inset-y-0 w-0.5 bg-stone-700 rounded-r"
                    aria-hidden="true"
                  />

                  <!-- Icon -->
                  <UIcon
                    :name="feature.icon"
                    class="w-4 h-4 shrink-0 mt-0.5 transition-colors"
                    :class="activeId === feature.id ? 'text-stone-700' : 'text-stone-400 group-hover:text-stone-500'"
                  />

                  <!-- Text -->
                  <div>
                    <p
                      class="text-sm font-semibold leading-tight tracking-tight"
                      :class="activeId === feature.id ? 'text-stone-900' : 'text-stone-600'"
                    >
                      {{ feature.label }}
                    </p>
                    <p
                      v-if="activeId === feature.id"
                      class="text-xs text-stone-400 mt-0.5 leading-snug line-clamp-2"
                    >
                      {{ feature.description }}
                    </p>
                  </div>
                </button>
              </li>
            </ul>
          </nav>

          <!-- ─── RIGHT: Interactive preview canvas (8 cols) ───────────────── -->
          <div
            :id="`panel-${activeFeature.id}`"
            role="tabpanel"
            :aria-labelledby="`tab-${activeFeature.id}`"
            class="lg:col-span-8 bg-white min-h-[480px] flex flex-col"
          >
            <!-- Canvas header -->
            <div class="px-6 pt-6 pb-4 border-b border-stone-200">
              <div class="flex items-start justify-between gap-4 flex-wrap">
                <div>
                  <div class="flex items-center gap-2 mb-2">
                    <UIcon
                      :name="activeFeature.icon"
                      class="w-4 h-4 text-stone-400"
                    />
                    <span class="text-[10px] font-semibold text-stone-400 uppercase tracking-widest">
                      {{ personaLabel[activeFeature.persona] }}
                    </span>
                  </div>
                  <h3 class="text-lg font-bold text-stone-900 tracking-tight leading-snug">
                    {{ activeFeature.headline }}
                  </h3>
                  <p class="text-stone-500 text-sm leading-relaxed mt-1 max-w-lg">
                    {{ activeFeature.description }}
                  </p>
                </div>
              </div>
            </div>

            <!-- Visualization canvas -->
            <div class="flex-1 p-6 overflow-auto">
              <Transition
                mode="out-in"
                enter-active-class="transition-all duration-200"
                enter-from-class="opacity-0 translate-y-1"
                enter-to-class="opacity-100 translate-y-0"
                leave-active-class="transition-all duration-150"
                leave-from-class="opacity-100"
                leave-to-class="opacity-0"
              >
                <component
                  :is="currentViz"
                  :key="activeFeature.id"
                />
              </Transition>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
