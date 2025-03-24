import Link from "next/link";
import { Button } from "@/components/ui/button";

export default function HomePage() {
  return (
    <div className="container mx-auto flex min-h-screen flex-col items-center justify-center p-4 text-center">
      <h1 className="mb-4 text-4xl font-bold">Demostración de Next.js</h1>
      <p className="mb-8 max-w-md text-muted-foreground">
        Explora las diferentes demostraciones de características de Next.js
      </p>

      <div className="grid gap-4 md:grid-cols-2">
        <Link href="/login">
          <Button variant="outline" className="w-full">
            Formularios de Login
          </Button>
        </Link>
        <Link href="/signup">
          <Button variant="outline" className="w-full">
            Formularios de Signup
          </Button>
        </Link>
        <Link href="/dashboard">
          <Button variant="outline" className="w-full">
            Dashboard con Error Handling
          </Button>
        </Link>
        <Link href="/streaming">
          <Button variant="default" className="w-full">
            Streaming UI Demo
          </Button>
        </Link>
        <Link href="/about">
          <Button variant="outline" className="w-full">
            Página About
          </Button>
        </Link>
        <Link href="/fetching">
          <Button variant="outline" className="w-full">
            Fetching
          </Button>
        </Link>
        <Link href="/posts">
          <Button variant="outline" className="w-full">
            Posts
          </Button>
        </Link>
      </div>
    </div>
  );
}
