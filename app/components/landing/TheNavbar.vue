<script setup lang="ts">
/**
 * TheNavbar — Sticky Navigation Bar.
 * Logo Mustaka, navigasi anchor link (#fitur, #solusi, #transformasi, #harga, #faq),
 * dan tombol "Jadwalkan Demo" yang memicu pembukaan Modal.
 */

defineEmits<{
  'open-lead-modal': []
}>()

const { siteConfig } = useMustakaContent()

const navLinks = [
  { label: 'Fitur', href: '#fitur' },
  { label: 'Solusi', href: '#solusi' },
  { label: 'Transformasi', href: '#transformasi' },
  { label: 'Harga', href: '#harga' },
  { label: 'FAQ', href: '#faq' },
]

const isMenuOpen = ref(false)
const isScrolled = ref(false)

function scrollTo(href: string) {
  isMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) {
    el.scrollIntoView({ behavior: 'smooth' })
  }
}

onMounted(() => {
  const handleScroll = () => {
    isScrolled.value = window.scrollY > 12
  }
  window.addEventListener('scroll', handleScroll, { passive: true })
  onUnmounted(() => window.removeEventListener('scroll', handleScroll))
})
</script>

<template>
  <header
    class="sticky top-0 z-50 transition-all duration-200"
    :class="[
      isScrolled
        ? 'bg-white/95 backdrop-blur-md border-b border-[#E2EAE6] shadow-sm'
        : 'bg-white border-b border-[#E2EAE6]',
    ]"
    role="banner"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-16 sm:h-18">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2.5 group" aria-label="Mustaka EduOS — Halaman Utama">
          <img
            src="/logo-icon.png"
            alt="Logo Mustaka"
            class="w-7 h-7 sm:w-8 sm:h-8 object-contain transition-transform duration-200 group-hover:scale-105"
            width="32"
            height="32"
          />
          <span class="text-base sm:text-lg font-extrabold text-[#11181C] tracking-tight">Mustaka</span>
          <span class="text-[11px] font-bold px-1.5 py-0.5 rounded-md bg-[#EFF7EC] text-[#2D7A14] border border-[#C4E3B9] hidden sm:inline">
            EduOS
          </span>
        </a>

        <!-- Desktop Navigation Links -->
        <nav class="hidden md:flex items-center gap-1 lg:gap-2" aria-label="Navigasi Utama">
          <button
            v-for="link in navLinks"
            :key="link.href"
            class="px-3.5 py-2 text-sm font-semibold text-[#455A50] hover:text-[#11181C] hover:bg-[#EFF7EC] rounded-xl transition-colors cursor-pointer"
            @click="scrollTo(link.href)"
          >
            {{ link.label }}
          </button>
        </nav>

        <!-- Right Action Buttons -->
        <div class="flex items-center gap-2.5 sm:gap-3">
          <a
            :href="siteConfig.appUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex items-center gap-1.5 px-3.5 py-2 text-sm font-semibold text-[#455A50] hover:text-[#11181C] border border-[#E2EAE6] hover:border-[#C4E3B9] hover:bg-[#EFF7EC] rounded-xl transition-all"
          >
            <UIcon name="lucide:log-in" class="w-4 h-4 text-[#5EC234]" />
            <span>Masuk Portal</span>
          </a>

          <button
            id="navbar-demo-btn"
            class="inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 text-sm font-bold text-white bg-[#5EC234] hover:bg-[#4BAB26] active:bg-[#3A8A1D] rounded-xl transition-all shadow-md shadow-[#5EC234]/20 hover:shadow-lg hover:shadow-[#5EC234]/30 cursor-pointer"
            @click="$emit('open-lead-modal')"
          >
            <UIcon name="lucide:calendar" class="w-4 h-4" />
            <span>Jadwalkan Demo</span>
          </button>

          <!-- Mobile Hamburger Toggle -->
          <button
            class="md:hidden p-2 rounded-xl text-[#455A50] hover:bg-[#EFF7EC] transition-colors cursor-pointer"
            :aria-expanded="isMenuOpen"
            aria-label="Buka Menu Navigasi"
            @click="isMenuOpen = !isMenuOpen"
          >
            <UIcon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile Dropdown Menu -->
      <Transition
        enter-active-class="transition-all duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <nav v-if="isMenuOpen" class="md:hidden py-3 border-t border-[#E2EAE6]" aria-label="Menu Ponsel">
          <button
            v-for="link in navLinks"
            :key="link.href"
            class="block w-full text-left px-3 py-2.5 text-sm font-bold text-[#455A50] hover:text-[#11181C] hover:bg-[#EFF7EC] rounded-xl"
            @click="scrollTo(link.href)"
          >
            {{ link.label }}
          </button>
          <div class="pt-2 border-t border-[#E2EAE6] mt-2">
            <a
              :href="siteConfig.appUrl"
              target="_blank"
              rel="noopener noreferrer"
              class="flex items-center gap-2 px-3 py-2 text-sm font-semibold text-[#455A50]"
            >
              <UIcon name="lucide:log-in" class="w-4 h-4 text-[#5EC234]" />
              <span>Masuk Portal</span>
            </a>
          </div>
        </nav>
      </Transition>
    </div>
  </header>
</template>
