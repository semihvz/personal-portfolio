/* ==========================================================================
   BLACKROCK-INSPIRED MINIMALIST INTERACTIVE SCRIPT
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // Article Modal Data
  const articles = {
    "1": {
      category: "TALEP PLANLAMA // ANALİZ 01",
      title: "Endüstriyel Tesislerde Talep Tahminleme: İstatistiki Modeller ve Yapay Zeka Yaklaşımları",
      content: `
        <p style="margin-bottom: 1.5rem; color: #444; line-height: 1.8;">Talep tahminleme, modern tedarik zinciri yönetiminin temel taşıdır. Doğru bir talep tahmini olmadan yapılan üretim planları ya yüksek stok tutma maliyetlerine (Overstock) ya da müşteri kayıplarına yol açan stoksuzluk krizlerine (Stockout) neden olur.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 800;">1. İstatistiksel Zaman Serisi Modelleri</h4>
        <p style="margin-bottom: 1.5rem; color: #444; line-height: 1.8;">Geleneksel zaman serisi analizinde ARIMA (Autoregressive Integrated Moving Average) ve Holt-Winters Üstel Düzeltme yöntemleri mevsimsellik ve trend içeren verilerde güçlü sonuçlar verir. Özellikle geçmiş 2-3 yıllık düzenli satış verisine sahip SKU gruplarında baseline tahmin aracı olarak kullanılır.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 800;">2. Makine Öğrenmesi Yaklaşımları (Prophet & XGBoost)</h4>
        <p style="margin-bottom: 1.5rem; color: #444; line-height: 1.8;">Fiyat promosyonları, tatil günleri ve dışsal ekonomik göstergelerin dahil edildiği karmaşık senaryolarda Facebook Prophet ve XGBoost gibi gradient boosting modelleri öne çıkar. Bu algoritmalar eksik verileri tolere etme ve anomali tespiti konusunda yüksek başarı gösterir.</p>

        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 800;">3. Tahmin Performans Ölçümü (WAPE / MAPE)</h4>
        <p style="color: #444; line-height: 1.8;">Tahminlerin başarısı Ortalama Mutlak Yüzde Hata (MAPE) ve Ağırlıklı Ortalama Mutlak Hata (WAPE) ile ölçülmelidir. İdeal bir talep planlama sisteminde hedef WAPE oranının %10'un altında tutulmasıdır.</p>
      `
    },
    "2": {
      category: "ÜRETİM ÇİZELGELEME // ANALİZ 02",
      title: "Kapasite ve Üretim Çizelgelemede Darboğaz (Bottleneck) Yönetimi ve SMED",
      content: `
        <p style="margin-bottom: 1.5rem; color: #444; line-height: 1.8;">Üretim hatlarında toplam çıktı kapasitesini belirleyen unsur, sistemdeki en yavaş çalışan işlem yani darboğazdır (Bottleneck). Goldratt'ın Kısıtlar Teorisi'ne (TOC) göre darboğaz dışındaki hatlarda yapılan iyileştirmeler toplam fabrika çıktısını artırmaz.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 800;">1. SMED ile Kalıp Değişim Sürelerinin Düşürülmesi</h4>
        <p style="margin-bottom: 1.5rem; color: #444; line-height: 1.8;">Üretim çizelgelemede en büyük zaman kayıpları kalıp değişim (Set-up) esnasında yaşanır. SMED (Single-Minute Exchange of Die) metodolojisiyle iç set-up ve dış set-up işlemleri ayrıştırılarak hazırlık süreleri dakikalar seviyesine indirilebilir.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 800;">2. MILP ile Otomatik Gantt Çizelgeleme</h4>
        <p style="color: #444; line-height: 1.8;">Karma Tam Sayılı Doğrusal Programlama (MILP) modelleri sayesinde işlerin makinelere atanması, kurulum sürelerinin en aza indirilmesi ve teslimat tarihlerine tam uyum otomatik olarak hesaplanır.</p>
      `
    },
    "3": {
      category: "STOK YÖNETİMİ // ANALİZ 03",
      title: "Stok Devir Hızını Artırırken Stoksuz Kalma Riskini (Stockout) Sıfırlamak",
      content: `
        <p style="margin-bottom: 1.5rem; color: #444; line-height: 1.8;">Stok yönetimi, şirket finansmanının ve işletme sermayesinin (Working Capital) kalbidir. Yüksek stok seviyeleri likiditeyi kilitlerken, düşük stok ise müşteri memnuniyetsizliğine yol açar.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 800;">1. Dinamik Güvenlik Stoğu (Safety Stock) Formülasyonu</h4>
        <p style="margin-bottom: 1.5rem; color: #444; line-height: 1.8;">Sabit güvenlik stoğu tutmak yerine, tedarikçi teslimat süresi değişkenliği (Lead Time Std Dev) ve talep dalgalanmasını dikkate alan istatistiksel güvenlik stoğu formülleri uygulanmalıdır.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 800;">2. ABC - XYZ Matris Analizi</h4>
        <p style="color: #444; line-height: 1.8;">Ürünlerin ciro katkısına göre (ABC) ve talep tahmin edilebilirliğine göre (XYZ) matrisler oluşturularak her grup için farklı stok politikaları belirlenmelidir.</p>
      `
    }
  };

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
        <div style="font-size:0.75rem; font-weight:800; color:#666; letter-spacing:0.1em; margin-bottom:1rem;">${data.category}</div>
        <h2 style="font-size:1.8rem; font-weight:900; text-transform:uppercase; margin-bottom:1.5rem; color:#000; line-height:1.2;">${data.title}</h2>
        <div style="border-top:1px solid #e5e5e5; padding-top:1.5rem;">${data.content}</div>
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

  // Contact Form
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Talebiniz başarıyla iletildi. En kısa sürede dönüş yapılacaktır.");
      contactForm.reset();
    });
  }

  // Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
