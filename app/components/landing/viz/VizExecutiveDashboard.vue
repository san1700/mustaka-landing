<script setup lang="ts">
/**
 * VizExecutiveDashboard — Pratinjau Eksekutif Yayasan & Multi-Unit (High Density B2B Artifact).
 * Menampilkan antarmuka monitor yayasan dengan visualisasi metrik, unit sekolah, dan log audit live.
 */

interface UnitSummary {
  id: string
  name: string
  type: 'SD' | 'SMP' | 'SMA' | 'PESANTREN'
  students: number
  capacity: number
  headmaster: string
  status: 'ONLINE' | 'SYNCED'
}

const activeFilter = ref<'ALL' | 'FORMAL' | 'PESANTREN'>('ALL')

const units: UnitSummary[] = [
  { id: 'u-1', name: 'SD Islam Terpadu Al-Mustafa', type: 'SD', students: 412, capacity: 450, headmaster: 'Ust. Farhan M.Pd', status: 'ONLINE' },
  { id: 'u-2', name: 'SMP Islam Unggulan Mustaka', type: 'SMP', students: 287, capacity: 300, headmaster: 'Dra. Hj. Nurul Aini', status: 'ONLINE' },
  { id: 'u-3', name: 'SMA Sains Terpadu Mustaka', type: 'SMA', students: 198, capacity: 220, headmaster: 'Dr. H. Bambang S.', status: 'ONLINE' },
  { id: 'u-4', name: 'Pesantren Tahfidz Darussalam', type: 'PESANTREN', students: 164, capacity: 180, headmaster: 'K.H. Mansur Halim', status: 'SYNCED' },
]

const filteredUnits = computed(() => {
  if (activeFilter.value === 'FORMAL') {
    return units.filter((u) => u.type !== 'PESANTREN')
  }
  if (activeFilter.value === 'PESANTREN') {
    return units.filter((u) => u.type === 'PESANTREN')
  }
  return units
})

const totalStudents = computed(() => units.reduce((acc, u) => acc + u.students, 0))
const totalCapacity = computed(() => units.reduce((acc, u) => acc + u.capacity, 0))
const occupancyRate = computed(() => Math.round((totalStudents.value / totalCapacity.value) * 100))

const recentAudits = [
  { action: 'Mutasi Kelas', user: 'staf_tu_sd@mustaka.id', detail: 'Ahmad F. (NISN: 00812) ke Rombel 6-A', time: '1m lalu' },
  { action: 'Halaqah Baru', user: 'ust_mansur@mustaka.id', detail: 'Pembukaan Halaqah Juz 30 (Batch 4)', time: '8m lalu' },
  { action: 'Sinkron Cloud', user: 'system_daemon', detail: 'Backup snapshot otomatis yayasan', time: '14m lalu' },
]
</script>

