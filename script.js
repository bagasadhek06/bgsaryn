// ============================================================
// SCRIPT.JS — Portfolio Bagas Adhek Aryanto
// ============================================================
//
// BAGIAN YANG BISA KAMU EDIT:
// → Cari komentar "EDIT DI SINI" untuk bagian yang aman diubah
// → Jangan ubah bagian lain kecuali kamu sudah paham JS
// ============================================================


// ── Custom Cursor (jangan diubah) ───────────────────────────
const cursor = document.getElementById('cursor');
const ring = document.getElementById('cursorRing');
let mx = 0, my = 0, rx = 0, ry = 0;
document.addEventListener('mousemove', e => {
  mx = e.clientX; my = e.clientY;
  cursor.style.left = mx - 5 + 'px';
  cursor.style.top = my - 5 + 'px';
});
function animateRing() {
  rx += (mx - rx - 18) * 0.12;
  ry += (my - ry - 18) * 0.12;
  ring.style.left = rx + 'px';
  ring.style.top = ry + 'px';
  requestAnimationFrame(animateRing);
}
animateRing();
document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => {
    cursor.style.transform = 'scale(2.5)';
    ring.style.transform = 'scale(1.5)';
  });
  el.addEventListener('mouseleave', () => {
    cursor.style.transform = 'scale(1)';
    ring.style.transform = 'scale(1)';
  });
});


// ── Scroll Reveal (jangan diubah) ───────────────────────────
const reveals = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries) => {
  entries.forEach((entry, i) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = (i % 3) * 0.1 + 's';
      entry.target.classList.add('visible');
      entry.target.querySelectorAll('.skill-fill').forEach(bar => {
        bar.style.width = bar.dataset.width + '%';
      });
    }
  });
}, { threshold: 0.15 });
reveals.forEach(el => io.observe(el));

document.querySelectorAll('.skill-card').forEach(card => {
  const cardIo = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const bar = entry.target.querySelector('.skill-fill');
        if (bar) bar.style.width = bar.dataset.width + '%';
      }
    });
  }, { threshold: 0.3 });
  cardIo.observe(card);
});


// ============================================================
// ★ EDIT DI SINI — DATA PROYEK
// ============================================================
//
// Cara menambah proyek:
// 1. Tentukan kategori: freelance / lomba / personal / clipping
// 2. Salin baris contoh di bawah dan tempel di kategori yang sesuai
// 3. Isi title, desc, thumb, dan link
//
// Format satu proyek:
// { title: 'Nama Video', desc: 'Deskripsi singkat.', thumb: 'URL_FOTO', link: 'URL_VIDEO' },
//
// Keterangan:
// - title → nama proyek/video kamu
// - desc  → deskripsi 1-2 kalimat
// - thumb → URL foto thumbnail (upload ke imgbb.com lalu copy link-nya)
//           Kalau belum ada foto: thumb: ''
// - link  → URL video (YouTube, Instagram, Google Drive, dll)
//           Kalau belum ada link: link: ''
//
// Contoh isi:
// { title: 'Video Promosi Kafe X', desc: 'Video promosi 30 detik untuk Instagram.', thumb: 'https://i.ibb.co/xxx/foto.jpg', link: 'https://youtube.com/watch?v=xxx' },
// ============================================================

