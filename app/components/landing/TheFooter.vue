<script setup lang="ts">
/**
 * TheFooter — Main Footer Component.
 * Bersih, rapi, dengan warna Deep Charcoal #11181C, aksen #5EC234, dan tautan lengkap.
 */

const { siteConfig } = useMustakaContent()
const currentYear = new Date().getFullYear()

const productLinks = [
  { label: 'Fitur Platform', href: '#fitur' },
  { label: 'Pilar Institusi', href: '#solusi' },
  { label: 'Transformasi Sistem', href: '#transformasi' },
  { label: 'Paket & Investasi', href: '#harga' },
  { label: 'Pertanyaan Umum', href: '#faq' },
]

const companyLinks = [
  { label: 'Masalah yang Diselesaikan', href: '#masalah' },
  { label: 'Portal Aplikasi', href: siteConfig.appUrl, external: true },
  { label: 'Status Sistem', href: '#' },
  { label: 'Dokumentasi Sistem', href: '#' },
]

const legalLinks = [
  { label: 'Kebijakan Privasi', href: '#' },
  { label: 'Ketentuan Layanan', href: '#' },
  { label: 'Keamanan Data & RLS', href: '#faq' },
]
</script>

<template>
  <footer class="bg-white border-t border-[#E2EAE6]" role="contentinfo">
    <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
        <!-- Brand Column -->
        <div class="lg:col-span-2 space-y-4">
          <div class="flex items-center gap-2.5">
            <img
              src="/logo-icon.png"
              alt="Logo Mustaka"
              class="w-8 h-8 object-contain"
              width="32"
              height="32"
            />
            <span class="text-lg font-extrabold text-[#11181C] tracking-tight">Mustaka</span>
            <span class="text-xs font-bold px-2 py-0.5 rounded-md bg-[#EFF7EC] text-[#2D7A14] border border-[#C4E3B9]">
              EduOS
            </span>
          </div>

          <p class="text-sm text-[#455A50] leading-relaxed max-w-sm">
            {{ siteConfig.tagline }}. Solusi terpadu manajemen kesiswaan 360°, rombel, halaqah pesantren, dan pengawasan multi-tenant yayasan di Indonesia.
          </p>

          <div class="pt-2">
            <a
              :href="`https://wa.me/${siteConfig.salesWhatsapp}`"
              target="_blank"
              rel="noopener noreferrer"
              class="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-[#EFF7EC] border border-[#C4E3B9] text-xs font-bold text-[#2D7A14] hover:bg-[#E5F3E1] transition-colors"
            >
              <UIcon name="lucide:phone" class="w-4 h-4 text-[#5EC234]" />
              <span>WhatsApp Sales: {{ siteConfig.salesWhatsappDisplay }}</span>
            </a>
          </div>
        </div>

        <!-- Links: Product -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#11181C] mb-4">
            Navigasi
          </h4>
          <ul class="space-y-2.5 text-sm text-[#455A50]">
            <li v-for="link in productLinks" :key="link.label">
              <a :href="link.href" class="hover:text-[#11181C] hover:underline transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Links: Platform & Ekosistem -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#11181C] mb-4">
            Ekosistem
          </h4>
          <ul class="space-y-2.5 text-sm text-[#455A50]">
            <li v-for="link in companyLinks" :key="link.label">
              <a
                :href="link.href"
                :target="link.external ? '_blank' : undefined"
                :rel="link.external ? 'noopener noreferrer' : undefined"
                class="hover:text-[#11181C] transition-colors inline-flex items-center gap-1.5"
              >
                {{ link.label }}
                <UIcon v-if="link.external" name="lucide:external-link" class="w-3.5 h-3.5 text-[#7A9589]" />
              </a>
            </li>
          </ul>
        </div>

        <!-- Links: Legal -->
        <div>
          <h4 class="text-xs font-bold uppercase tracking-wider text-[#11181C] mb-4">
            Keamanan &amp; Legal
          </h4>
          <ul class="space-y-2.5 text-sm text-[#455A50]">
            <li v-for="link in legalLinks" :key="link.label">
              <a :href="link.href" class="hover:text-[#11181C] transition-colors">
                {{ link.label }}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="mt-12 pt-8 border-t border-[#E2EAE6] flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#7A9589]">
        <p>&copy; {{ currentYear }} Mustaka EduOS. Seluruh Hak Cipta Dilindungi Undang-Undang.</p>
        <p class="flex items-center gap-2">
          <span class="w-2 h-2 rounded-full bg-[#5EC234]" />
          <span>Server Cloud Aktif &amp; Terproteksi</span>
        </p>
      </div>
    </div>
  </footer>
</template>
