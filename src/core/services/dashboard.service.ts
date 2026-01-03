import { db } from "@/lib/prisma";

export const getDashboardStats = async () => {
  try {
    const userCount = await db.user?.count() || 0;

    return {
      totalUsers: userCount,
      totalRevenue: 1250,
      activeProjects: 5,
    };
  } catch (error) {
    console.error("Dashboard istatistik hatası:", error);
    return { totalUsers: 0, totalRevenue: 0, activeProjects: 0 };
  }
};

export const getRecentUsers = async () => {
  try {
    const users = await db.user?.findMany({
      take: 5,
      orderBy: { createdAt: 'desc' }
    }) || [];
    
    return users;
  } catch (error) {
    console.error("Son kullanıcılar çekilemedi:", error);
    return [];
  }
};