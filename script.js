/* ==========================================================================
   BLACKROCK MONOCHROME CORPORATE INTERACTIVE LOGIC (TR & EN I18N + EOQ)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  // 1. DICTIONARY TRANSLATIONS
  const i18n = {
    tr: {
      brand_sub: "// ENDÜSTRİ & PLANLAMA",
      nav_approach: "YAKLAŞIM",
      nav_expertise: "UZMANLIK",
      nav_eoq: "EOQ HESAPLAYICI",
      nav_publications: "ANALİZLER",
      nav_biography: "BİYOGRAFİ",
      nav_contact: "İLETİŞİM",
      hero_label: "OPERASYONEL MÜKEMMELLİK & TEDARİK ZİNCİRİ MİMARİSİ",
      hero_title: "TALEP KONTROLÜ VE ÜRETİM ÇİZELGELEME. ENDÜSTRİYEL PLANLAMA VE OPTİMİZASYON.",
      hero_desc: "Karmaşık imalat ve lojistik ekosistemlerinde Talep Tahminleme, Ana Üretim Çizelgeleme (MPS/MRP) ve Satış & Operasyon Planlaması (S&OP) süreçlerinde veriye dayalı mühendislik çözümleri sunuyoruz.",
      metric_1: "ZAMANINDA TESLİMAT GÜVENİLİRLİĞİ (OTIF)",
      metric_2: "ATIL STOK TUTMA MALİYETİ AZALTIMI",
      metric_3: "KAPASİTE KULLANIMI & OEE ARTIŞI",
      exp_kicker: "DANIŞMANLIK & OPERASYONEL ALANLAR",
      exp_title: "UZMANLIK ALANLARI",
      exp_1_num: "01 // TALEP PLANLAMA",
      exp_1_title: "TALEP TAHMİNLEME & İSTATİSTİKSEL MODELLER",
      exp_1_body: "SKU seviyesinde geçmiş veriler, mevsimsellik ve trendlerin zaman serisi (ARIMA, Prophet, XGBoost) algoritmalarıyla modellenmesi ve tahmin doğruluğu (WAPE) optimizasyonu.",
      exp_2_num: "02 // ÜRETİM ÇİZELGELEME",
      exp_2_title: "ÜRETİM ÇİZELGELEME & KAPASİTE MİMARİSİ",
      exp_2_body: "Çok hatlı üretim tesislerinde kalıp değişim (SMED) sürelerini minimize eden, makine yüklerini dengeleyen ve teslim tarihlerine sadık kalan MILP matematiksel çizelgeleme modelleri.",
      exp_3_num: "03 // STOK OPTİMİZASYONU",
      exp_3_title: "STOK TEORİSİ & GÜVENLİK STOĞU",
      exp_3_body: "Tedarik süreleri (Lead Time) ve talep dalgalanmalarına göre dinamik Güvenlik Stoğu (Safety Stock) ve Yeniden Sipariş Noktası (ROP) hesaplamaları ile stok krizlerinin önlenmesi.",
      exp_4_num: "04 // S&OP ENTEGRASYONU",
      exp_4_title: "S&OP (SATIŞ VE OPERASYON PLANLAMASI)",
      exp_4_body: "Satış, Üretim, Satın Alma ve Finans birimleri arasında ortak işletme hedeflerinin belirlendiği aylık S&OP yönetişim ve karar destek mekanizmasının kurulması.",
      eoq_kicker: "INTERAKTİF ARAÇLAR // STOK PLANLAMA",
      eoq_title: "EKONOMİK SİPARİŞ MİKTARI (EOQ) HESAPLAYICI",
      eoq_demand_label: "YILLIK TALEP (D) - BİRİM/YIL",
      eoq_setup_label: "SİPARİŞ / KURULUM MALİYETİ (S) - TL/SİPARİŞ",
      eoq_holding_label: "ELDE TUTMA MALİYETİ (H) - TL/BİRİM/YIL",
      eoq_res_eoq: "OPTIMAL SİPARİŞ MİKTARI (EOQ)",
      eoq_res_unit: "birim/sipariş",
      eoq_res_orders: "YILLIK SİPARİŞ SAYISI (N)",
      eoq_res_orders_unit: "sipariş/yıl",
      eoq_res_cycle: "SİPARİŞ PERİYODU (T)",
      eoq_res_days: "gün/sipariş",
      eoq_res_cost: "TOPLAM STOK MALİYETİ (TC)",
      eoq_res_cost_unit: "TL/yıl (TOC + THC)",
      eoq_chart_title: "TOPLAM MALİYET EĞRİSİ VE OPTİMUM SİPARİŞ NOKTASI",
      pub_kicker: "TEKNİK ANALİZLER & İNCELEMELER",
      pub_title: "YAYINLAR & ANALİZLER",
      pub_1_tag: "TALEP PLANLAMA // 01",
      pub_1_title: "Endüstriyel Tesislerde Talep Tahminleme: İstatistiki Modeller ve Yapay Zeka Yaklaşımları",
      pub_1_desc: "Zaman serisi analizlerinde ARIMA, Holt-Winters ve Prophet modellerinin SKU bazında karşılaştırılması ve tahmin doğruluğu (WAPE) analizi.",
      pub_2_tag: "ÜRETİM ÇİZELGELEME // 02",
      pub_2_title: "Kapasite ve Üretim Çizelgelemede Darboğaz (Bottleneck) Yönetimi ve SMED",
      pub_2_desc: "Çok ürünlü imalat hatlarında makine hazırlık sürelerinin minimizasyonu, kısıtlar teorisi (TOC) ve MILP optimizasyonu uygulamaları.",
      pub_3_tag: "STOK YÖNETİMİ // 03",
      pub_3_title: "Stok Devir Hızını Artırırken Stoksuz Kalma Riskini (Stockout) Sıfırlamak",
      pub_3_desc: "Dinamik Güvenlik Stoğu (Safety Stock) ve Yeniden Sipariş Noktası (ROP) hesaplamalarında değişken tedarik sürelerinin (Lead Time) etkisi.",
      bio_title: "EXECUTIVE BIOGRAPHY // SEMİH",
      bio_p1: "Endüstri Mühendisliği disiplini çerçevesinde; Karmaşık İmalat Sistemleri, Satış ve Operasyon Planlaması (S&OP), Ana Üretim Çizelgeleme (MPS) ve Malzeme Gereksinim Planlaması (MRP) konularında uzmanlaşmış bir mühendisim.",
      bio_p2: "Geleneksel sezgisel planlama yöntemleri yerine; Matematiksel Optimizasyon (Yöneylem Araştırması), İstatistiksel Zaman Serileri ve Makine Öğrenmesi algoritmalarını iş süreçlerine entegre ederek işletmelerin stok tutma maliyetlerini düşürmekte ve operasyonel verimliliklerini maksimuma çıkarmaktayım.",
      contact_kicker: "KURUMSAL İLETİŞİM",
      contact_title: "İLETİŞİME GEÇİN",
      contact_desc: "Planlama projeleri, S&OP danışmanlığı veya kurumsal değerlendirmeler için doğrudan iletişim kurabilirsiniz.",
      contact_email_label: "E-POSTA",
      contact_loc_label: "LOKASYON",
      contact_loc_val: "İstanbul / Türkiye",
      form_name_label: "AD SOYAD / KURUMSAL FİRMA",
      form_email_label: "E-POSTA ADRESİ",
      form_msg_label: "TALEBİNİZ VEYA PROJE DETAYI",
      form_submit: "GÖNDER",
      footer_text: "SEMİH // ENDÜSTRİ MÜHENDİSLİĞİ & OPERASYONEL PLANLAMA. TÜM HAKLARI SAKLIDIR.",
      form_alert: "Talebiniz başarıyla iletildi. En kısa sürede dönüş yapılacaktır."
    },
    en: {
      brand_sub: "// INDUSTRIAL ENGINEERING & PLANNING",
      nav_approach: "APPROACH",
      nav_expertise: "EXPERTISE",
      nav_eoq: "EOQ CALCULATOR",
      nav_publications: "PUBLICATIONS",
      nav_biography: "BIOGRAPHY",
      nav_contact: "CONTACT",
      hero_label: "OPERATIONAL EXCELLENCE & SUPPLY CHAIN ARCHITECTURE",
      hero_title: "DEMAND CONTROL AND PRODUCTION SCHEDULING. INDUSTRIAL PLANNING AND OPTIMIZATION.",
      hero_desc: "Delivering data-driven engineering solutions across Demand Forecasting, Master Production Scheduling (MPS/MRP), and Sales & Operations Planning (S&OP) in complex manufacturing and logistics ecosystems.",
      metric_1: "ON-TIME IN-FULL DELIVERY RELIABILITY (OTIF)",
      metric_2: "DEAD STOCK & HOLDING COST REDUCTION",
      metric_3: "CAPACITY UTILIZATION & OEE ENHANCEMENT",
      exp_kicker: "CONSULTING & OPERATIONAL AREAS",
      exp_title: "EXPERTISE AREAS",
      exp_1_num: "01 // DEMAND PLANNING",
      exp_1_title: "DEMAND FORECASTING & STATISTICAL MODELS",
      exp_1_body: "SKU-level time-series modeling (ARIMA, Prophet, XGBoost) accounting for seasonality, trend, and forecast accuracy (WAPE) optimization.",
      exp_2_num: "02 // PRODUCTION SCHEDULING",
      exp_2_title: "PRODUCTION SCHEDULING & CAPACITY ARCHITECTURE",
      exp_2_body: "MILP mathematical optimization models for multi-line facilities to minimize changeover (SMED) times, balance machine workloads, and satisfy due dates.",
      exp_3_num: "03 // INVENTORY OPTIMIZATION",
      exp_3_title: "INVENTORY THEORY & SAFETY STOCK",
      exp_3_body: "Dynamic Safety Stock and Reorder Point (ROP) calculation accounting for lead time variance and demand volatility to eliminate stockouts.",
      exp_4_num: "04 // S&OP INTEGRATION",
      exp_4_title: "SALES & OPERATIONS PLANNING (S&OP)",
      exp_4_body: "Designing monthly executive S&OP governance and decision-support frameworks aligning Sales, Production, Procurement, and Finance.",
      eoq_kicker: "INTERACTIVE TOOLS // INVENTORY PLANNING",
      eoq_title: "ECONOMIC ORDER QUANTITY (EOQ) CALCULATOR",
      eoq_demand_label: "ANNUAL DEMAND (D) - UNITS/YEAR",
      eoq_setup_label: "ORDER / SETUP COST (S) - $/ORDER",
      eoq_holding_label: "HOLDING COST (H) - $/UNIT/YEAR",
      eoq_res_eoq: "OPTIMAL ORDER QUANTITY (EOQ)",
      eoq_res_unit: "units/order",
      eoq_res_orders: "ANNUAL ORDERS (N)",
      eoq_res_orders_unit: "orders/year",
      eoq_res_cycle: "ORDER CYCLE TIME (T)",
      eoq_res_days: "days/order",
      eoq_res_cost: "TOTAL INVENTORY COST (TC)",
      eoq_res_cost_unit: "$/year (TOC + THC)",
      eoq_chart_title: "TOTAL COST CURVE & OPTIMUM ORDER POINT",
      pub_kicker: "TECHNICAL ANALYSIS & INSIGHTS",
      pub_title: "PUBLICATIONS & INSIGHTS",
      pub_1_tag: "DEMAND PLANNING // 01",
      pub_1_title: "Demand Forecasting in Industrial Facilities: Statistical Models vs. Machine Learning",
      pub_1_desc: "Comparative evaluation of ARIMA, Holt-Winters, and Prophet models for SKU-level demand forecasting and WAPE accuracy measurement.",
      pub_2_tag: "PRODUCTION SCHEDULING // 02",
      pub_2_title: "Bottleneck Management and SMED in Production Scheduling & Capacity Planning",
      pub_2_desc: "Minimizing setup times in multi-product manufacturing lines using Theory of Constraints (TOC) and MILP optimization.",
      pub_3_tag: "INVENTORY MANAGEMENT // 03",
      pub_3_title: "Increasing Inventory Turnover While Eliminating Stockout Risks",
      pub_3_desc: "Analyzing lead time variance and demand volatility impact on dynamic Safety Stock and Reorder Point (ROP) equations.",
      bio_title: "EXECUTIVE BIOGRAPHY // SEMİH",
      bio_p1: "Specializing in Industrial Engineering principles, Complex Manufacturing Systems, Sales & Operations Planning (S&OP), Master Production Scheduling (MPS), and Material Requirements Planning (MRP).",
      bio_p2: "Replacing heuristic planning methods with Mathematical Optimization (Operations Research), Statistical Time Series, and Machine Learning algorithms to minimize inventory holding costs and maximize operational throughput.",
      contact_kicker: "CORPORATE INQUIRIES",
      contact_title: "GET IN TOUCH",
      contact_desc: "Reach out for industrial planning projects, S&OP consulting engagements, or corporate evaluations.",
      contact_email_label: "EMAIL",
      contact_loc_label: "LOCATION",
      contact_loc_val: "Istanbul / Turkey",
      form_name_label: "FULL NAME / CORPORATE ENTITY",
      form_email_label: "EMAIL ADDRESS",
      form_msg_label: "INQUIRY OR PROJECT DETAILS",
      form_submit: "SUBMIT",
      footer_text: "SEMİH // INDUSTRIAL ENGINEERING & OPERATIONAL PLANNING. ALL RIGHTS RESERVED.",
      form_alert: "Your inquiry has been submitted successfully. We will respond shortly."
    }
  };

  // Article Modal Contents
  const articles = {
    tr: {
      "1": {
        category: "TALEP PLANLAMA // ANALİZ 01",
        title: "Endüstriyel Tesislerde Talep Tahminleme: İstatistiki Modeller ve Yapay Zeka Yaklaşımları",
        content: `
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Talep tahminleme, modern tedarik zinciri yönetiminin temel taşıdır. Doğru bir talep tahmini olmadan yapılan üretim planları ya yüksek stok tutma maliyetlerine (Overstock) ya da müşteri kayıplarına yol açan stoksuzluk krizlerine (Stockout) neden olur.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">1. İstatistiksel Zaman Serisi Modelleri</h4>
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Geleneksel zaman serisi analizinde ARIMA ve Holt-Winters Üstel Düzeltme yöntemleri mevsimsellik ve trend içeren verilerde güçlü sonuçlar verir.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">2. Makine Öğrenmesi Yaklaşımları (Prophet & XGBoost)</h4>
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Fiyat promosyonları, tatil günleri ve dışsal ekonomik göstergelerin dahil edildiği karmaşık senaryolarda Facebook Prophet ve XGBoost modelleri öne çıkar.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">3. Tahmin Performans Ölçümü (WAPE / MAPE)</h4>
          <p style="color: #333; line-height: 1.8;">Tahminlerin başarısı MAPE ve WAPE ile ölçülmelidir. İdeal bir talep planlama sisteminde hedef WAPE oranının %10'un altında tutulmasıdır.</p>
        `
      },
      "2": {
        category: "ÜRETİM ÇİZELGELEME // ANALİZ 02",
        title: "Kapasite ve Üretim Çizelgelemede Darboğaz (Bottleneck) Yönetimi ve SMED",
        content: `
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Üretim hatlarında toplam çıktı kapasitesini belirleyen unsur, sistemdeki en yavaş çalışan işlem yani darboğazdır (Bottleneck).</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">1. SMED ile Kalıp Değişim Sürelerinin Düşürülmesi</h4>
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">SMED metodolojisiyle iç set-up ve dış set-up işlemleri ayrıştırılarak hazırlık süreleri dakikalar seviyesine indirilebilir.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">2. MILP ile Otomatik Gantt Çizelgeleme</h4>
          <p style="color: #333; line-height: 1.8;">Karma Tam Sayılı Doğrusal Programlama (MILP) modelleri sayesinde işlerin makinelere atanması ve teslimat tarihlerine uyum otomatik hesaplanır.</p>
        `
      },
      "3": {
        category: "STOK YÖNETİMİ // ANALİZ 03",
        title: "Stok Devir Hızını Artırırken Stoksuz Kalma Riskini (Stockout) Sıfırlamak",
        content: `
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Stok yönetimi, işletme sermayesinin (Working Capital) kalbidir.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">1. Dinamik Güvenlik Stoğu (Safety Stock) Formülasyonu</h4>
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Tedarikçi teslimat süresi değişkenliği ve talep dalgalanmasını dikkate alan istatistiksel güvenlik stoğu formülleri uygulanmalıdır.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">2. ABC - XYZ Matris Analizi</h4>
          <p style="color: #333; line-height: 1.8;">Ürünler ciro katkısına (ABC) ve talep tahmin edilebilirliğine (XYZ) göre kategorize edilmelidir.</p>
        `
      }
    },
    en: {
      "1": {
        category: "DEMAND PLANNING // ANALYSIS 01",
        title: "Demand Forecasting in Industrial Facilities: Statistical Models vs. Machine Learning",
        content: `
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Demand forecasting forms the cornerstone of modern supply chain management. Without accurate demand forecasts, production schedules lead either to excessive holding costs (Overstock) or lost sales caused by stockouts.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">1. Statistical Time Series Models</h4>
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">In traditional time-series analysis, ARIMA and Holt-Winters Exponential Smoothing yield strong results on data with clear seasonality and trends.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">2. Machine Learning Approaches (Prophet & XGBoost)</h4>
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">In complex scenarios involving promotions and macroeconomic indicators, models like Facebook Prophet and XGBoost excel.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">3. Forecast Performance Measurement (WAPE / MAPE)</h4>
          <p style="color: #333; line-height: 1.8;">Forecast performance should be evaluated using MAPE and WAPE, targeting WAPE rates below 10%.</p>
        `
      },
      "2": {
        category: "PRODUCTION SCHEDULING // ANALYSIS 02",
        title: "Bottleneck Management and SMED in Production Scheduling & Capacity Planning",
        content: `
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">In manufacturing lines, total output capacity is governed by the system's slowest operation—the bottleneck.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">1. Setup Time Reduction via SMED</h4>
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Applying Single-Minute Exchange of Die (SMED) separates internal and external setup tasks, reducing changeover times down to single-digit minutes.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">2. Automated Gantt Scheduling via MILP</h4>
          <p style="color: #333; line-height: 1.8;">Mixed-Integer Linear Programming (MILP) models automatically optimize job assignments and due-date adherence.</p>
        `
      },
      "3": {
        category: "INVENTORY MANAGEMENT // ANALYSIS 03",
        title: "Increasing Inventory Turnover While Eliminating Stockout Risks",
        content: `
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Inventory management lies at the heart of corporate finance and working capital optimization.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">1. Dynamic Safety Stock Formulation</h4>
          <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Dynamic statistical formulas incorporating supplier lead time variance and demand volatility must be applied.</p>
          <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">2. ABC - XYZ Matrix Analysis</h4>
          <p style="color: #333; line-height: 1.8;">Categorizing items by revenue contribution (ABC) and demand predictability (XYZ) enables tailored inventory policies.</p>
        `
      }
    }
  };

  // Active Language State
  let currentLang = localStorage.getItem('lang') || 'tr';

  function setLanguage(lang) {
    if (!i18n[lang]) return;
    currentLang = lang;
    localStorage.setItem('lang', lang);
    document.documentElement.lang = lang;

    // Update Text Elements with data-i18n
    const elements = document.querySelectorAll('[data-i18n]');
    elements.forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (i18n[lang][key]) {
        el.textContent = i18n[lang][key];
      }
    });

    // Update Buttons State
    const btnTr = document.getElementById('btn-tr');
    const btnEn = document.getElementById('btn-en');
    if (btnTr && btnEn) {
      btnTr.classList.toggle('active', lang === 'tr');
      btnEn.classList.toggle('active', lang === 'en');
    }

    // Recalculate EOQ Results with updated currency symbol
    calculateEOQ();
  }

  // Bind Language Switcher Buttons
  const btnTr = document.getElementById('btn-tr');
  const btnEn = document.getElementById('btn-en');

  if (btnTr) btnTr.addEventListener('click', () => setLanguage('tr'));
  if (btnEn) btnEn.addEventListener('click', () => setLanguage('en'));

  // 2. EOQ CALCULATOR ENGINE
  const inputDemand = document.getElementById('eoq-demand');
  const inputSetup = document.getElementById('eoq-setup');
  const inputHolding = document.getElementById('eoq-holding');

  function calculateEOQ() {
    if (!inputDemand || !inputSetup || !inputHolding) return;

    const D = parseFloat(inputDemand.value) || 0;
    const S = parseFloat(inputSetup.value) || 0;
    const H = parseFloat(inputHolding.value) || 0;

    if (D <= 0 || S <= 0 || H <= 0) {
      document.getElementById('res-eoq').textContent = '-';
      document.getElementById('res-orders').textContent = '-';
      document.getElementById('res-cycle').textContent = '-';
      document.getElementById('res-cost').textContent = '-';
      return;
    }

    // EOQ Formula: sqrt((2 * D * S) / H)
    const eoq = Math.sqrt((2 * D * S) / H);
    const numOrders = D / eoq;
    const daysBetweenOrders = 365 / numOrders;

    const totalOrderingCost = numOrders * S;
    const totalHoldingCost = (eoq / 2) * H;
    const totalCost = totalOrderingCost + totalHoldingCost;

    const currPrefix = currentLang === 'tr' ? '₺' : '$';

    document.getElementById('res-eoq').textContent = Math.round(eoq).toLocaleString();
    document.getElementById('res-orders').textContent = numOrders.toFixed(1);
    document.getElementById('res-cycle').textContent = daysBetweenOrders.toFixed(1);
    document.getElementById('res-cost').textContent = currPrefix + Math.round(totalCost).toLocaleString();

    // Draw Canvas Graph
    drawEOQChart(D, S, H, eoq);
  }

  function drawEOQChart(D, S, H, eoq) {
    const canvas = document.getElementById('eoq-chart');
    if (!canvas) return;
    const ctx = canvas.getContext('2d');

    const dpr = window.devicePixelRatio || 1;
    const rect = canvas.getBoundingClientRect();
    canvas.width = rect.width * dpr;
    canvas.height = rect.height * dpr;
    ctx.scale(dpr, dpr);

    const w = rect.width;
    const h = rect.height;
    ctx.clearRect(0, 0, w, h);

    if (isNaN(eoq) || eoq <= 0) return;

    const padding = { top: 20, right: 30, bottom: 35, left: 50 };
    const graphW = w - padding.left - padding.right;
    const graphH = h - padding.top - padding.bottom;

    const qMin = Math.max(10, eoq * 0.2);
    const qMax = eoq * 2.2;
    const minTotalCost = (D / eoq) * S + (eoq / 2) * H;
    const maxTotalCost = minTotalCost * 2.2;

    function toX(q) {
      return padding.left + ((q - qMin) / (qMax - qMin)) * graphW;
    }
    function toY(cost) {
      return padding.top + graphH - (cost / maxTotalCost) * graphH;
    }

    // Grid Base Lines
    ctx.strokeStyle = '#e5e5e5';
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(padding.left, padding.top + graphH);
    ctx.lineTo(padding.left + graphW, padding.top + graphH);
    ctx.moveTo(padding.left, padding.top);
    ctx.lineTo(padding.left, padding.top + graphH);
    ctx.stroke();

    // 1. Holding Cost Line (Dashed Gray)
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = '#888888';
    ctx.lineWidth = 1.5;
    ctx.beginPath();
    for (let step = 0; step <= 50; step++) {
      const q = qMin + (step / 50) * (qMax - qMin);
      const holdingCost = (q / 2) * H;
      const x = toX(q);
      const y = toY(holdingCost);
      if (step === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 2. Ordering Cost Line (Dashed Light Gray)
    ctx.setLineDash([4, 4]);
    ctx.strokeStyle = '#aaaaaa';
    ctx.beginPath();
    for (let step = 0; step <= 50; step++) {
      const q = qMin + (step / 50) * (qMax - qMin);
      const orderingCost = (D / q) * S;
      const x = toX(q);
      const y = Math.max(padding.top, toY(orderingCost));
      if (step === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 3. Total Cost Curve (Solid Thick Black Line)
    ctx.setLineDash([]);
    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 2.5;
    ctx.beginPath();
    for (let step = 0; step <= 50; step++) {
      const q = qMin + (step / 50) * (qMax - qMin);
      const totalCost = (D / q) * S + (q / 2) * H;
      const x = toX(q);
      const y = Math.max(padding.top, toY(totalCost));
      if (step === 0) ctx.moveTo(x, y);
      else ctx.lineTo(x, y);
    }
    ctx.stroke();

    // 4. Vertical Marker at EOQ Point
    const eoqX = toX(eoq);
    const eoqY = toY(minTotalCost);

    ctx.strokeStyle = '#000000';
    ctx.lineWidth = 1;
    ctx.setLineDash([3, 3]);
    ctx.beginPath();
    ctx.moveTo(eoqX, padding.top + graphH);
    ctx.lineTo(eoqX, eoqY);
    ctx.stroke();

    // EOQ Point Marker Circle
    ctx.setLineDash([]);
    ctx.fillStyle = '#000000';
    ctx.beginPath();
    ctx.arc(eoqX, eoqY, 5, 0, Math.PI * 2);
    ctx.fill();

    // X Axis Label
    ctx.font = '10px -apple-system, sans-serif';
    ctx.fillStyle = '#111111';
    ctx.fillText('EOQ = ' + Math.round(eoq).toLocaleString(), eoqX - 25, padding.top + graphH + 20);
  }

  // Attach EOQ Input Listeners
  if (inputDemand) inputDemand.addEventListener('input', calculateEOQ);
  if (inputSetup) inputSetup.addEventListener('input', calculateEOQ);
  if (inputHolding) inputHolding.addEventListener('input', calculateEOQ);

  // Initialize Language & Initial EOQ Calculation
  setLanguage(currentLang);
  window.addEventListener('resize', calculateEOQ);

  // Article Reader Modal Logic
  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('article-content');
  const modalClose = document.getElementById('modal-close');
  const articleTriggers = document.querySelectorAll('.read-article-trigger');

  articleTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const artId = btn.getAttribute('data-article');
      const data = articles[currentLang][artId];

      if (!data) return;

      modalContent.innerHTML = `
        <div style="font-size:0.75rem; font-weight:900; color:#666; letter-spacing:0.12em; margin-bottom:1rem;">${data.category}</div>
        <h2 style="font-size:1.8rem; font-weight:900; text-transform:uppercase; margin-bottom:1.5rem; color:#000; line-height:1.2; letter-spacing:-0.02em;">${data.title}</h2>
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

  // Form Submit Handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert(i18n[currentLang].form_alert);
      contactForm.reset();
    });
  }

  // Footer Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
