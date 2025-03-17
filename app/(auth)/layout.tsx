import type { ReactNode } from "react";
import Link from "next/link";

export default function AuthLayout({ children }: { children: ReactNode }) {
  return (
    <div className="grid min-h-screen grid-cols-1 md:grid-cols-2">
      {/* Left side - Decorative content with fake background */}
      <div className="relative hidden bg-primary p-10 text-white md:flex md:flex-col md:justify-between">
        {/* Decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          {/* Gradient overlay */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-foreground/30 opacity-80"></div>

          {/* Decorative shapes */}
          <div className="absolute left-[10%] top-[20%] h-32 w-32 rounded-full bg-white/10"></div>
          <div className="absolute right-[15%] top-[15%] h-16 w-16 rounded-full bg-white/10"></div>
          <div className="absolute bottom-[30%] left-[20%] h-24 w-24 rounded-full bg-white/10"></div>
          <div className="absolute bottom-[20%] right-[25%] h-40 w-40 rounded-full bg-white/10"></div>

          {/* Dots pattern */}
          {Array.from({ length: 20 }).map((_, i) => (
            <div
              key={i}
              className="absolute h-2 w-2 rounded-full bg-white/20"
              style={{
                top: `${Math.random() * 100}%`,
                left: `${Math.random() * 100}%`,
              }}
            ></div>
          ))}
        </div>

        {/* Content */}
        <div className="relative z-10 mb-8">
          <Link href="/" className="text-2xl font-bold">
            YourBrand
          </Link>
        </div>
        <div className="relative z-10 space-y-6">
          <h1 className="text-4xl font-bold">Welcome to YourBrand</h1>
          <p className="text-xl">
            Join thousands of users who trust our platform for their daily
            needs.
          </p>
          <div className="mt-8 flex items-center space-x-4">
            <div className="flex h-12 w-12 items-center justify-center overflow-hidden rounded-full bg-white/20">
              <span className="text-lg font-bold">JS</span>
            </div>
            <div>
              <p className="font-medium">
                "This platform has transformed how I work."
              </p>
              <p className="text-sm text-white/70">Jane Smith, Designer</p>
            </div>
          </div>
        </div>
        <div className="relative z-10 mt-auto text-sm text-white/70">
          © {new Date().getFullYear()} YourBrand. All rights reserved.
        </div>
      </div>

      {/* Right side - Form */}
      <div className="flex items-center justify-center p-6 md:p-10">
        <div className="w-full max-w-md space-y-8">{children}</div>
      </div>
    </div>
  );
}
