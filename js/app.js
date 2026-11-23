/**
 * Logika Aplikasi Pembelajaran Interaktif Kelas 1 MI / SD
 * Fitur: Kartu 3D Interaktif, Kuis 5 Soal, Umpan Balik Ramah Anak, Confetti & Audio
 */

// State Aplikasi
const state = {
  currentTopic: 'hijaiyah', // 'hijaiyah' | 'bilangan'
  activeCardIndex: 0,
  quizIndex: 0,
  quizScore: 0,
  totalStars: 0,
  quizAnsweredCorrectly: false,
  isMuted: false
};

// ==========================================================================
// INISIALISASI SAAT HALAMAN DIMUAT
// ==========================================================================
document.addEventListener('DOMContentLoaded', () => {
  renderTopicContent();
  initConfettiCanvas();
  setupKeyboardNavigation();

  // Maskot interaktif di header
  const mascot = document.getElementById('mascotBubble');
  if (mascot) {
    mascot.addEventListener('click', () => {
      soundEngine.playPop();
      soundEngine.speak("Halo teman-teman ceria! Selamat belajar dengan gembira!");
      mascot.classList.add('bump');
      setTimeout(() => mascot.classList.remove('bump'), 500);
    });
  }
});

// ==========================================================================
// GANTI TOPIK PEMBELAJARAN
// ==========================================================================
function switchTopic(topicKey) {
  if (state.currentTopic === topicKey) return;
  state.currentTopic = topicKey;
  soundEngine.playPop();

  // Update style tab aktif
  document.getElementById('btnTopicHijaiyah').classList.toggle('active', topicKey === 'hijaiyah');
  document.getElementById('btnTopicBilangan').classList.toggle('active', topicKey === 'bilangan');

  renderTopicContent();
  restartQuiz();

  // Sapaan suara tema baru
  const topicData = window.LESSON_DATA[topicKey];
  if (topicData && topicData.soundIntro) {
    soundEngine.speak(topicData.soundIntro);
  }
}

function toggleOtherTopic() {
  const nextTopic = state.currentTopic === 'hijaiyah' ? 'bilangan' : 'hijaiyah';
  switchTopic(nextTopic);
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

// Render data topik ke dalam Hero, Kartu, dan Soal Kuis
function renderTopicContent() {
  const data = window.LESSON_DATA[state.currentTopic];
  if (!data) return;

  // 1. Update Hero Banner
  document.getElementById('heroBadge').textContent = data.badge;
  document.getElementById('heroTitle').textContent = data.title;
  document.getElementById('heroDesc').textContent = data.subtitle;
  document.getElementById('heroEmoji').textContent = data.bannerEmoji;
  document.getElementById('heroSpeechBubble').textContent = state.currentTopic === 'hijaiyah'
    ? '"Klik kartu huruf di bawah untuk melihat cara baca dan bunyinya ya!"'
    : '"Ayo hitung benda dan hewan bersama kelinci dan balon warna-warni!"';

  // 2. Render 6 Kartu Interaktif
  renderInteractiveCards(data.cards);

  // 3. Muat Soal Kuis Pertama
  loadQuizQuestion(0);
}

// ==========================================================================
// BAGIAN 1: KARTU BELAJAR INTERAKTIF (6 KARTU MATERI DASAR)
// ==========================================================================
function renderInteractiveCards(cards) {
  const container = document.getElementById('cardsGrid');
  if (!container) return;

  container.innerHTML = '';

  cards.forEach((card, index) => {
    const cardEl = document.createElement('div');
    cardEl.className = 'learning-card';
    cardEl.setAttribute('role', 'listitem');
    cardEl.setAttribute('tabindex', '0');
    cardEl.setAttribute('aria-label', `${card.baseName}, dibaca ${card.reading}`);
    
    // Set custom properties untuk warna tema kartu 3D
    cardEl.style.setProperty('--accent-color', card.color);
    cardEl.style.setProperty('--bg-soft', card.bgSoft);
    cardEl.style.setProperty('--border-color', card.shadow);

    const isNumber = state.currentTopic === 'bilangan';

    cardEl.innerHTML = `
      <div class="card-symbol-wrapper">
        <span class="card-big-symbol ${isNumber ? 'is-number' : ''}">${card.symbol}</span>
      </div>
      <div class="card-reading-badge">
        <span>🗣️ ${card.reading}</span>
      </div>
      <div class="card-example-row">
        <span class="card-emoji">${card.emoji}</span>
        <span class="card-example-text">${card.exampleIndo}</span>
      </div>
      <div class="card-action-prompt">
        <span class="touch-icon">👆</span>
        <span>Sentuh untuk Pelajari</span>
      </div>
    `;

    // Klik untuk membuka modal detail kartu
    cardEl.addEventListener('click', () => openCardDetail(index));
    cardEl.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        openCardDetail(index);
      }
    });

    container.appendChild(cardEl);
  });
}