<template>
  <div class="rounded-2xl border border-stone-200/90 bg-white shadow-2xl shadow-stone-900/10 ring-1 ring-stone-900/5 overflow-hidden font-sans text-xs select-none">
    <!-- Window Control Bar / Application Top Bar -->
    <div class="flex items-center justify-between px-4 py-3 bg-stone-100/90 border-b border-stone-200">
      <div class="flex items-center gap-2">
        <div class="flex items-center gap-1.5">
          <span class="w-2.5 h-2.5 rounded-full bg-stone-300 inline-block" />
          <span class="w-2.5 h-2.5 rounded-full bg-stone-300 inline-block" />
          <span class="w-2.5 h-2.5 rounded-full bg-stone-300 inline-block" />
        </div>
        <div class="h-3 w-px bg-stone-300 ml-1 mr-0.5" />
        <div class="flex items-center gap-1.5 font-semibold text-stone-800 text-[11px] tracking-tight">
          <UIcon name="lucide:building-2" class="w-3.5 h-3.5 text-emerald-600" />
          <span>Dashboard Eksekutif Yayasan</span>
        </div>
      </div>

      <!-- Sync Status Badge -->
      <div class="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-white border border-stone-200 text-[10px] font-medium text-emerald-700 shadow-2xs">
        <span class="relative flex h-2 w-2">
          <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
          <span class="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
        </span>
        <span class="tracking-tight">Multi-Tenant Terhubung</span>
      </div>
    </div>

    <!-- Quick Metric Cards -->
    <div class="grid grid-cols-3 divide-x divide-stone-100 bg-stone-50/50 border-b border-stone-200">
      <div class="p-3.5">
        <span class="text-[10px] uppercase font-semibold tracking-wider text-stone-400 block">Total Santri/Siswa</span>
        <div class="flex items-baseline gap-1.5 mt-0.5">
          <span class="text-xl font-bold tracking-tight text-stone-900 tabular-nums">
            {{ totalStudents.toLocaleString('id-ID') }}
          </span>
          <span class="text-[10px] text-emerald-600 font-semibold flex items-center">
            <UIcon name="lucide:arrow-up-right" class="w-3 h-3" /> +8.4%
          </span>
        </div>
        <span class="text-[9px] text-stone-400 mt-0.5 block">Akumulasi 4 unit sekolah</span>
      </div>

      <div class="p-3.5">
        <span class="text-[10px] uppercase font-semibold tracking-wider text-stone-400 block">Kapasitas Terisi</span>
        <div class="flex items-baseline gap-1.5 mt-0.5">
          <span class="text-xl font-bold tracking-tight text-stone-900 tabular-nums">{{ occupancyRate }}%</span>
          <span class="text-[10px] text-stone-500">({{ totalStudents }}/{{ totalCapacity }})</span>
        </div>
        <!-- Micro Progress Bar -->
        <div class="w-full bg-stone-200 h-1 rounded-full mt-1.5 overflow-hidden">
          <div class="bg-emerald-600 h-full rounded-full" :style="{ width: `${occupancyRate}%` }" />
        </div>
      </div>

      <div class="p-3.5">
        <span class="text-[10px] uppercase font-semibold tracking-wider text-stone-400 block">Integritas Data</span>
        <div class="flex items-baseline gap-1.5 mt-0.5">
          <span class="text-xl font-bold tracking-tight text-stone-900 tabular-nums">100%</span>
          <span class="text-[10px] text-emerald-600 font-medium">Valid</span>
        </div>
        <span class="text-[9px] text-stone-400 mt-0.5 block">Zero orphan records</span>
      </div>
    </div>

    <!-- Filter Pills -->
    <div class="px-4 py-2 border-b border-stone-100 flex items-center justify-between bg-white">
      <div class="flex items-center gap-1">
        <button
          type="button"
          class="px-2.5 py-1 rounded-md text-[10px] font-semibold transition-colors"
          :class="activeFilter === 'ALL' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-100'"
          @click="activeFilter = 'ALL'"
        >
          Semua Unit ({{ units.length }})
        </button>
        <button
          type="button"
          class="px-2.5 py-1 rounded-md text-[10px] font-semibold transition-colors"
          :class="activeFilter === 'FORMAL' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-100'"
          @click="activeFilter = 'FORMAL'"
        >
          Formal K-12
        </button>
        <button
          type="button"
          class="px-2.5 py-1 rounded-md text-[10px] font-semibold transition-colors"
          :class="activeFilter === 'PESANTREN' ? 'bg-stone-900 text-white' : 'text-stone-500 hover:bg-stone-100'"
          @click="activeFilter = 'PESANTREN'"
        >
          Pesantren
        </button>
      </div>

      <span class="text-[10px] text-stone-400 font-mono">Tahun Ajaran 2026/2027</span>
    </div>

    <!-- Units Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-left divide-y divide-stone-100">
        <thead class="bg-stone-50 text-[10px] font-semibold text-stone-500 uppercase tracking-wider">
          <tr>
            <th class="py-2 px-3.5">Unit Lembaga</th>
            <th class="py-2 px-3 text-center">Tipe</th>
            <th class="py-2 px-3 text-right">Jumlah Siswa</th>
            <th class="py-2 px-3.5 text-right">Status</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-50 text-[11px] bg-white">
          <tr
            v-for="u in filteredUnits"
            :key="u.id"
            class="hover:bg-stone-50/70 transition-colors"
          >
            <td class="py-2 px-3.5 font-medium text-stone-800">
              <div class="font-semibold">{{ u.name }}</div>
              <div class="text-[9px] text-stone-400 font-normal">Pimpinan: {{ u.headmaster }}</div>
            </td>
            <td class="py-2 px-3 text-center">
              <span
                class="px-1.5 py-0.5 rounded text-[9px] font-semibold tracking-wider"
                :class="u.type === 'PESANTREN' ? 'bg-emerald-50 text-emerald-700 border border-emerald-200/60' : 'bg-stone-100 text-stone-600'"
              >
                {{ u.type }}
              </span>
            </td>
            <td class="py-2 px-3 text-right tabular-nums font-mono text-stone-700 font-medium">
              {{ u.students }} <span class="text-stone-400 text-[9px]">/ {{ u.capacity }}</span>
            </td>
            <td class="py-2 px-3.5 text-right">
              <span class="inline-flex items-center gap-1 text-[10px] font-semibold text-emerald-600">
                <span class="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                {{ u.status }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Live Audit Feed Bar -->
    <div class="border-t border-stone-200 bg-stone-50 px-4 py-2.5">
      <div class="flex items-center justify-between mb-1.5">
        <span class="text-[9px] font-bold text-stone-400 uppercase tracking-widest flex items-center gap-1">
          <UIcon name="lucide:shield-check" class="w-3 h-3 text-emerald-600" />
          Audit Trail Real-Time
        </span>
        <span class="text-[9px] text-stone-400 font-mono">Immutable Log</span>
      </div>

      <div class="space-y-1">
        <div
          v-for="(log, idx) in recentAudits"
          :key="idx"
          class="flex items-center justify-between text-[10px] text-stone-600 py-0.5 font-mono"
        >
          <div class="flex items-center gap-1.5 truncate pr-2">
            <span class="px-1 py-0.2 rounded bg-stone-200 text-stone-700 text-[8px] font-bold shrink-0">
              {{ log.action }}
            </span>
            <span class="text-stone-700 truncate text-[10px]">{{ log.detail }}</span>
          </div>
          <span class="text-stone-400 text-[9px] tabular-nums shrink-0">{{ log.time }}</span>
        </div>
      </div>
    </div>
  </div>
</template>
