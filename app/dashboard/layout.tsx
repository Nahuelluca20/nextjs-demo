"use client";

import { type ReactNode, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  User,
  Package,
  Settings,
  LogOut,
  Menu,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export default function DashboardLayout({ children }: { children: ReactNode }) {
  const pathname = usePathname();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const navItems = [
    {
      title: "Dashboard",
      href: "/dashboard",
      icon: LayoutDashboard,
    },
    {
      title: "Profile",
      href: "/dashboard/me",
      icon: User,
    },
    {
      title: "Items",
      href: "/dashboard/items",
      icon: Package,
    },
    {
      title: "Settings",
      href: "/dashboard/settings",
      icon: Settings,
    },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-muted/40">
      {/* Mobile top bar */}
      <div className="flex h-16 items-center justify-between border-b bg-background px-4 md:hidden">
        <Link
          href="/dashboard"
          className="flex items-center gap-2 font-semibold"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
            YB
          </div>
          YourBrand
        </Link>
        <Button
          variant="ghost"
          size="icon"
          onClick={() => setSidebarOpen(!sidebarOpen)}
        >
          {sidebarOpen ? <X /> : <Menu />}
        </Button>
      </div>

      <div className="flex flex-1 flex-col md:flex-row">
        {/* Sidebar */}
        <aside
          className={`
            fixed inset-y-0 z-50 flex w-64 flex-col border-r bg-background transition-transform md:static md:translate-x-0
            ${sidebarOpen ? "translate-x-0" : "-translate-x-full"}
          `}
        >
          {/* Sidebar header */}
          <div className="hidden h-16 items-center border-b px-6 md:flex">
            <Link
              href="/dashboard"
              className="flex items-center gap-2 font-semibold"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-md bg-primary text-primary-foreground">
                YB
              </div>
              YourBrand
            </Link>
          </div>

          {/* Sidebar content */}
          <div className="flex flex-1 flex-col gap-2 overflow-auto p-4">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => {
                const isActive = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={`
                      flex items-center gap-3 rounded-md px-3 py-2 text-sm font-medium transition-colors
                      ${isActive ? "bg-primary text-primary-foreground" : "hover:bg-muted hover:text-foreground"}
                    `}
                  >
                    <item.icon className="h-4 w-4" />
                    {item.title}
                  </Link>
                );
              })}
            </nav>

            <Separator className="my-4" />

            <div className="mt-auto">
              <div className="flex items-center gap-3 rounded-md bg-muted p-3">
                <Avatar className="h-9 w-9">
                  <AvatarFallback className="bg-primary text-primary-foreground">
                    AJ
                  </AvatarFallback>
                </Avatar>
                <div className="flex flex-1 flex-col">
                  <p className="text-sm font-medium">Alex Johnson</p>
                  <p className="text-xs text-muted-foreground">
                    alex@example.com
                  </p>
                </div>
                <Button variant="ghost" size="icon" asChild>
                  <Link href="/auth/login">
                    <LogOut className="h-4 w-4" />
                    <span className="sr-only">Log out</span>
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </aside>

        {/* Main content */}
        <main className="flex-1 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
