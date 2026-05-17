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
     { title: 'Campak Balik Lagi', desc: 'Dalam tahap penjurian.', thumb: 'https://i.ibb.co.com/gFgpQ2jb/Screenshot-2026-05-16-110601.png', year: '2026', link: 'https://www.instagram.com/reel/DXmQqSHgCcw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
    { title: 'INFLASI Bukan Sekedar Angka', desc: 'Dalam tahap penjurian.', thumb: 'https://i.ibb.co.com/275n8Lq0/INFLASI.png', year: '2026', link: 'https://www.instagram.com/reel/DYRluq3AkJO/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==' },
  ],
  

  // ── PERSONAL & KAMPUS ─────────────────────────────────────
  // Tambahkan proyek pribadi & tugas kampus di sini
  personal: [
    { title: 'Multo Trend', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/yKwXpbx/Screenshot-2026-05-17-103408.png', year: '2025', link: 'https://www.tiktok.com/@bgsaryn_/video/7596913165871484178?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
    { title: 'Lu ngeremehin gua?', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/ZpgBbDhZ/Screenshot-2026-05-17-103949.png', year: '2025', link: 'https://www.tiktok.com/@bgsaryn_/video/7602829591522168082?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
    { title: 'Ternyata oh ternyata...', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/BKy00bpR/Screenshot-2026-05-17-104300.png', year: '2025', link: 'https://www.tiktok.com/@bgsaryn_/video/7610395044268297480?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
    { title: 'Nanti juga ada waktunya semuanya membaik.', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/5xhWby5D/Screenshot-2026-05-17-104705.png', year: '2026', link: 'https://www.tiktok.com/@bgsaryn_/video/7611650020433022226?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
    { title: 'Janji Itu.', desc: 'Bagian dari project pribadi yang disebut ProLan (Project Kecil-kecilan).', thumb: 'https://i.ibb.co.com/Ywj1g5d/Screenshot-2026-05-17-105042.png', year: '2026', link: 'https://www.tiktok.com/@bgsaryn_/video/7626634419117231380?is_from_webapp=1&sender_device=pc&web_id=7607438397736683028' },
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


// ── Render Thumbnail Grid (jangan diubah) ───────────────────
function renderAccordions() {
  Object.keys(projectData).forEach(key => {
    const inner = document.getElementById('inner-' + key);
    if (!inner) return;
    const items = projectData[key];
    if (items.length === 0) {
      inner.innerHTML = `<div class="accordion-empty">Project akan segera ditambahkan.</div>`;
    } else {
      inner.innerHTML = `<div class="project-grid">` + items.map(item => {
        const cardContent = `
          ${item.thumb
            ? `<img class="project-thumb-img" src="${item.thumb}" alt="${item.title}" loading="lazy" onerror="this.style.display='none';this.nextElementSibling.style.display='flex'">`
            : ''}
          <div class="project-thumb-placeholder" style="${item.thumb ? 'display:none' : ''}">🎬</div>
          <div class="project-thumb-info">
            <div class="project-thumb-title">${item.title}</div>
            <div class="project-thumb-desc">${item.desc}</div>
            ${item.year ? `<span style="font-family:'DM Mono',monospace;font-size:0.82rem;color:var(--muted);display:block;margin-bottom:0.3rem;">${item.year}</span>` : ''}
            ${item.link
              ? `<span class="project-thumb-link">Lihat ↗</span>`
              : `<span class="project-thumb-link-placeholder">Link belum tersedia</span>`}
          </div>`;
        return item.link
          ? `<a class="project-thumb-card" href="${item.link}" target="_blank" rel="noopener">${cardContent}</a>`
          : `<div class="project-thumb-card">${cardContent}</div>`;
      }).join('') + `</div>`;
    }
  });
}
renderAccordions();


// ── Toggle Accordion (jangan diubah) ────────────────────────
function toggleAccordion(key) {
  const item = document.getElementById('acc-' + key);
  const body = document.getElementById('body-' + key);
  const inner = document.getElementById('inner-' + key);
  const isOpen = item.classList.contains('open');

  document.querySelectorAll('.accordion-item').forEach(el => el.classList.remove('open'));
  document.querySelectorAll('.accordion-body').forEach(el => el.style.maxHeight = '0');

  if (!isOpen) {
    item.classList.add('open');
    body.style.maxHeight = inner.scrollHeight + 40 + 'px';
  }
}
