import { Navbar } from "@/components/landing/navbar"
import { Pricing } from "@/components/landing/pricing"
import { Button } from "@/components/ui/button"
import { ArrowRight, CheckCircle2 } from "lucide-react"
import Link from "next/link"

export default function LandingPage() {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-6">
            Geleceğin SaaS Uygulamasını <span className="text-sky-600">Origin</span> ile İnşa Et
          </h1>
          <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
            Ölçeklenebilir, modern ve UI/UX odaklı altyapımızla fikirlerini gerçeğe dönüştür. 
            Prisma, PostgreSQL ve Next.js gücü cebinde.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" className="h-12 px-8 text-lg" asChild>
              <Link href="/dashboard">
                Hemen Başla <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
            <Button size="lg" variant="outline" className="h-12 px-8 text-lg">
              Demoyu İzle
            </Button>
          </div>
        </div>
      </section>

      {/* Mini Özellikler Barı */}
      <section className="py-10 bg-slate-50 dark:bg-slate-900/50 border-y">
        <div className="container mx-auto grid md:grid-cols-3 gap-8 px-4 text-center">
          {["Hızlı Altyapı", "Güvenli Veri", "Modern Arayüz"].map((feature) => (
            <div key={feature} className="flex items-center justify-center gap-x-2 font-semibold text-muted-foreground">
              <CheckCircle2 className="text-sky-500 h-5 w-5" />
              {feature}
            </div>
          ))}
        </div>
      </section>

      {/* Fiyatlandırma Bölümü */}
      <Pricing />

      {/* Footer */}
      <footer className="py-20 border-t">
        <div className="container mx-auto px-4 text-center">
          <div className="flex flex-col items-center gap-y-4">
            <Link href="/" className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
              OriginSaaS
            </Link>
            <p className="text-sm text-muted-foreground">
              © 2026 OriginSaaS Open Source Project. Tüm hakları saklıdır.
            </p>
            <div className="flex gap-x-6 text-sm text-muted-foreground">
              <Link href="#" className="hover:text-sky-500 transition">Gizlilik</Link>
              <Link href="#" className="hover:text-sky-500 transition">Şartlar</Link>
              <Link href="https://github.com" className="hover:text-sky-500 transition">GitHub</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}