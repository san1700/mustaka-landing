# Panduan Komersial & Blueprint Landing Page Mustaka

> **Tujuan Dokumen Ini**:  
> Dokumen ini disusun sebagai *master briefing* bagi pembuat *landing page* dan tim pemasaran agar memahami secara mendalam **apa itu aplikasi Mustaka, nilai jual terbesarnya (*selling points*), masalah nyata sekolah yang diselesaikannya, serta bagaimana mengemas sistem ini menjadi penawaran yang sangat memikat bagi calon klien (sekolah, yayasan, dan pesantren)**.  
> Aspek teknologi diletakkan di bagian akhir sebagai referensi pelengkap, karena fokus utama kita adalah **daya jual produk dan kejelasan value bagi pembeli**.

---

## 1. Memahami Produk: Apa Sebenarnya Mustaka?

### 1.1. Filosofi Produk
Banyak aplikasi sekolah di luar sana hanya berupa "form input nilai" atau "pencatat absensi" yang kaku. **Mustaka bukan sekadar software administrasi biasa.**

**Mustaka adalah *Operating System* Terpadu untuk Lembaga Pendidikan.**  
Sistem ini dirancang dari fondasi paling dasar untuk menyelesaikan masalah terbesar institusi pendidikan: **data yang terpecah-pecah, birokrasi manual yang melelahkan, serta kesulitan yayasan dalam mengawasi banyak unit sekolah.**

Mustaka melayani:
1. **Sekolah Formal K-12 (SD, SMP, SMA, SMK Swasta)** yang butuh tertib administrasi, buku induk siswa digital yang rapi, dan pelaporan siap akreditasi.
2. **Pesantren & Islamic Boarding School** yang membutuhkan pencatatan berbasis *halaqah tahfidz*, asrama, dan kajian kitab yang tidak bisa diakomodasi oleh aplikasi sekolah umum.
3. **Yayasan Pendidikan Multi-Sekolah** yang menaungi banyak unit (misal: Yayasan memiliki TK, SD, SMP, SMA) dan membutuhkan kontrol terpusat tanpa harus login ke sistem yang berbeda-beda.

---

### 1.2. Masalah Nyata di Lapangan (Pain Points Pasar)
Teman Anda harus memahami "rasa sakit" yang dialami oleh calon pembeli (Kepala Sekolah, Ketua Yayasan, Staf TU). Inilah yang harus diangkat di landing page:

| Masalah Nyata Sekolah di Indonesia | Dampak Buruk bagi Sekolah | Bagaimana Mustaka Menjawabnya |
|---|---|---|
| **Ketergantungan pada File Excel yang Tersebar** | Ketika staf TU berganti atau laptop rusak, data kesiswaan dan riwayat mutasi hilang atau tercecer. | **Satu Pusat Data Terpadu (Cloud)**: Data tersimpan aman di server modern, bisa diakses kapan saja dengan hak akses ketat. |
| **Data Siswa & Wali Murid Tidak Akurat** | Nomor HP wali murid sering tidak terbarui; sekolah panik saat ada kondisi darurat karena tidak ada kontak darurat yang jelas. | **Profil Siswa 360 & Manajemen Wali**: Mencatat NIK, NISN, ayah, ibu, wali asuh, hingga penandaan *Kontak Utama* dan *Kontak Darurat*. |
| **Yayasan "Buta" terhadap Kondisi Sekolah Anak** | Pengurus yayasan harus menunggu laporan manual akhir bulan yang sering terlambat atau tidak akurat. | **Multi-Tenancy Sejati**: Satu yayasan bisa memantau semua sekolah/pesantren binaannya dari satu pintu secara *real-time*. |
| **Aplikasi Sekolah Lain Terlalu Kaku** | Sekolah dengan kurikulum khas (seperti pesantren dengan sistem halaqah/kitab) dipaksa memakai sistem kurikulum umum yang tidak cocok. | **Struktur Akademik Fleksibel**: Mendukung terminologi kelas formal (Rombel) maupun kelompok mengaji (Halaqah/Batch). |
| **Manipulasi Data & Nilai Tanpa Jejak** | Sulit membuktikan siapa yang mengubah nilai siswa, mengganti status kelulusan, atau menghapus catatan. | **Audit Trail Kelas Bank**: Setiap perubahan data mencatat siapa pelakunya, tanggalnya, dan data lama vs data barunya (*immutable*). |

