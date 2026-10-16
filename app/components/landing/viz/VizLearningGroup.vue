<script setup lang="ts">
// Sub-visualisasi: Manajemen Rombel & Halaqah — tabel pembagian kelas
// dengan wali kelas, kapasitas, dan tipe kelas (formal vs halaqah pesantren).

interface LearningGroup {
  id: string
  code: string
  name: string
  type: 'FORMAL' | 'HALAQAH'
  gradeLevel: string
  academicYear: string
  homeroomTeacher: string
  capacity: number
  enrolled: number
}

const groups: LearningGroup[] = [
  {
    id: 'lg-001',
    code: 'VII-A',
    name: 'Kelas 7-A',
    type: 'FORMAL',
    gradeLevel: '7',
    academicYear: '2025/2026',
    homeroomTeacher: 'Nurul Hidayah, S.Pd.',
    capacity: 36,
    enrolled: 34,
  },
  {
    id: 'lg-002',
    code: 'VII-B',
    name: 'Kelas 7-B',
    type: 'FORMAL',
    gradeLevel: '7',
    academicYear: '2025/2026',
    homeroomTeacher: 'Eko Prasetyo, S.Pd.',
    capacity: 36,
    enrolled: 36,
  },
  {
    id: 'lg-003',
    code: 'HLQ-JUZ30',
    name: 'Halaqah Juz 30',
    type: 'HALAQAH',
    gradeLevel: 'Semua Jenjang',
    academicYear: '2025/2026',
    homeroomTeacher: 'Ustadz Fathur Rahman, Lc.',
    capacity: 12,
    enrolled: 10,
  },
  {
    id: 'lg-004',
    code: 'VIII-A',
    name: 'Kelas 8-A',
    type: 'FORMAL',
    gradeLevel: '8',
    academicYear: '2025/2026',
    homeroomTeacher: 'Dian Pratiwi, M.Pd.',
    capacity: 36,
    enrolled: 32,
  },
  {
    id: 'lg-005',
    code: 'HLQ-KITAB1',
    name: 'Halaqah Kitab Kuning I',
    type: 'HALAQAH',
    gradeLevel: 'Pondok Senior',
    academicYear: '2025/2026',
    homeroomTeacher: 'Ustadz Imam Syafii, Lc.',
    capacity: 15,
    enrolled: 14,
  },
]

function capacityPercent(g: LearningGroup): number {
  return Math.round((g.enrolled / g.capacity) * 100)
}

function capacityClass(g: LearningGroup): string {
  const pct = capacityPercent(g)
  if (pct >= 100) return 'bg-red-400'
  if (pct >= 85) return 'bg-amber-400'
  return 'bg-emerald-400'
}
</script>

<template>
  <div class="rounded-lg border border-stone-200 overflow-hidden bg-white text-xs">
    <!-- Header -->
    <div class="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 bg-stone-50">
      <UIcon name="lucide:layers" class="w-3.5 h-3.5 text-stone-400 shrink-0" />
      <span class="text-stone-500 font-sans text-[11px] font-medium tracking-wide uppercase">
        Manajemen Rombel &amp; Halaqah — TA 2025/2026
      </span>
    </div>

    <!-- Table -->
    <table class="w-full">
      <thead>
        <tr class="border-b border-stone-100 bg-stone-50/60 text-stone-400 text-[10px] uppercase tracking-widest">
          <th class="text-left px-4 py-2 font-medium">Kelompok</th>
          <th class="text-left px-4 py-2 font-medium">Tipe</th>
          <th class="text-left px-4 py-2 font-medium hidden sm:table-cell">Wali Kelas / Musyrif</th>
          <th class="text-right px-4 py-2 font-medium w-28">Kapasitas</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-50 font-mono">
        <tr
          v-for="g in groups"
          :key="g.id"
          class="hover:bg-stone-50/70 transition-colors"
        >
          <!-- Group name -->
          <td class="px-4 py-3 align-middle">
            <p class="font-semibold text-stone-800 text-[11px]">{{ g.name }}</p>
            <p class="text-[10px] text-stone-400 mt-0.5">{{ g.code }} · Tingkat {{ g.gradeLevel }}</p>
          </td>

          <!-- Type badge -->
          <td class="px-4 py-3 align-middle">
            <span
              class="inline-block px-2 py-0.5 rounded-full text-[10px] font-semibold"
              :class="g.type === 'HALAQAH'
                ? 'bg-teal-50 text-teal-700 ring-1 ring-teal-200'
                : 'bg-stone-100 text-stone-600'"
            >
              {{ g.type }}
            </span>
          </td>

          <!-- Homeroom teacher -->
          <td class="px-4 py-3 align-middle text-stone-600 text-[11px] hidden sm:table-cell font-sans">
            {{ g.homeroomTeacher }}
          </td>

          <!-- Capacity bar -->
          <td class="px-4 py-3 align-middle text-right">
            <div class="flex items-center justify-end gap-2">
              <div class="w-16 h-1.5 rounded-full bg-stone-100 overflow-hidden">
                <div
                  class="h-full rounded-full transition-all"
                  :class="capacityClass(g)"
                  :style="{ width: `${capacityPercent(g)}%` }"
                />
              </div>
              <span class="tabular-nums text-stone-500 text-[10px] w-10 text-right">
                {{ g.enrolled }}/{{ g.capacity }}
              </span>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
