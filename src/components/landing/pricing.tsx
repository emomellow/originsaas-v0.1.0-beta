import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card"

const plans = [
  {
    name: "Başlangıç",
    price: "0",
    description: "Yeni başlayanlar ve hobi projeleri için.",
    features: ["3 Proje", "Temel Dashboard", "Topluluk Desteği", "1GB Depolama"],
    buttonText: "Ücretsiz Başla",
    popular: false,
  },
  {
    name: "Pro",
    price: "29",
    description: "Büyüyen işletmeler ve profesyoneller için.",
    features: ["Sınırsız Proje", "Gelişmiş Analizler", "7/24 Öncelikli Destek", "10GB Depolama", "Özel Domain"],
    buttonText: "Hemen Başla",
    popular: true,
  },
  {
    name: "Kurumsal",
    price: "99",
    description: "Büyük ekipler ve yüksek ölçekli işler için.",
    features: ["Özel Altyapı", "SLA Garantisi", "Atanmış Hesap Yöneticisi", "Sınırsız Depolama", "SSO Giriş"],
    buttonText: "İletişime Geç",
    popular: false,
  },
]

export const Pricing = () => {
  return (
    <section id="pricing" className="py-20 px-4">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">Şeffaf Fiyatlandırma</h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            İhtiyacınıza uygun planı seçin ve bugün inşa etmeye başlayın.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan) => (
            <Card key={plan.name} className={`relative flex flex-col ${plan.popular ? "border-sky-500 shadow-xl scale-105" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-sky-500 text-white px-3 py-1 rounded-full text-sm font-medium">
                  En Popüler
                </div>
              )}
              <CardHeader>
                <CardTitle className="text-2xl">{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              <CardContent className="flex-grow">
                <div className="mb-6">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="text-muted-foreground">/ay</span>
                </div>
                <ul className="space-y-3">
                  {plan.features.map((feature) => (
                    <li key={feature} className="flex items-center gap-x-2 text-sm">
                      <Check className="h-4 w-4 text-sky-500" />
                      {feature}
                    </li>
                  ))}
                </ul>
              </CardContent>
              <CardFooter>
                <Button className={`w-full ${plan.popular ? "bg-sky-600 hover:bg-sky-700" : ""}`} variant={plan.popular ? "default" : "outline"}>
                  {plan.buttonText}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}