---

### 1.3. Siapa Pengambil Keputusan (Target Persona Pembeli)?

Landing page harus berbicara kepada 3 profil orang ini:

#### 1. Ketua Yayasan / Pemilik Sekolah (*The Visionary & Decision Maker*)
- **Yang dipikirkan**: "Bagaimana yayasan saya terlihat modern, dipercaya orang tua murid, dan saya punya kontrol penuh atas seluruh sekolah tanpa kecolongan keuangan/data?"
- **Bahasa yang disukai**: *Efisiensi biaya, reputasi sekolah modern, transparansi, dashboard yayasan multi-sekolah, keamanan data.*

#### 2. Kepala Sekolah & Tim Akademik (*The Operational Leader*)
- **Yang dipikirkan**: "Bagaimana guru-guru saya tidak terbebani administrasi ruwet, data mutasi siswa rapi untuk akreditasi, dan proses naik kelas/kelulusan berjalan mulus?"
- **Bahasa yang disukai**: *Buku induk digital, pelacakan mutasi otomatis, manajemen rombel & guru yang praktis, siap akreditasi.*

#### 3. Staf Tata Usaha (TU) & Operator (*The Daily User*)
- **Yang dipikirkan**: "Apakah sistem ini mudah digunakan atau justru bikin kerjaan saya makin ribet?"
- **Bahasa yang disukai**: *Antarmuka bersih, pencarian cepat, tidak ribet, support responsif, data keluarga lengkap.*

---

## 2. Bedah Fitur Mustaka & Terjemahan Daya Jualnya (Feature-to-Benefit)

Saat membuat landing page, **jangan hanya memajang nama fitur**. Teman Anda harus mengubah fitur teknis menjadi **keuntungan nyata yang bernilai uang atau waktu**.

Berikut adalah kamus terjemahan fitur Mustaka:

### 2.1. Multi-Tenant Architecture (Satu Sistem, Banyak Sekolah)
- **Apa fiturnya**: Arsitektur yang memungkinkan satu platform melayani banyak organisasi dengan isolasi data tingkat tinggi.
- **Daya Jual di Landing Page**:
  > *"Satu Dashboard untuk Mengontrol Seluruh Unit Pendidikan Yayasan Anda."*
  > Yayasan tidak perlu membeli 5 aplikasi berbeda untuk SD, SMP, dan SMA-nya. Cukup satu akun Mustaka, semua unit sekolah terkelola mandiri dengan privasi terjamin.

### 2.2. Master Identity & Profil Siswa 360 (Student 360)
- **Apa fiturnya**: Pemisahan identitas individu (`Person`) dengan data akademik (`Student`). Terhubung langsung dengan NIK, NISN, data kesehatan, dan hubungan orang tua (`UserParent`).
- **Daya Jual di Landing Page**:
  > *"Buku Induk Digital Abadi: Data Kesiswaan yang Tidak Pernah Usang."*
  > Rekam jejak siswa dari hari pertama mendaftar hingga menjadi alumni tersimpan rapi. Hubungan keluarga (ayah, ibu, wali, kontak darurat) tercatat detail agar pihak sekolah tidak pernah salah menghubungi orang tua saat situasi mendesak.

### 2.3. Manajemen Siklus & Mutasi Siswa (Student Lifecycle)
- **Apa fiturnya**: Pelacakan status siswa secara otomatis (`ACTIVE`, `TRANSFERRED`, `DROPPED`, `GRADUATED`) disertai tanggal efektif dan alasan status.
- **Daya Jual di Landing Page**:
  > *"Pelacakan Siswa Pindah, Lulus, dan Mengundurkan Diri Tanpa Riwayat yang Hilang."*
  > Saat pemeriksaan akreditasi, sekolah dapat menunjukkan data mutasi siswa yang valid dalam hitungan detik, lengkap dengan riwayat alasan resmi dan tanggal kepindahan.

