<script setup lang="ts">
/**
 * LeadModal — Dialog - Demo Scheduling Modal Overlay.
 * Sesuai Bagian 4 mustaka_lp.md:
 * 1. Input Nama & Peran Anda
 * 2. Input Nama Sekolah / Pesantren / Yayasan
 * 3. Pilihan radio pill Perkiraan Jumlah Siswa:
 *    [ < 200 siswa | 200 - 500 siswa | 500 - 1.000 siswa | > 1.000 siswa ]
 * 4. Input Nomor WhatsApp Aktif dengan prefix +62
 *
 * Mengarahkan ke WhatsApp Sales dengan pesan terstruktur otomatis.
 */

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const { siteConfig } = useMustakaContent()

// Radio pill options
const studentRangePills = [
  { value: '< 200 siswa', label: '< 200 siswa' },
  { value: '200 - 500 siswa', label: '200 - 500 siswa' },
  { value: '500 - 1.000 siswa', label: '500 - 1.000 siswa' },
  { value: '> 1.000 siswa', label: '> 1.000 siswa' },
]

const form = ref({
  name: '',
  role: 'Kepala Sekolah',
  customRole: '',
  school: '',
  studentRange: '200 - 500 siswa',
  phone: '',
})

const errorMessage = ref('')
const isSubmitting = ref(false)

function closeModal() {
  emit('update:modelValue', false)
  errorMessage.value = ''
}

function handleKeydown(e: KeyboardEvent) {
  if (e.key === 'Escape' && props.modelValue) {
    closeModal()
  }
}

onMounted(() => {
  window.addEventListener('keydown', handleKeydown)
})

onUnmounted(() => {
  window.removeEventListener('keydown', handleKeydown)
})

function submitDemoBooking() {
  errorMessage.value = ''

  if (!form.value.name.trim()) {
    errorMessage.value = 'Silakan isi Nama Lengkap Anda.'
    return
  }

  if (!form.value.school.trim()) {
    errorMessage.value = 'Silakan isi Nama Sekolah / Pesantren / Yayasan.'
    return
  }

  if (!form.value.phone.trim()) {
    errorMessage.value = 'Silakan isi Nomor WhatsApp Aktif.'
    return
  }

  isSubmitting.value = true

  // Format clean phone number
  let rawPhone = form.value.phone.replace(/\D/g, '')
  if (rawPhone.startsWith('62')) {
    rawPhone = '0' + rawPhone.slice(2)
  } else if (!rawPhone.startsWith('0')) {
    rawPhone = '0' + rawPhone
  }

  const roleText = form.value.role === 'Lainnya' && form.value.customRole.trim()
    ? form.value.customRole.trim()
    : form.value.role

  // Generate WhatsApp message according to Section 4.2 of mustaka_lp.md
  const messageLines = [
    'Halo Tim Mustaka, saya tertarik untuk melihat demo dan penawaran aplikasi.',
    '',
    `Nama: ${form.value.name.trim()} (${roleText})`,
    `Sekolah: ${form.value.school.trim()}`,
    `Estimasi Siswa: ${form.value.studentRange}`,
    `No. HP: ${rawPhone}`,
    '',
    'Kapan waktu yang tepat untuk jadwal presentasi demo singkat via Zoom/Google Meet?',
  ]

  const encodedMessage = encodeURIComponent(messageLines.join('\n'))
  const waUrl = `https://wa.me/${siteConfig.salesWhatsapp}?text=${encodedMessage}`

  // Open in new tab
  window.open(waUrl, '_blank')

  setTimeout(() => {
    isSubmitting.value = false
    closeModal()
  }, 400)
}
</script>