// Buka Modal Detail Kartu Interaktif
function openCardDetail(index) {
  const cards = window.LESSON_DATA[state.currentTopic].cards;
  if (!cards[index]) return;

  state.activeCardIndex = index;
  const card = cards[index];

  soundEngine.playCardOpen();

  // Populate data ke modal
  const modal = document.getElementById('cardModal');
  const isNumber = state.currentTopic === 'bilangan';

  document.getElementById('modalBadge').textContent = isNumber ? '🔢 Mengenal Angka' : '🕌 Huruf Hijaiyah & Harakat Fathah';
  
  const bigSymbolEl = document.getElementById('modalBigSymbol');
  bigSymbolEl.textContent = card.symbol;
  bigSymbolEl.className = `modal-big-symbol ${isNumber ? 'is-number' : ''}`;
  bigSymbolEl.style.color = card.color;

  document.getElementById('modalCardName').textContent = card.baseName;
  document.getElementById('modalReading').textContent = `Dibaca: "${card.reading}"`;
  document.getElementById('modalMakhraj').textContent = card.makhraj;
  
  document.getElementById('modalExampleEmoji').textContent = card.emoji;
  document.getElementById('modalExampleWord').textContent = card.exampleWord;
  document.getElementById('modalExampleIndo').textContent = card.exampleIndo;
  document.getElementById('modalFunFact').textContent = card.funFact;

  // Atur navigasi tombol Sebelumnya / Selanjutnya
  document.getElementById('btnPrevCard').style.visibility = index > 0 ? 'visible' : 'hidden';
  document.getElementById('btnNextCard').style.visibility = index < cards.length - 1 ? 'visible' : 'hidden';

  // Tampilkan Modal
  modal.classList.add('open');
  modal.setAttribute('aria-hidden', 'false');

  // Ucapkan bunyi huruf otomatis setelah sedikit jeda ramah anak
  setTimeout(() => {
    speakModalSymbol();
  }, 250);
}

// Tutup Modal Detail Kartu
function closeCardModal() {
  const modal = document.getElementById('cardModal');
  if (modal) {
    modal.classList.remove('open');
    modal.setAttribute('aria-hidden', 'true');
    soundEngine.playPop();
  }
}

// Navigasi Kartu Sebelumnya / Selanjutnya dalam Modal
function navCard(direction) {
  const cards = window.LESSON_DATA[state.currentTopic].cards;
  const newIndex = state.activeCardIndex + direction;
  if (newIndex >= 0 && newIndex < cards.length) {
    openCardDetail(newIndex);
  }
}

// Pengucapan Bunyi Materi di Modal
function speakModalSymbol() {
  const cards = window.LESSON_DATA[state.currentTopic].cards;
  const card = cards[state.activeCardIndex];
  if (!card) return;

  soundEngine.playPop();

  // Bunyikan melalui suara sintetis ramah anak
  if (state.currentTopic === 'hijaiyah') {
    soundEngine.speak(`${card.reading}! Huruf ${card.baseName}, dibaca ${card.reading}. Seperti pada ${card.exampleIndo}`);
  } else {
    soundEngine.speak(`Angka ${card.reading}! Lambang bilangannya adalah ${card.symbol}. ${card.exampleIndo}`);
  }
}

