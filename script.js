/* ==========================================================================
   CORPORATE BLOG & CONSULTANCY INTERACTIVE SCRIPT
   Minimalist, ultra-clean and content-focused
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. BLOG ARTICLE READER MODAL DATA
  const articles = {
    "1": {
      category: "Talep Planlama & Tahminleme",
      title: "Endüstriyel Tesislerde Talep Tahminleme: İstatistiki Modeller ve Yapay Zeka Yaklaşımları",
      date: "15 Ağustos 2026",
      readTime: "5 dk okuma",
      image: "assets/project1.jpg",
      content: `
        <p>Talep tahminleme, modern tedarik zinciri yönetiminin temel taşıdır. Doğru bir talep tahmini olmadan yapılan üretim planları ya yüksek stok tutma maliyetlerine (Overstock) ya da müşteri kayıplarına yol açan stoksuzluk krizlerine (Stockout) neden olur.</p>
        
        <h4 style="margin: 1.5rem 0 0.8rem 0; color: var(--text-primary); font-size: 1.15rem;">1. İstatistiksel Zaman Serisi Modelleri</h4>
        <p>Geleneksel zaman serisi analizinde <strong>ARIMA</strong> (Autoregressive Integrated Moving Average) ve <strong>Holt-Winters Üstel Düzeltme</strong> yöntemleri mevsimsellik ve trend içeren verilerde güçlü sonuçlar verir. Özellikle geçmiş 2-3 yıllık düzenli satış verisine sahip SKU gruplarında baseline tahmin aracı olarak kullanılır.</p>
        
        <h4 style="margin: 1.5rem 0 0.8rem 0; color: var(--text-primary); font-size: 1.15rem;">2. Makine Öğrenmesi Yaklaşımları (Prophet & XGBoost)</h4>
        <p>Fiyat promosyonları, tatil günleri ve dışsal ekonomik göstergelerin dahil edildiği karmaşık senaryolarda <strong>Facebook Prophet</strong> ve <strong>XGBoost</strong> gibi gradient boosting modelleri öne çıkar. Bu algoritmalar eksik verileri tolere etme ve anomali tespiti konusunda yüksek başarı gösterir.</p>

        <h4 style="margin: 1.5rem 0 0.8rem 0; color: var(--text-primary); font-size: 1.15rem;">3. Tahmin Performans Ölçümü (WAPE / MAPE)</h4>
        <p>Tahminlerin başarısı Ortalama Mutlak Yüzde Hata (MAPE) ve Ağırlıklı Ortalama Mutlak Hata (WAPE) ile ölçülmelidir. İdeal bir talep planlama sisteminde hedef WAPE oranının %10'un altında tutulmasıdır.</p>
      `
    },
    "2": {
      category: "Üretim Çizelgeleme & Kapasite",
      title: "Kapasite ve Üretim Çizelgelemede Darboğaz (Bottleneck) Yönetimi ve SMED",
      date: "02 Ağustos 2026",
      readTime: "7 dk okuma",
      image: "assets/project2.jpg",
      content: `
        <p>Üretim hatlarında toplam çıktı kapasitesini belirleyen unsur, sistemdeki en yavaş çalışan işlem yani <strong>darboğazdır (Bottleneck)</strong>. Goldratt'ın Kısıtlar Teorisi'ne (TOC) göre darboğaz dışındaki hatlarda yapılan iyileştirmeler toplam fabrika çıktısını artırmaz.</p>
        
        <h4 style="margin: 1.5rem 0 0.8rem 0; color: var(--text-primary); font-size: 1.15rem;">1. SMED ile Kalıp Değişim Sürelerinin Düşürülmesi</h4>
        <p>Üretim çizelgelemede en büyük zaman kayıpları kalıp değişim (Set-up) esnasında yaşanır. SMED (Single-Minute Exchange of Die) metodolojisiyle iç set-up ve dış set-up işlemleri ayrıştırılarak hazırlık süreleri dakikalar seviyesine indirilebilir.</p>
        
        <h4 style="margin: 1.5rem 0 0.8rem 0; color: var(--text-primary); font-size: 1.15rem;">2. MILP ile Otomatik Gantt Çizelgeleme</h4>
        <p>Karma Tam Sayılı Doğrusal Programlama (MILP) modelleri sayesinde işlerin makinelere atanması, kurulum sürelerinin en aza indirilmesi ve teslimat tarihlerine tam uyum otomatik olarak hesaplanır.</p>
      `
    },
    "3": {
      category: "Stok Teorisi & Lojistik",
      title: "Stok Devir Hızını Artırırken Stoksuz Kalma Riskini (Stockout) Sıfırlamak",
      date: "20 Temmuz 2026",
      readTime: "6 dk okuma",
      image: "assets/project3.jpg",
      content: `
        <p>Stok yönetimi, şirket finansmanının ve işletme sermayesinin (Working Capital) kalbidir. Yüksek stok seviyeleri likiditeyi kilitlerken, düşük stok ise müşteri memnuniyetsizliğine yol açar.</p>
        
        <h4 style="margin: 1.5rem 0 0.8rem 0; color: var(--text-primary); font-size: 1.15rem;">1. Dinamik Güvenlik Stoğu (Safety Stock) Formülasyonu</h4>
        <p>Sabit güvenlik stoğu tutmak yerine, tedarikçi teslimat süresi değişkenliği (Lead Time Std Dev) ve talep dalgalanmasını dikkate alan istatistiksel güvenlik stoğu formülleri uygulanmalıdır.</p>
        
        <h4 style="margin: 1.5rem 0 0.8rem 0; color: var(--text-primary); font-size: 1.15rem;">2. ABC - XYZ Matris Analizi</h4>
        <p>Ürünlerin ciro katkısına göre (ABC) ve talep tahmin edilebilirliğine göre (XYZ) matrisler oluşturularak her grup için farklı stok politikaları belirlenmelidir.</p>
      `
    }
  };

  // Modal Handlers
  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('article-content');
  const modalClose = document.getElementById('modal-close');
  const articleBtns = document.querySelectorAll('.read-article-btn');

  articleBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const artId = btn.getAttribute('data-article');
      const data = articles[artId];

      if (!data) return;

      modalContent.innerHTML = `
        <div style="font-size:0.85rem; color:var(--accent-primary); font-weight:600; text-transform:uppercase; margin-bottom:0.5rem;">${data.category}</div>
        <h2 style="font-size:1.6rem; font-weight:700; margin-bottom:0.5rem; color:var(--text-primary); line-height:1.3;">${data.title}</h2>
        <div style="font-size:0.85rem; color:var(--text-muted); margin-bottom:1.5rem;">${data.date} • ${data.readTime}</div>
        <img src="${data.image}" alt="${data.title}" style="width:100%; height:240px; object-fit:cover; border-radius:6px; margin-bottom:1.5rem; border:1px solid var(--border-color);">
        <div style="color:var(--text-secondary); line-height:1.8; font-size:1rem;">${data.content}</div>
      `;

      modal.classList.add('active');
    });
  });

  if (modalClose) {
    modalClose.addEventListener('click', () => modal.classList.remove('active'));
  }
  
  if (modal) {
    modal.addEventListener('click', (e) => {
      if (e.target === modal) modal.classList.remove('active');
    });
  }

  // Contact Form Feedback
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Teşekkürler! Mesajınız başarıyla iletildi. En kısa sürede dönüş yapılacaktır.");
      contactForm.reset();
    });
  }

  // Footer Year
  const yearElement = document.getElementById('year');
  if (yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }
});
