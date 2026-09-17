// Data Portofolio - Kinata Dewa Ariandi
const portfolioData = {
  personal: {
    name: "Kinata Dewa Ariandi",
    title: "Software Engineer | Web & Mobile Developer",
    subtitle: "Fresh Graduate Sarjana Terapan Teknik Informatika",
    campus: "Politeknik Negeri Malang",
    location: "Malang, Jawa Timur, Indonesia",
    email: "kinatadewaariandi@gmail.com",
    phone: "+62 813-8538-5684",
    whatsapp: "6281385385684",
    github: "https://github.com/KinataDewa",
    linkedin: "https://linkedin.com/in/kinata-d-77729725a/",
    bio: "Fresh graduate Sarjana Terapan Teknik Informatika dari Politeknik Negeri Malang (IPK 3.49/4.00) yang berfokus pada software development, mobile development, dan web development. Memiliki pengalaman nyata membangun sistem berbasis PHP, Laravel, React, dan Flutter melalui proyek industri dan kampus.",
    stats: [
      { number: "3.49", label: "IPK / GPA", suffix: "/4.00" },
      { number: "960", label: "TOEIC Score", suffix: "/990" },
      { number: "5+", label: "Proyek Selesai", suffix: "" },
      { number: "6+", label: "Sertifikasi", suffix: "" },
    ],
  },

  skills: {
    hardSkills: [
      {
        name: "PHP & Laravel",
        level: 90,
        icon: "fab fa-laravel",
        category: "Backend",
      },
      {
        name: "Flutter (Dart)",
        level: 85,
        icon: "fas fa-mobile-screen-button",
        category: "Mobile",
      },
      {
        name: "React.js",
        level: 82,
        icon: "fab fa-react",
        category: "Frontend",
      },
      {
        name: "MySQL & Database",
        level: 88,
        icon: "fas fa-database",
        category: "Database",
      },
      { name: "Java", level: 80, icon: "fab fa-java", category: "Backend" },
      {
        name: "HTML5 & Modern CSS",
        level: 92,
        icon: "fab fa-html5",
        category: "Frontend",
      },
      {
        name: "Figma / UI-UX",
        level: 85,
        icon: "fab fa-figma",
        category: "Design",
      },
      {
        name: "RESTful API Integration",
        level: 88,
        icon: "fas fa-network-wired",
        category: "Backend",
      },
    ],
    softwareTools: [
      { name: "Git & GitHub", icon: "fab fa-github", desc: "Version Control" },
      { name: "Figma", icon: "fab fa-figma", desc: "UI/UX & Prototyping" },
      {
        name: "Microsoft Excel",
        icon: "fas fa-file-excel",
        desc: "Data Analysis",
      },
      { name: "Canva", icon: "fas fa-palette", desc: "Visual Design" },
      {
        name: "VS Code & Android Studio",
        icon: "fas fa-laptop-code",
        desc: "Development IDE",
      },
      { name: "Postman", icon: "fas fa-paper-plane", desc: "API Testing" },
    ],
    softSkills: [
      {
        name: "Effective Communication",
        desc: "Komunikasi dua arah yang lugas, terbukti dalam peran External Relations & Master of Ceremonies.",
      },
      {
        name: "Teamwork & Collaboration",
        desc: "Kemampuan adaptasi tinggi dan sinergi aktif dalam tim lintas fungsi teknis maupun operasional.",
      },
      {
        name: "Critical Thinking & Analysis",
        desc: "Keahlian membedah requirement kompleks dan memetakan arsitektur solusi sistem yang tepat.",
      },
      {
        name: "Time Management",
        desc: "Disiplin mengelola prioritas dan menyelesaikan milestone pekerjaan secara tepat waktu.",
      },
    ],
  },

  experiences: [
    {
      role: "Software Engineer Intern",
      company: "PT Sarana Utama Adimandiri",
      location: "Jakarta Selatan, DKI Jakarta, Indonesia",
      period: "Jul 2025 – Dec 2025",
      type: "Magang Industri",
      highlights: [
        "Meningkatkan sistem Guest Book menjadi lebih modern dan responsif, menambahkan fitur tipe tamu, penerima tamu, dokumentasi foto otomatis dengan timestamp, dan pencatatan Tamu Event.",
        "Mengembangkan Sistem Informasi Maintenance Gedung Plaza SUA yang mencakup 5 kategori proses (form harian, pengecekan, perawatan, perbaikan, dan aduan) melalui proses requirement gathering, perancangan sistem, hingga pengujian langsung bersama staff operasional.",
        "Mengoptimalkan performa alur data dan kemudahan antarmuka bagi staf di lapangan agar pencatatan maintenance lebih cepat dan minim kesalahan.",
      ],
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "JavaScript",
        "Responsive UI",
        "System Analysis",
      ],
    },
  ],

  education: [
    {
      degree: "Sarjana Terapan Teknik Informatika (D4)",
      institution: "Politeknik Negeri Malang",
      location: "Malang, Indonesia",
      period: "Agu 2022 – Jul 2026",
      gpa: "3.49 / 4.00",
      thesisTitle:
        "Pengembangan Dashboard Business Intelligence untuk Analisis Data Akademik Mahasiswa",
      thesisDesc:
        "Mengembangkan sistem visualisasi dan analitik Business Intelligence untuk mengevaluasi data histori performa akademik mahasiswa serta mendukung pengambilan keputusan strategis di perguruan tinggi.",
    },
  ],

  projects: [
    {
      id: "attend-it",
      title: "AttendIT - Mobile Attendance App",
      category: "mobile",
      type: "Proyek Kampus",
      period: "Sep 2024 – Des 2024",
      shortDesc:
        "Aplikasi absensi mobile mahasiswa berbasis Flutter dengan fitur verifikasi wajah dan GPS real time.",
      description:
        "AttendIT adalah solusi presensi digital yang dirancang untuk mencegah kecurangan absensi. Menggunakan verifikasi biometrik wajah serta deteksi geolokasi GPS real-time untuk memastikan mahasiswa hadir di area kampus pada jam perkuliahan.",
      badge: "Mobile App (Flutter)",
      icon: "fas fa-user-check",
      image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80",
      techStack: [
        "Flutter",
        "Dart",
        "Face Verification",
        "Real-time GPS",
        "REST API",
        "Mobile UI",
      ],
      features: [
        "Verifikasi Wajah (Face Verification) anti-spoofing",
        "Deteksi Radius & Geofencing GPS Real-time",
        "Riwayat Presensi & Rekap Kehadiran Otomatis",
        "Integrasi API Backend yang aman dan responsif",
        "Tampilan antarmuka mobile yang intuitif",
      ],
      githubUrl:
        "https://github.com/KinataDewa/AttendIT_FaceRecognition/tree/main",
      demoUrl: null,
    },
    {
      id: "complex-hub",
      title: "ComplexHub - Online Resident Management",
      category: "web",
      type: "Proyek Kampus",
      period: "Feb 2024 – Jun 2024",
      shortDesc:
        "Sistem manajemen warga online lengkap dengan fitur Autentikasi, Dashboard, UI responsif, dan backend keuangan.",
      description:
        "ComplexHub adalah platform web terpadu untuk digitalisasi tata kelola lingkungan perumahan. Menghadirkan transparansi iuran kas warga, dashboard interaktif, serta modul pencatatan keuangan dan administrasi warga.",
      badge: "Fullstack Web",
      icon: "fas fa-users-gear",
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
      techStack: [
        "Laravel",
        "PHP",
        "MySQL",
        "JavaScript",
        "Bootstrap / Tailwind",
        "Financial Module",
      ],
      features: [
        "Autentikasi & Multi-role Access (Warga & Pengurus)",
        "Dashboard Statistik Kas & Iuran Warga Real-time",
        "Modul Backend Keuangan & Laporan Pemasukan/Pengeluaran",
        "Desain UI Responsif optimal untuk mobile dan desktop",
        "Pencatatan Data Warga & Inventaris Lingkungan",
      ],
      githubUrl: "https://github.com/KinataDewa/ComplexHub",
      demoUrl: null,
    },
    {
      id: "jti-rule-system",
      title: "JTI Rule System - Academic Regulation Portal",
      category: "web",
      type: "Proyek Kampus",
      period: "Sep 2023 – Des 2023",
      shortDesc:
        "Website berbasis PHP berisi peraturan JTI yang dapat diakses oleh dosen, admin, DPA, dan mahasiswa sesuai hak akses.",
      description:
        "Platform terpusat untuk publikasi dan penegakan regulasi tata tertib akademik Jurusan Teknologi Informasi Polinema. Memudahkan mahasiswa, dosen pengampu, DPA, dan admin dalam memantau peraturan dan catatan kedisiplinan.",
      badge: "Web System (PHP)",
      icon: "fas fa-scale-balanced",
      image:
        "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=800&q=80",
      techStack: [
        "PHP",
        "MySQL",
        "Role-Based Access Control (RBAC)",
        "HTML5/CSS3",
        "JavaScript",
      ],
      features: [
        "Hak Akses Khusus: Mahasiswa, Dosen, DPA, & Admin (RBAC)",
        "Katalog Pencarian Peraturan Akademik Interaktif",
        "Pencatatan & Tracking Poin Pelanggaran Mahasiswa",
        "Panel Manajemen Konten Peraturan untuk Admin",
        "Ekspor Rekapitulasi Data Regulasi & Kedisiplinan",
      ],
      githubUrl:
        "https://https://github.com/KinataDewa/Project_Tatib.com/KinataDewa",
      demoUrl: null,
    },
    {
      id: "bi-academic-dashboard",
      title: "BI Dashboard Analisis Data Akademik Mahasiswa",
      category: "bi",
      type: "Proyek Skripsi / Research",
      period: "2025 – 2026",
      shortDesc:
        "Pengembangan Dashboard Business Intelligence untuk analisis menyeluruh data akademik mahasiswa.",
      description:
        "Sistem Business Intelligence komprehensif yang mengubah data akademik mentah menjadi wawasan visual interaktif. Memfasilitasi pemangku kepentingan dalam mendeteksi tren kelulusan, evaluasi kurikulum, dan performa akademik mahasiswa.",
      badge: "Business Intelligence & Data",
      icon: "fas fa-chart-pie",
      image:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&w=800&q=80",
      techStack: [
        "Business Intelligence",
        "Data Analytics",
        "MySQL",
        "PHP / Python",
        "Data Visualization",
      ],
      features: [
        "Visualisasi Tren IPK, Kelulusan, & Drop-out Rate",
        "Peta Sebaran Performa Akademik per Program Studi",
        "Filter Multidimensi Berdasarkan Angkatan & Semester",
        "Dashboard Insight untuk Pengambilan Kebijakan Akademik",
      ],
      githubUrl:
        "https://https://github.com/KinataDewa/dashboard.com/KinataDewa",
      demoUrl: null,
    },
    {
      id: "sua-maintenance-system",
      title: "Plaza SUA Building Maintenance Information System",
      category: "web",
      type: "Proyek Industri (PT Sarana Utama Adimandiri)",
      period: "Jul 2025 – Des 2025",
      shortDesc:
        "Sistem informasi maintenance gedung mencakup 5 kategori proses operasional (form harian, pengecekan, perawatan, perbaikan, aduan).",
      description:
        "Sistem digitalisasi pemeliharaan infrastruktur gedung Plaza SUA yang dirancang dari tahap requirement gathering, arsitektur database, antarmuka pengguna, hingga user acceptance testing bersama staf operasional di lapangan.",
      badge: "Industrial Enterprise Web",
      icon: "fas fa-building-shield",
      image:
        "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      techStack: [
        "PHP",
        "Laravel",
        "MySQL",
        "Operational Workflow",
        "Responsive UI",
      ],
      features: [
        "Integrasi 5 Kategori Proses: Form Harian, Pengecekan, Perawatan, Perbaikan, & Aduan",
        "Requirement Gathering & Pengujian Langsung dengan Staf Lapangan",
        "Tracking Progres Perbaikan & Notifikasi Status Aduan",
        "Laporan Pemeliharaan Fasilitas Gedung Otomatis",
      ],
      githubUrl:
        "https://github.https://github.com/KinataDewa/maintenance/KinataDewa",
      demoUrl: null,
    },
    {
      id: "guestbook-system",
      title: "Modern Smart Guest Book & Event System",
      category: "web",
      type: "Proyek Industri (PT Sarana Utama Adimandiri)",
      period: "Jul 2025 – Sep 2025",
      shortDesc:
        "Modernisasi sistem buku tamu dengan penangkapan foto otomatis, timestamp, dan pencatatan Tamu Event.",
      description:
        "Transformasi sistem registrasi tamu kantor menjadi lebih modern, aman, dan responsif. Dilengkapi dengan auto-photo capture berbasis timestamp kamera serta manajemen tamu acara khusus.",
      badge: "Industrial Web App",
      icon: "fas fa-address-book",
      image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0?auto=format&fit=crop&w=800&q=80",
      techStack: ["PHP", "Laravel", "Webcam JS API", "MySQL", "Responsive UI"],
      features: [
        "Dokumentasi Foto Otomatis dengan Timestamp Watermark",
        "Kategorisasi Tipe Tamu & Penetapan Penerima Tamu",
        "Modul Khusus Pencatatan Tamu Event / Acara",
        "Antarmuka Modern & Ramah Pengguna di Tablet/PC Resepsionis",
      ],
      githubUrl:
        "https://github.https://github.com/KinataDewa/buku-tamu/KinataDewa",
      demoUrl: null,
    },
  ],

  certifications: [
    {
      id: "bnsp-netadmin",
      title: "Junior Network Administrator",
      issuer: "LSP Polinema - BNSP",
      year: "2026",
      badge: "BNSP Resmi",
      icon: "fas fa-network-wired",
      colorClass: "from-blue-600 to-indigo-600",
      highlight: "Sertifikasi Kompetensi Nasional",
      desc: "Sertifikasi kompetensi nasional Badan Nasional Sertifikasi Profesi (BNSP) untuk administrasi, konfigurasi, dan pemeliharaan jaringan komputer.",
    },
    {
      id: "toeic-960",
      title: "TOEIC Official (Score 960 / 990)",
      issuer: "ETS (Educational Testing Service)",
      year: "2026",
      badge: "Score: 960",
      icon: "fas fa-award",
      colorClass: "from-amber-500 to-orange-600",
      highlight: "International English Proficiency",
      desc: "Skor 960 (Tingkat Sangat Tinggi / Professional Working Proficiency) yang membuktikan keahlian komunikasi Bahasa Inggris bisnis dan teknis secara global.",
    },
    {
      id: "cisco-netdef",
      title: "Network Defense",
      issuer: "Cisco Networking Academy",
      year: "2024",
      badge: "Cisco Certified",
      icon: "fas fa-shield-halved",
      colorClass: "from-cyan-600 to-blue-700",
      highlight: "Cybersecurity & Defense",
      desc: "Kompetensi dalam pertahanan keamanan jaringan, mitigasi serangan siber, pengamanan perimeter, dan analisis vulnerabilitas.",
    },
    {
      id: "codepolitan-java",
      title: "Certificate Java Basic",
      issuer: "Codepolitan",
      year: "2024",
      badge: "Programming",
      icon: "fab fa-java",
      colorClass: "from-red-600 to-rose-700",
      highlight: "Core Java & OOP",
      desc: "Pemahaman fundamental bahasa pemrograman Java, konsep Object-Oriented Programming, modularitas kode, dan struktur data.",
    },
    {
      id: "myskill-figma",
      title: "Figma for UI/UX",
      issuer: "MySkill",
      year: "2024",
      badge: "UI/UX Design",
      icon: "fab fa-figma",
      colorClass: "from-purple-600 to-pink-600",
      highlight: "Design System & Prototyping",
      desc: "Keahlian dalam pembuatan user interface, design system, interaksi pengguna, wireframe, dan prototipe interaktif menggunakan Figma.",
    },
    {
      id: "myskill-marketing",
      title: "Marketing Introduction",
      issuer: "MySkill",
      year: "2024",
      badge: "Business Strategy",
      icon: "fas fa-bullhorn",
      colorClass: "from-emerald-600 to-teal-700",
      highlight: "Digital Marketing & Branding",
      desc: "Konsep dasar pemasaran, product positioning, pemahaman audiens pasar, dan komunikasi produk.",
    },
  ],

  organizations: [
    {
      role: "External Relations Specialist",
      event: "Beat Attack Vol 10",
      icon: "fas fa-handshake",
      desc: "Membangun kemitraan strategis eksternal, menjalin komunikasi dengan sponsor, media partner, serta mengoordinasikan hubungan publik untuk kesuksesan event.",
    },
    {
      role: "Master of Ceremonies (MC)",
      event: "Theatrisic Anniversary 23",
      icon: "fas fa-microphone-lines",
      desc: "Memimpin jalannya perayaan resmi, menjaga antusiasme audiens, dan memastikan transisi setiap sesi acara berjalan tertib dan tepat waktu.",
    },
  ],
};