// ==========================================================================
// BAGIAN 2: PERMAINAN TEBAK CEPAT (5 SOAL PILIHAN SEDERHANA)
// ==========================================================================
function loadQuizQuestion(index) {
  const quizList = window.LESSON_DATA[state.currentTopic].quiz;
  if (index >= quizList.length) {
    showQuizResults();
    return;
  }

  state.quizIndex = index;
  state.quizAnsweredCorrectly = false;

  const currentQ = quizList[index];

  // Update Status & Bintang Track
  document.getElementById('quizProgressText').textContent = `Soal ${index + 1} dari ${quizList.length}`;
  document.getElementById('questionTag').textContent = `Tantangan Soal Nomor ${index + 1}`;
  
  // Highlight bintang track
  for (let i = 0; i < 5; i++) {
    const starEl = document.getElementById(`starSlot-${i}`);
    if (starEl) {
      if (i < index) {
        starEl.className = 'quiz-star-item active';
        starEl.textContent = '⭐';
      } else if (i === index) {
        starEl.className = 'quiz-star-item active';
        starEl.textContent = '🎯';
      } else {
        starEl.className = 'quiz-star-item';
        starEl.textContent = '⭐';
      }
    }
  }

  // Tampilkan Teks Pertanyaan (Format Arab jika mengandung huruf)
  const qTextEl = document.getElementById('questionText');
  let formattedText = currentQ.question;
  
  // Beri highlight khusus untuk teks Arab di soal
  formattedText = formattedText.replace(/([\u0600-\u06FF]+)/g, '<span class="arabic-highlight">$1</span>');
  qTextEl.innerHTML = formattedText;

  // Sembunyikan hint & feedback lama
  document.getElementById('questionHintBox').style.display = 'none';
  document.getElementById('feedbackContainer').style.display = 'none';

  // Render 3 Tombol Jawaban Besar 3D
  renderQuizOptions(currentQ.options);
}

// Render 3 Tombol Jawaban
function renderQuizOptions(options) {
  const container = document.getElementById('quizOptionsContainer');
  if (!container) return;

  container.innerHTML = '';

  // Palet warna ceria untuk 3 tombol jawaban
  const buttonThemes = [
    { border: '#4DABF7', shadow: '#1971C2' },
    { border: '#FFA94D', shadow: '#E8590C' },
    { border: '#51CF66', shadow: '#2F9E44' }
  ];

  options.forEach((opt, idx) => {
    const btn = document.createElement('button');
    btn.className = 'option-btn-3d';
    btn.setAttribute('type', 'button');
    btn.setAttribute('aria-label', `Pilihan ${opt.label || opt.text}`);

    const theme = buttonThemes[idx % buttonThemes.length];
    btn.style.setProperty('--btn-border', theme.border);
    btn.style.setProperty('--btn-shadow', theme.shadow);

    const isArabic = /[\u0600-\u06FF]/.test(opt.text);

    btn.innerHTML = `
      <span class="option-symbol ${isArabic ? '' : 'is-latin'}">${opt.text}</span>
      <span class="option-emoji">${opt.emoji || '✨'}</span>
      <span class="option-label">${opt.label || opt.text}</span>
    `;

    btn.addEventListener('click', () => handleOptionClick(opt, btn));
    container.appendChild(btn);
  });
}

// Handler saat tombol pilihan jawaban diklik
function handleOptionClick(option, buttonEl) {
  if (state.quizAnsweredCorrectly) return; // Mencegah klik ganda jika sudah benar

  const feedbackContainer = document.getElementById('feedbackContainer');
  const feedbackCard = document.getElementById('feedbackCard');
  const feedbackIcon = document.getElementById('feedbackIcon');
  const feedbackTitle = document.getElementById('feedbackTitle');
  const feedbackMessage = document.getElementById('feedbackMessage');
  const btnNext = document.getElementById('btnFeedbackNext');
  const btnRetry = document.getElementById('btnFeedbackRetry');

  feedbackContainer.style.display = 'block';

  if (option.isCorrect) {
    // --- JAWABAN BENAR! ---
    state.quizAnsweredCorrectly = true;
    state.quizScore++;
    addStarScore();

    soundEngine.playCorrect();
    triggerConfetti(60);

    buttonEl.classList.add('correct-picked');

    feedbackCard.className = 'feedback-card is-correct';
    feedbackIcon.textContent = '🌟';
    
    // Pesan-pesan penyemangat yang ramah anak kelas 1
    const cheerfulPhrases = [
      "Hebat! Jawabanmu Benar! 🌟",
      "Masya Allah, Pintar Sekali! 🎉",
      "Luar Biasa! Jawabanmu Tepat! 🚀",
      "Keren Banget! Kamu Juara! 🎖️",
      "Yey, Bintangmu Bertambah! ⭐"
    ];
    feedbackTitle.textContent = cheerfulPhrases[state.quizIndex % cheerfulPhrases.length];
    feedbackMessage.textContent = "Kamu sangat teliti dan hebat. Ayo lanjut ke tantangan berikutnya!";

    btnNext.style.display = 'inline-flex';
    btnRetry.style.display = 'none';

    // Suara ucapan selamat
    soundEngine.speak("Hebat! Jawabanmu benar sekali!");

    // Scroll mulus ke arah umpan balik
    feedbackContainer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });

  } else {
    // --- JAWABAN BELUM TEPAT (PETUNJUK LEMBUT) ---
    soundEngine.playEncouraging();

    buttonEl.classList.add('wrong-picked');
    setTimeout(() => buttonEl.classList.remove('wrong-picked'), 600);

    feedbackCard.className = 'feedback-card is-wrong';
    feedbackIcon.textContent = '💪';
    feedbackTitle.textContent = "Hampir Tepat! Yuk Coba Lagi!";
    feedbackMessage.textContent = "Jangan berkecil hati, ayo perhatikan petunjuk di bawah dan coba pilih tombol lainnya!";

    // Tampilkan petunjuk guru (hint)
    const currentQ = window.LESSON_DATA[state.currentTopic].quiz[state.quizIndex];
    if (currentQ.hint) {
      const hintBox = document.getElementById('questionHintBox');
      const hintText = document.getElementById('questionHintText');
      hintText.textContent = currentQ.hint;
      hintBox.style.display = 'inline-flex';
    }

    btnNext.style.display = 'none';
    btnRetry.style.display = 'inline-flex';

    soundEngine.speak("Yuk coba lagi, kamu pasti bisa!");
  }
}

