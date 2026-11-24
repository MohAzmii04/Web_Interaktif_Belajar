# 🌟 Website Belajar Ceria - Kelas 1 MI & SD

Aplikasi web pembelajaran interaktif satu halaman (Single Page Application) yang ceria, ramah anak, dan **siap pakai di ruang kelas** untuk siswa Kelas 1 Madrasah Ibtidaiyah (MI) dan Sekolah Dasar (SD).
*https://materibelajarkelas1.netlify.app/*
Mendukung dua topik pembelajaran yang dapat dipilih secara fleksibel oleh guru:
1. **🔤 Mengenal Huruf Hijaiyah & Harakat Fathah** (*Al-Qur'an Hadis Kelas 1 MI*)
2. **🔢 Mengenal Bilangan 1 sampai 10** (*Matematika Ceria Kelas 1 SD/MI*)

---

## 🎨 Fitur Desain & Interaktivitas

### 1. Tampilan Visual 3D Ceria & Ramah Mata
- **Palet Warna Ceria & Lembut**: Menggunakan warna pastel hangat (kuning ceria, biru langit, hijau mint, lavender) yang tidak menyilaukan mata siswa saat diproyeksikan berjam-jam di layar proyektor.
- **Elemen Taktil 3D (Claymorphism)**: Kartu dan tombol memiliki efek ketebalan balok mainan anak, dengan respon animasi tekan (*press down*) dan bunyi ketukan saat disentuh.
- **Ukuran Huruf & Simbol Ekstra Besar**: 
  - Huruf Arab kaligrafi (*Noto Naskh Arabic*) berukuran besar (5rem - 7rem) dengan harakat Fathah ( َ ) yang sangat jelas dan tidak terpotong.
  - Font anak ramah (*Fredoka* & *Nunito*) yang bulat, tebal, dan mudah dieja siswa Kelas 1.
- **Ikon & Emoji Pendukung**: Dilengkapi ilustrasi hewan dan benda familiar (🍍 Nanas/Ayam, 🦆 Bebek/Baju, 🍎 Apel/Tali, 🦊 Rubah/Salju, 🐪 Unta/Jagung, 🐋 Paus/Handuk).

---

### 2. Bagian 1 — Kartu Belajar Interaktif (6 Kartu Materi Dasar)
- Menampilkan 6 kartu materi dasar berbentuk 3D timbul.
- Setiap kartu dapat diklik atau disentuh di layar sentuh untuk membuka **Modal Interaktif Ceria**:
  - **Simbol Huruf/Angka Raksasa** dengan animasi mengambang.
  - **Cara Membaca & Tanda Fonik** (misal: *A - Buka mulut lebar-lebar: Aaa!*).
  - **Tips Makhraj Mudah Ramah Anak**: Panduan posisi bibir dan lidah yang disederhanakan untuk anak usia 6-7 tahun.
  - **Contoh Kata Bergambar & Artinya**: Disertai ikon emoji besar.
  - **Tombol "🔊 Dengarkan Bunyi"**: Melafalkan bunyi huruf/angka secara otomatis atau manual.
  - **Navigasi Kartu Sebelumnya & Selanjutnya**: Memudahkan guru menjelaskan materi secara berurutan di depan kelas.

---

### 3. Bagian 2 — Permainan Tebak Cepat (5 Soal Pilihan Sederhana)
- **Tantangan 5 Soal Pilihan Berganda**: Format 3 tombol pilihan berukuran besar per soal dengan ikon visual yang jelas.
- **Indikator Progres 5 Bintang**: Anak dapat melihat langsung progres soal yang sedang dikerjakan.
- **Fitur "🔊 Bacakan Soal"**: Membantu siswa Kelas 1 yang masih dalam tahap awal belajar membaca teks panjang.
- **Tombol "🔄 Ulangi Permainan"**: Tersedia langsung di status bar untuk mengulang kapan saja.

---

### 4. Sistem Umpan Balik Ramah Anak
- **Bila Jawaban Benar**:
  - Muncul apresiasi ceria: *"Hebat! Jawabanmu Benar! 🌟"*, *"Masya Allah, Pintar Sekali! 🎉"*.
  - Efek ledakan **Confetti Warna-warni** di layar (menggunakan HTML5 Canvas mandiri tanpa dependensi luar).
  - Bunyi lonceng glockenspiel kemenangan (*Web Audio API* sintetis).
  - Skor bintang terkumpul bertambah dengan animasi pantulan (*bounce*).
  - Tombol *"Lanjut Soal Berikutnya ➡️"*.
- **Bila Jawaban Belum Tepat**:
  - Bahasa yang menyemangati tanpa membuat anak takut salah: *"Hampir Tepat! Yuk Coba Lagi! 💪"*.
  - Efek suara lembut marimba yang menenangkan.
  - Kotak **Petunjuk Guru (Hint)** muncul otomatis memberikan bantuan pemecahan masalah.
  - Siswa dapat menekan tombol *"Coba Lagi Yuk! 💪"* atau langsung memilih alternatif jawaban lain.
- **Rapor Bintang Akhir**:
  - Tampilan piala emas 🏆 dan 5 bintang perolehan.
  - Pesan pujian juara kelas dan motivasi belajar.
  - Tombol *"Mainkan Lagi 🔄"* dan *"Coba Pelajaran Lainnya 📚"*.

---

### 5. Fitur Khusus Kelas & Proyektor
- **🖥️ Mode Layar Penuh (Projector Mode)**: Satu klik untuk memaksimalkan tampilan ke seluruh layar proyektor atau smartboard tanpa gangguan toolbar browser.
- **🔊/🔇 Toggle Audio**: Suara dapat dihidupkan atau dimatikan sewaktu-waktu sesuai suasana kelas.
- **⭐ Maskot Bintang Interaktif**: Maskot di bagian pojok kiri atas dapat diklik untuk menyapa siswa dengan ucapan penyemangat.
- **Navigasi Keyboard untuk Guru**:
  - `Esc`: Menutup jendela pop-up kartu
  - `Panah Kiri (←)`: Pindah ke kartu materi sebelumnya
  - `Panah Kanan (→)`: Pindah ke kartu materi berikutnya

---

## 🚀 Cara Menjalankan

Aplikasi ini bersifat **100% Standalone (Mandiri)** tanpa butuh instalasi server rumit atau koneksi database:

1. Buka folder proyek: `Website Interaktif Belajar`
2. Klik dua kali file **`index.html`** di peramban web apa pun (Google Chrome, Microsoft Edge, Safari, Firefox).
3. Halaman web langsung siap digunakan di laptop guru, tablet siswa, maupun LCD Proyektor kelas!

---

## 📁 Struktur Direktori

```
Website Interaktif Belajar/
├── index.html        # Kerangka antarmuka responsif kelas 1 MI/SD
├── css/
│   └── style.css     # Desain 3D, claymorphism, tema pastel, responsivitas proyektor
├── js/
│   ├── data.js       # Bank materi 6 kartu & 5 kuis untuk Hijaiyah & Bilangan
│   ├── audio.js      # Generator audio sintetis (Web Audio API) & narasi suara TTS
│   └── app.js        # Logika interaktivitas, modal, kuis, bintang, & confetti canvas
└── README.md         # Dokumentasi panduan penggunaan di kelas
```
