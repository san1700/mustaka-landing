// app/data/mustaka.ts
// Sumber data tunggal (Single Source of Truth) untuk landing page Mustaka EduOS.
// Semua teks diambil dari mustaka_lp.md. Tidak ada hardcoded copy di komponen.

// ─── Types ────────────────────────────────────────────────────────────────────

export interface HeroVariant {
  id: string
  headline: string
  subCopy: string
}

export interface PainPoint {
  id: string
  problem: string
  impact: string
  solution: string
  icon: string
}

export interface Transformation {
  before: string
  after: string
}

export interface UseCase {
  id: 'k12' | 'pesantren'
  title: string
  subtitle: string
  icon: string
  audience: string
  highlights: string[]
  cta: string
}

export interface PricingTier {
  id: string
  name: string
  tagline: string
  target: string
  priceLabel: string
  priceNote: string
  features: string[]
  cta: string
  ctaVariant: 'primary' | 'outline'
  isPopular: boolean
}

export interface FaqItem {
  id: string
  question: string
  answer: string
}

export interface Segment {
  id: string
  label: string
  icon: string
  description: string
}

// ─── Site Config ──────────────────────────────────────────────────────────────

export const siteConfig = {
  productName: 'Mustaka EduOS',
  tagline: 'Operating System Terpadu untuk Lembaga Pendidikan',
  appUrl: 'https://app.mustaka.id',
  salesWhatsapp: '6281234567890', // Ganti dengan nomor sales aktual
  salesWhatsappDisplay: '+62 812-3456-7890',
}

// ─── Hero Variants ────────────────────────────────────────────────────────────

export const heroVariants: HeroVariant[] = [
  {
    id: 'all-in-one',
    headline: 'Satu Sistem Cerdas untuk Mengelola Seluruh Ekosistem Sekolah & Pesantren Anda.',
    subCopy:
      'Tinggalkan tumpukan berkas manual dan file Excel yang tercecer. Mustaka menyatukan data siswa 360, rombel akademik, SDM pengajar, hingga portal yayasan dalam satu platform cloud yang modern, aman, dan mudah digunakan.',
  },
  {
    id: 'time-saving',
    headline: 'Transformasi Digital Sekolah Anda Tanpa Kerumitan.',
    subCopy:
      'Dirancang khusus untuk membantu Yayasan dan Kepala Sekolah menghemat ratusan jam kerja staf administrasi dengan sistem kesiswaan terintegrasi.',
  },
  {
    id: 'flexibility',
    headline: 'Dari Rombel Kelas Formal Hingga Halaqah Pesantren: Kelola Semua dalam Satu Pintu.',
    subCopy:
      'Sistem informasi manajemen pendidikan fleksibel pertama di Indonesia yang memahami kebutuhan sekolah umum sekaligus dinamika pesantren.',
  },
]

// ─── Segments (Trust Strip) ───────────────────────────────────────────────────

export const segments: Segment[] = [
  {
    id: 'k12',
    label: 'Sekolah Formal K-12',
    icon: 'lucide:school',
    description: 'SD, SMP, SMA, SMK Swasta yang butuh tertib administrasi dan buku induk digital.',
  },
  {
    id: 'pesantren',
    label: 'Pesantren & Boarding School',
    icon: 'lucide:book-open',
    description: 'Pencatatan berbasis halaqah tahfidz, asrama, dan kajian kitab yang fleksibel.',
  },
  {
    id: 'foundation',
    label: 'Yayasan Multi-Sekolah',
    icon: 'lucide:building-2',
    description: 'Kontrol terpusat untuk semua unit sekolah binaannya dari satu dashboard.',
  },
]

// ─── Pain Points ──────────────────────────────────────────────────────────────

