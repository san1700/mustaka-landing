<script setup lang="ts">
/**
 * TransformationSection — Tabel/Kartu Perbandingan Sebelum vs Sesudah Mustaka.
 * Desain bersih dengan visual split card yang sangat jelas dan meyakinkan.
 */

const { transformations } = useMustakaContent()
</script>

<template>
  <section
    id="transformasi"
    class="bg-white border-b border-[#E2EAE6] scroll-mt-20 py-20 lg:py-28"
    aria-labelledby="transformasi-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF7EC] border border-[#C4E3B9] text-xs font-bold text-[#2D7A14] mb-4">
          <UIcon name="lucide:arrow-right-left" class="w-3.5 h-3.5" />
          Transformasi Nyata
        </span>
        <h2
          id="transformasi-heading"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11181C] tracking-tight leading-tight"
        >
          Sebelum vs Sesudah Mustaka
        </h2>
        <p class="mt-4 text-[#455A50] text-base sm:text-lg leading-relaxed">
          Lihat perbedaan signifikan saat sekolah Anda beralih dari tumpukan file Excel manual ke sistem operasi pendidikan terintegrasi.
        </p>
      </div>

      <!-- Comparison Card Table -->
      <div class="max-w-4xl mx-auto rounded-2xl border border-[#E2EAE6] overflow-hidden bg-white shadow-lg">
        <!-- Table Header Bar -->
        <div class="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E2EAE6]">
          <!-- Column Header 1: Sebelum -->
          <div class="p-6 bg-[#FEF2F2]/70 flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
              <UIcon name="lucide:x-circle" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base font-bold text-red-900 tracking-tight">Sebelum Menggunakan Mustaka</h3>
              <p class="text-xs text-red-600 mt-0.5">Cara Lama, Manual &amp; Tersebar di Excel</p>
            </div>
          </div>

          <!-- Column Header 2: Sesudah -->
          <div class="p-6 bg-[#EFF7EC] flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-[#5EC234] text-white flex items-center justify-center shrink-0 shadow-xs">
              <UIcon name="lucide:check-circle-2" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base font-bold text-[#11181C] tracking-tight">Sesudah Menggunakan Mustaka</h3>
              <p class="text-xs text-[#2D7A14] font-semibold mt-0.5">Modern, Terpusat di Cloud &amp; Otomatis</p>
            </div>
          </div>
        </div>

        <!-- Rows -->
        <div class="divide-y divide-[#E2EAE6]">
          <div
            v-for="(row, idx) in transformations"
            :key="idx"
            class="grid grid-cols-1 sm:grid-cols-2 divide-y sm:divide-y-0 sm:divide-x divide-[#E2EAE6] text-xs sm:text-sm"
          >
            <!-- Before Column -->
            <div class="p-6 flex items-start gap-3 bg-white hover:bg-red-50/20 transition-colors">
              <div class="w-5 h-5 rounded-full bg-red-50 border border-red-200 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="lucide:x" class="w-3 h-3" />
              </div>
              <p class="text-[#455A50] leading-relaxed">
                {{ row.before }}
              </p>
            </div>

            <!-- After Column -->
            <div class="p-6 flex items-start gap-3 bg-[#FAFAFA] hover:bg-[#EFF7EC]/40 transition-colors">
              <div class="w-5 h-5 rounded-full bg-[#EFF7EC] border border-[#C4E3B9] text-[#5EC234] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                <UIcon name="lucide:check" class="w-3.5 h-3.5" />
              </div>
              <p class="text-[#11181C] font-semibold leading-relaxed">
                {{ row.after }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
