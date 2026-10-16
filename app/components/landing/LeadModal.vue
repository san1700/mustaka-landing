<script setup lang="ts">
// LeadModal — Modal pop-up penangkap lead cepat (Fast Lead Capture) langsung ke WhatsApp Sales.

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  'update:modelValue': [value: boolean]
}>()

const { studentRangeOptions, buildMustakaWhatsAppUrl } = useMustakaContent()

const form = ref<LeadFormData>({
  name: '',
  role: 'Kepala Sekolah',
  school: '',
  studentRange: '200-500',
  phone: '',
})

const isSubmitting = ref(false)

function closeModal() {
  emit('update:modelValue', false)
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

function submitLead() {
  if (!form.value.name || !form.value.school || !form.value.phone) return

  isSubmitting.value = true
  const waUrl = buildMustakaWhatsAppUrl(form.value)

  // Open WhatsApp sales chat in new tab
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
        class="fixed inset-0 z-50 flex items-center justify-center p-4 bg-stone-900/60 backdrop-blur-xs"
        role="dialog"
        aria-modal="true"
        aria-labelledby="lead-modal-title"
        @click.self="closeModal"
      >
        <div
          class="relative w-full max-w-lg bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden"
          @click.stop
        >
          <!-- Header -->
          <div class="px-6 py-5 border-b border-stone-100 flex items-center justify-between bg-stone-50/60">
            <div>
              <h3 id="lead-modal-title" class="text-lg font-bold text-stone-900 tracking-tight">
                Jadwalkan Demo Mustaka EduOS
              </h3>
              <p class="text-xs text-stone-500 mt-0.5">
                Konsultasikan kebutuhan digitalisasi sekolah langsung dengan tim kami.
              </p>
            </div>
            <button
              class="w-8 h-8 rounded-lg text-stone-400 hover:text-stone-700 hover:bg-stone-200/60 flex items-center justify-center transition-colors"
              aria-label="Tutup dialog"
              @click="closeModal"
            >
              <UIcon name="lucide:x" class="w-4 h-4" />
            </button>
          </div>

          <!-- Form Body -->
          <form class="p-6 space-y-4" @submit.prevent="submitLead">
            <!-- (1) Nama & Peran -->
            <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <div>
                <label for="lead-name" class="block text-xs font-semibold text-stone-700 mb-1">
                  Nama Lengkap *
                </label>
                <input
                  id="lead-name"
                  v-model="form.name"
                  type="text"
                  required
                  placeholder="Contoh: Budi Santoso"
                  class="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-stone-900 bg-white"
                />
              </div>

              <div>
                <label for="lead-role" class="block text-xs font-semibold text-stone-700 mb-1">
                  Peran / Jabatan *
                </label>
                <select
                  id="lead-role"
                  v-model="form.role"
                  class="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-stone-900 bg-white"
                >
                  <option value="Kepala Sekolah">Kepala Sekolah</option>
                  <option value="Pengurus Yayasan">Pengurus Yayasan</option>
                  <option value="Pimpinan Pesantren / Ma'had">Pimpinan Pesantren / Ma'had</option>
                  <option value="Kepala TU / Staf Administrasi">Kepala TU / Staf Administrasi</option>
                  <option value="Guru / Koordinator">Guru / Koordinator</option>
                  <option value="Lainnya">Lainnya</option>
                </select>
              </div>
            </div>

            <!-- (2) Nama Sekolah / Lembaga -->
            <div>
              <label for="lead-school" class="block text-xs font-semibold text-stone-700 mb-1">
                Nama Sekolah / Yayasan / Pesantren *
              </label>
              <input
                id="lead-school"
                v-model="form.school"
                type="text"
                required
                placeholder="Contoh: SMA Islam Terpadu Al-Hikmah"
                class="w-full px-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-stone-900 bg-white"
              />
            </div>

            <!-- (3) Estimasi Jumlah Siswa -->
            <div>
              <label class="block text-xs font-semibold text-stone-700 mb-2">
                Perkiraan Jumlah Siswa / Santri *
              </label>
              <div class="grid grid-cols-2 gap-2">
                <label
                  v-for="opt in studentRangeOptions"
                  :key="opt.value"
                  class="flex items-center gap-2 p-2.5 rounded-lg border text-xs font-medium cursor-pointer transition-colors"
                  :class="[
                    form.studentRange === opt.value
                      ? 'border-emerald-600 bg-emerald-50/50 text-emerald-950 font-semibold'
                      : 'border-stone-200 hover:bg-stone-50 text-stone-700',
                  ]"
                >
                  <input
                    v-model="form.studentRange"
                    type="radio"
                    name="studentRange"
                    :value="opt.value"
                    class="text-emerald-600 focus:ring-emerald-500 w-3.5 h-3.5"
                  />
                  <span>{{ opt.label }}</span>
                </label>
              </div>
            </div>

            <!-- (4) Nomor WhatsApp Aktif -->
            <div>
              <label for="lead-phone" class="block text-xs font-semibold text-stone-700 mb-1">
                Nomor WhatsApp Aktif *
              </label>
              <div class="relative">
                <div class="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-stone-400">
                  <UIcon name="lucide:phone" class="w-4 h-4" />
                </div>
                <input
                  id="lead-phone"
                  v-model="form.phone"
                  type="tel"
                  required
                  placeholder="081234567890"
                  class="w-full pl-9 pr-3 py-2 text-sm rounded-lg border border-stone-300 focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 outline-none text-stone-900 bg-white"
                />
              </div>
              <p class="text-[11px] text-stone-400 mt-1">
                Kami akan mengirimkan undangan jadwal demo dan dokumen profil langsung ke nomor ini.
              </p>
            </div>

            <!-- Submit Button -->
            <div class="pt-3">
              <button
                type="submit"
                :disabled="isSubmitting"
                class="w-full py-3 px-4 rounded-lg bg-emerald-600 hover:bg-emerald-700 disabled:opacity-50 text-white font-semibold text-sm transition-colors flex items-center justify-center gap-2 shadow-sm"
              >
                <UIcon name="lucide:message-square" class="w-4 h-4" />
                <span>Lanjutkan ke WhatsApp Sales</span>
              </button>
            </div>
          </form>
        </div>
      </div>
    </Transition>
  </Teleport>
</template>
