// app/data/features.ts
// Sumber data untuk komponen FeatureShowcase di landing page Mustaka EduOS.
// Setiap fitur memiliki tipe visualisasi yang dirender sebagai sub-komponen nyata.

export type FeatureVisualizationType =
  | 'student360'
  | 'auditLog'
  | 'learningGroup'
  | 'teacherAssignment'
  | 'multiTenant'
  | 'announcement'

export interface Feature {
  /** ID unik untuk tab navigasi dan aria-controls */
  id: string
  /** Label singkat di navigasi vertikal */
  label: string
  /** Nama ikon dari set lucide via @nuxt/icon (format: "lucide:nama-ikon") */
  icon: string
  /** Headline utama yang tampil di kanvas pratinjau */
  headline: string
  /** Deskripsi singkat manfaat fitur (1–2 kalimat) */
  description: string
  /** Jenis sub-visualisasi yang akan dirender di kanvas */
  visualization: FeatureVisualizationType
  /** Persona utama yang paling relevan */
  persona: 'yayasan' | 'kepala-sekolah' | 'staf-tu'
}

export const features: Feature[] = [
  {
    id: 'student-360',
    label: 'Profil Siswa 360',
    icon: 'lucide:user-round',
    headline: 'Buku Induk Digital Abadi.',
    description:
      'Rekam jejak lengkap siswa dari pendaftaran hingga alumni — NIK, NISN, data keluarga, kontak darurat — tersimpan aman di cloud, bukan di laptop staf.',
    visualization: 'student360',
    persona: 'staf-tu',
  },
  {
    id: 'audit-log',
    label: 'Audit Trail',
    icon: 'lucide:shield-check',
    headline: 'Transparansi Total, Bebas Manipulasi Data.',
    description:
      'Setiap perubahan data — penggantian status, pembaruan nilai, pemutasian siswa — dicatat permanen: siapa pelakunya, kapan, dan apa yang berubah.',
    visualization: 'auditLog',
    persona: 'yayasan',
  },
  {
    id: 'learning-group',
    label: 'Rombel & Halaqah',
    icon: 'lucide:layers',
    headline: 'Fleksibel untuk Kelas Formal & Pesantren.',
    description:
      'Satu sistem yang memahami rombel reguler sekaligus kelompok halaqah tahfidz. Tidak memaksa pesantren memakai kurikulum Diknas yang tidak cocok.',
    visualization: 'learningGroup',
    persona: 'kepala-sekolah',
  },
  {
    id: 'teacher-assignment',
    label: 'Manajemen Pengajar',
    icon: 'lucide:graduation-cap',
    headline: 'Distribusi Guru Rapi, Beban Kerja Terukur.',
    description:
      'Petakan guru ke mata pelajaran dan rombel dalam hitungan klik. Wali kelas tercatat jelas, jadwal bentrok terdeteksi otomatis.',
    visualization: 'teacherAssignment',
    persona: 'kepala-sekolah',
  },
  {
    id: 'multi-tenant',
    label: 'Dashboard Yayasan',
    icon: 'lucide:building-2',
    headline: 'Satu Pintu untuk Seluruh Unit Sekolah Yayasan.',
    description:
      'Pantau semua sekolah binaannya dari satu layar secara real-time. Isolasi data antar unit terjamin — satu sekolah tidak dapat mengintip data sekolah lain.',
    visualization: 'multiTenant',
    persona: 'yayasan',
  },
  {
    id: 'announcement',
    label: 'Portal Pengumuman',
    icon: 'lucide:megaphone',
    headline: 'Komunikasi Resmi, Bukan Sekadar Grup WA.',
    description:
      'Terbitkan surat edaran dan agenda sekolah melalui portal resmi. Kontak darurat wali murid tercatat akurat — tidak ada lagi miskomunikasi darurat.',
    visualization: 'announcement',
    persona: 'staf-tu',
  },
]