export const painPoints: PainPoint[] = [
  {
    id: 'excel',
    problem: 'Ketergantungan pada File Excel yang Tersebar',
    impact: 'Ketika staf TU berganti atau laptop rusak, data kesiswaan dan riwayat mutasi hilang atau tercecer.',
    solution: 'Satu Pusat Data Terpadu (Cloud): Data tersimpan aman di server modern, bisa diakses kapan saja dengan hak akses ketat.',
    icon: 'lucide:file-spreadsheet',
  },
  {
    id: 'contact',
    problem: 'Data Siswa & Wali Murid Tidak Akurat',
    impact: 'Nomor HP wali murid sering tidak terbarui; sekolah panik saat ada kondisi darurat karena tidak ada kontak darurat yang jelas.',
    solution: 'Profil Siswa 360 & Manajemen Wali: Mencatat NIK, NISN, ayah, ibu, wali asuh, hingga penandaan Kontak Utama dan Kontak Darurat.',
    icon: 'lucide:contact',
  },
  {
    id: 'blind-foundation',
    problem: 'Yayasan "Buta" terhadap Kondisi Sekolah Anak',
    impact: 'Pengurus yayasan harus menunggu laporan manual akhir bulan yang sering terlambat atau tidak akurat.',
    solution: 'Multi-Tenancy Sejati: Satu yayasan bisa memantau semua sekolah binaannya dari satu pintu secara real-time.',
    icon: 'lucide:eye-off',
  },
  {
    id: 'rigid-system',
    problem: 'Aplikasi Sekolah Lain Terlalu Kaku',
    impact: 'Sekolah dengan kurikulum khas (seperti pesantren dengan sistem halaqah/kitab) dipaksa memakai sistem kurikulum umum yang tidak cocok.',
    solution: 'Struktur Akademik Fleksibel: Mendukung terminologi kelas formal (Rombel) maupun kelompok mengaji (Halaqah/Batch).',
    icon: 'lucide:lock',
  },
  {
    id: 'audit',
    problem: 'Manipulasi Data & Nilai Tanpa Jejak',
    impact: 'Sulit membuktikan siapa yang mengubah nilai siswa, mengganti status kelulusan, atau menghapus catatan.',
    solution: 'Audit Trail Kelas Bank: Setiap perubahan data mencatat siapa pelakunya, tanggalnya, dan data lama vs data barunya (immutable).',
    icon: 'lucide:shield-alert',
  },
]

// ─── Transformation (Before vs After) ────────────────────────────────────────

export const transformations: Transformation[] = [
  {
    before: 'Data siswa tersimpan di laptop staf yang berbeda-beda; rawan hilang saat pergantian staf.',
    after: 'Seluruh data kesiswaan tersimpan di cloud terpusat dan dapat diakses kapan pun secara terstruktur.',
  },
  {
    before: 'Riwayat siswa keluar, pindah, atau lulus tidak tercatat jelas alasannya.',
    after: 'Riwayat mutasi status siswa tercatat abadi lengkap dengan tanggal dan dokumen pendukung.',
  },
  {
    before: 'Pengurus yayasan harus datang ke tiap sekolah untuk meminta laporan fisik.',
    after: 'Pengurus yayasan memantau seluruh unit sekolah langsung dari satu layar monitor secara real-time.',
  },
  {
    before: 'Orang tua sulit mendapatkan informasi resmi selain dari pesan WhatsApp non-formal.',
    after: 'Komunikasi transparan, kontak darurat tercatat akurat, pengumuman tersampaikan resmi.',
  },
]

// ─── Use Cases ────────────────────────────────────────────────────────────────

export const useCases: UseCase[] = [
  {
    id: 'k12',
    title: 'Solusi untuk Sekolah Formal K-12',
    subtitle: 'SD, SMP, SMA, dan SMK Swasta',
    icon: 'lucide:school',
    audience: 'Kepala Sekolah & Staf TU',
    highlights: [
      'Buku Induk Siswa Digital yang rapi dan siap akreditasi',
      'Manajemen Rombel, Wali Kelas & Penugasan Guru',
      'Pelacakan Mutasi Siswa (ACTIVE → TRANSFERRED → GRADUATED)',
      'Portal Pengumuman Resmi untuk Wali Murid',
      'Profil Siswa 360 dengan data keluarga lengkap',
    ],
    cta: 'Jadwalkan Demo Sekolah',
  },
  {
    id: 'pesantren',
    title: 'Solusi untuk Pesantren & Boarding School',
    subtitle: 'Islamic Boarding School & Ma\'had',
    icon: 'lucide:book-open',
    audience: 'Pengasuh & Staf Administrasi Pesantren',
    highlights: [
      'Manajemen Halaqah Tahfidz & Kelompok Kajian Kitab',
      'Pencatatan Santri Berbasis Asrama dan Kamar',
      'Sistem kelas fleksibel yang tidak memaksa kurikulum Diknas',
      'Audit Trail permanen untuk akuntabilitas pesantren',
      'Multi-kontak wali santri (orang tua + wali asuh)',
    ],
    cta: 'Jadwalkan Demo Pesantren',
  },
]

