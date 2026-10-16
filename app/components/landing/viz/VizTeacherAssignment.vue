<script setup lang="ts">
// Sub-visualisasi: Manajemen Pengajar — tabel pemetaan guru ke mata pelajaran & rombel.

interface TeacherAssignment {
  id: string
  employeeId: string
  name: string
  nip: string
  subjects: string[]
  homerooms: string[]
  status: 'ACTIVE' | 'SABBATICAL'
}

const teachers: TeacherAssignment[] = [
  {
    id: 't-001',
    employeeId: 'EMP-0102',
    name: 'Dian Pratiwi, M.Pd.',
    nip: '199203152019022001',
    subjects: ['Bahasa Indonesia', 'Sejarah'],
    homerooms: ['Kelas 8-A'],
    status: 'ACTIVE',
  },
  {
    id: 't-002',
    employeeId: 'EMP-0088',
    name: 'Eko Prasetyo, S.Pd.',
    nip: '198806072014031004',
    subjects: ['Matematika'],
    homerooms: ['Kelas 7-B'],
    status: 'ACTIVE',
  },
  {
    id: 't-003',
    employeeId: 'EMP-0110',
    name: 'Siti Rahmawati, S.Si.',
    nip: '199507122020012005',
    subjects: ['IPA Terpadu', 'Fisika'],
    homerooms: [],
    status: 'ACTIVE',
  },
  {
    id: 't-004',
    employeeId: 'EMP-0075',
    name: 'Budi Santoso, S.Pd.',
    nip: '198201072009011003',
    subjects: ['Pendidikan Agama Islam'],
    homerooms: ['Kelas 9-A', 'Kelas 9-B'],
    status: 'SABBATICAL',
  },
]
</script>

<template>
  <div class="rounded-lg border border-stone-200 overflow-hidden bg-white text-xs">
    <!-- Header -->
    <div class="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 bg-stone-50">
      <UIcon name="lucide:graduation-cap" class="w-3.5 h-3.5 text-stone-400 shrink-0" />
      <span class="text-stone-500 font-sans text-[11px] font-medium tracking-wide uppercase">
        Pemetaan Pengajar &amp; Mata Pelajaran
      </span>
    </div>

    <!-- Table -->
    <table class="w-full">
      <thead>
        <tr class="border-b border-stone-100 bg-stone-50/60 text-stone-400 text-[10px] uppercase tracking-widest">
          <th class="text-left px-4 py-2 font-medium">Pengajar</th>
          <th class="text-left px-4 py-2 font-medium">Mata Pelajaran</th>
          <th class="text-left px-4 py-2 font-medium hidden md:table-cell">Wali Kelas</th>
          <th class="text-left px-4 py-2 font-medium w-20">Status</th>
        </tr>
      </thead>
      <tbody class="divide-y divide-stone-50">
        <tr
          v-for="t in teachers"
          :key="t.id"
          class="hover:bg-stone-50/70 transition-colors"
        >
          <!-- Teacher info -->
          <td class="px-4 py-3 align-middle">
            <p class="font-semibold text-stone-800 text-[11px]">{{ t.name }}</p>
            <p class="font-mono text-[10px] text-stone-400 tabular-nums mt-0.5">
              {{ t.employeeId }} · NIP {{ t.nip.slice(0, 8) }}…
            </p>
          </td>

          <!-- Subjects -->
          <td class="px-4 py-3 align-middle">
            <div class="flex flex-wrap gap-1">
              <span
                v-for="sub in t.subjects"
                :key="sub"
                class="bg-stone-100 text-stone-600 px-1.5 py-0.5 rounded text-[10px]"
              >
                {{ sub }}
              </span>
            </div>
          </td>

          <!-- Homerooms -->
          <td class="px-4 py-3 align-middle hidden md:table-cell">
            <span v-if="t.homerooms.length === 0" class="text-stone-300 text-[10px]">—</span>
            <div v-else class="flex flex-wrap gap-1">
              <span
                v-for="hr in t.homerooms"
                :key="hr"
                class="bg-brand-100 text-brand-700 px-1.5 py-0.5 rounded text-[10px] ring-1 ring-brand-200"
              >
                {{ hr }}
              </span>
            </div>
          </td>

          <!-- Status -->
          <td class="px-4 py-3 align-middle">
            <span
              class="inline-block rounded-full px-2 py-0.5 text-[10px] font-semibold"
              :class="t.status === 'ACTIVE'
                ? 'bg-emerald-50 text-emerald-700 ring-1 ring-emerald-200'
                : 'bg-amber-50 text-amber-700 ring-1 ring-amber-200'"
            >
              {{ t.status }}
            </span>
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
