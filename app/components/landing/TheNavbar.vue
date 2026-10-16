<script setup lang="ts">
// TheNavbar — Sticky navigation bar dengan logo, menu anchor, dan CTA tombol.

defineEmits<{
  'open-lead-modal': []
}>()

const { siteConfig } = useMustakaContent()

const navLinks = [
  { label: 'Fitur', href: '#feature-showcase' },
  { label: 'Solusi', href: '#use-cases' },
  { label: 'Harga', href: '#pricing' },
  { label: 'FAQ', href: '#faq' },
]

const isMenuOpen = ref(false)

function scrollTo(href: string) {
  isMenuOpen.value = false
  const el = document.querySelector(href)
  if (el) el.scrollIntoView({ behavior: 'smooth' })
}
</script>

<template>
  <header
    class="sticky top-0 z-50 border-b border-stone-200 bg-white/95 backdrop-blur-sm"
    role="banner"
  >
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div class="flex items-center justify-between h-14">
        <!-- Logo -->
        <a href="/" class="flex items-center gap-2.5 group" aria-label="Mustaka EduOS — Halaman Utama">
          <img
            src="/logo-icon.png"
            alt="Logo Mustaka"
            class="w-7 h-7 object-contain transition-transform group-hover:scale-105"
            width="28"
            height="28"
          />
          <span class="text-base font-bold text-stone-900 tracking-tight">Mustaka</span>
          <span class="text-xs font-semibold px-1.5 py-0.5 rounded bg-stone-100 text-stone-600 hidden sm:inline">EduOS</span>
        </a>

        <!-- Desktop nav -->
        <nav class="hidden md:flex items-center gap-1" aria-label="Navigasi utama">
          <button
            v-for="link in navLinks"
            :key="link.href"
            class="px-3 py-1.5 text-sm text-stone-500 hover:text-stone-900 hover:bg-stone-100 rounded-md transition-colors"
            @click="scrollTo(link.href)"
          >
            {{ link.label }}
          </button>
        </nav>

        <!-- CTA buttons -->
        <div class="flex items-center gap-2">
          <a
            :href="siteConfig.appUrl"
            target="_blank"
            rel="noopener noreferrer"
            class="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-sm text-stone-600 hover:text-stone-900 border border-stone-200 hover:border-stone-300 rounded-md transition-colors"
          >
            <UIcon name="lucide:log-in" class="w-3.5 h-3.5" />
            Masuk Portal
          </a>
          <button
            id="navbar-demo-btn"
            class="inline-flex items-center gap-1.5 px-3 py-1.5 text-sm font-semibold text-white bg-emerald-600 hover:bg-emerald-700 rounded-md transition-colors"
            @click="$emit('open-lead-modal')"
          >
            <UIcon name="lucide:calendar" class="w-3.5 h-3.5" />
            <span class="hidden sm:inline">Jadwalkan Demo</span>
            <span class="sm:hidden">Demo</span>
          </button>

          <!-- Mobile menu toggle -->
          <button
            class="md:hidden p-1.5 rounded-md text-stone-500 hover:bg-stone-100"
            :aria-expanded="isMenuOpen"
            aria-label="Buka menu navigasi"
            @click="isMenuOpen = !isMenuOpen"
          >
            <UIcon :name="isMenuOpen ? 'lucide:x' : 'lucide:menu'" class="w-5 h-5" />
          </button>
        </div>
      </div>

      <!-- Mobile nav dropdown -->
      <Transition
        enter-active-class="transition-all duration-200"
        enter-from-class="opacity-0 -translate-y-2"
        enter-to-class="opacity-100 translate-y-0"
        leave-active-class="transition-all duration-150"
        leave-from-class="opacity-100"
        leave-to-class="opacity-0"
      >
        <nav v-if="isMenuOpen" class="md:hidden py-3 border-t border-stone-100" aria-label="Menu mobile">
          <button
            v-for="link in navLinks"
            :key="link.href"
            class="block w-full text-left px-2 py-2 text-sm text-stone-600 hover:text-stone-900 hover:bg-stone-50 rounded-md"
            @click="scrollTo(link.href)"
          >
            {{ link.label }}
          </button>
        </nav>
      </Transition>
    </div>
  </header>
</template>
