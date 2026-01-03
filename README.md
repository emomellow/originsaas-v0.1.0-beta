🚀 OriginSaaS - Modern SaaS Starter Template
OriginSaaS, en güncel teknolojilerle donatılmış, ölçeklenebilir ve yüksek performanslı bir SaaS başlangıç şablonudur. Next.js 16 ve Prisma 7 gibi en yeni sürümler kullanılarak, kurumsal standartlarda bir altyapı sunar.

🛠 Teknolojiler
Bu proje, modern web geliştirme dünyasının en güçlü araçlarını bir araya getirir:

Framework: Next.js 16 (App Router) - Turbopack desteğiyle en hızlı geliştirme deneyimi.

Auth: Clerk - Güvenli kimlik doğrulama, kullanıcı yönetimi ve hazır UI bileşenleri.

Database & ORM: Prisma 7 - Tip güvenli PostgreSQL yönetimi ve modern Driver Adapter yapısı.

Database: PostgreSQL - İlişkisel veri yönetimi.

Styling: Tailwind CSS & Shadcn/UI - Modern, hızlı ve özelleştirilebilir arayüz bileşenleri.

Icons: Lucide React - Esnek ve hafif ikon kütüphanesi.

✨ Özellikler
🔒 Gelişmiş Kimlik Doğrulama: Clerk ile giriş yapma, kayıt olma ve profil yönetimi.

📊 Dinamik Dashboard: Veritabanından gelen gerçek zamanlı istatistikler ve grafikler.

🌗 Karanlık Mod: next-themes ile tam uyumlu Dark/Light mode desteği.

⚡ Hızlı API Yapısı: Next.js Route Handlers ile optimize edilmiş backend süreçleri.

🔗 Webhook Entegrasyonu: Clerk üzerindeki kullanıcı olaylarını (kayıt, güncelleme) anında PostgreSQL'e senkronize eden güvenli Webhook yapısı.

📱 Responsive Tasarım: Tüm cihazlarda mükemmel görünen mobil öncelikli arayüz.

🚀 Başlangıç
1. Projeyi Klonlayın
Bash

git clone https://github.com/kullanici_adin/originsaas.git
cd originsaas
2. Bağımlılıkları Yükleyin
Bash

npm install
3. Ortam Değişkenlerini Ayarlayın
.env.example dosyasını .env olarak kopyalayın ve kendi anahtarlarınızı ekleyin:

Bash

cp .env.example .env
4. Veritabanını Yapılandırın
Prisma şemasını veritabanına uygulayın ve client'ı oluşturun:

Bash

npx prisma generate
npx prisma db push
5. Geliştirme Sunucusunu Başlatın
Bash

npm run dev
http://localhost:3000 adresinden projeyi görüntüleyebilirsiniz.

📁 Proje Yapısı
src/app: Next.js App Router sayfaları ve API rotaları.

src/components: Tekrar kullanılabilir UI bileşenleri (Shadcn/UI).

src/core/services: Veritabanı sorguları ve iş mantığı (Service Layer).

src/lib: Prisma Client ve diğer kütüphane yapılandırmaları.

prisma/: Veritabanı şeması ve migration dosyaları.

🛡 Güvenlik Notu
Bu projedeki hassas veriler (API anahtarları, DB şifreleri) .env dosyasında tutulur ve asla Git üzerinde paylaşılmaz. Örnek yapı için .env.example dosyasına bakınız.