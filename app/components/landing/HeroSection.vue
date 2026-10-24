<script setup lang="ts">
/**
 * HeroSection — Bold editorial hero with Figma exact specifications:
 *   Left:
 *     - Pill badge
 *     - Headline with green highlighted "Ekosistem Sekolah & Pesantren Anda."
 *     - Sub-copy
 *     - 2 CTA buttons ("Jadwalkan Demo Gratis" & "Jelajahi Fitur")
 *     - Trust micro-signals
 *   Right:
 *     - portal.mustaka.id interactive browser card (pure HTML/Tailwind)
 *     - "Profil Siswa 360° - Muhammad Raihan (Kelas 9A)"
 *     - Metrik "Tingkat Kehadiran 98.4%"
 *     - "Halaqah Tahfidz Juz 28-30"
 *     - "Yayasan Ibnu Ummah (+4 Unit Terhubung)"
 *     - 3 floating pill badges:
 *       1. "Yayasan Multi-Unit"
 *       2. "Audit Kelas Bank"
 *       3. "Rombel & Halaqah"
 */

defineEmits<{
  'open-lead-modal': []
}>()

const activeTab = ref<'profil' | 'akademik' | 'audit'>('profil')
</script>

<template>
  <section
    class="relative bg-[#FAFAFA] overflow-hidden"
    aria-labelledby="hero-headline"
  >
    <!-- Background subtle grid -->
    <div
      class="absolute inset-0 pointer-events-none opacity-[0.02]"
      style="background-image: radial-gradient(#11181C 1px, transparent 1px); background-size: 32px 32px;"
      aria-hidden="true"
    />

    <!-- Top green brand line -->
    <div class="absolute top-0 left-0 right-0 h-[3px] bg-[#5EC234]" aria-hidden="true" />

    <div class="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-20 lg:pt-24 lg:pb-28">
      <div class="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-10 items-center">

        <!-- ── Left: Copy & Actions ──────────────────────────────── -->
        <div class="lg:col-span-5 max-w-xl">
          <!-- Animated pill badge -->
          <div class="inline-flex items-center gap-2 mb-6 px-3.5 py-1.5 rounded-full bg-[#EFF7EC] border border-[#C4E3B9]">
            <span class="w-2 h-2 rounded-full bg-[#5EC234] animate-pulse shrink-0" />
            <span class="text-xs font-bold text-[#2D7A14] tracking-tight">Mustaka EduOS v2.4</span>
            <span class="text-[#C4E3B9]">·</span>
            <span class="text-xs font-medium text-[#3D7A55]">Sistem Operasi Pendidikan</span>
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
          <div class="flex flex-col sm:flex-row gap-3">
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

        <!-- ── Right: Interactive portal.mustaka.id Card + Floating Pills ── -->
        <div class="lg:col-span-7 relative">

          <!-- Floating Pill Badge 1: Yayasan Multi-Unit (Top Left) -->
          <div
            class="absolute -top-5 left-4 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-white border border-[#C4E3B9] shadow-lg text-xs font-bold text-[#11181C] animate-float select-none"
            style="animation-duration: 4s;"
          >
            <div class="w-6 h-6 rounded-full bg-[#EFF7EC] flex items-center justify-center text-[#5EC234]">
              <UIcon name="lucide:building-2" class="w-3.5 h-3.5" />
            </div>
            <span>Yayasan Multi-Unit</span>
          </div>

          <!-- Floating Pill Badge 2: Audit Kelas Bank (Top Right) -->
          <div
            class="absolute -top-4 right-2 sm:right-6 z-20 flex items-center gap-2 px-3.5 py-2 rounded-full bg-[#11181C] text-white border border-stone-800 shadow-xl text-xs font-bold animate-float select-none"
            style="animation-duration: 5s; animation-delay: 1s;"
          >
            <div class="w-6 h-6 rounded-full bg-[#5EC234]/20 flex items-center justify-center text-[#5EC234]">
              <UIcon name="lucide:shield-check" class="w-3.5 h-3.5" />
            </div>
            <span>Audit Kelas Bank</span>
            <span class="w-1.5 h-1.5 rounded-full bg-[#5EC234] animate-ping" />
          </div>

          <!-- Floating Pill Badge 3: Rombel & Halaqah (Bottom Right) -->
          <div
            class="absolute -bottom-5 right-4 sm:right-8 z-20 flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#C4E3B9] shadow-lg text-xs font-bold text-[#2D7A14] animate-float select-none"
            style="animation-duration: 4.5s; animation-delay: 2s;"
          >
            <div class="w-6 h-6 rounded-full bg-[#EFF7EC] flex items-center justify-center text-[#5EC234]">
              <UIcon name="lucide:book-open" class="w-3.5 h-3.5" />
            </div>
            <span>Rombel &amp; Halaqah</span>
          </div>

          <!-- Browser Chrome Wrapper -->
          <div class="relative rounded-2xl overflow-hidden border border-[#E2EAE6] shadow-2xl bg-white ring-1 ring-black/5">
            <!-- Browser Header Bar -->
            <div class="flex items-center justify-between px-4 py-3 bg-[#F3F8F5] border-b border-[#E2EAE6]">
              <div class="flex items-center gap-1.5">
                <span class="w-3 h-3 rounded-full bg-[#FF5F56] inline-block border border-[#E0443E]" />
                <span class="w-3 h-3 rounded-full bg-[#FFBD2E] inline-block border border-[#DEA123]" />
                <span class="w-3 h-3 rounded-full bg-[#27C93F] inline-block border border-[#1AAB29]" />
              </div>

              <!-- Address Bar -->
              <div class="flex-1 max-w-sm mx-3">
                <div class="bg-white border border-[#E2EAE6] rounded-lg px-3 py-1.5 text-xs text-[#455A50] font-mono flex items-center justify-between shadow-2xs">
                  <div class="flex items-center gap-2 truncate">
                    <UIcon name="lucide:lock" class="w-3 h-3 text-[#5EC234] shrink-0" />
                    <span class="text-[#11181C] font-semibold">portal.mustaka.id</span>
                    <span class="text-[#7A9589]">/siswa/360</span>
                  </div>
                  <span class="inline-flex items-center gap-1 text-[10px] text-[#5EC234] font-medium shrink-0">
                    <span class="w-1.5 h-1.5 rounded-full bg-[#5EC234]" />
                    Live
                  </span>
                </div>
              </div>

              <!-- Action icons -->
              <div class="flex items-center gap-2 text-[#7A9589]">
                <UIcon name="lucide:rotate-cw" class="w-3.5 h-3.5" />
                <UIcon name="lucide:maximize-2" class="w-3.5 h-3.5 hidden sm:block" />
              </div>
            </div>

            <!-- Portal Card Content -->
            <div class="p-5 sm:p-6 bg-[#FAFAFA]">

              <!-- Top Bar: Yayasan Multi-Unit Connection Tag -->
              <div class="flex flex-wrap items-center justify-between gap-2 pb-4 mb-4 border-b border-[#E2EAE6]">
                <div class="flex items-center gap-2">
                  <div class="w-7 h-7 rounded-lg bg-[#11181C] text-white flex items-center justify-center font-bold text-xs">
                    IU
                  </div>
                  <div>
                    <div class="text-xs font-bold text-[#11181C]">
                      Yayasan Ibnu Ummah
                    </div>
                    <div class="text-[10px] text-[#5EC234] font-semibold flex items-center gap-1">
                      <span class="w-1 h-1 rounded-full bg-[#5EC234]" />
                      +4 Unit Terhubung (SD, SMP, SMA, Pesantren)
                    </div>
                  </div>
                </div>

                <div class="inline-flex items-center gap-1 px-2.5 py-1 rounded-md bg-[#EFF7EC] border border-[#C4E3B9] text-[11px] font-bold text-[#2D7A14]">
                  <UIcon name="lucide:check-circle-2" class="w-3.5 h-3.5 text-[#5EC234]" />
                  Multi-Tenant Aktif
                </div>
              </div>

              <!-- Main Card: Profil Siswa 360° -->
              <div class="bg-white rounded-xl border border-[#E2EAE6] p-4 sm:p-5 shadow-xs mb-4">
                <div class="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-[#F3F8F5]">
                  <div class="flex items-center gap-3.5">
                    <!-- Avatar with initials -->
                    <div class="relative">
                      <div class="w-12 h-12 rounded-xl bg-gradient-to-br from-[#11181C] to-[#214D28] text-white flex items-center justify-center font-extrabold text-base shadow-sm">
                        MR
                      </div>
                      <span class="absolute -bottom-1 -right-1 w-4 h-4 rounded-full bg-[#5EC234] border-2 border-white flex items-center justify-center">
                        <UIcon name="lucide:check" class="w-2.5 h-2.5 text-white" />
                      </span>
                    </div>

                    <div>
                      <div class="flex items-center gap-2">
                        <span class="text-[10px] font-bold uppercase tracking-wider px-1.5 py-0.5 rounded bg-[#EFF7EC] text-[#2D7A14] border border-[#C4E3B9]">
                          Profil Siswa 360°
                        </span>
                        <span class="text-[10px] font-mono text-[#7A9589]">NISN: 0084921049</span>
                      </div>
                      <h2 class="text-base sm:text-lg font-extrabold text-[#11181C] tracking-tight mt-0.5">
                        Muhammad Raihan
                        <span class="text-xs font-semibold text-[#455A50] font-normal">(Kelas 9A)</span>
                      </h2>
                    </div>
                  </div>

                  <!-- Status Pill -->
                  <div class="flex items-center gap-2">
                    <span class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#EFF7EC] text-[#2D7A14] text-xs font-bold border border-[#C4E3B9]">
                      <span class="w-2 h-2 rounded-full bg-[#5EC234]" />
                      Siswa Aktif
                    </span>
                  </div>
                </div>

                <!-- 2 Key Metrics Display: Kehadiran 98.4% & Halaqah Tahfidz Juz 28-30 -->
                <div class="grid grid-cols-1 sm:grid-cols-2 gap-3.5 mt-4">

                  <!-- Metric 1: Tingkat Kehadiran 98.4% -->
                  <div class="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E2EAE6]">
                    <div class="flex items-center justify-between text-xs text-[#7A9589] font-medium mb-1">
                      <span class="flex items-center gap-1.5">
                        <UIcon name="lucide:calendar-check" class="w-3.5 h-3.5 text-[#5EC234]" />
                        Tingkat Kehadiran
                      </span>
                      <span class="text-[10px] font-bold text-[#2D7A14] px-1.5 py-0.2 rounded bg-[#EFF7EC]">
                        Semester Genap
                      </span>
                    </div>
                    <div class="flex items-baseline gap-2 mt-1">
                      <span class="text-2xl font-extrabold text-[#11181C] tracking-tight font-sans">
                        98.4%
                      </span>
                      <span class="text-xs font-semibold text-[#5EC234] flex items-center">
                        <UIcon name="lucide:trending-up" class="w-3.5 h-3.5 mr-0.5" />
                        Disiplin Tinggi
                      </span>
                    </div>
                    <!-- Mini progress meter -->
                    <div class="w-full bg-[#E2EAE6] h-1.5 rounded-full mt-2 overflow-hidden">
                      <div class="bg-[#5EC234] h-full rounded-full" style="width: 98.4%;" />
                    </div>
                  </div>

                  <!-- Metric 2: Halaqah Tahfidz Juz 28-30 -->
                  <div class="p-3.5 rounded-xl bg-[#FAFAFA] border border-[#E2EAE6]">
                    <div class="flex items-center justify-between text-xs text-[#7A9589] font-medium mb-1">
                      <span class="flex items-center gap-1.5">
                        <UIcon name="lucide:bookmark-check" class="w-3.5 h-3.5 text-[#5EC234]" />
                        Halaqah Tahfidz
                      </span>
                      <span class="text-[10px] font-bold text-[#11181C] px-1.5 py-0.2 rounded bg-white border border-[#E2EAE6]">
                        Ust. Mansur
                      </span>
                    </div>
                    <div class="flex items-baseline gap-2 mt-1">
                      <span class="text-lg sm:text-xl font-extrabold text-[#11181C] tracking-tight">
                        Juz 28–30
                      </span>
                      <span class="text-xs font-semibold text-[#2D7A14] px-1.5 py-0.5 rounded bg-[#EFF7EC]">
                        Mutqin
                      </span>
                    </div>
                    <div class="text-[11px] text-[#455A50] mt-1.5 flex items-center gap-1 truncate">
                      <UIcon name="lucide:check" class="w-3 h-3 text-[#5EC234] shrink-0" />
                      <span>Setoran terakhir: Surat Al-Mulk (Lancar)</span>
                    </div>
                  </div>

                </div>

                <!-- Secondary details row -->
                <div class="mt-3.5 pt-3.5 border-t border-[#F3F8F5] grid grid-cols-2 sm:grid-cols-3 gap-2 text-xs">
                  <div>
                    <span class="text-[10px] uppercase font-bold tracking-wider text-[#7A9589] block">Wali Murid</span>
                    <span class="text-[#11181C] font-semibold truncate block">Hendra Gunawan</span>
                    <span class="text-[10px] text-[#5EC234] font-medium">Kontak Darurat (WA Aktif)</span>
                  </div>
                  <div>
                    <span class="text-[10px] uppercase font-bold tracking-wider text-[#7A9589] block">Wali Kelas</span>
                    <span class="text-[#11181C] font-semibold truncate block">Ahmad Fauzi, M.Pd</span>
                    <span class="text-[10px] text-[#7A9589]">Rombel 9A Reguler</span>
                  </div>
                  <div class="col-span-2 sm:col-span-1">
                    <span class="text-[10px] uppercase font-bold tracking-wider text-[#7A9589] block">Audit Log Terakhir</span>
                    <span class="text-[#11181C] font-mono text-[11px] block truncate">Mutasi 8A &rarr; 9A</span>
                    <span class="text-[10px] text-[#7A9589]">Tervalidasi TU (Immutable)</span>
                  </div>
                </div>
              </div>

              <!-- Quick action footer within card -->
              <div class="flex items-center justify-between text-xs px-2 text-[#7A9589]">
                <span class="flex items-center gap-1.5">
                  <UIcon name="lucide:database" class="w-3.5 h-3.5 text-[#5EC234]" />
                  <span>Enkripsi Row-Level Security</span>
                </span>
                <span class="font-mono text-[11px]">Database ID: std_9a_0084</span>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  </section>
</template>
