<script setup lang="ts">
// TheFooter — Seksi footer lengkap dengan navigasi, informasi legal, dan kontak.

const { siteConfig } = useMustakaContent()
const currentYear = new Date().getFullYear()

const productLinks = [
  { label: 'Fitur Unggulan', href: '#feature-showcase' },
  { label: 'Sekolah Formal K-12', href: '#use-cases' },
  { label: 'Pesantren & Boarding', href: '#use-cases' },
  { label: 'Paket & Investasi', href: '#pricing' },
  { label: 'Pertanyaan Umum', href: '#faq' },
]

const companyLinks = [
  { label: 'Tentang Kami', href: '#problems' },
  { label: 'Portal Aplikasi', href: siteConfig.appUrl, external: true },
  { label: 'Status Server', href: '#' },
  { label: 'Dokumentasi Sistem', href: '#' },
]

const legalLinks = [
  { label: 'Kebijakan Privasi', href: '#' },
  { label: 'Ketentuan Layanan', href: '#' },
  { label: 'Keamanan Data & RLS', href: '#faq' },
]
</script>

<template>
  <footer class="bg-white border-t border-stone-200" role="contentinfo">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <!-- Brand Column -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-2">
            <div class="w-7 h-7 rounded-md bg-emerald-600 flex items-center justify-center shrink-0">
              <UIcon name="lucide:graduation-cap" class="w-4 h-4 text-white" />
            </div>
            <span class="text-base font-bold text-stone-900 tracking-tight">Mustaka</span>
            <span class="text-xs font-semibold px-2 py-0.5 rounded bg-stone-100 text-stone-600">EduOS</span>
          </div>

          <p class="text-sm text-stone-500 leading-relaxed max-w-sm">
            {{ siteConfig.tagline }}. Platform manajemen kesiswaan, rombel, pengajar, dan multi-unit yayasan untuk efisiensi pendidikan Indonesia.
          </p>

          <div class="pt-2 flex items-center gap-3 text-stone-400">
            <a
              :href="`https://wa.me/${siteConfig.salesWhatsapp}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 text-xs text-stone-600 hover:text-emerald-600 transition-colors"
            >
              <UIcon name="lucide:phone" class="w-4 h-4 text-emerald-600" />
              <span>WhatsApp: {{ siteConfig.salesWhatsappDisplay }}</span>
            </a>
          </div>
        </div>

        <!-- Links: Product -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
            Produk
          </h4>
          <ul class="space-y-2.5 text-sm text-stone-500">
            <li v-for="link in productLinks" :key="link.label">
              <a :href="link.href" class="hover:text-stone-900 transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Links: Platform & Ekosistem -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
            Ekosistem
          </h4>
          <ul class="space-y-2.5 text-sm text-stone-500">
            <li v-for="link in companyLinks" :key="link.label">
              <a
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
                class="hover:text-stone-900 transition-colors inline-flex items-center gap-1"
              >
                {{ link.label }}
                <UIcon v-if="link.external" name="lucide:external-link" class="w-3 h-3 text-stone-400" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Links: Legal -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-stone-900 mb-4">
            Kepatuhan & Legal
          </h4>
          <ul class="space-y-2.5 text-sm text-stone-500">
            <li v-for="link in legalLinks" :key="link.label">
              <a :href="link.href" class="hover:text-stone-900 transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-stone-100 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-stone-400">
        <p>© {{ currentYear }} {{ siteConfig.productName }}. Seluruh hak cipta dilindungi undang-undang.</p>
        <p class="text-stone-400">
          Dirancang untuk Standar Keamanan & Tata Kelola Lembaga Pendidikan Modern.
        </p>
      </div>
    </div>
  </footer>
</template>
