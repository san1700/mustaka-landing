<script setup lang="ts">
// Sub-visualisasi: Multi-Tenant Yayasan — card grid ringkasan unit sekolah
// dengan indikator status real-time dan metrik jumlah siswa.

interface SchoolUnit {
  id: string
  code: string
  name: string
  type: 'SD' | 'SMP' | 'SMA' | 'SMK' | 'PESANTREN'
  city: string
  studentCount: number
  teacherCount: number
  isOnline: boolean
}

const units: SchoolUnit[] = [
  {
    id: 'u-001',
    code: 'YKSD-01',
    name: 'SD Islam Al-Mustafa',
    type: 'SD',
    city: 'Surabaya',
    studentCount: 412,
    teacherCount: 22,
    isOnline: true,
  },
  {
    id: 'u-002',
    code: 'YKSMP-01',
    name: 'SMP Islam Terpadu',
    type: 'SMP',
    city: 'Surabaya',
    studentCount: 287,
    teacherCount: 18,
    isOnline: true,
  },
  {
    id: 'u-003',
    code: 'YKSMA-01',
    name: 'SMA Unggulan Mustaka',
    type: 'SMA',
    city: 'Sidoarjo',
    studentCount: 198,
    teacherCount: 15,
    isOnline: true,
  },
  {
    id: 'u-004',
    code: 'YKPST-01',
    name: 'Ponpes Darussalam Putri',
    type: 'PESANTREN',
    city: 'Gresik',
    studentCount: 156,
    teacherCount: 11,
    isOnline: false,
  },
]

const typeColor: Record<SchoolUnit['type'], string> = {
  SD: 'bg-amber-50 text-amber-700',
  SMP: 'bg-blue-50 text-blue-700',
  SMA: 'bg-violet-50 text-violet-700',
  SMK: 'bg-teal-50 text-teal-700',
  PESANTREN: 'bg-emerald-50 text-emerald-700',
}

const totalStudents = units.reduce((s, u) => s + u.studentCount, 0)
const totalTeachers = units.reduce((s, u) => s + u.teacherCount, 0)
</script>

<template>
  <div class="rounded-lg border border-stone-200 overflow-hidden bg-white">
    <!-- Header with aggregate stats -->
    <div class="px-4 py-3 border-b border-stone-200 bg-stone-50 flex items-center gap-3 flex-wrap">
      <div class="flex items-center gap-1.5">
        <UIcon name="lucide:building-2" class="w-3.5 h-3.5 text-stone-400" />
        <span class="text-stone-500 text-[11px] font-medium uppercase tracking-widest">
          Yayasan Mustaka Eduka
        </span>
      </div>
      <div class="ml-auto flex items-center gap-4 text-[11px] tabular-nums">
        <span class="text-stone-500">
          <span class="font-semibold text-stone-700">{{ units.length }}</span> unit
        </span>
        <span class="text-stone-500">
          <span class="font-semibold text-stone-700">{{ totalStudents.toLocaleString('id-ID') }}</span> siswa
        </span>
        <span class="text-stone-500">
          <span class="font-semibold text-stone-700">{{ totalTeachers }}</span> pengajar
        </span>
      </div>
    </div>

    <!-- Unit cards -->
    <div class="divide-y divide-stone-50">
      <div
        v-for="unit in units"
        :key="unit.id"
        class="flex items-center gap-4 px-4 py-3 hover:bg-stone-50/70 transition-colors"
      >
        <!-- Online indicator -->
        <div class="shrink-0">
          <span
            class="w-2 h-2 rounded-full block mt-0.5"
            :class="unit.isOnline ? 'bg-emerald-400' : 'bg-stone-300'"
            :title="unit.isOnline ? 'Online' : 'Offline'"
          />
        </div>

        <!-- Unit info -->
        <div class="flex-1 min-w-0">
          <div class="flex items-center gap-2 flex-wrap">
            <span class="text-xs font-semibold text-stone-800">{{ unit.name }}</span>
            <span
              class="text-[9px] font-bold px-1.5 py-0.5 rounded"
              :class="typeColor[unit.type]"
            >
              {{ unit.type }}
            </span>
          </div>
          <p class="text-[10px] font-mono text-stone-400 mt-0.5 tabular-nums">
            {{ unit.code }} · {{ unit.city }}
          </p>
        </div>

        <!-- Stats -->
        <div class="shrink-0 text-right text-[11px] tabular-nums">
          <p class="font-semibold text-stone-700">{{ unit.studentCount }} siswa</p>
          <p class="text-stone-400 text-[10px]">{{ unit.teacherCount }} pengajar</p>
        </div>
      </div>
    </div>

    <!-- Footer note -->
    <div class="px-4 py-2 border-t border-stone-100 bg-stone-50/40 text-stone-400 text-[10px] flex items-center gap-1.5">
      <UIcon name="lucide:shield" class="w-3 h-3" />
      Setiap unit memiliki ruang data terisolasi — tidak ada cross-access antar sekolah.
    </div>
  </div>
</template>
