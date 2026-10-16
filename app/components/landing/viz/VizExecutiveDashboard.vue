<script setup lang="ts">
// VizExecutiveDashboard — Pratinjau eksekutif yayasan untuk seksi Hero.
// Menampilkan metrik ringkasan multi-unit + notifikasi terbaru.

interface UnitSummary {
  name: string
  type: string
  students: number
  status: 'online' | 'offline'
}

const units: UnitSummary[] = [
  { name: 'SD Islam Al-Mustafa', type: 'SD', students: 412, status: 'online' },
  { name: 'SMP Islam Terpadu', type: 'SMP', students: 287, status: 'online' },
  { name: 'SMA Unggulan Mustaka', type: 'SMA', students: 198, status: 'online' },
  { name: 'Ponpes Darussalam', type: 'PESANTREN', students: 156, status: 'online' },
]

const totalStudents = units.reduce((s, u) => s + u.students, 0)

const recentActivities = [
  { icon: 'lucide:user-check', text: 'Ahmad Farizi dipindah ke Kelas 8-B', time: '2 menit lalu', color: 'text-blue-500' },
  { icon: 'lucide:shield-check', text: 'Audit: status siswa diperbarui', time: '15 menit lalu', color: 'text-emerald-500' },
  { icon: 'lucide:megaphone', text: 'Pengumuman libur Idul Adha diterbitkan', time: '1 jam lalu', color: 'text-amber-500' },
]
</script>

<template>
  <div class="rounded-xl border border-stone-200 bg-white overflow-hidden shadow-sm text-xs">
    <!-- Header bar -->
    <div class="flex items-center justify-between px-4 py-3 border-b border-stone-200 bg-stone-50">
      <div class="flex items-center gap-2">
        <div class="w-5 h-5 rounded bg-emerald-600 flex items-center justify-center">
          <UIcon name="lucide:building-2" class="w-3 h-3 text-white" />
        </div>
        <span class="font-semibold text-stone-700 text-[11px]">Yayasan Mustaka Eduka</span>
      </div>
      <div class="flex items-center gap-1.5 text-[10px] text-emerald-600 font-medium">
        <span class="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse inline-block" />
        Semua unit online
      </div>
    </div>

    <!-- Metrics -->
    <div class="grid grid-cols-3 divide-x divide-stone-100 border-b border-stone-200">
      <div class="px-4 py-3 text-center">
        <p class="text-lg font-bold text-stone-900 tabular-nums">{{ totalStudents.toLocaleString('id-ID') }}</p>
        <p class="text-stone-400 text-[10px] mt-0.5">Total Siswa</p>
      </div>
      <div class="px-4 py-3 text-center">
        <p class="text-lg font-bold text-stone-900 tabular-nums">{{ units.length }}</p>
        <p class="text-stone-400 text-[10px] mt-0.5">Unit Sekolah</p>
      </div>
      <div class="px-4 py-3 text-center">
        <p class="text-lg font-bold text-stone-900 tabular-nums">100%</p>
        <p class="text-stone-400 text-[10px] mt-0.5">Data Terkini</p>
      </div>
    </div>

    <!-- Unit list -->
    <ul class="divide-y divide-stone-50">
      <li
        v-for="unit in units"
        :key="unit.name"
        class="flex items-center justify-between px-4 py-2.5"
      >
        <div class="flex items-center gap-2">
          <span class="w-1.5 h-1.5 rounded-full bg-emerald-400 shrink-0" />
          <span class="text-stone-700 font-medium text-[11px]">{{ unit.name }}</span>
          <span class="text-[9px] px-1.5 py-0.5 bg-stone-100 text-stone-500 rounded font-semibold">
            {{ unit.type }}
          </span>
        </div>
        <span class="font-mono tabular-nums text-stone-500 text-[10px]">{{ unit.students }} siswa</span>
      </li>
    </ul>

    <!-- Recent activity feed -->
    <div class="border-t border-stone-200 bg-stone-50/60 px-4 py-3">
      <p class="text-[10px] font-semibold text-stone-400 uppercase tracking-widest mb-2">Aktivitas Terbaru</p>
      <ul class="space-y-1.5">
        <li v-for="activity in recentActivities" :key="activity.text" class="flex items-start gap-2">
          <UIcon :name="activity.icon" class="w-3 h-3 shrink-0 mt-0.5" :class="activity.color" />
          <div class="flex-1 min-w-0">
            <p class="text-stone-600 text-[10px] leading-snug">{{ activity.text }}</p>
            <p class="text-stone-400 text-[9px] tabular-nums">{{ activity.time }}</p>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>
