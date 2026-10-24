<script setup lang="ts">
/**
 * PricingSection — 3 Kartu Harga:
 * 1. Starter (Paket Sekolah Mandiri)
 * 2. Pro (Paket Sekolah Unggulan) -> Highlight GELAP / Populer (#11181C + #5EC234)
 * 3. Enterprise (Paket Yayasan & Multi-Sekolah)
 */

defineEmits<{
  'open-lead-modal': []
}>()

const tiers = [
  {
    id: 'starter',
    name: 'Sekolah Mandiri (Starter)',
    tagline: 'UNTUK 1 UNIT SEKOLAH KECIL',
    target: 'SD/SMP/Madrasah swasta di bawah 250 siswa yang ingin tertib administrasi.',
    priceLabel: 'Mulai Terjangkau',
    priceNote: 'Disesuaikan per jumlah siswa aktif / tahun',
    isPopular: false,
    features: [
      'Buku Induk Profil Siswa 360° Lengkap',
      'Pembagian Rombel & Kelas Dinamis',
      'Akun Guru, Staf TU, & Wali Kelas',
      'Portal Berita & Pengumuman Resmi',
      'Panduan Penggunaan Digital & Template Excel',
      'Penyimpanan Cloud Terenkripsi',
    ],
    cta: 'Mulai Konsultasi Gratis',
    ctaVariant: 'secondary',
  },
  {
    id: 'pro',
    name: 'Sekolah Unggulan (Pro)',
    tagline: 'PALING DIMINATI SEKOLAH & PESANTREN',
    target: 'Sekolah Swasta Menengah & Pesantren (250 – 800 siswa) butuh sistem mutakhir.',
    priceLabel: 'Paket Terpopuler',
    priceNote: 'Investasi terbaik dengan pendampingan penuh',
    isPopular: true, // HIGHLIGHT GELAP / POPULER
    features: [
      'Seluruh fitur Paket Starter',
      'Audit Log Keamanan Tingkat Perbankan (Immutable)',
      'Modul Halaqah Pesantren & Kelompok Belajar',
      'Multi-Kontak Orang Tua & Penandaan Darurat',
      'Pendampingan Migrasi Data dari Excel sampai Tuntas',
      'Prioritas Dukungan Teknis via WhatsApp Eksklusif',
      'Pelatihan Guru & Staf via Zoom Interaktif',
    ],
    cta: 'Jadwalkan Sesi Demo',
    ctaVariant: 'primary',
  },
  {
    id: 'enterprise',
    name: 'Yayasan & Multi-Sekolah',
    tagline: 'HOLDING & YAYASAN BESAR',
    target: 'Yayasan Pendidikan menaungi 2 atau lebih unit sekolah / kampus.',
    priceLabel: 'Solusi Kustom',
    priceNote: 'Arsitektur terpusat untuk multi-lembaga',
    isPopular: false,
    features: [
      'Seluruh fitur Paket Pro',
      'Dashboard Yayasan Multi-Tenant Terpusat',
      'Unlimited Unit Sekolah (TK, SD, SMP, SMA, Pesantren)',
      'Custom Subdomain & Identitas Sekolah',
      'Pelatihan Staf Tatap Muka / On-Site',
      'Dedicated Account Manager Khusus',
      'Service Level Agreement (SLA) & Backup Khusus',
    ],
    cta: 'Hubungi Tim Enterprise',
    ctaVariant: 'secondary',
  },
]
</script>

