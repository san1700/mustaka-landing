<script setup lang="ts">
/**
 * FeatureShowcase — Core Features Section.
 * Grid 4 kartu fitur berwarna soft mint (#EFF7EC) dengan tombol panah bulat di bagian bawah.
 * Klik pada kartu membuka/menampilkan visualisasi interaktif modul terkait.
 */

import { features, type Feature, type FeatureVisualizationType } from '~/data/features'
import VizStudent360 from '~/components/landing/viz/VizStudent360.vue'
import VizAuditLog from '~/components/landing/viz/VizAuditLog.vue'
import VizLearningGroup from '~/components/landing/viz/VizLearningGroup.vue'
import VizMultiTenant from '~/components/landing/viz/VizMultiTenant.vue'

// Pick the 4 primary core features
const coreFeatures = [
  features.find((f) => f.id === 'student-360')!,
  features.find((f) => f.id === 'learning-group')!,
  features.find((f) => f.id === 'audit-log')!,
  features.find((f) => f.id === 'multi-tenant')!,
]

const activeId = ref<string | null>(coreFeatures[0]?.id ?? null)

const activeFeature = computed<Feature | undefined>(
  () => coreFeatures.find((f) => f.id === activeId.value),
)

const vizMap: Record<FeatureVisualizationType, any> = {
  student360: VizStudent360,
  auditLog: VizAuditLog,
  learningGroup: VizLearningGroup,
  multiTenant: VizMultiTenant,
  teacherAssignment: VizStudent360,
  announcement: VizStudent360,
}

const currentViz = computed(() =>
  activeFeature.value ? vizMap[activeFeature.value.visualization] : null,
)

function selectFeature(id: string) {
  if (activeId.value === id) {
    activeId.value = null // Toggle
  } else {
    activeId.value = id
  }
}
</script>

<template>
  <section
    id="fitur"
    class="bg-[#FAFAFA] border-b border-[#E2EAE6] scroll-mt-20 py-20 lg:py-28"
    aria-label="Core Features Mustaka EduOS"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-2xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF7EC] border border-[#C4E3B9] text-xs font-bold text-[#2D7A14] mb-4">
          <UIcon name="lucide:layers" class="w-3.5 h-3.5" />
          Fitur Unggulan
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11181C] tracking-tight leading-tight">
          Satu Sistem. Semua Kebutuhan Institusi Pendidikan.
        </h2>
        <p class="mt-4 text-[#455A50] leading-relaxed text-base sm:text-lg">
          Bukan sekadar form input nilai. Mustaka adalah operating system terpadu untuk administrasi, kurikulum fleksibel, hingga kontrol yayasan.
        </p>
      </div>

      <!-- Grid 4 kartu fitur berwarna soft mint -->
      <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
        <div
          v-for="feature in coreFeatures"
          :key="feature.id"
          class="group relative flex flex-col justify-between rounded-2xl border transition-all duration-300 p-6 sm:p-7 cursor-pointer"
          :class="[
            activeId === feature.id
              ? 'bg-[#11181C] border-[#11181C] shadow-xl translate-y-[-2px]'
              : 'bg-[#EFF7EC] border-[#C4E3B9] hover:border-[#5EC234] hover:shadow-md hover:bg-[#E5F3E1]',
          ]"
          @click="selectFeature(feature.id)"
        >
          <div>
            <!-- Icon -->
            <div
              class="w-12 h-12 rounded-xl flex items-center justify-center mb-5 transition-colors shadow-2xs"
              :class="[
                activeId === feature.id
                  ? 'bg-[#5EC234] text-white'
                  : 'bg-white border border-[#C4E3B9] text-[#5EC234] group-hover:bg-[#5EC234] group-hover:text-white',
              ]"
            >
              <UIcon :name="feature.icon" class="w-6 h-6" />
            </div>

            <!-- Title & description -->
            <h3
              class="text-base sm:text-lg font-bold tracking-tight mb-2.5 transition-colors leading-snug"
              :class="activeId === feature.id ? 'text-white' : 'text-[#11181C]'"
            >
              {{ feature.label }}
            </h3>
            <p
              class="text-xs sm:text-sm leading-relaxed transition-colors"
              :class="activeId === feature.id ? 'text-[#A3C9A8]' : 'text-[#455A50]'"
            >
              {{ feature.description }}
            </p>
          </div>

          <!-- Tombol panah bulat di bagian bawah -->
          <div class="mt-8 pt-4 flex items-center justify-between border-t" :class="activeId === feature.id ? 'border-white/10' : 'border-[#C4E3B9]/60'">
            <span
              class="text-xs font-semibold"
              :class="activeId === feature.id ? 'text-[#5EC234]' : 'text-[#455A50] group-hover:text-[#11181C]'"
            >
              {{ activeId === feature.id ? 'Tutup Pratinjau' : 'Lihat Pratinjau' }}
            </span>
            <div
              class="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-300"
              :class="[
                activeId === feature.id
                  ? 'bg-[#5EC234] text-white rotate-90'
                  : 'bg-white border border-[#C4E3B9] text-[#5EC234] group-hover:bg-[#5EC234] group-hover:border-[#5EC234] group-hover:text-white group-hover:translate-x-1',
              ]"
            >
              <UIcon name="lucide:arrow-right" class="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>

      <!-- Expandable Interactive Visualization Panel -->
      <Transition
        enter-active-class="transition-all duration-300 ease-out"
        enter-from-class="opacity-0 -translate-y-3"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-200 ease-in"
        leave-from-class="opacity-100 translate-y-0"
        leave-to-class="opacity-0 -translate-y-3"
      >
        <div
          v-if="activeFeature"
          class="rounded-2xl border border-[#E2EAE6] bg-white shadow-xl overflow-hidden mt-6"
        >
          <!-- Panel Top Bar -->
          <div class="flex items-center justify-between px-6 py-4 bg-[#F3F8F5] border-b border-[#E2EAE6]">
            <div class="flex items-center gap-3">
              <span class="w-2.5 h-2.5 rounded-full bg-[#5EC234] animate-ping" />
              <div>
                <span class="text-xs font-bold text-[#11181C]">
                  Live Demo Modul: {{ activeFeature.label }}
                </span>
                <span class="text-[11px] text-[#7A9589] block">
                  {{ activeFeature.headline }}
                </span>
              </div>
            </div>
            <button
              class="text-xs font-semibold text-[#7A9589] hover:text-[#11181C] px-3 py-1.5 rounded-lg hover:bg-white border border-transparent hover:border-[#E2EAE6] transition-colors"
              @click="activeId = null"
            >
              Tutup
            </button>
          </div>

          <!-- Dynamic Viz Component -->
          <div class="p-6 sm:p-8 bg-[#FAFAFA]">
            <component :is="currentViz" />
          </div>
        </div>
      </Transition>
    </div>
  </section>
</template>
