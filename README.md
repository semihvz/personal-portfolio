# 🚀 Kişisel Portföy Web Sitesi & GitHub Pages Yayınlama Rehberi

Bu proje, **GitHub Pages** üzerinde ücretsiz ve anında yayınlanmaya hazır, yüksek estetik standartlarda, responsive ve etkileşimli bir kişisel portföy web sitesidir.

---

## 🌟 Özellikler

- **Göz Alıcı Tasarım**: Koyu tema (Dark Mode), glassmorphism cam efektleri ve neon renk paleti.
- **İnteraktif Tuval (Canvas)**: Arka planda hareketli ve birbirine bağlanan partikül animasyonu.
- **Dinamik Yazı Efekti (Typewriter)**: Unvanlarınızı ve uzmanlık alanlarınızı hareketli şekilde sergiler.
- **Filtrelenebilir Yetenek Havuzu**: Frontend, Backend ve DevOps kategorilerine göre anlık filtreleme.
- **Proje Detay Modalı**: Projelerinize tıklandığında açılan detay penceresi, canlı demo ve GitHub bağlantıları.
- **Kariyer & Eğitim Zaman Çizelgesi**: Geçmiş tecrübelerinizin dikey zaman çizelgesi formatında sunumu.
- **Karanlık / Aydınlık Tema Geçişi**: Kullanıcı tercihini hatırında tutan (localStorage) tema anahtarı.
- **Sıfır Bağımlılık (Zero Build Step)**: Ekstra Vite/Webpack derlemesine ihtiyaç duymadan GitHub Pages'te direkt çalışır.

---

## 📂 Proje Dosya Yapısı

```
portf/
├── assets/
│   ├── avatar.jpg      # Profil fotoğrafı
│   ├── project1.jpg    # Proje 1 ön izleme görseli
│   ├── project2.jpg    # Proje 2 ön izleme görseli
│   └── project3.jpg    # Proje 3 ön izleme görseli
├── index.html          # Semantik HTML5 ana sayfa yapısı
├── style.css           # Tasarım sistemi, renkler ve animasyonlar
├── script.js           # İnteraktif kodlar, tuval ve modal mantığı
└── README.md           # Yayınlama rehberi
```

---

## ⚡ GitHub Pages'te 2 Dakikada Yayınlama Adımları

Sitenizi internette yayınlamak için aşağıdaki yöntemlerden birini seçebilirsiniz:

### Yöntem 1: Git Komut Satırı İle (Tavsiye Edilen)

1. **GitHub'da Yeni Repo Oluşturun:**
   - [GitHub.com](https://github.com/new) adresine gidin.
   - Repository name olarak örneğin `portfolio` veya `kullaniciadiniz.github.io` yazın.
   - **Public** seçeneğini işaretleyip **Create repository** butonuna basın.

2. **Proje Klasörünüzde Git'i Başlatın ve Push Edin:**
   Terminali bu klasörde açıp aşağıdaki komutları sırasıyla çalıştırın:

   ```bash
   git init
   git add .
   git commit -m "Initial portfolio release"
   git branch -M main
   git remote add origin https://github.com/KULLANICI_ADINIZ/REPO_ADINIZ.git
   git push -u origin main
   ```

3. **GitHub Pages'i Etkinleştirin:**
   - GitHub'daki repolama sayfanıza gidin.
   - **Settings (Ayarlar)** -> **Pages** sekmesine tıklayın.
   - **Build and deployment** altında **Source** kısmını `Deploy from a branch` yapın.
   - Branch olarak `main` ve `/ (root)` seçip **Save** butonuna tıklayın.
   - 1-2 dakika içinde siteniz `https://KULLANICI_ADINIZ.github.io/REPO_ADINIZ/` adresinde canlıya geçecektir! 🎉

---

### Yöntem 2: GitHub Web Arayüzü İle (Kodsuz / Sürükle-Bırak)

1. [GitHub.com/new](https://github.com/new) adresine gidip `portfolio` adında yeni bir **Public** repo oluşturun.
2. Repo sayfasındaki **"uploading an existing file"** (varolan dosyaları yükle) bağlantısına tıklayın.
3. Bu klasördeki tüm dosyaları (`index.html`, `style.css`, `script.js`, `assets/` klasörü vb.) ekrana sürükleyip bırakın.
4. Sayfanın altındaki **Commit changes** butonuna tıklayın.
5. **Settings** -> **Pages** menüsünden Branch'i `main` yapıp **Save** deyin.

---

## 🎨 İletişim & Metinleri Kişiselleştirme

- **İsminiz ve Unvanlar**: [index.html](file:///home/smhvz/Desktop/portf/index.html) ve [script.js](file:///home/smhvz/Desktop/portf/script.js) içindeki metinleri kendi bilgilerinize göre kolayca güncelleyebilirsiniz.
- **Sosyal Medya Linkleri**: `index.html` içindeki GitHub, LinkedIn ve E-posta bağlantılarını kendi profil linklerinizle değiştirin.
- **Profil Fotoğrafı**: `assets/avatar.jpg` dosyasını kendi vesikalık / profil fotoğrafınızla değiştirebilirsiniz.

---
*Başarılar dileriz! Projenizi GitHub Pages üzerinde yayınladıktan sonra istediğiniz an güncelleyebilirsiniz.*