### 2.4. Fleksibilitas Rombel (Kelas) & Halaqah Pesantren
- **Apa fiturnya**: Manajemen `LearningGroup` yang fleksibel, mendukung tahun ajaran dinamis, wali kelas (*homeroom teacher*), dan kapasitas kelas.
- **Daya Jual di Landing Page**:
  > *"Cocok untuk Rombel Sekolah Formal Maupun Halaqah Tahfidz Pesantren."*
  > Apapun model pembelajaran Anda—kelas reguler 36 siswa, kelompok halaqah tahfidz 10 santri, atau kelas bilingual—Mustaka dapat menyesuaikan tanpa memaksa Anda merombak kurikulum internal.

### 2.5. Manajemen Pengajar & Penugasan Pelajaran
- **Apa fiturnya**: Pemetaan guru (`Employee`), NIP, penugasan mata pelajaran (`LearningUnit`), dan perannya sebagai wali kelas.
- **Daya Jual di Landing Page**:
  > *"Distribusi Pengajar Rapi, Beban Kerja Terukur."*
  > Menetapkan guru mata pelajaran dan wali kelas secara instan. Menghindari jadwal bentrok dan memastikan setiap kelas memiliki penanggung jawab yang jelas.

### 2.6. Audit Log & Keamanan Data Tingkat Perbankan
- **Apa fiturnya**: Pencatatan riwayat setiap aksi (`AuditLog`) yang mencatat data lama vs data baru secara permanen.
- **Daya Jual di Landing Page**:
  > *"Transparansi Total: Lindungi Reputasi Sekolah dari Manipulasi Data."*
  > Setiap pengubahan nilai, penggantian status siswa, atau pembaruan profil tercatat otomatis: siapa pelakunya dan kapan dilakukan. Zero fraud, zero tuding-menuding.

### 2.7. Saluran Komunikasi & Pengumuman Terpadu
- **Apa fiturnya**: Modul penerbitan berita/pengumuman resmi (`Post`), notifikasi multi-channel (Web, Email, WhatsApp ready).
- **Daya Jual di Landing Page**:
  > *"Jembatan Komunikasi Eksklusif antara Sekolah dan Wali Murid."*
  > Sampaikan surat edaran, agenda sekolah, dan pengumuman libur langsung ke wali murid melalui portal resmi. Tidak ada lagi miskomunikasi di grup obrolan informal.

### 2.8. Roadmap Komersial Masa Depan (Nilai Tambah Jangka Panjang)
Beri tahu calon klien bahwa Mustaka adalah investasi masa depan:
- **PPDB Online (Penerimaan Siswa Baru)**: Formulir seleksi masuk digital dan verifikasi berkas tanpa antrean fisik.
- **Modul Keuangan & SPP Otomatis**: Integrasi pembayaran otomatis (Virtual Account & QRIS) dengan rekap tunggakan real-time.

---

## 3. Blueprint Struktur & Copywriting Landing Page (Selling Machine)

Landing page harus disusun seperti cerita yang meyakinkan: **Menarik Perhatian ➔ Menggugah Masalah ➔ Memberikan Solusi (Mustaka) ➔ Membuktikan Nilai ➔ Mengajak Bertindak (CTA).**

### 3.1. Halaman Beranda (Homepage Structure)

```
┌────────────────────────────────────────────────────────┐
│ 1. NAVBAR: Logo, Menu Fitur, Solusi, Harga, Tombol WA   │
├────────────────────────────────────────────────────────┤
│ 2. HERO SECTION:                                       │
│    Headline Kuat + Subheadline + Tombol Demo + Mockup  │
├────────────────────────────────────────────────────────┤
│ 3. SOCIAL PROOF / TRUST STRIP:                         │
│    "Solusi yang dipercaya Yayasan & Sekolah Modern"    │
├────────────────────────────────────────────────────────┤
│ 4. PROBLEM SECTION (EMPATHY):                          │
│    "Apakah Masalah Ini Menghambat Sekolah Anda?"       │
├────────────────────────────────────────────────────────┤
│ 5. TRANSFORMATION (BEFORE vs AFTER):                   │
│    Kondisi Manual (Excel) vs Menggunakan Mustaka       │
├────────────────────────────────────────────────────────┤
│ 6. FITUR UTAMA (INTERACTIVE TABS):                     │
│    Kesiswaan 360 | Rombel & Halaqah | Guru | Keamanan  │
├────────────────────────────────────────────────────────┤
│ 7. DUA PILIHAN SOLUSI (USE CASE):                      │
│    [Khusus Sekolah K-12]   vs   [Khusus Pesantren]     │
├────────────────────────────────────────────────────────┤
│ 8. PAKET & PRICING TRANSPARAN:                         │
│    Paket Sekolah Mandiri | Paket Pro | Paket Yayasan   │
├────────────────────────────────────────────────────────┤
│ 9. FAQ (MENJAWAB RAGU-RAGU KEPALA SEKOLAH):            │
│    Keamanan data, kemudahan migrasi Excel, garansi     │
├────────────────────────────────────────────────────────┤
│ 10. FINAL CTA BANNER:                                  │
│     "Modernisasi Sekolah Anda Sekarang"                │
├────────────────────────────────────────────────────────┤
│ 11. FOOTER LENGKAP: Legalitas, Kontak WA, Navigasi     │
└────────────────────────────────────────────────────────┘
```

