<script setup lang="ts">
/**
 * HeroSection — Clean, high-tier SaaS hero for Mustaka EduOS.
 * - Sisi kiri: Headline editorial, sub-copy terarah, dual CTA, micro-trust.
 * - Sisi kanan: Mockup Dashboard Yayasan Multi-Tenant yang lapang, bersih, berkelas.
 */

defineEmits<{
  'open-lead-modal': []
}>()
</script>

<template>
  <section
    class="relative bg-[#FAFAFA] overflow-hidden"
    aria-labelledby="hero-headline"
  >
    <!-- Background subtle grid -->
    <div
      class="absolute inset-0 pointer-events-none opacity-[0.025]"
      style="background-image: radial-gradient(#11181C 1px, transparent 1px); background-size: 32px 32px;"
      aria-hidden="true"
    />

    <!-- Top green subtle accent line -->
    <div class="absolute top-0 left-0 right-0 h-[3px] bg-[#5EC234]" aria-hidden="true" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-32">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">

        <!-- ── Left: Copy & Actions ──────────────────────────────── -->
        <div class="lg:col-span-5 max-w-xl">
          <!-- Clean Category Pill (tanpa badge versi kaku) -->
          <div class="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[#EFF7EC] border border-[#C4E3B9]">
            <span class="w-2 h-2 rounded-full bg-[#5EC234] animate-pulse shrink-0" />
            <span class="text-xs font-bold text-[#2D7A14] tracking-tight">EduOS Terpadu</span>
            <span class="text-[#C4E3B9]">·</span>
            <span class="text-xs font-medium text-[#3D7A55]">Sekolah Formal &amp; Pesantren</span>
          </div>

          <!-- Main headline — green text on "Ekosistem Sekolah & Pesantren Anda." -->
          <h1
            id="hero-headline"
            class="text-4xl sm:text-5xl lg:text-[3.25rem] font-extrabold text-[#11181C] tracking-tight leading-[1.12] mb-6"
          >
            Satu Sistem Cerdas untuk Mengelola Seluruh
            <span class="text-[#5EC234] block sm:inline"> Ekosistem Sekolah &amp; Pesantren Anda.</span>
          </h1>

          <!-- Sub-copy -->
          <p class="text-base sm:text-lg text-[#455A50] leading-relaxed mb-8">
            Tinggalkan tumpukan berkas manual dan file Excel yang tercecer. Mustaka menyatukan data siswa 360°, rombel akademik, SDM pengajar, hingga portal yayasan dalam satu platform cloud yang modern, aman, dan mudah digunakan.
          </p>

          <!-- Dual CTA Buttons -->
          <div class="flex flex-col sm:flex-row gap-3.5">
            <button
              id="hero-demo-btn"
              class="inline-flex items-center justify-center gap-2.5 px-6 py-3.5 text-sm font-bold text-white bg-[#5EC234] hover:bg-[#4BAB26] active:bg-[#3A8A1D] rounded-xl transition-all shadow-md shadow-[#5EC234]/20 hover:shadow-lg hover:shadow-[#5EC234]/30 cursor-pointer"
              @click="$emit('open-lead-modal')"
            >
              <UIcon name="lucide:calendar" class="w-4 h-4" />
              <span>Jadwalkan Demo Gratis</span>
            </button>

            <a
              href="#fitur"
              class="inline-flex items-center justify-center gap-2 px-5 py-3.5 text-sm font-semibold text-[#11181C] border border-[#E2EAE6] hover:border-[#C4E3B9] hover:bg-[#EFF7EC] rounded-xl transition-all bg-white"
            >
              <UIcon name="lucide:play-circle" class="w-4 h-4 text-[#5EC234]" />
              <span>Jelajahi Fitur</span>
            </a>
          </div>

          <!-- Trust micro-signals -->
          <div class="mt-10 pt-6 border-t border-[#E2EAE6] flex flex-wrap items-center gap-x-6 gap-y-2 text-xs text-[#455A50]">
            <span class="flex items-center gap-1.5 font-medium">
              <UIcon name="lucide:shield-check" class="w-4 h-4 text-[#5EC234]" />
              Row-Level Security
            </span>
            <span class="flex items-center gap-1.5 font-medium">
              <UIcon name="lucide:cloud" class="w-4 h-4 text-[#5EC234]" />
              Zero Server Maintenance
            </span>
            <span class="flex items-center gap-1.5 font-medium">
              <UIcon name="lucide:database" class="w-4 h-4 text-[#5EC234]" />
              Migrasi Excel Otomatis
            </span>
          </div>
        </div>

        <!-- ── Right: Clean Dashboard Yayasan Multi-Tenant Mockup ── -->
        <div class="lg:col-span-7 relative">

          <!-- Floating Pill Badge 1: Yayasan Multi-Unit -->
          <div
            class="absolute -top-4 left-6 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-[#C4E3B9] shadow-lg text-xs font-bold text-[#11181C] animate-float select-none"
            style="animation-duration: 4.5s;"
          >
            <div class="w-6 h-6 rounded-full bg-[#EFF7EC] flex items-center justify-center text-[#5EC234]">
              <UIcon name="lucide:building-2" class="w-3.5 h-3.5" />
            </div>
            <span>Yayasan Multi-Unit</span>
          </div>

          <!-- Floating Pill Badge 2: Audit Kelas Bank -->
          <div
            class="absolute -top-4 right-6 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-[#11181C] text-white border border-stone-800 shadow-xl text-xs font-bold animate-float select-none"
            style="animation-duration: 5.5s; animation-delay: 1.2s;"
          >
            <div class="w-6 h-6 rounded-full bg-[#5EC234]/20 flex items-center justify-center text-[#5EC234]">
              <UIcon name="lucide:shield-check" class="w-3.5 h-3.5" />
            </div>
            <span>Audit Kelas Bank</span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#5EC234] animate-ping" />
          </div>

          <!-- Floating Pill Badge 3: Rombel & Halaqah -->
          <div
            class="absolute -bottom-4 right-8 z-20 hidden sm:flex items-center gap-2 px-4 py-2 rounded-full bg-white/95 backdrop-blur-sm border border-[#C4E3B9] shadow-lg text-xs font-bold text-[#2D7A14] animate-float select-none"
            style="animation-duration: 5s; animation-delay: 2.2s;"
          >
            <div class="w-6 h-6 rounded-full bg-[#EFF7EC] flex items-center justify-center text-[#5EC234]">
              <UIcon name="lucide:book-open" class="w-3.5 h-3.5" />
            </div>
            <span>Rombel &amp; Halaqah</span>
          </div>

          <!-- Clean Browser Chrome Card -->
          <div class="relative rounded-2xl overflow-hidden border border-[#E2EAE6] shadow-xl bg-white ring-1 ring-black/5">
            <!-- Browser Header Bar -->
            <div class="flex items-center justify-between px-4 py-3 bg-[#F8FAFC] border-b border-[#E2EAE6]">
              <div class="flex items-center gap-1.5">
                <span class="w-2.5 h-2.5 rounded-full bg-[#FF5F56]" />
                <span class="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]" />
                <span class="w-2.5 h-2.5 rounded-full bg-[#27C93F]" />
              </div>

              <!-- Address Bar -->
              <div class="flex-1 max-w-xs mx-4">
                <div class="bg-white border border-[#E2EAE6] rounded-lg px-3 py-1 text-xs text-[#455A50] font-mono flex items-center justify-between shadow-2xs">
                  <div class="flex items-center gap-1.5 truncate">
                    <UIcon name="lucide:lock" class="w-3 h-3 text-[#5EC234] shrink-0" />
                    <span class="text-[#11181C] font-semibold">portal.mustaka.id</span>
                    <span class="text-[#7A9589]">/yayasan</span>
                  </div>
                  <span class="inline-flex items-center gap-1 text-[10px] text-[#5EC234] font-semibold">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#5EC234]" />
                    Live
                  </span>
                </div>
              </div>

              <div class="flex items-center gap-2 text-[#7A9589]">
                <UIcon name="lucide:rotate-cw" class="w-3.5 h-3.5" />
              </div>
            </div>

            <!-- Spacious Dashboard Content -->
            <div class="p-6 sm:p-7 bg-[#FAFAFA]">

              <!-- Top: Foundation Bar -->
              <div class="flex flex-wrap items-center justify-between gap-3 pb-5 mb-5 border-b border-[#E2EAE6]">
                <div class="flex items-center gap-3">
                  <div class="w-10 h-10 rounded-xl bg-[#11181C] text-white flex items-center justify-center font-bold text-sm shadow-sm">
                    IU
                  </div>
                  <div>
                    <h2 class="text-sm font-bold text-[#11181C] tracking-tight">
                      Yayasan Ibnu Ummah
                    </h2>
                    <p class="text-xs text-[#5EC234] font-medium flex items-center gap-1.5 mt-0.5">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#5EC234]" />
                      4 Unit Lembaga Terintegrasi
                    </p>
                  </div>
                </div>

                <div class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF7EC] border border-[#C4E3B9] text-xs font-semibold text-[#2D7A14]">
                  <UIcon name="lucide:shield-check" class="w-3.5 h-3.5 text-[#5EC234]" />
                  Multi-Tenant Aktif
                </div>
              </div>

              <!-- 3 Clean Metric Cards (lapang & bernapas) -->
              <div class="grid grid-cols-1 sm:grid-cols-3 gap-3.5 mb-5">
                <div class="bg-white p-4 rounded-xl border border-[#E2EAE6] shadow-2xs">
                  <span class="text-[11px] font-semibold text-[#7A9589] block">Total Siswa Aktif</span>
                  <div class="flex items-baseline gap-2 mt-1">
                    <span class="text-2xl font-extrabold text-[#11181C] tracking-tight">2.480</span>
                    <span class="text-[11px] font-semibold text-[#5EC234] flex items-center">
                      <UIcon name="lucide:trending-up" class="w-3 h-3 mr-0.5" /> +8.4%
                    </span>
                  </div>
                  <span class="text-[10px] text-[#7A9589] mt-1 block">Tercatat di Buku Induk</span>
                </div>

                <div class="bg-white p-4 rounded-xl border border-[#E2EAE6] shadow-2xs">
                  <span class="text-[11px] font-semibold text-[#7A9589] block">Tingkat Kehadiran</span>
                  <div class="flex items-baseline gap-2 mt-1">
                    <span class="text-2xl font-extrabold text-[#11181C] tracking-tight">98.4%</span>
                    <span class="text-[11px] font-semibold text-[#2D7A14] px-1.5 py-0.2 rounded bg-[#EFF7EC]">
                      Tinggi
                    </span>
                  </div>
                  <div class="w-full bg-[#E2EAE6] h-1 rounded-full mt-2 overflow-hidden">
                    <div class="bg-[#5EC234] h-full rounded-full" style="width: 98.4%;" />
                  </div>
                </div>

                <div class="bg-white p-4 rounded-xl border border-[#E2EAE6] shadow-2xs">
                  <span class="text-[11px] font-semibold text-[#7A9589] block">Audit Log &amp; Mutasi</span>
                  <div class="flex items-baseline gap-2 mt-1">
                    <span class="text-2xl font-extrabold text-[#11181C] tracking-tight">100%</span>
                    <span class="text-[11px] font-semibold text-[#5EC234]">Tervalidasi</span>
                  </div>
                  <span class="text-[10px] text-[#7A9589] mt-1 block">Zero Fraud Risk</span>
                </div>
              </div>

              <!-- Units Overview Row (Sederhana & Elegan) -->
              <div class="bg-white rounded-xl border border-[#E2EAE6] p-4 shadow-2xs">
                <div class="flex items-center justify-between mb-3 text-xs font-bold text-[#11181C]">
                  <span>Status Unit Terhubung</span>
                  <span class="text-[#7A9589] font-normal text-[11px]">Tahun Ajaran 2026/2027</span>
                </div>

                <div class="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                  <div class="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#E2EAE6] text-center">
                    <div class="text-[10px] font-bold text-[#7A9589] uppercase">SDIT</div>
                    <div class="text-xs font-bold text-[#11181C] mt-0.5">412 Siswa</div>
                    <div class="text-[10px] text-[#5EC234] font-medium mt-0.5 flex items-center justify-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#5EC234]" /> Sinkron
                    </div>
                  </div>

                  <div class="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#E2EAE6] text-center">
                    <div class="text-[10px] font-bold text-[#7A9589] uppercase">SMP Islam</div>
                    <div class="text-xs font-bold text-[#11181C] mt-0.5">287 Siswa</div>
                    <div class="text-[10px] text-[#5EC234] font-medium mt-0.5 flex items-center justify-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#5EC234]" /> Sinkron
                    </div>
                  </div>

                  <div class="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#E2EAE6] text-center">
                    <div class="text-[10px] font-bold text-[#7A9589] uppercase">SMA Sains</div>
                    <div class="text-xs font-bold text-[#11181C] mt-0.5">198 Siswa</div>
                    <div class="text-[10px] text-[#5EC234] font-medium mt-0.5 flex items-center justify-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#5EC234]" /> Sinkron
                    </div>
                  </div>

                  <div class="p-2.5 rounded-lg bg-[#FAFAFA] border border-[#E2EAE6] text-center">
                    <div class="text-[10px] font-bold text-[#7A9589] uppercase">Pesantren</div>
                    <div class="text-xs font-bold text-[#11181C] mt-0.5">164 Santri</div>
                    <div class="text-[10px] text-[#2D7A14] font-medium mt-0.5 flex items-center justify-center gap-1">
                      <span class="w-1.5 h-1.5 rounded-full bg-[#5EC234]" /> Halaqah
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
