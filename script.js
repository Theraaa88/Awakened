// ===============================
// Awakened - Main Script (script.js)
// ===============================

// Saat semua konten siap
document.addEventListener('DOMContentLoaded', function() {
  // Smooth scroll untuk navigasi
  const navLinks = document.querySelectorAll('.nav-link');
  const socialLinks = document.querySelectorAll('.social-link');

  navLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      const targetId = this.getAttribute('href').substring(1);
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  // Social link alert
  socialLinks.forEach(link => {
    link.addEventListener('click', function(e) {
      e.preventDefault();
      alert('Social media links would open in new windows in a live implementation');
    });
  });

  // Steam effect di hero section
  const heroSection = document.querySelector('section.bg-gradient-to-r');
  if (heroSection) {
    setInterval(() => {
      const steam = document.createElement('div');
      steam.className = 'absolute w-4 h-16 bg-steam opacity-30 rounded-full';
      steam.style.left = Math.random() * 100 + '%';
      steam.style.bottom = '0';
      heroSection.appendChild(steam);

      // Animasi steam
      steam.animate(
        [
          { transform: 'translateY(0) scale(1)', opacity: 0.3 },
          { transform: 'translateY(-100px) scale(1.5)', opacity: 0 }
        ],
        {
          duration: 2000,
          easing: 'ease-out'
        }
      ).onfinish = () => steam.remove();
    }, 1000);
  }

  // Forum data (dummy)
  const forumPosts = [
    { id: 1, title: "The Brass Cathedral Heist", author: "Professor Cogsworth", replies: 24, lastPost: "2 hours ago" },
    { id: 2, title: "Aetheric Anomalies in London", author: "Lady Steamwell", replies: 18, lastPost: "4 hours ago" },
    { id: 3, title: "New Steam-Powered Inventions", author: "Dr. Gearhart", replies: 12, lastPost: "1 day ago" }
  ];

  // Announcements (dummy)
  const announcements = [
    { id: 1, title: "New Faction: Clockwork Collective", content: "Join the mechanical revolution", timestamp: "2 hours ago" },
    { id: 2, title: "Aether Storm Warning", content: "Increased activity detected", timestamp: "1 day ago" },
    { id: 3, title: "Server Maintenance", content: "Scheduled for next Tuesday", timestamp: "2 days ago" }
  ];

  const announcementContainer = document.getElementById('announcements-container');
  if (announcementContainer) {
    announcementContainer.innerHTML = '';
    announcements.forEach(item => {
      const div = document.createElement('div');
      div.className = 'border-l-4 border-brass pl-4';
      div.innerHTML = `
        <h4 class="font-cinzel text-steam">${item.title}</h4>
        <p class="text-steam text-sm">${item.content}</p>
        <span class="text-brass text-xs">${item.timestamp}</span>
      `;
      announcementContainer.appendChild(div);
    });
  }

  console.log("✅ DOM fully loaded and scripts initialized.");
});

// ===============================
// Jam Real-time WIB/WITA/WIT
// ===============================
function updateTime() {
  const opt = { hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false };
  const wib = new Date().toLocaleTimeString('id-ID', { ...opt, timeZone: 'Asia/Jakarta' });
  const wita = new Date().toLocaleTimeString('id-ID', { ...opt, timeZone: 'Asia/Makassar' });
  const wit = new Date().toLocaleTimeString('id-ID', { ...opt, timeZone: 'Asia/Jayapura' });

  const wibEl = document.getElementById("wib");
  const witaEl = document.getElementById("wita");
  const witEl = document.getElementById("wit");

  if (wibEl && witaEl && witEl) {
    wibEl.textContent = `WIB : ${wib}`;
    witaEl.textContent = `WITA : ${wita}`;
    witEl.textContent = `WIT : ${wit}`;
  }
}

setInterval(updateTime, 1000);
updateTime();

  // Menu toggle (hamburger)
  const toggle = document.querySelector("#menu-toggle");
const menu = document.querySelector("#nav-menu");
const overlay = document.querySelector("#menu-overlay");

if (toggle && menu && overlay) {
  toggle.addEventListener("click", () => {
    menu.classList.toggle("hidden");
    menu.classList.toggle("flex");
    overlay.classList.toggle("hidden");
  });

  overlay.addEventListener("click", () => {
    menu.classList.add("hidden");
    menu.classList.remove("flex");
    overlay.classList.add("hidden");
  });
}

console.log("✅ script.js loaded successfully.");