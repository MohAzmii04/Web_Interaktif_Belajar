/**
 * Data Materi Pembelajaran Interaktif Kelas 1 MI / SD
 * Topik 1: Mengenal Huruf Hijaiyah & Harakat Fathah
 * Topik 2: Mengenal Bilangan 1-10
 */

const LESSON_DATA = {
  hijaiyah: {
    id: "hijaiyah",
    title: "Mengenal Huruf Hijaiyah & Harakat Fathah",
    subtitle: "Mari belajar membaca huruf Hijaiyah berharakat Fathah dengan ceria!",
    badge: "🔤 Kelas 1 MI - Al-Qur'an Hadis",
    themeColor: "#FF6B6B",
    themeLight: "#FFF0F0",
    bannerEmoji: "🕌",
    soundIntro: "Ayo kita belajar huruf Hijaiyah berharakat fathah!",
    cards: [
      {
        id: "alif-fathah",
        symbol: "اَ",
        baseName: "Alif Fathah",
        reading: "A",
        readingPhonetic: "A (Buka mulutmu lebar: Aaa)",
        color: "#FF6B6B",
        bgSoft: "#FFE3E3",
        shadow: "#E03131",
        emoji: "🍍",
        exampleWord: "Ananasun (Nanas)",
        exampleIndo: "Ayam & Nanas",
        funFact: "Bila huruf Alif diberi tanda garis di atas (fathah), bunyinya menjadi 'A' seperti saat memanggil ayam!",
        makhraj: "Buka mulut secara wajar, suara keluar lepas: A!"
      },
      {
        id: "ba-fathah",
        symbol: "بَ",
        baseName: "Ba Fathah",
        reading: "Ba",
        readingPhonetic: "Ba (Rapatkan dua bibir lalu buka: Ba)",
        color: "#4DABF7",
        bgSoft: "#E7F5FF",
        shadow: "#1971C2",
        emoji: "🦆",
        exampleWord: "Bath-thotun (Bebek)",
        exampleIndo: "Bebek & Baju",
        funFact: "Huruf Ba punya satu titik di bawah perahu mangkuknya. Bila berharakat fathah, bunyinya 'Ba'!",
        makhraj: "Temukan bibir atas dan bawah, lalu lepaskan: Ba!"
      },
      {
        id: "ta-fathah",
        symbol: "تَ",
        baseName: "Ta Fathah",
        reading: "Ta",
        readingPhonetic: "Ta (Ujung lidah di pangkal gigi atas)",
        color: "#51CF66",
        bgSoft: "#EBFBEE",
        shadow: "#2F9E44",
        emoji: "🍎",
        exampleWord: "Tuffahatun (Apel)",
        exampleIndo: "Tali & Apel",
        funFact: "Huruf Ta punya dua titik tersenyum di atas mangkuknya! Jika berharakat fathah dibaca 'Ta'!",
        makhraj: "Sentuhkan ujung lidah ke pangkal gigi seri atas: Ta!"
      },
      {
        id: "tsa-fathah",
        symbol: "ثَ",
        baseName: "Tsa Fathah",
        reading: "Tsa",
        readingPhonetic: "Tsa (Gigit sedikit ujung lidah)",
        color: "#FFA94D",
        bgSoft: "#FFF4E6",
        shadow: "#E8590C",
        emoji: "🦊",
        exampleWord: "Tsa'labun (Rubah)",
        exampleIndo: "Salju & Rubah Cerdik",
        funFact: "Huruf Tsa punya 3 titik di atasnya seperti mahkota kecil! Dibaca desis lembut: 'Tsa'!",
        makhraj: "Keluarkan sedikit ujung lidah di antara gigi atas dan bawah: Tsa!"
      },
      {
        id: "jim-fathah",
        symbol: "جَ",
        baseName: "Jim Fathah",
        reading: "Ja",
        readingPhonetic: "Ja (Tengah lidah ke langit-langit)",
        color: "#CC5DE8",
        bgSoft: "#F8F0FC",
        shadow: "#9C36B5",
        emoji: "🐪",
        exampleWord: "Jamalun (Unta)",
        exampleIndo: "Jagung & Unta",
        funFact: "Huruf Jim punya satu titik di dalam perutnya yang gendut! Berharakat fathah dibaca 'Ja'!",
        makhraj: "Tengah lidah menempel ke langit-langit mulut bagian atas: Ja!"
      },
      {
        id: "ha-fathah",
        symbol: "حَ",
        baseName: "Kha/Ha Fathah",
        reading: "Ha",
        readingPhonetic: "Ha (Suara bersih dari tenggorokan)",
        color: "#20C997",
        bgSoft: "#E6FCF5",
        shadow: "#099268",
        emoji: "🐋",
        exampleWord: "Huutun (Ikan Paus)",
        exampleIndo: "Handuk & Paus Laut",
        funFact: "Huruf Ha bentuknya mirip Jim tapi bersih tanpa titik sama sekali! Suaranya bersih: 'Ha'!",
        makhraj: "Keluarkan suara halus dan bersih dari tengah tenggorokan: Ha!"
      }
    ],
    quiz: [
      {
        question: "Manakah huruf Hijaiyah yang berharakat fathah dan dibaca 'Ba'?",
        hint: "Ingat ya! Huruf ini ada 1 titik di bawah mangkuknya.",
        options: [
          { text: "بَ", label: "Ba", emoji: "🦆", isCorrect: true },
          { text: "تَ", label: "Ta", emoji: "🍎", isCorrect: false },
          { text: "اَ", label: "A", emoji: "🍍", isCorrect: false }
        ]
      },
      {
        question: "Huruf 'اَ' jika diberi harakat fathah di atasnya dibaca apa ya?",
        hint: "Buka mulut lebar-lebar seperti memanggil ayam!",
        options: [
          { text: "A", label: "Dibaca 'A'", emoji: "🌟", isCorrect: true },
          { text: "Ba", label: "Dibaca 'Ba'", emoji: "🦆", isCorrect: false },
          { text: "Ja", label: "Dibaca 'Ja'", emoji: "🐪", isCorrect: false }
        ]
      },
      {
        question: "Huruf manakah yang memiliki 2 titik di atas seperti mata tersenyum?",
        hint: "Huruf ini dibaca 'Ta' seperti buah Tuffahatun (Apel)!",
        options: [
          { text: "بَ", label: "Ba (1 titik bawah)", emoji: "🦆", isCorrect: false },
          { text: "تَ", label: "Ta (2 titik atas)", emoji: "🍎", isCorrect: true },
          { text: "ثَ", label: "Tsa (3 titik atas)", emoji: "🦊", isCorrect: false }
        ]
      },
      {
        question: "Tanda garis miring di atas huruf ( َ ) dinamakan harakat apa?",
        hint: "Tanda ini membuat huruf berbunyi 'A'!",
        options: [
          { text: "Fathah", label: "Harakat Fathah ( َ )", emoji: "☀️", isCorrect: true },
          { text: "Kasrah", label: "Harakat Kasrah ( ِ )", emoji: "💧", isCorrect: false },
          { text: "Dhammah", label: "Harakat Dhammah ( ُ )", emoji: "🌀", isCorrect: false }
        ]
      },
      {
        question: "Bila huruf 'ج' (ada titik di perut) diberi harakat fathah (جَ), bunyinya menjadi apa?",
        hint: "Ingat hewan Jamalun (Unta) atau Jagung manis!",
        options: [
          { text: "Ja", label: "Dibaca 'Ja'", emoji: "🐪", isCorrect: true },
          { text: "Ha", label: "Dibaca 'Ha'", emoji: "🐋", isCorrect: false },
          { text: "Tsa", label: "Dibaca 'Tsa'", emoji: "🦊", isCorrect: false }
        ]
      }
    ]
  },

  bilangan: {
    id: "bilangan",
    title: "Mengenal Bilangan 1 sampai 10",
    subtitle: "Ayo berhitung bersama dengan benda dan hewan lucu!",
    badge: "🔢 Kelas 1 SD/MI - Matematika Ceria",
    themeColor: "#20C997",
    themeLight: "#E6FCF5",
    bannerEmoji: "🎈",
    soundIntro: "Ayo kita belajar berhitung angka satu sampai sepuluh!",
    cards: [
      {
        id: "angka-1",
        symbol: "1",
        baseName: "Angka Satu",
        reading: "Satu",
        readingPhonetic: "Sa - tu (Lambang: 1)",
        color: "#FF6B6B",
        bgSoft: "#FFE3E3",
        shadow: "#E03131",
        emoji: "⭐",
        countItems: ["⭐"],
        exampleWord: "1 Bintang Kejora",
        exampleIndo: "Satu Matahari terbit di pagi hari",
        funFact: "Angka 1 berbentuk tegak lurus seperti lilin ulang tahun yang menyala!",
        makhraj: "Tunjukkan 1 jari telunjukmu ke atas: Satu!"
      },
      {
        id: "angka-2",
        symbol: "2",
        baseName: "Angka Dua",
        reading: "Dua",
        readingPhonetic: "Du - a (Lambang: 2)",
        color: "#4DABF7",
        bgSoft: "#E7F5FF",
        shadow: "#1971C2",
        emoji: "🐰",
        countItems: ["🐰", "🐰"],
        exampleWord: "2 Kelinci Melompat",
        exampleIndo: "Dua mata kita untuk melihat kebaikan",
        funFact: "Angka 2 meliuk anggun seperti bebek yang sedang berenang di danau!",
        makhraj: "Tunjukkan 2 jarimu membentuk tanda damai (peace): Dua!"
      },
      {
        id: "angka-3",
        symbol: "3",
        baseName: "Angka Tiga",
        reading: "Tiga",
        readingPhonetic: "Ti - ga (Lambang: 3)",
        color: "#51CF66",
        bgSoft: "#EBFBEE",
        shadow: "#2F9E44",
        emoji: "🎈",
        countItems: ["🎈", "🎈", "🎈"],
        exampleWord: "3 Balon Warna-warni",
        exampleIndo: "Tiga roda pada bajaj dan becak",
        funFact: "Angka 3 memiliki dua lekukan manis seperti sayap kupu-kupu yang terbang!",
        makhraj: "Hitung bersama: Satu, Dua, Tiga!"
      },
      {
        id: "angka-4",
        symbol: "4",
        baseName: "Angka Empat",
        reading: "Empat",
        readingPhonetic: "Em - pat (Lambang: 4)",
        color: "#FFA94D",
        bgSoft: "#FFF4E6",
        shadow: "#E8590C",
        emoji: "🚗",
        countItems: ["🚗", "🚗", "🚗", "🚗"],
        exampleWord: "4 Roda Mobil",
        exampleIndo: "Empat kaki kucing dan meja belajar",
        funFact: "Angka 4 terlihat gagah seperti kursi yang dibalik atau layar perahu!",
        makhraj: "Tunjukkan 4 jarimu: Empat!"
      },
      {
        id: "angka-5",
        symbol: "5",
        baseName: "Angka Lima",
        reading: "Lima",
        readingPhonetic: "Li - ma (Lambang: 5)",
        color: "#CC5DE8",
        bgSoft: "#F8F0FC",
        shadow: "#9C36B5",
        emoji: "🖐️",
        countItems: ["🍎", "🍎", "🍎", "🍎", "🍎"],
        exampleWord: "5 Jari Tangan Kita",
        exampleIndo: "Lima rukun Islam yang mulia",
        funFact: "Angka 5 punya topi datar dan perut buncit yang lucu!",
        makhraj: "Buka seluruh 5 jari satu tanganmu: Lima!"
      },
      {
        id: "angka-6",
        symbol: "6",
        baseName: "Angka Enam",
        reading: "Enam",
        readingPhonetic: "E - nam (Lambang: 6)",
        color: "#20C997",
        bgSoft: "#E6FCF5",
        shadow: "#099268",
        emoji: "🍓",
        countItems: ["🍓", "🍓", "🍓", "🍓", "🍓", "🍓"],
        exampleWord: "6 Stroberi Manis",
        exampleIndo: "Enam rukun Iman yang wajib kita yakini",
        funFact: "Angka 6 melingkar ke bawah dengan bulat yang rapi di dasarnya!",
        makhraj: "Satu tangan penuh ditambah 1 jari: Enam!"
      }
    ],
    quiz: [
      {
        question: "Coba hitung, ada berapa kelinci lucu ini? 🐰 🐰",
        hint: "Ayo hitung perlahan: Satu... lalu...?",
        options: [
          { text: "2", label: "Dua Kelinci", emoji: "✌️", isCorrect: true },
          { text: "1", label: "Satu Kelinci", emoji: "☝️", isCorrect: false },
          { text: "3", label: "Tiga Kelinci", emoji: "🎈", isCorrect: false }
        ]
      },
      {
        question: "Lambang bilangan untuk kata 'EMPAT' adalah...",
        hint: "Bentuknya seperti kursi yang terbalik atau roda mobil!",
        options: [
          { text: "4", label: "Angka Empat (4)", emoji: "🚗", isCorrect: true },
          { text: "5", label: "Angka Lima (5)", emoji: "🖐️", isCorrect: false },
          { text: "3", label: "Angka Tiga (3)", emoji: "🎈", isCorrect: false }
        ]
      },
      {
        question: "Berapa banyak buah apel manis di keranjang ini? 🍎 🍎 🍎",
        hint: "Satu, dua, lalu...",
        options: [
          { text: "3", label: "Tiga Apel (3)", emoji: "⭐", isCorrect: true },
          { text: "2", label: "Dua Apel (2)", emoji: "🐰", isCorrect: false },
          { text: "4", label: "Empat Apel (4)", emoji: "🍎", isCorrect: false }
        ]
      },
      {
        question: "Ada berapa jumlah jari pada satu telapak tangan kita? 🖐️",
        hint: "Ibu jari, telunjuk, tengah, manis, kelingking...",
        options: [
          { text: "5", label: "Lima Jari (5)", emoji: "🖐️", isCorrect: true },
          { text: "4", label: "Empat Jari (4)", emoji: "🚗", isCorrect: false },
          { text: "6", label: "Enam Jari (6)", emoji: "🎲", isCorrect: false }
        ]
      },
      {
        question: "Setelah angka 1, 2, 3, 4, 5, maka angka berikutnya adalah...",
        hint: "Angka yang memiliki lingkaran bulat di bawahnya!",
        options: [
          { text: "6", label: "Angka Enam (6)", emoji: "🍓", isCorrect: true },
          { text: "7", label: "Angka Tujuh (7)", emoji: "🌈", isCorrect: false },
          { text: "5", label: "Angka Lima (5)", emoji: "🖐️", isCorrect: false }
        ]
      }
    ]
  }
};

window.LESSON_DATA = LESSON_DATA;
