<script setup lang="ts">
/**
 * TransformationSection — Komparasi Masalah & Transformasi Nyata.
 * Menggabungkan masalah operasional dan transformasi menjadi satu perbandingan tajam:
 * Cara Lama (Excel Tercecer) vs Dengan Mustaka (Cloud Terpusat).
 */

const comparisons = [
  {
    title: 'Penyimpanan & Akses Data Kesiswaan',
    oldWay: 'File tersimpan di berbagai laptop staf; rawan hilang saat perangkat rusak atau pergantian operator.',
    newWay: 'Satu pusat data cloud terenkripsi. Hak akses ketat, dapat diakses kapan saja dari perangkat apa pun.',
  },
  {
    title: 'Pelacakan Mutasi Siswa & Akreditasi',
    oldWay: 'Riwayat siswa keluar, pindah, atau lulus tidak terdokumentasi rapi, menyulitkan verifikasi akreditasi.',
    newWay: 'Rekam jejak mutasi abadi dengan tanggal efektif, alasan resmi, dan dokumen pendukung siap audit.',
  },
  {
    title: 'Pengawasan Unit Pendidikan oleh Yayasan',
    oldWay: 'Yayasan menunggu laporan fisik akhir bulan yang lambat dan rentan salah hitung.',
    newWay: 'Dashboard yayasan multi-tenant real-time. Pantau seluruh sekolah dan pesantren dari satu layar.',
  },
  {
    title: 'Fleksibilitas Kurikulum & Pesantren',
    oldWay: 'Aplikasi sekolah umum terlalu kaku, tidak bisa mencatat halaqah tahfidz atau kajian kitab pesantren.',
    newWay: 'Dukungan fleksibel untuk rombel formal K-12 maupun halaqah tahfidz dan sistem asrama.',
  },
  {
    title: 'Keamanan Data & Integritas Nilai',
    oldWay: 'Perubahan nilai atau status siswa tidak memiliki jejak riwayat; rawan manipulasi internal.',
    newWay: 'Audit trail kelas perbankan (immutable). Mencatat pelaku, waktu, dan riwayat perubahan data.',
  },
]
</script>

<template>
  <section
    id="transformasi"
    class="relative bg-white border-b border-[#E2EAE6] scroll-mt-20 py-24 lg:py-32"
    aria-labelledby="transformasi-heading"
  >
    <!-- Anchor alias for #masalah -->
    <span id="masalah" class="absolute -top-20" aria-hidden="true" />
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Section Header -->
      <div class="text-center max-w-3xl mx-auto mb-16 lg:mb-20">
        <span class="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#EFF7EC] border border-[#C4E3B9] text-xs font-bold text-[#2D7A14] mb-4">
          <UIcon name="lucide:arrow-right-left" class="w-3.5 h-3.5" />
          Komparasi &amp; Transformasi Nyata
        </span>
        <h2
          id="transformasi-heading"
          class="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-[#11181C] tracking-tight leading-tight"
        >
          Cara Lama (Excel Tercecer)<br class="hidden sm:block" />
          <span class="text-[#5EC234]"> vs Dengan Mustaka (Cloud Terpusat)</span>
        </h2>
        <p class="mt-4 text-[#455A50] text-base sm:text-lg leading-relaxed">
          Bandingkan bagaimana Mustaka mengeliminasi risiko data hilang, laporan berhari-hari, dan birokrasi manual sekolah menjadi satu ekosistem cloud yang otomatis dan transparan.
        </p>
      </div>

      <!-- Comparison Card Table -->
      <div class="max-w-5xl mx-auto rounded-3xl border border-[#E2EAE6] overflow-hidden bg-white shadow-xl">
        <!-- Table Column Headers -->
        <div class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E2EAE6]">
          <!-- Header: Cara Lama -->
          <div class="p-6 sm:p-7 bg-[#FEF2F2]/60 flex items-center gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center text-red-600 shrink-0">
              <UIcon name="lucide:x-circle" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-red-950 tracking-tight">
                Cara Lama &amp; File Excel Tercecer
              </h3>
              <p class="text-xs text-red-600 font-medium mt-0.5">Manual, rawan hilang, &amp; laporan terlambat</p>
            </div>
          </div>

          <!-- Header: Dengan Mustaka -->
          <div class="p-6 sm:p-7 bg-[#EFF7EC] flex items-center gap-3.5">
            <div class="w-10 h-10 rounded-xl bg-[#5EC234] text-white flex items-center justify-center shrink-0 shadow-xs">
              <UIcon name="lucide:check-circle-2" class="w-5 h-5" />
            </div>
            <div>
              <h3 class="text-base sm:text-lg font-bold text-[#11181C] tracking-tight">
                Dengan Mustaka EduOS
              </h3>
              <p class="text-xs text-[#2D7A14] font-semibold mt-0.5">Terpusat di cloud, otomatis, &amp; aman terproteksi</p>
            </div>
          </div>
        </div>

        <!-- Comparison Rows -->
        <div class="divide-y divide-[#E2EAE6]">
          <div
            v-for="(item, idx) in comparisons"
            :key="idx"
            class="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-[#E2EAE6] text-xs sm:text-sm group"
          >
            <!-- Left: Cara Lama -->
            <div class="p-6 sm:p-7 flex items-start gap-4 bg-white group-hover:bg-[#FEF2F2]/20 transition-colors">
              <div class="w-6 h-6 rounded-full bg-red-50 border border-red-200 text-red-500 flex items-center justify-center shrink-0 mt-0.5">
                <UIcon name="lucide:x" class="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-[#7A9589] mb-1">
                  {{ item.title }}
                </h4>
                <p class="text-[#455A50] leading-relaxed">
                  {{ item.oldWay }}
                </p>
              </div>
            </div>

            <!-- Right: Dengan Mustaka -->
            <div class="p-6 sm:p-7 flex items-start gap-4 bg-[#FAFAFA] group-hover:bg-[#EFF7EC]/50 transition-colors">
              <div class="w-6 h-6 rounded-full bg-[#EFF7EC] border border-[#C4E3B9] text-[#5EC234] flex items-center justify-center shrink-0 mt-0.5 font-bold">
                <UIcon name="lucide:check" class="w-3.5 h-3.5" />
              </div>
              <div>
                <h4 class="text-xs font-bold uppercase tracking-wider text-[#2D7A14] mb-1">
                  Solusi Mustaka
                </h4>
                <p class="text-[#11181C] font-semibold leading-relaxed">
                  {{ item.newWay }}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
