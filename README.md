# Web Portofolio - Kinata Dewa Ariandi 🚀

Website portofolio profesional, modern, responsif, dan interaktif yang dirancang khusus untuk **Kinata Dewa Ariandi** (Fresh Graduate D4 Teknik Informatika Politeknik Negeri Malang / Software, Web, & Mobile Developer).

---

## 🌟 Fitur Utama

1. **Desain Modern & Responsif**:
   - Tampilan *Dark & Light Mode* yang dapat berganti secara dinamis dan tersimpan di `localStorage`.
   - Efek visual halus (*Glassmorphism*, *Ambient Glow*, *Floating Badges*, *Micro-interactions*).
   - Tipografi elegan (*Outfit* & *Plus Jakarta Sans*).
   - 100% Responsif untuk layar smartphone, tablet, laptop, dan monitor desktop.

2. **Section Lengkap Sesuai CV**:
   - **Hero Section**: Animasi pengetikan dinamis (*Typewriter effect*), ringkasan profil, *quick action buttons*, dan indikator status *Available for Work*.
   - **Tentang & Pendidikan**: Latar belakang akademik di Politeknik Negeri Malang (IPK 3.49/4.00), Skripsi (*Dashboard Business Intelligence*), dan pengalaman organisasi (Beat Attack & MC Theatrisic).
   - **Pengalaman Kerja**: Riwayat magang industri di PT Sarana Utama Adimandiri (Modernisasi Guest Book & Sistem Informasi Maintenance Gedung Plaza SUA).
   - **Galeri Proyek Interaktif**:
     - Filter kategori instan (*All, Web Development, Mobile Flutter, Business Intelligence*).
     - Proyek unggulan: AttendIT, ComplexHub, JTI Rule System, BI Academic Dashboard, SUA Maintenance System, dan Smart Guest Book.
     - Modal popup interaktif untuk melihat rincian fitur dan teknologi tiap proyek.
   - **Skills & Tech Stack**: Hard skills, tools (Git, Figma, Excel, Canva, VS Code, Postman), dan soft skills.
   - **Sertifikasi**: BNSP Junior Network Administrator (2026), ETS TOEIC Score 960 (2026), Cisco Network Defense (2024), Codepolitan Java, MySkill Figma UI/UX, dan MySkill Marketing.
   - **Kontak & Pesan Instan**: Form terintegrasi yang langsung menghubungkan pengunjung ke obrolan WhatsApp dengan pesan terformat.

3. **Struktur Data Modular**:
   - Seluruh konten dikelola secara terpusat di `js/data.js`, memudahkan penambahan proyek, sertifikat, atau pengalaman baru di masa mendatang tanpa perlu mengubah kode HTML.

---

## 🚀 Cara Menjalankan Secara Lokal

1. **Buka Langsung di Browser**:
   - Cukup klik dua kali (*double click*) file `index.html` untuk langsung membukanya di browser favorit Anda (Google Chrome, Microsoft Edge, Firefox, dll.).

2. **Atau Menggunakan Live Server / Local Server (Node.js / Python / VS Code)**:
   ```bash
   # Menggunakan npx serve
   npx serve .

   # Atau menggunakan Python 3
   python -m http.server 3000
   ```
   Buka `http://localhost:3000` di browser.

---

## 🌐 Cara Deploy Gratis ke Internet

### Opsi 1: GitHub Pages
1. Buat repository baru di GitHub dengan nama `portfolio` atau `<username>.github.io`.
2. Push semua file ke repository tersebut:
   ```bash
   git init
   git add .
   git commit -m "Initial commit Portfolio Kinata Dewa Ariandi"
   git branch -M main
   git remote add origin https://github.com/KinataDewa/portfolio.git
   git push -u origin main
   ```
3. Buka tab **Settings** -> **Pages** di repository GitHub Anda, pilih branch `main`, lalu klik **Save**.
4. Website portofolio Anda akan langsung online!

### Opsi 2: Vercel / Netlify
1. Tarik (*drag and drop*) folder `portfolio-kinata` langsung ke dashboard **Netlify Drop** atau import via **Vercel**.
2. Portofolio siap diakses dalam hitungan detik.

