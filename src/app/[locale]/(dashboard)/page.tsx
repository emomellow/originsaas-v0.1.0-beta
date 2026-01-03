import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Users, CreditCard, Activity, DollarSign } from "lucide-react";
import { Overview } from "@/components/dashboard/overview";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { getDashboardStats } from "@/core/services/dashboard.service";

export default async function DashboardPage() {
  // Veritabanından verileri çekiyoruz (Servis hata alsa bile boş değerler dönecektir)
  const statsData = await getDashboardStats();
  
  // recentUsers'ın undefined gelme ihtimaline karşı güvenli hale getiriyoruz
  const recentUsers = statsData.recentUsers || [];
  const userCount = statsData.userCount || 0;
  const totalRevenue = statsData.totalRevenue || 0;

  const stats = [
    { 
      title: "Toplam Gelir", 
      value: `$${totalRevenue.toLocaleString()}`, 
      icon: DollarSign, 
      description: "Tahmini toplam kazanç" 
    },
    { 
      title: "Toplam Kullanıcı", 
      value: `+${userCount}`, 
      icon: Users, 
      description: "Veritabanındaki kayıtlı üye" 
    },
    { 
      title: "Satışlar", 
      value: "+12,234", 
      icon: CreditCard, 
      description: "+19% geçen aydan beri" 
    },
    { 
      title: "Aktif Kullanıcılar", 
      value: "+573", 
      icon: Activity, 
      description: "Şu an sistemde olanlar" 
    },
  ];

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h2 className="text-3xl font-bold tracking-tight">Dashboard</h2>
      </div>

      {/* İstatistik Kartları */}
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Card key={index}>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
              <stat.icon className="h-4 w-4 text-muted-foreground" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">{stat.value}</div>
              <p className="text-xs text-muted-foreground">{stat.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>

      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-7">
        {/* Grafik Alanı */}
        <Card className="col-span-4">
          <CardHeader>
            <CardTitle>Genel Bakış</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            <Overview />
          </CardContent>
        </Card>

        {/* Son Kayıtlar Paneli */}
        <Card className="col-span-3">
          <CardHeader>
            <CardTitle>Son Kayıt Olanlar</CardTitle>
            <p className="text-sm text-muted-foreground">
              Son katılan {recentUsers.length} kullanıcı listeleniyor.
            </p>
          </CardHeader>
          <CardContent>
            <div className="space-y-8">
              {recentUsers.length > 0 ? (
                recentUsers.map((user: any, i: number) => (
                  <div key={user.id || i} className="flex items-center">
                    <Avatar className="h-9 w-9 border">
                      <AvatarFallback className="bg-sky-100 text-sky-700 font-bold">
                        {user.name ? user.name.substring(0, 2).toUpperCase() : "U"}
                      </AvatarFallback>
                    </Avatar>
                    <div className="ml-4 space-y-1">
                      <p className="text-sm font-medium leading-none">
                        {user.name || "Yeni Kullanıcı"}
                      </p>
                      <p className="text-sm text-muted-foreground">{user.email}</p>
                    </div>
                    <div className="ml-auto font-medium text-xs bg-green-100 text-green-700 px-2 py-1 rounded-full">
                      Aktif
                    </div>
                  </div>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-10 opacity-60">
                  <Users className="h-10 w-10 mb-2 text-muted-foreground" />
                  <p className="text-sm text-muted-foreground">
                    Henüz kayıtlı kullanıcı bulunmuyor.
                  </p>
                </div>
              )}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
}