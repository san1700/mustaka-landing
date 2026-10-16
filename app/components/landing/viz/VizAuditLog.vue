<script setup lang="ts">
// Sub-visualisasi: Tabel AuditLog dengan monospace diff, timestamp, dan email staf TU.
// Tidak ada data palsu — semua entri mencerminkan skenario nyata di Mustaka.

interface AuditEntry {
  id: string
  timestamp: string
  actor: string
  action: string
  entity: string
  entityId: string
  oldValue: string | null
  newValue: string
  severity: 'low' | 'medium' | 'high'
}

const entries: AuditEntry[] = [
  {
    id: 'ae-001',
    timestamp: '2025-08-14T09:23:41',
    actor: 'rahmi.fauziah@smpn1.mustaka.id',
    action: 'UPDATE_STATUS',
    entity: 'Student',
    entityId: 'STD-2024-0341',
    oldValue: 'ACTIVE',
    newValue: 'TRANSFERRED',
    severity: 'high',
  },
  {
    id: 'ae-002',
    timestamp: '2025-08-14T09:24:05',
    actor: 'rahmi.fauziah@smpn1.mustaka.id',
    action: 'UPDATE_FIELD',
    entity: 'Student',
    entityId: 'STD-2024-0341',
    oldValue: null,
    newValue: 'transfer_reason: "Pindah domisili ke Surabaya"',
    severity: 'medium',
  },
  {
    id: 'ae-003',
    timestamp: '2025-08-14T10:01:17',
    actor: 'dian.pratiwi@smpn1.mustaka.id',
    action: 'ASSIGN_HOMEROOM',
    entity: 'LearningGroup',
    entityId: 'LG-7A-2025',
    oldValue: 'teacher_id: EMP-0088',
    newValue: 'teacher_id: EMP-0102',
    severity: 'medium',
  },
  {
    id: 'ae-004',
    timestamp: '2025-08-14T10:45:58',
    actor: 'admin@yayasan.mustaka.id',
    action: 'CREATE_UNIT',
    entity: 'SchoolUnit',
    entityId: 'UNIT-SMKS-003',
    oldValue: null,
    newValue: 'name: "SMK Mustaka Karya", type: VOCATIONAL',
    severity: 'high',
  },
  {
    id: 'ae-005',
    timestamp: '2025-08-14T11:30:22',
    actor: 'andi.kusuma@smpn1.mustaka.id',
    action: 'UPDATE_FIELD',
    entity: 'Student',
    entityId: 'STD-2024-0198',
    oldValue: 'nisn: "3049201001"',
    newValue: 'nisn: "3049201091"',
    severity: 'high',
  },
]

function formatTs(iso: string): string {
  const d = new Date(iso)
  const date = d.toLocaleDateString('id-ID', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
  })
  const time = d.toLocaleTimeString('id-ID', {
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit',
    hour12: false,
  })
  return `${date} ${time}`
}

const severityClass: Record<AuditEntry['severity'], string> = {
  low: 'bg-stone-100 text-stone-600',
  medium: 'bg-amber-50 text-amber-700',
  high: 'bg-red-50 text-red-700',
}
</script>

<template>
  <div class="rounded-lg border border-stone-200 overflow-hidden text-xs font-mono bg-white">
    <!-- Header bar -->
    <div class="flex items-center gap-2 px-4 py-2.5 border-b border-stone-200 bg-stone-50">
      <UIcon name="lucide:shield-check" class="w-3.5 h-3.5 text-stone-400 shrink-0" />
      <span class="text-stone-500 font-sans text-[11px] font-medium tracking-wide uppercase">
        Immutable Audit Log
      </span>
      <span class="ml-auto text-stone-400 tabular-nums">{{ entries.length }} entri terbaru</span>
    </div>

    <!-- Table -->
    <div class="overflow-x-auto">
      <table class="w-full text-[11px] leading-relaxed">
        <thead>
          <tr class="border-b border-stone-100 bg-stone-50/60 text-stone-400 text-[10px] uppercase tracking-widest">
            <th class="text-left px-3 py-2 font-medium w-36">Timestamp</th>
            <th class="text-left px-3 py-2 font-medium w-44">Aktor</th>
            <th class="text-left px-3 py-2 font-medium w-28">Aksi</th>
            <th class="text-left px-3 py-2 font-medium">Perubahan (old → new)</th>
            <th class="text-left px-3 py-2 font-medium w-16">Level</th>
          </tr>
        </thead>
        <tbody class="divide-y divide-stone-50">
          <tr
            v-for="entry in entries"
            :key="entry.id"
            class="hover:bg-stone-50/80 transition-colors"
          >
            <!-- Timestamp -->
            <td class="px-3 py-2.5 tabular-nums text-stone-400 whitespace-nowrap align-top">
              {{ formatTs(entry.timestamp) }}
            </td>

            <!-- Actor -->
            <td class="px-3 py-2.5 text-stone-600 truncate max-w-[11rem] align-top" :title="entry.actor">
              {{ entry.actor }}
            </td>

            <!-- Action badge -->
            <td class="px-3 py-2.5 align-top">
              <span class="inline-block bg-stone-100 text-stone-600 rounded px-1.5 py-0.5 text-[10px] whitespace-nowrap">
                {{ entry.action }}
              </span>
            </td>

            <!-- Diff column -->
            <td class="px-3 py-2.5 align-top">
              <div class="space-y-0.5">
                <div
                  v-if="entry.oldValue"
                  class="text-red-600 bg-red-50/60 rounded px-1.5 py-0.5 line-through"
                >
                  old: {{ entry.oldValue }}
                </div>
                <div class="text-emerald-700 bg-emerald-50/60 rounded px-1.5 py-0.5">
                  new: {{ entry.newValue }}
                </div>
              </div>
            </td>

            <!-- Severity -->
            <td class="px-3 py-2.5 align-top">
              <span
                class="inline-block rounded-full px-2 py-0.5 text-[10px] font-medium capitalize"
                :class="severityClass[entry.severity]"
              >
                {{ entry.severity }}
              </span>
            </td>
          </tr>
        </tbody>
      </table>
    </div>

    <!-- Footer note -->
    <div class="px-4 py-2 border-t border-stone-100 bg-stone-50/40 text-stone-400 text-[10px] flex items-center gap-1.5">
      <UIcon name="lucide:lock" class="w-3 h-3" />
      Catatan ini bersifat permanen dan tidak dapat dihapus — termasuk oleh administrator.
    </div>
  </div>
</template>