// Coba lagi pada soal yang sama
function retryCurrentQuestion() {
  soundEngine.playPop();
  document.getElementById('feedbackContainer').style.display = 'none';
}

// Lanjut ke soal berikutnya
function nextQuestion() {
  soundEngine.playPop();
  loadQuizQuestion(state.quizIndex + 1);
}

// Bacakan pertanyaan yang sedang aktif dengan TTS
function speakCurrentQuestion() {
  const currentQ = window.LESSON_DATA[state.currentTopic].quiz[state.quizIndex];
  if (currentQ) {
    soundEngine.playPop();
    soundEngine.speak(currentQ.question);
  }
}

// Tambah Bintang Skor
function addStarScore() {
  state.totalStars++;
  const counterEl = document.getElementById('starCountDisplay');
  const containerEl = document.getElementById('starCounter');
  
  if (counterEl) {
    counterEl.textContent = state.totalStars;
  }
  if (containerEl) {
    containerEl.classList.add('bump');
    setTimeout(() => containerEl.classList.remove('bump'), 500);
  }
}

// ==========================================================================
// HASIL AKHIR KUIS (RAPOR BINTANG CERIA)
// ==========================================================================
function showQuizResults() {
  soundEngine.playFanfare();
  triggerConfetti(120);

  // Sembunyikan kartu soal, opsi, dan feedback
  document.getElementById('questionCard').style.display = 'none';
  document.getElementById('quizOptionsContainer').style.display = 'none';
  document.getElementById('feedbackContainer').style.display = 'none';

  // Tampilkan kartu hasil akhir
  const resultsCard = document.getElementById('quizResultsCard');
  resultsCard.style.display = 'block';

  // Render 5 Bintang Hasil Akhir
  const starsContainer = document.getElementById('finalStarsDisplay');
  starsContainer.innerHTML = '';
  for (let i = 0; i < 5; i++) {
    const starSpan = document.createElement('span');
    starSpan.className = 'final-star';
    starSpan.textContent = i < state.quizScore ? '⭐' : '🤍';
    starSpan.style.animationDelay = `${i * 0.15}s`;
    starsContainer.appendChild(starSpan);
  }

  document.getElementById('finalScoreVal').textContent = `${state.quizScore} / 5 Bintang`;

  const resultsTitle = document.getElementById('resultsTitle');
  const resultsDesc = document.getElementById('resultsDesc');

  if (state.quizScore >= 4) {
    resultsTitle.textContent = "🏆 Masya Allah, Juara Kelas!";
    resultsDesc.textContent = "Hebat sekali! Kamu berhasil menjawab tantangan dengan cemerlang. Pertahankan prestasimu ya!";
    soundEngine.speak("Masya Allah! Kamu juara kelas! Hebat sekali!");
  } else {
    resultsTitle.textContent = "🎉 Semangat Belajar yang Luar Biasa!";
    resultsDesc.textContent = "Kamu sudah berusaha sangat baik! Mari kita ulangi lagi agar semakin pintar dan mahir!";
    soundEngine.speak("Semangat luar biasa! Mari kita ulangi agar semakin pintar!");
  }

  resultsCard.scrollIntoView({ behavior: 'smooth', block: 'center' });
}

