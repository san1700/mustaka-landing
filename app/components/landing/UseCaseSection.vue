<script setup lang="ts">
/**
 * UseCaseSection — Institution Pillars Section.
 * Kontainer gelap 3 kolom:
 * 1. Sekolah Formal K-12
 * 2. Pesantren & Boarding
 * 3. Yayasan Multi-Sekolah
 */

defineEmits<{
  'open-lead-modal': []
}>()

const pillars = [
  {
    id: 'k12',
    icon: 'lucide:school',
    title: 'Sekolah Formal K-12',
    subtitle: 'SD, SMP, SMA, SMK Swasta',
    target: 'Kepala Sekolah & Tim Akademik',
    description: 'Tertib administrasi buku induk siswa, pembagian rombel otomatis, dan pelaporan siap akreditasi tanpa kerumitan.',
    highlights: [
      'Buku Induk Digital Abadi (NIK & NISN)',
      'Manajemen Rombel, Wali Kelas & Mapel',
      'Pelacakan Mutasi Siswa & Dokumen Resmi',
      'Ekspor Format Dapodik & Akreditasi',
      'Kontak Darurat Orang Tua Terverifikasi',
    ],
    ctaText: 'Jadwalkan Demo K-12',
    isPrimary: false,
  },
  {
    id: 'pesantren',
    icon: 'lucide:book-open',
    title: 'Pesantren & Boarding',
    subtitle: 'Ma\'had, Tahfidz & Asrama',
    target: 'Pimpinan Pondok & Mudir',
    description: 'Sistem fleksibel yang memahami dinamika pesantren — tidak memaksa memakai struktur kelas umum yang kaku.',
    highlights: [
      'Pencatatan Halaqah Tahfidz & Mutqin',
      'Kurikulum Kitab Kuning & Asrama',
      'Manajemen Kamar & Santri Berasrama',
      'Pencatatan Pelanggaran & Kedisiplinan',
      'Laporan Perkembangan Santri ke Wali',
    ],
    ctaText: 'Jadwalkan Demo Pesantren',
    isPrimary: false,
  },
  {
    id: 'yayasan',
    icon: 'lucide:building-2',
    title: 'Yayasan Multi-Sekolah',
    subtitle: 'Holding Pendidikan 2+ Unit',
    target: 'Ketua Yayasan & Direktur Pendidikan',
    description: 'Kontrol penuh atas seluruh unit sekolah binaan dari satu layar monitor secara real-time tanpa kecolongan data.',
    highlights: [
      'Satu Pintu Monitor Seluruh Unit Sekolah',
      'Isolasi Data Antar Sekolah Terjamin',
      'Audit Trail Keamanan Tingkat Perbankan',
      'Unlimited Unit Lembaga & Subdomain',
      'Dedicated Account Manager & SLA',
    ],
    ctaText: 'Konsultasi Tim Yayasan',
    isPrimary: true,
  },
]
</script>

<template>
  <section
    id="solusi"
    class="bg-[#FAFAFA] border-b border-[#E2EAE6] scroll-mt-20 py-24 lg:py-32"
    aria-labelledby="solusi-heading"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF7EC] border border-[#C4E3B9] text-xs font-bold text-[#2D7A14] mb-4">
          <UIcon name="lucide:building-2" class="w-3.5 h-3.5" />
          Pilar Institusi
        </span>
        <h2
          id="solusi-heading"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11181C] tracking-tight leading-tight"
        >
          Dirancang untuk 3 Model Lembaga Pendidikan
        </h2>
        <p class="mt-4 text-[#455A50] text-base sm:text-lg leading-relaxed">
          Tidak ada pendekatan satu ukuran untuk semua. Mustaka beradaptasi secara fleksibel dengan model tata kelola lembaga Anda.
        </p>
      </div>

      <!-- Kontainer Gelap 3 Kolom yang Mewah & Lapang -->
      <div class="rounded-3xl bg-[#11181C] p-8 sm:p-12 lg:p-14 shadow-2xl border border-stone-800 relative overflow-hidden">
        <!-- Subtle radial glow decoration -->
        <div
          class="absolute -top-32 right-1/4 w-96 h-96 rounded-full bg-[#5EC234]/15 blur-3xl pointer-events-none"
          aria-hidden="true"
        />
        <div
          class="absolute -bottom-32 left-1/4 w-96 h-96 rounded-full bg-[#5EC234]/10 blur-3xl pointer-events-none"
          aria-hidden="true"
        />

        <div class="relative grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          <div
            v-for="pillar in pillars"
            :key="pillar.id"
            class="flex flex-col justify-between rounded-2xl border p-8 transition-all duration-300"
            :class="[
              pillar.isPrimary
                ? 'bg-white/10 border-[#5EC234] shadow-xl shadow-[#5EC234]/10 ring-1 ring-[#5EC234]/40'
                : 'bg-white/5 border-white/10 hover:border-white/20 hover:bg-white/8',
            ]"
          >
            <div>
              <!-- Badge if primary / yayasan -->
              <div v-if="pillar.isPrimary" class="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#5EC234] text-white text-[10px] font-bold uppercase tracking-wider mb-5">
                <UIcon name="lucide:sparkles" class="w-3 h-3" />
                Paling Diminati Yayasan
              </div>

              <!-- Icon -->
              <div
                class="w-12 h-12 rounded-xl flex items-center justify-center mb-6"
                :class="pillar.isPrimary ? 'bg-[#5EC234] text-white shadow-sm' : 'bg-white/10 text-[#5EC234] border border-white/10'"
              >
                <UIcon :name="pillar.icon" class="w-6 h-6" />
              </div>

              <!-- Titles -->
              <h3 class="text-xl font-extrabold text-white tracking-tight">
                {{ pillar.title }}
              </h3>
              <p class="text-xs text-[#5EC234] font-semibold mt-1">
                {{ pillar.subtitle }}
              </p>
              <p class="text-xs sm:text-sm text-[#A3C9A8] mt-3.5 leading-relaxed">
                {{ pillar.description }}
              </p>

              <!-- Persona Target -->
              <div class="inline-flex items-center gap-1.5 mt-4 px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-stone-300">
                <UIcon name="lucide:user-check" class="w-3.5 h-3.5 text-[#5EC234]" />
                <span>{{ pillar.target }}</span>
              </div>

              <!-- Highlights list -->
              <div class="mt-7 pt-6 border-t border-white/10 space-y-3">
                <div
                  v-for="h in pillar.highlights"
                  :key="h"
                  class="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300"
                >
                  <UIcon name="lucide:check-circle-2" class="w-4 h-4 text-[#5EC234] shrink-0 mt-0.5" />
                  <span class="leading-snug">{{ h }}</span>
                </div>
              </div>
            </div>

            <!-- CTA Button -->
            <div class="mt-8 pt-6 border-t border-white/10">
              <button
                class="w-full py-3.5 px-4 rounded-xl text-sm font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                :class="[
                  pillar.isPrimary
                    ? 'bg-[#5EC234] hover:bg-[#4BAB26] text-white shadow-md shadow-[#5EC234]/25'
                    : 'bg-white/10 hover:bg-white/20 text-white border border-white/15',
                ]"
                @click="$emit('open-lead-modal')"
              >
                <UIcon name="lucide:calendar" class="w-4 h-4" />
                <span>{{ pillar.ctaText }}</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
