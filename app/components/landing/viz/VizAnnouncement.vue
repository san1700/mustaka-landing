<script setup lang="ts">
// Sub-visualisasi: Portal Pengumuman — daftar pengumuman resmi dengan
// metadata target penerima, tanggal terbit, dan status baca.

interface Announcement {
  id: string
  title: string
  category: 'SURAT_EDARAN' | 'AGENDA' | 'DARURAT' | 'INFORMASI'
  targetAudience: string[]
  publishedAt: string
  author: string
  readCount: number
  isPinned: boolean
}

const posts: Announcement[] = [
  {
    id: 'post-001',
    title: 'Surat Edaran: Libur Idul Adha 1447 H & Protokol Kegiatan Qurban',
    category: 'SURAT_EDARAN',
    targetAudience: ['Seluruh Wali Murid', 'Seluruh Staf'],
    publishedAt: '2025-06-02T08:00:00',
    author: 'Tata Usaha',
    readCount: 312,
    isPinned: true,
  },
  {
    id: 'post-002',
    title: 'Jadwal Penerimaan Rapor Semester Genap TA 2024/2025',
    category: 'AGENDA',
    targetAudience: ['Wali Murid Kelas 7', 'Wali Murid Kelas 8'],
    publishedAt: '2025-05-28T10:15:00',
    author: 'Wakasek Kurikulum',
    readCount: 198,
    isPinned: false,
  },
  {
    id: 'post-003',
    title: 'PENTING: Konfirmasi Data Kontak Wali Murid sebelum 10 Juni 2025',
    category: 'DARURAT',
    targetAudience: ['Seluruh Wali Murid'],
    publishedAt: '2025-05-25T13:30:00',
    author: 'Kepala Sekolah',
    readCount: 401,
    isPinned: true,
  },
  {
    id: 'post-004',
    title: 'Pengumuman Seleksi Ekstrakurikuler Paskibra TA 2025/2026',
    category: 'INFORMASI',
    targetAudience: ['Siswa Kelas 7 & 8'],
    publishedAt: '2025-05-20T09:00:00',
    author: 'Kesiswaan',
    readCount: 87,
    isPinned: false,
  },
]

function formatDate(iso: string): string {
  return new Date(iso).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  })
}

const categoryConfig: Record<Announcement['category'], { label: string; cls: string; icon: string }> = {
  SURAT_EDARAN: { label: 'Surat Edaran', cls: 'bg-blue-50 text-blue-700', icon: 'lucide:file-text' },
  AGENDA: { label: 'Agenda', cls: 'bg-violet-50 text-violet-700', icon: 'lucide:calendar' },
  DARURAT: { label: 'Darurat', cls: 'bg-red-50 text-red-700', icon: 'lucide:triangle-alert' },
  INFORMASI: { label: 'Informasi', cls: 'bg-stone-100 text-stone-600', icon: 'lucide:info' },
}
</script>

<template>
  <div class="rounded-lg border border-stone-200 overflow-hidden bg-white text-xs">
    <!-- Header -->
    <div class="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 bg-stone-50">
      <UIcon name="lucide:megaphone" class="w-3.5 h-3.5 text-stone-400 shrink-0" />
      <span class="text-stone-500 font-sans text-[11px] font-medium tracking-wide uppercase">
        Portal Pengumuman Resmi
      </span>
      <span class="ml-auto text-[10px] text-stone-400 tabular-nums">{{ posts.length }} pengumuman aktif</span>
    </div>

    <!-- Post list -->
    <ul class="divide-y divide-stone-50">
      <li
        v-for="post in posts"
        :key="post.id"
        class="px-4 py-3 hover:bg-stone-50/70 transition-colors"
      >
        <div class="flex items-start gap-2.5">
          <!-- Pin & category icon -->
          <div class="shrink-0 pt-0.5">
            <UIcon
              v-if="post.isPinned"
              name="lucide:pin"
              class="w-3 h-3 text-amber-500"
            />
            <UIcon
              v-else
              :name="categoryConfig[post.category].icon"
              class="w-3 h-3 text-stone-300"
            />
          </div>

          <div class="flex-1 min-w-0">
            <!-- Title -->
            <p class="text-stone-800 font-medium text-[11px] leading-snug">
              {{ post.title }}
            </p>

            <!-- Meta row -->
            <div class="flex items-center gap-2 mt-1.5 flex-wrap">
              <span
                class="text-[9px] font-semibold px-1.5 py-0.5 rounded"
                :class="categoryConfig[post.category].cls"
              >
                {{ categoryConfig[post.category].label }}
              </span>
              <span
                v-for="aud in post.targetAudience"
                :key="aud"
                class="text-[9px] bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded"
              >
                {{ aud }}
              </span>
            </div>

            <!-- Footer meta -->
            <div class="flex items-center gap-3 mt-1.5 text-stone-400 text-[10px] tabular-nums">
              <span>{{ formatDate(post.publishedAt) }}</span>
              <span>·</span>
              <span>{{ post.author }}</span>
              <span class="ml-auto flex items-center gap-1">
                <UIcon name="lucide:eye" class="w-3 h-3" />
                {{ post.readCount }}
              </span>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