const projectData = {

  // ── FREELANCE ─────────────────────────────────────────────
  // Tambahkan proyek klien kamu di sini
  freelance: [
    // { title: 'Nama Proyek', desc: 'Deskripsi.', thumb: '', link: '' },
  ],

  // ── LOMBA ─────────────────────────────────────────────────
  // Tambahkan lomba yang pernah kamu ikuti di sini
  lomba: [
    { title: 'Di balik Transaksi', desc: 'Juara 1 Lomba Videografi dalam kegiatan  Creative Competition 2025 yang diselenggarakan FEBI UINSI.', thumb: 'https://i.ibb.co.com/BHqVH0HG/Screenshot-2026-05-16-110337.png', year: '2025', link: 'https://www.instagram.com/reel/DRQnfF0klgL/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { title: 'INFLASI Bukan Sekedar Angka', desc: 'Juara 1 Lomba Konten Video Literasi dalam kegiatan PENTAS AKSARA 2026 yang diselenggarakan oleh PusBI Kaltim.', thumb: 'https://i.ibb.co.com/275n8Lq0/INFLASI.png', year: '2026', link: 'https://www.instagram.com/reel/DYRluq3AkJO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  ],
  

  // ── PERSONAL & KAMPUS ─────────────────────────────────────
  // Tambahkan proyek pribadi & tugas kampus di sini
  personal: [
    { title: 'Multo Trend', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/yKwXpbx/Screenshot-2026-05-17-103408.png', year: '2025', link: 'https://www.tiktok.com/@bgsaryn_/video/7596913165871484178?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
    { title: 'Lu ngeremehin gua?', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/ZpgBbDhZ/Screenshot-2026-05-17-103949.png', year: '2025', link: 'https://www.tiktok.com/@bgsaryn_/video/7602829591522168082?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
    { title: 'Ternyata oh ternyata...', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/BKy00bpR/Screenshot-2026-05-17-104300.png', year: '2025', link: 'https://www.tiktok.com/@bgsaryn_/video/7610395044268297480?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
    { title: 'Nanti juga ada waktunya semuanya membaik.', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/5xhWby5D/Screenshot-2026-05-17-104705.png', year: '2026', link: 'https://www.tiktok.com/@bgsaryn_/video/7611650020433022226?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
    { title: 'Janji Itu.', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/Ywj1g5d/Screenshot-2026-05-17-105042.png', year: '2026', link: 'https://www.tiktok.com/@bgsaryn_/video/7626634419117231380?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
    { title: 'This is 3B.', desc: 'Bagian dari project pribadi. Project Kelas.', thumb: 'https://i.ibb.co.com/9kLHCTyG/Screenshot-2026-09-01-105129.png', year: '2026', link: 'https://www.instagram.com/reel/DcQZHudyCIP/?utm_source=ig_web_copy_link&igsi=MzRlODBiNWFlZA=='}
    // { title: 'Proyek Lainnya', desc: 'Deskripsi.', thumb: '', link: '' },
  ],

  // ── CLIPPING ──────────────────────────────────────────────
  // Tambahkan hasil clipping podcast/stream kamu di sini
  clipping: [
    // { title: 'Clip Podcast Episode 1', desc: 'Potongan momen terbaik dari podcast 1 jam.', thumb: '', link: '' },
  ]

};
// ============================================================
// ★ SELESAI AREA EDIT — jangan ubah kode di bawah ini
// ============================================================


// ── Render Thumbnail Grid, dikelompokkan per tahun (jangan diubah) ──
function renderAccordions() {
  Object.keys(projectData).forEach(key => {
    const inner = document.getElementById('inner-' + key);
    if (!inner) return;
    const items = projectData[key];
    if (items.length === 0) {
      inner.innerHTML = `<div class="accordion-empty">Project akan segera ditambahkan.</div>`;
    } else {
      const yearGroups = groupByYear(items);
      inner.innerHTML = yearGroups.map(group => `
        <div class="year-group">
          <div class="year-group-label">${group.year}</div>
          ${renderProjectGrid(group.items, '🎬')}
        </div>
      `).join('');
    }
  });
}
renderAccordions();


// ============================================================
// ★ EDIT DI SINI — DATA DESAIN (section "Desain Proyek Kelas")
// ============================================================
//
// Sama seperti data proyek video di atas, tapi ini untuk karya
// desain statis (poster, mockup, infografis, dll). Item otomatis
// dikelompokkan per tahun di dalam tiap kategori — kamu cukup
// isi field "year" dengan benar, urutan/pengelompokan diatur
// otomatis oleh renderDesignAccordions() di bawah.
//
// Kategori yang tersedia: freelance / lomba / personal
//
// Format satu item:
// { title: 'Nama Desain', desc: 'Deskripsi singkat.', thumb: 'URL_FOTO', year: '2026', link: 'URL' },
//
// Keterangan field sama persis dengan projectData di atas.
// Kalau belum ada foto: thumb: ''  |  Kalau belum ada link: link: ''
// ============================================================

const designData = {

  // ── FREELANCE ─────────────────────────────────────────────
  freelance: [
    // { title: 'Poster Promosi Kafe X', desc: 'Desain poster untuk Instagram klien.', thumb: '', year: '2026', link: '' },
  ],

  // ── LOMBA ─────────────────────────────────────────────────
  lomba: [
    // { title: 'Poster Kampanye Lingkungan', desc: 'Juara 2 Lomba Desain Poster.', thumb: '', year: '2026', link: '' },
  ],

  // ── PERSONAL & KAMPUS ─────────────────────────────────────
  personal: [
    // { title: 'Mockup UI Aplikasi Kuliah', desc: 'Tugas mata kuliah Desain Antarmuka.', thumb: '', year: '2026', link: '' },
    { title: 'GFX Cosplay Jane Doe', desc: 'Sebuah poster Cosplay Jane Doe (ZZZ).', thumb: 'https://i.ibb.co.com/N2wXwn95/GFX-Cosplay.jpg', year: '2025', link: 'https://www.instagram.com/p/DE0y1AIzkIH/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'GFX Cosplay Yor Forger', desc: 'Sebuah poster Cosplay Yor Forger (Spy x Family).', thumb: 'https://i.ibb.co.com/vGjHNSD/Screenshot-2026-09-08-092931.png', year: '2025', link: 'https://www.instagram.com/p/DFPJVluJMw5/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA== ' },
    { title: 'BMW M3 GTR', desc: 'Sebuah poster mobil BMW M3 GTR modif NFS Most Wanted.', thumb: 'https://i.ibb.co.com/6RdCK34G/BMW-M3-GTR-GFX-Most-Wanted.jpg  ', year: '2025', link: 'https://www.instagram.com/p/DF5Ksl7vwdK/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Luthfi Halimawan', desc: 'Sebuah poster Youtuber kecil Luthfi Halimawan.', thumb: 'https://i.ibb.co.com/ZRSpwdBx/Screenshot-2026-09-08-094028.png', year: '2025', link: 'https://www.instagram.com/p/DGCCONuzA3-/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Nissan GTR R35', desc: 'Sebuah poster mobil "Godzilla" Nissan GTR R35.', thumb: 'https://i.ibb.co.com/8LFjbV9w/image.png', year: '2025', link: 'https://www.instagram.com/p/DGKRQMOp4Ee/?utm_source=ig_web_copy_link' },
    { title: 'GFX Cosplay Gawr Gura', desc: 'Sebuah poster Cosplay Gawr Gura.', thumb: 'https://i.ibb.co.com/LdCBqYMm/GFX-Poster-Cosplay-Gawr-Gura.jpg', year: '2025', link: 'https://www.instagram.com/p/DHbj52cz2OI/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'GFX Cosplay Ningguang dan Yelan', desc: 'Sebuah poster Cosplay Ningguan dan Yelan (Genshin Impact).', thumb: 'https://i.ibb.co.com/Y4WW4Nd2/Gfx-cosplay-1.jpg', year: '2025', link: 'https://www.instagram.com/p/DJFD1R0zIUi/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'GFX Cosplay Hu Tao', desc: 'Sebuah poster Cosplay Hu Tao (Genshin Impact).', thumb: 'https://i.ibb.co.com/Q3CPmqG7/Gfx-cosplay-2.jpg', year: '2025', link: 'https://www.instagram.com/p/DJsiggCTjHD/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'BMW M3 E30', desc: 'Sebuah poster mobil BMW M3 E30.', thumb: 'https://i.ibb.co.com/LXVfK6YQ/BMW-M3-E30-Gfx.jpg', year: '2025', link: 'https://www.instagram.com/p/DJt4uBBJkbm/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'GFX Cosplay Reze', desc: 'Sebuah poster Cosplay Reze (Chainsaw Man).', thumb: 'https://i.ibb.co.com/qFkMQQXb/image.png', year: '2025', link: 'https://www.instagram.com/p/DQfURNrE8sK/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (Kating)', desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi kating.', thumb: 'https://i.ibb.co.com/HfyKkGr5/KATING.png', year: '2026', link: 'https://www.instagram.com/p/DdIcJCDy-io/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (Wakil Kating)', desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi wakil kating.', thumb: 'https://i.ibb.co.com/zW2VDnDy/WAKATING.png', year: '2026', link: 'https://www.instagram.com/p/DdIb2itSgzO/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (kloter 1)', desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi beberapa mahasiswa.', thumb: 'https://i.ibb.co.com/qM1kRB8n/1.png', year: '2026', link: 'https://www.instagram.com/p/DdIbvU3kvp3/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (kloter 2)', desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi beberapa mahasiswa.', thumb: 'https://i.ibb.co.com/WWSWpB4N/2.png', year: '2026', link: 'https://www.instagram.com/p/DdIbtt-kp3P/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (kloter 3)', desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi beberapa mahasiswa.', thumb: 'https://i.ibb.co.com/xSg1zsbF/3.png', year: '2026', link: 'https://www.instagram.com/p/DdIboF0kieH/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (kloter 4)', desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi beberapa mahasiswa.', thumb: 'https://i.ibb.co.com/39PQ6TnQ/4.png', year: '2026', link: 'https://www.instagram.com/p/DdIbkoBkg04/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (kloter 5)', desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi beberapa mahasiswa.', thumb: 'https://i.ibb.co.com/5gJhmGPh/8.png', year: '2026', link: 'https://www.instagram.com/p/DdIbgDjki92/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (kloter 6)' , desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi beberapa mahasiswa.', thumb: 'https://i.ibb.co.com/SwtYnzkK/5.png', year: '2026', link: 'https://www.instagram.com/p/DdIbbOgEgxu/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (kloter 7)', desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi beberapa mahasiswa.', thumb: 'https://i.ibb.co.com/MynH0pmZ/6.png', year: '2026', link: 'https://www.instagram.com/p/DdIbTyWkpTz/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
    { title: 'Poster perkenalan TIM B (kloter 8)', desc: 'Poster pengenalan jejeran mahasiswa TIMB angkatan 25 yang berisi beberapa mahasiswa.', thumb: 'https://i.ibb.co.com/DfnhDG7M/7.png', year: '2026', link: 'https://www.instagram.com/p/DdIbTyWkpTz/?utm_source=ig_web_copy_link&stkn=MzRlODBiNWFlZA==' },
  ]

};
// ============================================================
// ★ SELESAI AREA EDIT — jangan ubah kode di bawah ini
// ============================================================


// ── Render Accordion Desain, dikelompokkan per tahun (jangan diubah) ──
function groupByYear(items) {
  const groups = {};
  items.forEach(item => {
    const y = item.year || 'Tahun Lainnya';
    if (!groups[y]) groups[y] = [];
    groups[y].push(item);
  });
  return Object.keys(groups)
    .sort((a, b) => b.localeCompare(a, undefined, { numeric: true }))
    .map(year => ({ year, items: groups[year] }));
}

function renderProjectGrid(items, placeholderEmoji) {
  const emoji = placeholderEmoji || '🎬';
  return `<div class="project-grid">` + items.map(item => {
    const cardContent = `
      ${item.thumb
        ? `<img class="project-thumb-img" src="${item.thumb}" alt="${item.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
        : ''}
      <div class="project-thumb-placeholder" style="${item.thumb ? 'display:none' : ''}">${emoji}</div>
      <div class="project-thumb-info">
        <div class="project-thumb-title">${item.title}</div>
        <div class="project-thumb-desc">${item.desc}</div>
        ${item.link
          ? `<span class="project-thumb-link">Lihat ↗</span>`
          : `<span class="project-thumb-link-placeholder">Link belum tersedia</span>`}
      </div>`;
    return item.link
      ? `<a class="project-thumb-card" href="${item.link}" target="_blank" rel="noopener">${cardContent}</a>`
      : `<div class="project-thumb-card">${cardContent}</div>`;
  }).join('') + `</div>`;
}

function renderDesignAccordions() {
  Object.keys(designData).forEach(key => {
    const inner = document.getElementById('inner-design-' + key);
    if (!inner) return;
    const items = designData[key];
    if (items.length === 0) {
      inner.innerHTML = `<div class="accordion-empty">Desain akan segera ditambahkan.</div>`;
    } else {
      const yearGroups = groupByYear(items);
      inner.innerHTML = yearGroups.map(group => `
        <div class="year-group">
          <div class="year-group-label">${group.year}</div>
          ${renderProjectGrid(group.items, '🎨')}
        </div>
      `).join('');
    }
  });
}
renderDesignAccordions();


// ── Hitung otomatis total proyek (video + design) untuk stat "Proyek Selesai" ──
// Angka ini sekarang dihitung langsung dari isi projectData + designData,
// jadi kalau kamu nambah/hapus proyek di atas, angka di section "Tentang Saya"
// otomatis ikut update — nggak perlu diedit manual lagi.
function updateTotalProjectsStat() {
  const totalVideo = Object.values(projectData).reduce((sum, arr) => sum + arr.length, 0);
  const totalDesign = Object.values(designData).reduce((sum, arr) => sum + arr.length, 0);
  const el = document.getElementById('stat-total-projects');
  if (el) el.textContent = totalVideo + totalDesign;
}
updateTotalProjectsStat();


// ── Toggle Accordion khusus section Desain (jangan diubah) ──
// Dipisah dari toggleAccordion() di section Proyek supaya buka/tutup
// di satu section tidak menutup accordion yang terbuka di section lain.
function toggleDesignAccordion(key) {
  const item = document.getElementById('acc-design-' + key);
  const body = document.getElementById('body-design-' + key);
  const inner = document.getElementById('inner-design-' + key);
  const isOpen = item.classList.contains('open');
  const container = document.getElementById('design-accordion-list');

  container.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('open'));
  container.querySelectorAll('.accordion-body').forEach(el => el.style.maxHeight = '0');

  if (!isOpen) {
    item.classList.add('open');
    body.style.maxHeight = inner.scrollHeight + 40 + 'px';
  }
}


// ── Toggle Accordion (jangan diubah) ────────────────────────
function toggleAccordion(key) {
  const item = document.getElementById('acc-' + key);
  const body = document.getElementById('body-' + key);
  const inner = document.getElementById('inner-' + key);
  const isOpen = item.classList.contains('open');
  const container = document.getElementById('project-accordion-list');

  container.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('open'));
  container.querySelectorAll('.accordion-body').forEach(el => el.style.maxHeight = '0');

  if (!isOpen) {
    item.classList.add('open');
    body.style.maxHeight = inner.scrollHeight + 40 + 'px';
  }
}


// ── Buka semua link eksternal di tab baru (jangan diubah) ───
document.querySelectorAll('a').forEach(link => {
  if (link.hostname && link.hostname !== window.location.hostname) {
    link.setAttribute('target', '_blank');
    link.setAttribute('rel', 'noopener noreferrer');
  }
});