---

### 3.2. Pilihan Headline Bertenaga Tinggi (Copywriting Hooks)

Teman Anda bisa memilih salah satu dari opsi headline ini:

- **Opsi 1 (Fokus Solusi All-in-One - Rekomendasi Utama)**:  
  **"Satu Sistem Cerdas untuk Mengelola Seluruh Ekosistem Sekolah & Pesantren Anda."**  
  *Sub-copy*: "Tinggalkan tumpukan berkas manual dan file Excel yang tercecer. Mustaka menyatukan data siswa 360, rombel akademik, SDM pengajar, hingga portal yayasan dalam satu platform cloud yang modern, aman, dan mudah digunakan."

- **Opsi 2 (Fokus Penghematan Waktu & Reputasi Modern)**:  
  **"Transformasi Digital Sekolah Anda Tanpa Kerumitan."**  
  *Sub-copy*: "Dirancang khusus untuk membantu Yayasan dan Kepala Sekolah menghemat ratusan jam kerja staf administrasi dengan sistem kesiswaan terintegrasi."

- **Opsi 3 (Fokus Fleksibilitas Sekolah & Pesantren)**:  
  **"Dari Rombel Kelas Formal Hingga Halaqah Pesantren: Kelola Semua dalam Satu Pintu."**  
  *Sub-copy*: "Sistem informasi manajemen pendidikan fleksibel pertama di Indonesia yang memahami kebutuhan sekolah umum sekaligus dinamika pesantren."

---

### 3.3. Bagian Transformasi: Sebelum vs Sesudah Mustaka
Tampilkan tabel perbandingan visual di landing page:

| Sebelum Menggunakan Mustaka (Cara Lama) | Sesudah Menggunakan Mustaka (Modern) |
|---|---|
| Data siswa tersimpan di laptop staf yang berbeda-beda; rawan hilang saat pergantian staf. | Seluruh data kesiswaan tersimpan di cloud terpusat dan dapat diakses kapan pun secara terstruktur. |
| Riwayat siswa keluar, pindah, atau lulus tidak tercatat jelas alasannya. | Riwayat mutasi status siswa tercatat abadi lengkap dengan tanggal dan dokumen pendukung. |
| Pengurus yayasan harus datang ke tiap sekolah untuk meminta laporan fisik. | Pengurus yayasan memantau seluruh unit sekolah langsung dari satu layar monitor secara *real-time*. |
| Orang tua sulit mendapatkan informasi resmi selain dari pesan WhatsApp non-formal. | Komunikasi transparan, kontak darurat tercatat akurat, pengumuman tersampaikan resmi. |

---

### 3.4. Penataan Paket Harga & Psikologi Penawaran (Pricing)

Sekolah di Indonesia lebih percaya jika sistem memiliki kejelasan paket, namun closing pembelian tetap membutuhkan komunikasi personal. Gunakan 3 tier ini:

1. **Paket Sekolah Mandiri (Starter)**
   - *Target*: 1 Unit Sekolah Kecil (SD/SMP/Madrasah di bawah 250 siswa).
   - *Fitur*: Buku induk profil siswa 360, pembagian rombel kelas, akun guru & staf, portal pengumuman, panduan penggunaan online.
   - *CTA*: `Mulai Konsultasi Gratis`