// Ulangi Permainan Kuis
function restartQuiz() {
  soundEngine.playPop();
  state.quizIndex = 0;
  state.quizScore = 0;
  state.quizAnsweredCorrectly = false;

  document.getElementById('questionCard').style.display = 'block';
  document.getElementById('quizOptionsContainer').style.display = 'grid';
  document.getElementById('feedbackContainer').style.display = 'none';
  document.getElementById('quizResultsCard').style.display = 'none';

  loadQuizQuestion(0);
}

// ==========================================================================
// ALAT BANTU KELAS (SOUND & FULLSCREEN)
// ==========================================================================
function handleToggleSound() {
  const isMuted = soundEngine.toggleMute();
  const iconEl = document.getElementById('soundIcon');
  if (iconEl) {
    iconEl.textContent = isMuted ? '🔇' : '🔊';
  }
}

function handleToggleFullscreen() {
  soundEngine.playPop();
  const iconEl = document.getElementById('fullscreenIcon');

  if (!document.fullscreenElement) {
    document.documentElement.requestFullscreen().then(() => {
      if (iconEl) iconEl.textContent = '🗗';
    }).catch(err => {
      console.warn("Fullscreen error:", err);
    });
  } else {
    if (document.exitFullscreen) {
      document.exitFullscreen().then(() => {
        if (iconEl) iconEl.textContent = '🖥️';
      });
    }
  }
}

// Keyboard shortcuts untuk guru (Panah kiri/kanan di modal, Esc untuk tutup)
function setupKeyboardNavigation() {
  document.addEventListener('keydown', (e) => {
    const modal = document.getElementById('cardModal');
    if (modal && modal.classList.contains('open')) {
      if (e.key === 'Escape') {
        closeCardModal();
      } else if (e.key === 'ArrowLeft') {
        navCard(-1);
      } else if (e.key === 'ArrowRight') {
        navCard(1);
      }
    }
  });
}

// ==========================================================================
// ENGINE CONFETTI MANDIRI (CANVAS ZERO-DEPENDENCY)
// ==========================================================================
let confettiParticles = [];
let confettiCtx = null;
let confettiAnimationId = null;

function initConfettiCanvas() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas) return;

  confettiCtx = canvas.getContext('2d');
  
  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();
}

function triggerConfetti(count = 50) {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas || !confettiCtx) return;

  const colors = ['#FF6B6B', '#4DABF7', '#51CF66', '#FFD43B', '#CC5DE8', '#FFA94D'];

  for (let i = 0; i < count; i++) {
    confettiParticles.push({
      x: canvas.width / 2 + (Math.random() - 0.5) * 300,
      y: canvas.height / 3 + (Math.random() - 0.5) * 100,
      w: Math.random() * 12 + 8,
      h: Math.random() * 8 + 6,
      vx: (Math.random() - 0.5) * 12,
      vy: Math.random() * -12 - 4,
      rotation: Math.random() * 360,
      rotationSpeed: (Math.random() - 0.5) * 12,
      color: colors[Math.floor(Math.random() * colors.length)],
      gravity: 0.35,
      friction: 0.98,
      alpha: 1
    });
  }

  if (!confettiAnimationId) {
    animateConfetti();
  }
}

function animateConfetti() {
  const canvas = document.getElementById('confettiCanvas');
  if (!canvas || !confettiCtx) return;

  confettiCtx.clearRect(0, 0, canvas.width, canvas.height);

  for (let i = confettiParticles.length - 1; i >= 0; i--) {
    const p = confettiParticles[i];
    p.vy += p.gravity;
    p.vx *= p.friction;
    p.x += p.vx;
    p.y += p.vy;
    p.rotation += p.rotationSpeed;
    p.alpha -= 0.008;

    if (p.alpha <= 0 || p.y > canvas.height + 20) {
      confettiParticles.splice(i, 1);
      continue;
    }

    confettiCtx.save();
    confettiCtx.translate(p.x, p.y);
    confettiCtx.rotate((p.rotation * Math.PI) / 180);
    confettiCtx.globalAlpha = p.alpha;
    confettiCtx.fillStyle = p.color;
    confettiCtx.fillRect(-p.w / 2, -p.h / 2, p.w, p.h);
    confettiCtx.restore();
  }

  if (confettiParticles.length > 0) {
    confettiAnimationId = requestAnimationFrame(animateConfetti);
  } else {
    confettiAnimationId = null;
  }
}
