/* ==========================================================================
   INDUSTRIAL ENGINEERING PORTFOLIO INTERACTIVE LOGIC
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. TYPEWRITER EFFECT (Industrial Engineering Focus)
  const typewriterElement = document.getElementById('typewriter');
  const titles = [
    "Endüstri Mühendisi",
    "Talep Planlama Uzmanı",
    "Üretim Planlama & Çizelgeleme",
    "Tedarik Zinciri & S&OP Uzmanı",
    "Stok Optimizasyon Mimarı"
  ];
  let titleIndex = 0;
  let charIndex = 0;
  let isDeleting = false;
  let typeSpeed = 100;

  function typeEffect() {
    const currentTitle = titles[titleIndex];

    if (isDeleting) {
      typewriterElement.textContent = currentTitle.substring(0, charIndex - 1);
      charIndex--;
      typeSpeed = 40;
    } else {
      typewriterElement.textContent = currentTitle.substring(0, charIndex + 1);
      charIndex++;
      typeSpeed = 90;
    }

    if (!isDeleting && charIndex === currentTitle.length) {
      isDeleting = true;
      typeSpeed = 2200; // Duraksama
    } else if (isDeleting && charIndex === 0) {
      isDeleting = false;
      titleIndex = (titleIndex + 1) % titles.length;
      typeSpeed = 400;
    }

    setTimeout(typeEffect, typeSpeed);
  }
  typeEffect();

  // 2. CANVAS PARTICLE BACKGROUND
  const canvas = document.getElementById('bg-canvas');
  const ctx = canvas.getContext('2d');
  let particles = [];

  function resizeCanvas() {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
  }
  window.addEventListener('resize', resizeCanvas);
  resizeCanvas();

  class Particle {
    constructor() {
      this.x = Math.random() * canvas.width;
      this.y = Math.random() * canvas.height;
      this.size = Math.random() * 2 + 1;
      this.speedX = (Math.random() - 0.5) * 0.6;
      this.speedY = (Math.random() - 0.5) * 0.6;
      this.alpha = Math.random() * 0.5 + 0.2;
    }

    update() {
      this.x += this.speedX;
      this.y += this.speedY;

      if (this.x < 0 || this.x > canvas.width) this.speedX *= -1;
      if (this.y < 0 || this.y > canvas.height) this.speedY *= -1;
    }

    draw() {
      ctx.fillStyle = `rgba(0, 242, 254, ${this.alpha})`;
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
      ctx.fill();
    }
  }

  function initParticles() {
    particles = [];
    const count = Math.min(Math.floor(window.innerWidth / 18), 60);
    for (let i = 0; i < count; i++) {
      particles.push(new Particle());
    }
  }
  initParticles();

  function animateParticles() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    for (let i = 0; i < particles.length; i++) {
      particles[i].update();
      particles[i].draw();

      for (let j = i + 1; j < particles.length; j++) {
        const dx = particles[i].x - particles[j].x;
        const dy = particles[i].y - particles[j].y;
        const dist = Math.sqrt(dx * dx + dy * dy);

        if (dist < 120) {
          ctx.strokeStyle = `rgba(16, 185, 129, ${0.15 * (1 - dist / 120)})`;
          ctx.lineWidth = 1;
          ctx.beginPath();
          ctx.moveTo(particles[i].x, particles[i].y);
          ctx.lineTo(particles[j].x, particles[j].y);
          ctx.stroke();
        }
      }
    }
    requestAnimationFrame(animateParticles);
  }
  animateParticles();

  // 3. NAVBAR SCROLL & ACTIVE LINK
  const navbar = document.getElementById('navbar');
  const sections = document.querySelectorAll('section');
  const navLinks = document.querySelectorAll('.nav-link');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }

    let current = '';
    sections.forEach(section => {
      const sectionTop = section.offsetTop - 100;
      if (window.scrollY >= sectionTop) {
        current = section.getAttribute('id');
      }
    });

    navLinks.forEach(link => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${current}`) {
        link.classList.add('active');
      }
    });
  });

  // 4. MOBILE MENU DRAWER
  const hamburger = document.getElementById('hamburger');
  const mobileMenu = document.getElementById('mobile-menu');
  const mobileClose = document.getElementById('mobile-close');
  const mobileLinks = document.querySelectorAll('.mobile-link');

  hamburger.addEventListener('click', () => mobileMenu.classList.add('open'));
  mobileClose.addEventListener('click', () => mobileMenu.classList.remove('open'));
  mobileLinks.forEach(link => {
    link.addEventListener('click', () => mobileMenu.classList.remove('open'));
  });

  // 5. THEME TOGGLE (DARK / LIGHT)
  const themeToggle = document.getElementById('theme-toggle');
  const themeIcon = document.getElementById('theme-icon');

  const savedTheme = localStorage.getItem('theme') || 'dark';
  if (savedTheme === 'light') {
    document.body.classList.add('light-theme');
    themeIcon.className = 'fa-solid fa-sun';
  }

  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    themeIcon.className = isLight ? 'fa-solid fa-sun' : 'fa-solid fa-moon';
    localStorage.setItem('theme', isLight ? 'light' : 'dark');
  });

  // 6. SKILLS FILTERING
  const filterBtns = document.querySelectorAll('.filter-btn');
  const skillCards = document.querySelectorAll('.skill-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');

      skillCards.forEach(card => {
        const category = card.getAttribute('data-category');
        if (filter === 'all' || category === filter) {
          card.style.display = 'flex';
          card.style.animation = 'fadeIn 0.4s ease';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });

  // 7. PROJECT DETAILS MODAL (Industrial Engineering Projects)
  const projectData = {
    "1": {
      title: "Yapay Zeka Destekli Talep Tahmini & Stok Optimizasyon Modeli",
      image: "assets/project1.jpg",
      description: "Bu proje, hızlı tüketim ve üretim sektörlerinde geçmiş satış verilerini, mevsimsellik eğilimlerini ve kampanya etkilerini analiz ederek SKU bazında 12 aylık talep tahminleri üretir. Aynı zamanda hedeflenen hizmet seviyesine (Service Level %98) göre optimal güvenlik stoğunu (Safety Stock) ve Yeniden Sipariş Noktalarını (ROP) otomatik hesaplar.",
      features: [
        "Prophet, ARIMA ve XGBoost algoritmalarıyla zaman serisi tahmini",
        "Kötü stok (Dead Stock) ve Stoksuz Kalma (Stockout) risk ikaz sistemi",
        "Tahmin Doğruluğu (MAPE / WAPE) izleme paneli",
        "ERP (SAP/Oracle) ile çift yönlü veri entegrasyonu"
      ],
      tech: ["Python", "Prophet", "XGBoost", "Pandas", "Stok Teorisi"],
      demo: "https://github.com/semihvz",
      github: "https://github.com/semihvz"
    },
    "2": {
      title: "İleri Üretim Çizelgeleme & Hat Dengeleme Motoru (APS)",
      image: "assets/project2.jpg",
      description: "Çok makineli ve çok ürünlü imalat tesislerinde makine kurulum (SMED) sürelerini minimize eden, teslim tarihlerine (Due Date) uyumu maksimuma çıkaran ve makine iş yüklerini en uygun şekilde dengeleyen Karma Tam Sayılı Doğrusal Programlama (MILP) tabanlı çizelgeleme yazılımı.",
      features: [
        "Dinamik Gantt Şeması görünümü ve Sürükle-Bırak düzenleme",
        "Makine bazlı OEE ve darboğaz (Bottleneck) tespiti",
        "Gurobi & PuLP çözücüleri ile matematiksel optimizasyon",
        "Gecikme sürelerini (Tardiness) sıfırlayan akıllı sıralama"
      ],
      tech: ["Gurobi / CPLEX", "PuLP", "Python", "Gantt Engine"],
      demo: "https://github.com/semihvz",
      github: "https://github.com/semihvz"
    },
    "3": {
      title: "End-to-End Tedarik Zinciri & S&OP Yönetim Paneli",
      image: "assets/project3.jpg",
      description: "Satış, Üretim, Satın Alma ve Finans bölümlerinin tek bir doğruluk kaynağı üzerinden iletişim kurmasını sağlayan Satış ve Operasyon Planlaması (S&OP) kontrol kulesi.",
      features: [
        "Uçtan uca tedarik süresi (Lead Time) ve tedarikçi performans izleme",
        "Stok devir hızı (Inventory Turnover) ve elde tutma maliyet hesapları",
        "Senaryo analizi (What-If Analysis) ile kapasite simülasyonu",
        "Power BI ve SQL tabanlı canlı veri entegrasyonu"
      ],
      tech: ["Power BI", "SQL", "S&OP Process", "SAP PP"],
      demo: "https://github.com/semihvz",
      github: "https://github.com/semihvz"
    }
  };

  const modal = document.getElementById('project-modal');
  const modalContent = document.getElementById('modal-content');
  const modalClose = document.getElementById('modal-close');
  const openModalBtns = document.querySelectorAll('.open-modal-btn');

  openModalBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const projId = btn.getAttribute('data-project');
      const data = projectData[projId];

      if (!data) return;

      modalContent.innerHTML = `
        <img src="${data.image}" alt="${data.title}" style="width: 100%; height: 260px; object-fit: cover; border-radius: var(--radius-md); margin-bottom: 1.5rem;">
        <h2 style="font-size: 1.6rem; margin-bottom: 1rem; color: var(--text-main);">${data.title}</h2>
        <p style="color: var(--text-muted); line-height: 1.7; margin-bottom: 1.5rem;">${data.description}</p>
        
        <h4 style="font-size: 1.1rem; color: var(--accent-cyan); margin-bottom: 0.8rem;">Sistem Özellikleri & Çıktılar:</h4>
        <ul style="list-style: none; margin-bottom: 1.5rem; display: flex; flex-direction: column; gap: 0.5rem;">
          ${data.features.map(f => `<li style="color: var(--text-muted); display: flex; align-items: center; gap: 0.5rem;"><i class="fa-solid fa-check" style="color: var(--accent-green);"></i> ${f}</li>`).join('')}
        </ul>

        <div style="display: flex; gap: 0.5rem; flex-wrap: wrap; margin-bottom: 2rem;">
          ${data.tech.map(t => `<span class="project-tag">${t}</span>`).join('')}
        </div>

        <div style="display: flex; gap: 1rem;">
          <a href="${data.github}" target="_blank" class="btn btn-primary"><i class="fa-brands fa-github"></i> Model Detayları</a>
        </div>
      `;

      modal.classList.add('active');
    });
  });

  modalClose.addEventListener('click', () => modal.classList.remove('active'));
  modal.addEventListener('click', (e) => {
    if (e.target === modal) modal.classList.remove('active');
  });

  // 8. CONTACT FORM SIMULATION & TOAST
  const contactForm = document.getElementById('contact-form');
  const toast = document.getElementById('toast');
  const toastMessage = document.getElementById('toast-message');

  function showToast(msg) {
    toastMessage.textContent = msg;
    toast.classList.add('show');
    setTimeout(() => toast.classList.remove('show'), 4000);
  }

  contactForm.addEventListener('submit', (e) => {
    e.preventDefault();
    showToast("Teşekkürler! Mesajınız başarıyla iletildi.");
    contactForm.reset();
  });

  // Copy Email Quick Action
  const copyEmailBtn = document.getElementById('copy-email');
  if (copyEmailBtn) {
    copyEmailBtn.addEventListener('click', (e) => {
      e.preventDefault();
      const email = copyEmailBtn.textContent;
      navigator.clipboard.writeText(email);
      showToast("E-posta adresi panoya kopyalandı!");
    });
  }

  // 9. FOOTER YEAR
  document.getElementById('year').textContent = new Date().getFullYear();
});