2. **Paket Sekolah Unggulan (Pro - Most Popular)**
   - *Target*: Sekolah Swasta Menengah & Pesantren (250 - 800 siswa).
   - *Fitur*: Seluruh fitur Starter + audit log keamanan, dukungan modul halaqah pesantren, multi-kontak wali darurat, pendampingan migrasi data dari Excel, prioritas dukungan teknis.
   - *CTA*: `Jadwalkan Sesi Demo`
3. **Paket Yayasan & Multi-Sekolah (Enterprise)**
   - *Target*: Yayasan Pendidikan dengan 2 atau lebih unit sekolah/kampus.
   - *Fitur*: Dashboard yayasan multi-tenant terpusat, unlimited unit sekolah, custom subdomain/branding, pelatihan staf tatap muka/online, dedicated account manager.
   - *CTA*: `Hubungi Tim Enterprise`

---

### 3.5. Menjawab Keberatan Calon Klien (FAQ Section)
FAQ ini harus dipasang untuk mematikan keraguan sebelum calon pembeli bertanya:

- **Tanya**: *"Data siswa kami saat ini ada di Excel, apakah kami harus menginput ulang satu per satu?"*  
  **Jawab**: *"Tidak perlu. Tim Mustaka menyediakan template import data massal dan memberikan pendampingan penuh untuk memindahkan data lama Anda secara otomatis."*
- **Tanya**: *"Apakah data sekolah kami aman dan tidak bisa dilihat oleh sekolah lain?"*  
  **Jawab**: *"Sangat aman. Mustaka dibangun dengan teknologi Row-Level Security tingkat lanjut. Setiap sekolah memiliki ruang data yang terisolasi total dan hanya bisa diakses oleh orang yang memiliki hak izin resmi."*
- **Tanya**: *"Apakah sistem ini membutuhkan server fisik di sekolah kami?"*  
  **Jawab**: *"Tidak perlu server lokal yang mahal dan sulit dirawat. Mustaka berbasis cloud modern yang selalu aktif 24/7 dan bisa diakses dari laptop, tablet, maupun ponsel."*
- **Tanya**: *"Bisa kah digunakan untuk pesantren yang sistem pembelajarannya tidak memakai kurikulum Diknas murni?"*  
  **Jawab**: *"Bisa. Sistem kami sangat fleksibel mendukung satuan mata pelajaran kitab, pembagian santri berbasis halaqah tahfidz, maupun kombinasi kelas asrama."*

---

## 4. Mesin Konversi Prospek (Lead Generation Flow)

Untuk pasar Indonesia, **interaksi paling tinggi terjadi lewat WhatsApp**. Namun jangan langsung berikan tombol chat kosong tanpa konteks.

### 4.1. Alur Formulir Cepat (Fast Lead Capture)
Ketika pengunjung menekan tombol **"Jadwalkan Demo"** atau **"Minta Penawaran"**, tampilkan modal singkat dengan 4 pertanyaan:
1. **Nama & Peran Anda**: (Contoh: *Bpk. Ridwan - Kepala Sekolah / Pengurus Yayasan*)
2. **Nama Sekolah / Institusi**: (Contoh: *SMP Islam Al-Azhar / Ponpes Darussalam*)
3. **Perkiraan Jumlah Siswa**: `[ < 200 siswa | 200 - 500 siswa | 500 - 1.000 siswa | > 1.000 siswa ]`
4. **Nomor WhatsApp Aktif**: (Contoh: *08123456789*)

### 4.2. Eksekusi Otomatis
1. **Langkah 1 (Simpan Data)**: Sistem otomatis mencatat data leads tersebut ke spreadsheet/database internal.
2. **Langkah 2 (Redirect WhatsApp)**: Browser pengunjung otomatis membuka tautan WhatsApp Sales dengan teks yang sudah terisi rapi:
   ```
   Halo Tim Mustaka, saya tertarik untuk melihat demo dan penawaran aplikasi.

   Nama: Bpk. Ridwan (Kepala Sekolah)
   Sekolah: SMP Islam Al-Azhar
   Estimasi Siswa: 200 - 500 siswa
   No. HP: 08123456789

   Kapan waktu yang tepat untuk jadwal presentasi demo singkat via Zoom/Google Meet?
   ```
*Hasil*: Tim sales Anda langsung tahu profil calon klien sebelum mengetik sepatah kata pun.

