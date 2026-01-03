import Link from "next/link"
import { ModeToggle } from "@/components/mode-toggle"
import { Button } from "@/components/ui/button"
import { SignedIn, SignedOut, UserButton, SignInButton, SignUpButton } from "@clerk/nextjs"

export const Navbar = () => {
  return (
    <nav className="fixed top-0 w-full z-50 border-b bg-background/80 backdrop-blur-md">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="text-xl font-bold bg-gradient-to-r from-sky-500 to-blue-600 bg-clip-text text-transparent">
          OriginSaaS
        </Link>
        <div className="flex items-center gap-x-4">
          <Link href="#features" className="text-sm font-medium hover:text-sky-500 transition">Özellikler</Link>
          <Link href="#pricing" className="text-sm font-medium hover:text-sky-500 transition">Fiyatlandırma</Link>
          <ModeToggle />

          <SignedOut>
            <SignInButton mode="modal" forceRedirectUrl="/dashboard">
              <Button variant="outline">Giriş Yap</Button>
            </SignInButton>
            
            <SignUpButton mode="modal" forceRedirectUrl="/dashboard">
              <Button className="bg-sky-600 hover:bg-sky-700">Ücretsiz Başla</Button>
            </SignUpButton>
          </SignedOut>

          <SignedIn>
            <Button variant="ghost" asChild className="mr-2">
              <Link href="/dashboard">Dashboard</Link>
            </Button>
            <UserButton afterSignOutUrl="/" />
          </SignedIn>
        </div>
      </div>
    </nav>
  )
}