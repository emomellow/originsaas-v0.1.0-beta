<div align="center">
  <img src="https://capsule-render.vercel.app/render?type=waving&color=6366f1&height=200&section=header&text=OriginSaaS%20by%20Softably&fontSize=60&animation=fadeIn&fontAlignY=35" width="100%" />

  <p align="center">
    <img src="https://img.shields.io/badge/Powered%20By-Softably-6366f1?style=for-the-badge" />
    <img src="https://img.shields.io/badge/Status-Beta%20v0.1.0-orange?style=for-the-badge" />
    <img src="https://img.shields.io/badge/License-MIT-green?style=for-the-badge" />
  </p>

  <h3>🚀 Softably Güvencesiyle: Modern & Sürekli Güncellenen SaaS Template</h3>

  <p align="center">
    <strong>OriginSaaS</strong>, <a href="https://github.com/softably"><b>Softably</b></a> ekibi tarafından en güncel teknolojilerle geliştirilen, 
    <span style="color:#f59e0b; font-weight:bold;">aktif olarak güncellenen</span> 
    ve ölçeklenebilir bir <strong>SaaS başlangıç şablonudur</strong>.
    <br />
    Proje; <b>Next.js 16</b> ve <b>Prisma 7</b> altyapısı ile <b>Softably</b> standartlarında bir performans sunar.
  </p>

  <blockquote style="padding: 10px; background-color: #f0fdf4; border-left: 5px solid #22c55e; color: #16a34a;">
    🔄 <b>SOFTABLY TAAHHÜDÜ:</b> Bu proje Softably ekibi tarafından düzenli olarak denetlenmekte, yeni özellikler ve güvenlik iyileştirmeleri eklenmektedir.
  </blockquote>
</div>

---

### 🛠 Kullanılan Teknolojiler

<table width="100%">
  <tr>
    <td width="50%"><strong>Framework:</strong> <img src="https://img.shields.io/badge/Next.js%2016-0ea5e9?style=flat-square" /></td>
    <td width="50%"><strong>Auth:</strong> <img src="https://img.shields.io/badge/Clerk-22c55e?style=flat-square" /></td>
  </tr>
  <tr>
    <td><strong>ORM:</strong> <img src="https://img.shields.io/badge/Prisma%207-f43f5e?style=flat-square" /></td>
    <td><strong>Database:</strong> <img src="https://img.shields.io/badge/PostgreSQL-a855f7?style=flat-square" /></td>
  </tr>
  <tr>
    <td><strong>Design System:</strong> <img src="https://img.shields.io/badge/Softably_Design-38bdf8?style=flat-square" /></td>
    <td><strong>UI Library:</strong> <img src="https://img.shields.io/badge/Shadcn%2FUI-000000?style=flat-square" /></td>
  </tr>
</table>

---

### ✨ Öne Çıkan Özellikler

* 🔒 **Gelişmiş Kimlik Doğrulama:** Clerk ile kurumsal seviyede güvenli giriş ve profil yönetimi.
* 📊 **Softably Dashboard:** Veritabanından gelen gerçek zamanlı verilerle optimize edilmiş yönetim paneli.
* 🌗 **Smart Themes:** `next-themes` ile sistemle tam uyumlu Dark/Light mode deneyimi.
* ⚡ **Performance First:** Next.js Route Handlers ve Turbopack ile en düşük gecikme süresi.
* 🔗 **Webhook Sync:** Kullanıcı hareketlerini veritabanına anında işleyen Softably özel senkronizasyon yapısı.

---

### 🚀 Başlangıç & Kurulum

```bash
# 1. Projeyi Klonlayın
git clone [https://github.com/emomellow/OriginSaaS-v0.1.0-beta.git](https://github.com/emomellow/OriginSaaS-v0.1.0-beta.git)

# 2. Klasöre Girin ve Bağımlılıkları Yükleyin
cd OriginSaaS-v0.1.0-beta
npm install

# 3. Ortam Değişkenlerini Ayarlayın
cp .env.example .env

# 4. Veritabanını Yapılandırın
npx prisma generate
npx prisma db push

# 5. Projeyi Softably Kalitesinde Başlatın
npm run dev
