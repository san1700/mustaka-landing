<script setup lang="ts">
/**
 * TrustStrip — Bar logo institusi pendidikan.
 * Menampilkan barisan institusi pendidikan & yayasan yang mempercayai Mustaka EduOS.
 */

const institutions = [
  { name: 'SDIT Nurul Hikmah', type: 'Sekolah Dasar Islam', icon: 'lucide:school' },
  { name: 'Pesantren Modern Darussalam', type: 'Pesantren & Boarding', icon: 'lucide:book-open' },
  { name: 'Yayasan Al-Azhar Mandiri', type: 'Yayasan Multi-Unit', icon: 'lucide:building-2' },
  { name: 'SMP Islam Terpadu Insan Kamil', type: 'Sekolah Menengah', icon: 'lucide:graduation-cap' },
  { name: 'SMA Sains Bina Insani', type: 'Sekolah Menengah Atas', icon: 'lucide:landmark' },
  { name: 'Ma\'had Tahfidz Al-Qur\'an', type: 'Kajian & Halaqah', icon: 'lucide:scroll' },
]
</script>

<template>
  <section class="bg-white border-y border-[#E2EAE6] py-12 lg:py-14" aria-label="Lembaga Pendidikan Pengguna Mustaka">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <!-- Title -->
      <p class="text-center text-xs font-bold text-[#7A9589] uppercase tracking-widest mb-8">
        Dipercaya oleh Lembaga Pendidikan &amp; Yayasan Modern di Seluruh Indonesia
      </p>

      <!-- Grid / Bar of Institution Badges -->
      <div class="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 items-center">
        <div
          v-for="inst in institutions"
          :key="inst.name"
          class="flex flex-col items-center justify-center p-4 rounded-2xl border border-[#E2EAE6] bg-[#FAFAFA] hover:bg-[#EFF7EC] hover:border-[#C4E3B9] transition-all group text-center shadow-2xs"
        >
          <div class="w-9 h-9 rounded-xl bg-white border border-[#E2EAE6] group-hover:border-[#C4E3B9] flex items-center justify-center text-[#5EC234] mb-2.5 shadow-2xs group-hover:scale-105 transition-transform">
            <UIcon :name="inst.icon" class="w-4.5 h-4.5" />
          </div>
          <span class="text-xs font-bold text-[#11181C] tracking-tight group-hover:text-[#2D7A14] transition-colors leading-tight line-clamp-1">
            {{ inst.name }}
          </span>
          <span class="text-[10px] text-[#7A9589] mt-0.5 font-medium line-clamp-1">
            {{ inst.type }}
          </span>
        </div>
      </div>
    </div>
  </section>
</template>
