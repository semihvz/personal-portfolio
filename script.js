/* ==========================================================================
   BLACKROCK MONOCHROME CORPORATE INTERACTIVE LOGIC (ENGLISH)
   ========================================================================== */

document.addEventListener('DOMContentLoaded', () => {

  const articles = {
    "1": {
      category: "DEMAND PLANNING // ANALYSIS 01",
      title: "Demand Forecasting in Industrial Facilities: Statistical Models vs. Machine Learning",
      content: `
        <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Demand forecasting forms the cornerstone of modern supply chain management. Without accurate demand forecasts, production schedules lead either to excessive holding costs (Overstock) or lost sales caused by stockouts.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">1. Statistical Time Series Models</h4>
        <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">In traditional time-series analysis, ARIMA (Autoregressive Integrated Moving Average) and Holt-Winters Exponential Smoothing yield strong results on data with clear seasonality and trends. They serve as a baseline forecasting tool, particularly for SKU groups with 2-3 years of consistent sales history.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">2. Machine Learning Approaches (Prophet & XGBoost)</h4>
        <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">In complex scenarios involving price promotions, holidays, and external macroeconomic indicators, models like Facebook Prophet and XGBoost excel. These algorithms handle missing data effectively and perform anomaly detection.</p>

        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">3. Forecast Performance Measurement (WAPE / MAPE)</h4>
        <p style="color: #333; line-height: 1.8;">Forecast performance should be evaluated using Mean Absolute Percentage Error (MAPE) and Weighted Absolute Percentage Error (WAPE). An optimal demand planning system targets WAPE rates below 10%.</p>
      `
    },
    "2": {
      category: "PRODUCTION SCHEDULING // ANALYSIS 02",
      title: "Bottleneck Management and SMED in Production Scheduling & Capacity Planning",
      content: `
        <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">In manufacturing lines, total output capacity is governed by the system's slowest operation—the bottleneck. According to Goldratt's Theory of Constraints (TOC), improvements made outside the bottleneck do not increase overall factory throughput.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">1. Setup Time Reduction via SMED</h4>
        <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">The largest time losses in production scheduling occur during changeovers. Applying Single-Minute Exchange of Die (SMED) separates internal and external setup tasks, reducing changeover times down to single-digit minutes.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">2. Automated Gantt Scheduling via MILP</h4>
        <p style="color: #333; line-height: 1.8;">Mixed-Integer Linear Programming (MILP) models automatically optimize job assignments, minimize setup times, and guarantee strict due-date adherence.</p>
      `
    },
    "3": {
      category: "INVENTORY MANAGEMENT // ANALYSIS 03",
      title: "Increasing Inventory Turnover While Eliminating Stockout Risks",
      content: `
        <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Inventory management lies at the heart of corporate finance and working capital optimization. High inventory levels lock up liquidity, whereas understocking damages customer satisfaction.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">1. Dynamic Safety Stock Formulation</h4>
        <p style="margin-bottom: 1.5rem; color: #333; line-height: 1.8;">Rather than maintaining static safety stocks, dynamic statistical formulas incorporating supplier lead time variance and demand volatility must be applied.</p>
        
        <h4 style="margin: 2rem 0 0.8rem 0; color: #000; font-size: 1.1rem; text-transform: uppercase; font-weight: 900;">2. ABC - XYZ Matrix Analysis</h4>
        <p style="color: #333; line-height: 1.8;">Categorizing items by revenue contribution (ABC) and demand predictability (XYZ) enables tailored inventory policies for each product segment.</p>
      `
    }
  };

  const modal = document.getElementById('article-modal');
  const modalContent = document.getElementById('article-content');
  const modalClose = document.getElementById('modal-close');
  const articleTriggers = document.querySelectorAll('.read-article-trigger');

  articleTriggers.forEach(btn => {
    btn.addEventListener('click', () => {
      const artId = btn.getAttribute('data-article');
      const data = articles[artId];

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

  // Form submit handler
  const contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      alert("Your inquiry has been submitted successfully. We will respond shortly.");
      contactForm.reset();
    });
  }

  // Year
  const yearEl = document.getElementById('year');
  if (yearEl) yearEl.textContent = new Date().getFullYear();
});
