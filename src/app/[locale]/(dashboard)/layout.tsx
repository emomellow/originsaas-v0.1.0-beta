import React from 'react';
import { Sidebar } from "@/components/dashboard/sidebar";
import { ModeToggle } from "@/components/mode-toggle"; // Tema değiştirici buton

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-slate-50/50 dark:bg-slate-950">
      {/* Sidebar - Artık canlı bir bileşen */}
      <aside className="hidden w-64 border-r bg-white dark:bg-slate-900 md:block fixed h-full">
        <Sidebar />
      </aside>

      {/* Ana İçerik Alanı - Sidebar genişliği kadar soldan margin bırakıyoruz (md:pl-64) */}
      <main className="flex-1 md:pl-64">
        <header className="flex h-16 items-center border-b bg-white px-8 dark:bg-slate-900 sticky top-0 z-10">
          <div className="ml-auto flex items-center gap-4">
             <ModeToggle />
             <div className="h-8 w-8 rounded-full bg-slate-200 dark:bg-slate-800 border" />
          </div>
        </header>
        <div className="p-8">
          {children}
        </div>
      </main>
    </div>
  );
}