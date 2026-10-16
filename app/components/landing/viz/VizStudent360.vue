<script setup lang="ts">
// Sub-visualisasi: Profil Siswa 360 — kartu identitas lengkap dengan NIK, NISN,
// data keluarga berlapis, badge status, dan kontak darurat.

interface Guardian {
  role: string
  name: string
  nik: string
  phone: string
  isPrimary?: boolean
  isEmergency?: boolean
}

interface StudentProfile {
  id: string
  fullName: string
  nisn: string
  nik: string
  status: 'ACTIVE' | 'TRANSFERRED' | 'GRADUATED' | 'DROPPED'
  enrolledAt: string
  learningGroup: string
  academicYear: string
  birthDate: string
  birthPlace: string
  guardians: Guardian[]
}

const profile: StudentProfile = {
  id: 'STD-2024-0272',
  fullName: 'Muhammad Arif Bintang Ramadhan',
  nisn: '0094728833',
  nik: '3578010204110002',
  status: 'ACTIVE',
  enrolledAt: '2024-07-15',
  learningGroup: 'Kelas 8-A',
  academicYear: '2025/2026',
  birthDate: '2 April 2011',
  birthPlace: 'Surabaya',
  guardians: [
    {
      role: 'Ayah',
      name: 'Ramadhan Kusuma, S.T.',
      nik: '3578011504800005',
      phone: '+62 812-3456-7890',
      isPrimary: true,
    },
    {
      role: 'Ibu',
      name: 'Dewi Anggraeni, S.Pd.',
      nik: '3578016508820003',
      phone: '+62 856-9876-5432',
    },
    {
      role: 'Wali Darurat',
      name: 'Ir. Suwandi (Paman)',
      nik: '3578011012750001',
      phone: '+62 821-1122-3344',
      isEmergency: true,
    },
  ],
}

const statusConfig: Record<StudentProfile['status'], { label: string; cls: string }> = {
  ACTIVE: { label: 'ACTIVE', cls: 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200' },
  TRANSFERRED: { label: 'TRANSFERRED', cls: 'bg-blue-50 text-blue-700 ring-1 ring-blue-200' },
  GRADUATED: { label: 'GRADUATED', cls: 'bg-purple-50 text-purple-700 ring-1 ring-purple-200' },
  DROPPED: { label: 'DROPPED', cls: 'bg-red-50 text-red-700 ring-1 ring-red-200' },
}
</script>

<template>
  <div class="rounded-lg border border-stone-200 overflow-hidden bg-white text-sm">
    <!-- Card header -->
    <div class="px-5 py-4 border-b border-stone-200 bg-stone-50 flex items-start justify-between gap-4">
      <div>
        <p class="text-[11px] font-medium text-stone-400 uppercase tracking-widest mb-0.5 font-mono">
          {{ profile.id }}
        </p>
        <h3 class="text-base font-semibold text-stone-900 tracking-tight leading-tight">
          {{ profile.fullName }}
        </h3>
        <p class="text-xs text-stone-500 mt-0.5">
          {{ profile.learningGroup }} · TA {{ profile.academicYear }}
        </p>
      </div>
      <span
        class="shrink-0 text-[11px] font-semibold font-mono px-2.5 py-1 rounded-full"
        :class="statusConfig[profile.status].cls"
      >
        {{ statusConfig[profile.status].label }}
      </span>
    </div>

    <!-- Identity grid -->
    <div class="grid grid-cols-2 gap-0 divide-y divide-stone-50">
      <div class="px-5 py-3 border-r border-stone-100">
        <p class="text-[10px] font-medium text-stone-400 uppercase tracking-widest">NISN</p>
        <p class="font-mono text-stone-800 tabular-nums text-xs mt-0.5">{{ profile.nisn }}</p>
      </div>
      <div class="px-5 py-3">
        <p class="text-[10px] font-medium text-stone-400 uppercase tracking-widest">NIK</p>
        <p class="font-mono text-stone-800 tabular-nums text-xs mt-0.5">{{ profile.nik }}</p>
      </div>
      <div class="px-5 py-3 border-r border-stone-100">
        <p class="text-[10px] font-medium text-stone-400 uppercase tracking-widest">Tanggal Lahir</p>
        <p class="text-stone-800 text-xs mt-0.5">{{ profile.birthDate }}, {{ profile.birthPlace }}</p>
      </div>
      <div class="px-5 py-3">
        <p class="text-[10px] font-medium text-stone-400 uppercase tracking-widest">Terdaftar</p>
        <p class="font-mono text-stone-800 tabular-nums text-xs mt-0.5">{{ profile.enrolledAt }}</p>
      </div>
    </div>

    <!-- Guardians section -->
    <div class="border-t border-stone-200">
      <p class="text-[10px] font-medium text-stone-400 uppercase tracking-widest px-5 pt-3 pb-1.5">
        Data Keluarga &amp; Wali
      </p>
      <ul class="divide-y divide-stone-50">
        <li
          v-for="g in profile.guardians"
          :key="g.nik"
          class="flex items-center gap-3 px-5 py-2.5"
        >
          <div
            class="w-7 h-7 rounded-full bg-stone-100 border border-stone-200 flex items-center justify-center shrink-0"
          >
            <UIcon name="lucide:user" class="w-3.5 h-3.5 text-stone-400" />
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2 flex-wrap">
              <span class="text-xs font-medium text-stone-800 truncate">{{ g.name }}</span>
              <span
                v-if="g.isPrimary"
                class="text-[9px] font-semibold bg-stone-100 text-stone-500 px-1.5 py-0.5 rounded"
              >
                Kontak Utama
              </span>
              <span
                v-if="g.isEmergency"
                class="text-[9px] font-semibold bg-amber-50 text-amber-700 ring-1 ring-amber-200 px-1.5 py-0.5 rounded"
              >
                Kontak Darurat
              </span>
            </div>
            <p class="text-[10px] text-stone-400 font-mono tabular-nums mt-0.5">
              {{ g.role }} · {{ g.phone }}
            </p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