<template>
  <section
    id="harga"
    class="bg-white border-b border-[#E2EAE6] scroll-mt-20 py-20 lg:py-28"
    aria-label="Pilihan Paket & Investasi"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="max-w-2xl mx-auto text-center mb-16">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF7EC] border border-[#C4E3B9] text-xs font-bold text-[#2D7A14] mb-4">
          <UIcon name="lucide:tag" class="w-3.5 h-3.5" />
          Investasi Transparan
        </span>
        <h2 class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11181C] tracking-tight leading-tight">
          Paket Investasi yang Jelas &amp; Sesuai Kebutuhan
        </h2>
        <p class="mt-4 text-base sm:text-lg text-[#455A50] leading-relaxed">
          Pilih paket yang paling sesuai dengan skala dan rencana pertumbuhan institusi pendidikan Anda.
        </p>
      </div>

      <!-- 3 Kartu Harga -->
      <div class="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
        <div
          v-for="tier in tiers"
          :key="tier.id"
          class="relative flex flex-col justify-between rounded-3xl p-8 sm:p-9 transition-all duration-300"
          :class="[
            tier.isPopular
              ? 'bg-[#11181C] text-white border-2 border-[#5EC234] shadow-2xl scale-[1.02] lg:-translate-y-2'
              : 'bg-[#FAFAFA] text-[#11181C] border border-[#E2EAE6] hover:border-[#C4E3B9] hover:shadow-lg',
          ]"
        >
          <!-- Popular Badge for Pro Tier -->
          <div
            v-if="tier.isPopular"
            class="absolute -top-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#5EC234] text-white text-xs font-extrabold tracking-wider uppercase shadow-md flex items-center gap-1.5"
          >
            <UIcon name="lucide:flame" class="w-3.5 h-3.5" />
            Paling Populer
          </div>

          <div>
            <!-- Tagline / Badge -->
            <div class="mb-4">
              <span
                class="text-[10px] font-bold tracking-wider uppercase px-2.5 py-1 rounded-md"
                :class="tier.isPopular ? 'bg-white/10 text-[#5EC234]' : 'bg-[#EFF7EC] text-[#2D7A14] border border-[#C4E3B9]'"
              >
                {{ tier.tagline }}
              </span>
            </div>

            <!-- Tier Name -->
            <h3
              class="text-2xl font-extrabold tracking-tight"
              :class="tier.isPopular ? 'text-white' : 'text-[#11181C]'"
            >
              {{ tier.name }}
            </h3>

            <p
              class="text-xs sm:text-sm mt-3 leading-relaxed"
              :class="tier.isPopular ? 'text-stone-300' : 'text-[#455A50]'"
            >
              {{ tier.target }}
            </p>

            <!-- Price Box -->
            <div
              class="py-5 my-6 border-y"
              :class="tier.isPopular ? 'border-white/10' : 'border-[#E2EAE6]'"
            >
              <div
                class="text-3xl font-extrabold tracking-tight"
                :class="tier.isPopular ? 'text-white' : 'text-[#11181C]'"
              >
                {{ tier.priceLabel }}
              </div>
              <div
                class="text-xs mt-1"
                :class="tier.isPopular ? 'text-[#5EC234]' : 'text-[#7A9589]'"
              >
                {{ tier.priceNote }}
              </div>
            </div>

            <!-- Feature list -->
            <div class="space-y-3 mb-8">
              <p
                class="text-xs font-bold uppercase tracking-wider"
                :class="tier.isPopular ? 'text-[#5EC234]' : 'text-[#11181C]'"
              >
                Fitur Unggulan:
              </p>
              <ul class="space-y-2.5 text-xs sm:text-sm">
                <li
                  v-for="(f, idx) in tier.features"
                  :key="idx"
                  class="flex items-start gap-2.5"
                >
                  <UIcon
                    name="lucide:check-circle-2"
                    class="w-4 h-4 shrink-0 mt-0.5"
                    :class="tier.isPopular ? 'text-[#5EC234]' : 'text-[#5EC234]'"
                  />
                  <span :class="tier.isPopular ? 'text-stone-200' : 'text-[#455A50]'">
                    {{ f }}
                  </span>
                </li>
              </ul>
            </div>
          </div>

          <!-- CTA Button -->
          <div class="pt-6 border-t" :class="tier.isPopular ? 'border-white/10' : 'border-[#E2EAE6]'">
            <button
              class="w-full py-3.5 px-4 rounded-xl font-bold text-sm transition-all duration-200 text-center flex items-center justify-center gap-2 cursor-pointer"
              :class="[
                tier.isPopular
                  ? 'bg-[#5EC234] hover:bg-[#4BAB26] text-white shadow-lg shadow-[#5EC234]/30'
                  : 'bg-white hover:bg-[#EFF7EC] text-[#11181C] border border-[#E2EAE6] hover:border-[#5EC234]',
              ]"
              @click="$emit('open-lead-modal')"
            >
              <UIcon name="lucide:calendar" class="w-4 h-4" />
              <span>{{ tier.cta }}</span>
            </button>
          </div>
        </div>
      </div>

      <!-- Trust note below pricing -->
      <div class="mt-14 text-center max-w-2xl mx-auto p-4 rounded-2xl bg-[#F3F8F5] border border-[#E2EAE6] text-xs text-[#455A50]">
        <p class="font-semibold text-[#11181C]">Butuh implementasi khusus untuk yayasan dengan lebih dari 5 unit sekolah?</p>
        <p class="mt-1">Tim solusi Mustaka siap menyusun arsitektur multi-tenant khusus dengan jaminan migrasi data 100% aman.</p>
      </div>
    </div>
  </section>
</template>