// ─── Pricing Tiers ────────────────────────────────────────────────────────────

export const pricingTiers: PricingTier[] = [
  {
    id: 'starter',
    name: 'Sekolah Mandiri',
    tagline: 'Starter',
    target: '1 Unit Sekolah Kecil (SD/SMP/Madrasah di bawah 250 siswa)',
    priceLabel: 'Hubungi Kami',
    priceNote: 'Konsultasi gratis, tanpa komitmen',
    features: [
      'Buku Induk Profil Siswa 360',
      'Pembagian Rombel Kelas',
      'Akun Guru & Staf (hingga 20 pengguna)',
      'Portal Pengumuman Resmi',
      'Panduan Penggunaan Online',
      'Dukungan Email & Chat',
    ],
    cta: 'Mulai Konsultasi Gratis',
    ctaVariant: 'outline',
    isPopular: false,
  },
  {
    id: 'pro',
    name: 'Sekolah Unggulan',
    tagline: 'Pro — Paling Populer',
    target: 'Sekolah Swasta Menengah & Pesantren (250–800 siswa)',
    priceLabel: 'Hubungi Kami',
    priceNote: 'Jadwalkan sesi demo langsung',
    features: [
      'Semua fitur Paket Starter',
      'Audit Log Keamanan (Immutable)',
      'Dukungan Modul Halaqah Pesantren',
      'Multi-kontak Wali Darurat',
      'Pendampingan Migrasi Data dari Excel',
      'Prioritas Dukungan Teknis',
    ],
    cta: 'Jadwalkan Sesi Demo',
    ctaVariant: 'primary',
    isPopular: true,
  },
  {
    id: 'enterprise',
    name: 'Yayasan & Multi-Sekolah',
    tagline: 'Enterprise',
    target: 'Yayasan Pendidikan dengan 2+ unit sekolah/kampus',
    priceLabel: 'Kustom',
    priceNote: 'Harga disesuaikan kebutuhan yayasan',
    features: [
      'Dashboard Yayasan Multi-Tenant Terpusat',
      'Unlimited Unit Sekolah',
      'Custom Subdomain & Branding',
      'Pelatihan Staf Tatap Muka/Online',
      'Dedicated Account Manager',
      'SLA & Jaminan Uptime',
    ],
    cta: 'Hubungi Tim Enterprise',
    ctaVariant: 'outline',
    isPopular: false,
  },
]

// ─── FAQs ─────────────────────────────────────────────────────────────────────

export const faqs: FaqItem[] = [
  {
    id: 'excel-migration',
    question: 'Data siswa kami saat ini ada di Excel, apakah kami harus menginput ulang satu per satu?',
    answer:
      'Tidak perlu. Tim Mustaka menyediakan template import data massal dan memberikan pendampingan penuh untuk memindahkan data lama Anda secara otomatis. Kami telah membantu puluhan sekolah melakukan migrasi tanpa kehilangan satu pun data historis.',
  },
  {
    id: 'data-security',
    question: 'Apakah data sekolah kami aman dan tidak bisa dilihat oleh sekolah lain?',
    answer:
      'Sangat aman. Mustaka dibangun dengan teknologi Row-Level Security tingkat lanjut. Setiap sekolah memiliki ruang data yang terisolasi total dan hanya bisa diakses oleh orang yang memiliki hak izin resmi. Bahkan administrator platform pun tidak dapat melihat data mentah sekolah Anda.',
  },
  {
    id: 'server',
    question: 'Apakah sistem ini membutuhkan server fisik di sekolah kami?',
    answer:
      'Tidak perlu server lokal yang mahal dan sulit dirawat. Mustaka berbasis cloud modern yang selalu aktif 24/7 dan bisa diakses dari laptop, tablet, maupun ponsel. Pembaruan sistem dilakukan otomatis tanpa mengganggu operasional sekolah.',
  },
  {
    id: 'pesantren-compatibility',
    question: 'Bisakah digunakan untuk pesantren yang sistem pembelajarannya tidak memakai kurikulum Diknas murni?',
    answer:
      'Bisa. Sistem kami sangat fleksibel mendukung satuan mata pelajaran kitab, pembagian santri berbasis halaqah tahfidz, maupun kombinasi kelas asrama. Mustaka tidak memaksa struktur Diknas — justru kami menyesuaikan sistem dengan kebutuhan lembaga Anda.',
  },
]