<template>
  <Teleport to="body">
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="opacity-0"
      enter-to-class="opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="opacity-100"
      leave-to-class="opacity-0"
    >
      <div
        v-if="modelValue"
        class="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#11181C]/75 backdrop-blur-sm"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dialog-demo-title"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl border border-[#E2EAE6] overflow-hidden"
          @click.stop
        >
          <!-- Top Accent Bar -->
          <div class="h-1.5 bg-[#5EC234]" />

          <!-- Modal Header -->
          <div class="px-6 sm:px-8 pt-6 pb-4 flex items-start justify-between border-b border-[#F3F8F5]">
            <div class="flex items-center gap-3">
              <img
                src="/logo-icon.png"
                alt="Logo Mustaka"
                class="w-9 h-9 object-contain shrink-0"
                width="36"
                height="36"
              />
              <div>
                <h3 id="dialog-demo-title" class="text-lg sm:text-xl font-extrabold text-[#11181C] tracking-tight">
                  Jadwalkan Sesi Demo
                </h3>
                <p class="text-xs text-[#7A9589] mt-0.5">
                  Konsultasi &amp; simulasi sistem langsung via WhatsApp Sales Mustaka.
                </p>
              </div>
            </div>

            <button
              class="w-8 h-8 rounded-full text-[#7A9589] hover:text-[#11181C] hover:bg-[#F3F8F5] flex items-center justify-center transition-colors cursor-pointer"
              aria-label="Tutup dialog"
              @click="closeModal"
            >
              <UIcon name="lucide:x" class="w-5 h-5" />
            </button>
          </div>

          <!-- Error Alert if any -->
          <div v-if="errorMessage" class="mx-6 sm:mx-8 mt-4 p-3 rounded-xl bg-red-50 border border-red-200 text-xs text-red-600 font-semibold flex items-center gap-2">
            <UIcon name="lucide:alert-circle" class="w-4 h-4 shrink-0" />
            <span>{{ errorMessage }}</span>
          </div>

          <!-- Form Body -->
          <form class="p-6 sm:p-8 space-y-4" @submit.prevent="submitDemoBooking">

            <!-- 1. Input: Nama & Peran Anda -->
            <div>
              <label class="block text-xs font-bold text-[#11181C] mb-1.5">
                Nama &amp; Peran Anda *
              </label>
              <div class="grid grid-cols-1 sm:grid-cols-12 gap-2.5">
                <div class="sm:col-span-7">
                  <input
                    id="lead-name"
                    v-model="form.name"
                    type="text"
                    required
                    placeholder="Contoh: Bpk. Ridwan"
                    class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E2EAE6] focus:border-[#5EC234] focus:ring-2 focus:ring-[#5EC234]/20 outline-none text-[#11181C] bg-[#FAFAFA] focus:bg-white transition-all"
                  />
                </div>
                <div class="sm:col-span-5">
                  <select
                    id="lead-role"
                    v-model="form.role"
                    class="w-full px-3 py-2.5 text-xs sm:text-sm rounded-xl border border-[#E2EAE6] focus:border-[#5EC234] focus:ring-2 focus:ring-[#5EC234]/20 outline-none text-[#11181C] bg-[#FAFAFA] focus:bg-white transition-all font-medium"
                  >
                    <option value="Kepala Sekolah">Kepala Sekolah</option>
                    <option value="Pengurus Yayasan">Pengurus Yayasan</option>
                    <option value="Pimpinan Pesantren">Pimpinan Pesantren</option>
                    <option value="Kepala Tata Usaha">Kepala Tata Usaha</option>
                    <option value="Guru / Koordinator">Guru / Koordinator</option>
                    <option value="Lainnya">Lainnya...</option>
                  </select>
                </div>
              </div>
              <input
                v-if="form.role === 'Lainnya'"
                v-model="form.customRole"
                type="text"
                placeholder="Tuliskan peran / jabatan Anda..."
                class="w-full mt-2 px-3.5 py-2 text-xs rounded-xl border border-[#E2EAE6] focus:border-[#5EC234] outline-none text-[#11181C] bg-[#FAFAFA]"
              />
            </div>

            <!-- 2. Input: Nama Sekolah / Pesantren / Yayasan -->
            <div>
              <label for="lead-school" class="block text-xs font-bold text-[#11181C] mb-1.5">
                Nama Sekolah / Pesantren / Yayasan *
              </label>
              <input
                id="lead-school"
                v-model="form.school"
                type="text"
                required
                placeholder="Contoh: SMP Islam Al-Azhar / Ponpes Darussalam"
                class="w-full px-3.5 py-2.5 text-sm rounded-xl border border-[#E2EAE6] focus:border-[#5EC234] focus:ring-2 focus:ring-[#5EC234]/20 outline-none text-[#11181C] bg-[#FAFAFA] focus:bg-white transition-all"
              />
            </div>

            <!-- 3. Radio Pill: Perkiraan Jumlah Siswa -->
            <div>
              <label class="block text-xs font-bold text-[#11181C] mb-2">
                Perkiraan Jumlah Siswa *
              </label>
              <div class="grid grid-cols-2 gap-2">
                <button
                  v-for="pill in studentRangePills"
                  :key="pill.value"
                  type="button"
                  class="py-2.5 px-3 rounded-xl border text-xs font-bold transition-all flex items-center justify-center gap-2 cursor-pointer"
                  :class="[
                    form.studentRange === pill.value
                      ? 'bg-[#EFF7EC] border-[#5EC234] text-[#2D7A14] shadow-xs ring-1 ring-[#5EC234]'
                      : 'bg-[#FAFAFA] border-[#E2EAE6] text-[#455A50] hover:border-[#C4E3B9] hover:bg-white',
                  ]"
                  @click="form.studentRange = pill.value"
                >
                  <span
                    class="w-3.5 h-3.5 rounded-full border flex items-center justify-center shrink-0"
                    :class="[
                      form.studentRange === pill.value
                        ? 'border-[#5EC234] bg-[#5EC234]'
                        : 'border-[#7A9589] bg-white',
                    ]"
                  >
                    <span v-if="form.studentRange === pill.value" class="w-1.5 h-1.5 rounded-full bg-white" />
                  </span>
                  <span>{{ pill.label }}</span>
                </button>
              </div>
            </div>

            <!-- 4. Input: Nomor WhatsApp Aktif dengan prefix +62 -->
            <div>
              <label for="lead-phone" class="block text-xs font-bold text-[#11181C] mb-1.5">
                Nomor WhatsApp Aktif *
              </label>
              <div class="relative flex items-center">
                <!-- Prefix +62 Badge -->
                <div class="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                  <span class="inline-flex items-center gap-1 text-xs font-extrabold text-[#11181C] bg-[#EFF7EC] border border-[#C4E3B9] px-2 py-0.5 rounded-md">
                    +62
                  </span>
                </div>
                <input
                  id="lead-phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="812-3456-7890"
                  class="w-full pl-18 pr-3.5 py-2.5 text-sm rounded-xl border border-[#E2EAE6] focus:border-[#5EC234] focus:ring-2 focus:ring-[#5EC234]/20 outline-none text-[#11181C] bg-[#FAFAFA] focus:bg-white transition-all font-mono"
                />
              </div>
              <p class="text-[11px] text-[#7A9589] mt-1.5">
                Jadwal presentasi dan materi pengenalan sistem akan langsung dikirimkan ke nomor ini.
              </p>
            </div>

            <!-- Submit Button: Lanjutkan ke WhatsApp & Jadwalkan Demo -->
            <div class="pt-3">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3.5 px-4 rounded-xl bg-[#5EC234] hover:bg-[#4BAB26] active:bg-[#3A8A1D] disabled:opacity-50 text-white font-bold text-sm transition-all flex items-center justify-center gap-2 shadow-md shadow-[#5EC234]/25 hover:shadow-lg hover:shadow-[#5EC234]/35 cursor-pointer"
              >
                <UIcon name="lucide:message-square" class="w-4 h-4" />
                <span>Lanjutkan ke WhatsApp &amp; Jadwalkan Demo</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
