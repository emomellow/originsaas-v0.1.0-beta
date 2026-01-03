import { SignUp } from "@clerk/nextjs";

export default function SignUpPage() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-slate-50 dark:bg-slate-900">
      <SignUp 
        appearance={{
          elements: {
            formButtonPrimary: "bg-sky-600 hover:bg-sky-700 text-sm",
            card: "shadow-xl border border-slate-200 dark:border-slate-800"
          }
        }}
        signInUrl="/sign-in"
        fallbackRedirectUrl="/dashboard"
      />
    </div>
  );
}