---

## 5. Strategi SEO: Cara Menjaring Calon Pembeli di Google

Calon pembeli dari kalangan yayasan dan sekolah mencari solusi dengan kata kunci spesifik saat mereka frustrasi dengan sistem lama mereka.

### 5.1. Target Kata Kunci Utama (High Commercial Intent)
Landing page dan halaman cabangnya harus mengincar kata kunci ini:

1. **Kata Kunci Solusi Sekolah**:
   - `aplikasi manajemen sekolah terbaik`
   - `software administrasi kesiswaan online`
   - `sistem informasi sekolah buku induk digital`
2. **Kata Kunci Niche Pesantren**:
   - `software administrasi pesantren modern`
   - `aplikasi pencatatan santri dan halaqah`
   - `sistem manajemen ma'had berasrama`
3. **Kata Kunci Yayasan Multi-Sekolah**:
   - `software yayasan pendidikan multi sekolah`
   - `sistem informasi manajemen yayasan terpadu`
4. **Kata Kunci Transaksional**:
   - `biaya aplikasi manajemen sekolah cloud`
   - `jasa pembuatan sistem informasi sekolah swasta`

### 5.2. Arsitektur Halaman SEO (Multi-Page Hub)
Untuk mendominasi Google, jangan hanya mengandalkan 1 halaman beranda:
- `/` ➔ Beranda (Penjualan umum)
- `/fitur/manajemen-siswa` ➔ Menyasar pencarian *"software buku induk siswa"*
- `/solusi/pesantren-boarding` ➔ Menyasar pencarian *"software pesantren & halaqah"*
- `/solusi/yayasan-multi-sekolah` ➔ Menyasar pengurus yayasan besar
- `/harga` ➔ Menyasar kata kunci *"biaya aplikasi sekolah"*
- `/blog/` ➔ Artikel edukasi rutin (Contoh: *"5 Alasan Mengapa Excel Berbahaya untuk Data Siswa Sekolah"*).

---

## 6. Lampiran Teknis (Arsitektur & Rekomendasi Repositori)

*(Diletakkan di bagian akhir untuk tim pengembang yang mengeksekusi pembuatan website)*

### 6.1. Keputusan Arsitektur
- **Repositori Terpisah**: Buat repositori khusus pemasaran (misal: `mustaka-site` atau `mustaka-landing`) terpisah dari repositori aplikasi utama (`mustaka`).
- **Domain Mapping**:
  - Halaman Pemasaran: `https://mustaka.id` (fokus SEO, konversi, dan kecepatan loading).
  - Halaman Aplikasi: `https://app.mustaka.id` (portal login pengguna, dashboard guru/staf).

### 6.2. Rekomendasi Tech Stack Website Pemasaran
- **Framework Utama**: **Nuxt 4 (SSG - Static Site Generation)**
  - *Kenapa Nuxt?*: Rekan Anda tetap berada di ekosistem Vue/Nuxt yang sama dengan aplikasi Mustaka. Dengan `nuxt generate`, seluruh halaman di-render menjadi HTML statis super cepat.
- **Styling**: Tailwind CSS v4 + `@nuxt/ui` v4 (elegan, responsif, dan ringan).
- **SEO Module**: `@nuxtjs/seo` (mengurus sitemap otomatis, OpenGraph share preview, dan Schema.org JSON-LD `SoftwareApplication`).
- **Hosting / Deploy**: Cloudflare Pages atau Vercel (gratis, memiliki CDN global, dan kecepatan TTFB di bawah 100ms).

---

## 7. Rangkuman Pesan untuk Rekan Anda

Saat mulai mendesain landing page:
1. **Fokus pada Emosi & Solusi**: Tunjukkan bahwa Mustaka menyelesaikan pusingnya staf TU dan pengurus yayasan yang selama ini berkutat dengan file Excel yang berantakan.
2. **Tampilkan Tampilan Nyata (Mockup)**: Buat mockup antarmuka yang bersih dan modern agar sekolah melihat bahwa Mustaka jauh lebih profesional dibanding sistem sekolah jadul era 2010-an.
3. **Mudahkan Hubungi Sales**: Tombol WhatsApp dan form demo harus selalu terlihat di pojok kanan atas (*Sticky CTA*).
