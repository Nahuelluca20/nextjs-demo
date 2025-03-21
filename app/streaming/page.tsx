import { Suspense } from "react";
import { Loader2 } from "lucide-react";
import UserProfile from "./components/user-profile";
import RevenueChart from "./components/revenue-chart";
import RecentOrders from "./components/recent-orders";
import PopularProducts from "./components/popular-products";
import InventoryStatus from "./components/inventory-status";
import { Button } from "@/components/ui/button";

export default function StreamingDemoPage() {
  return (
    <div className="container mx-auto p-6">
      <div className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold">Dashboard</h1>
          <p className="text-muted-foreground">
            Demostración de Streaming UI con Next.js
          </p>
        </div>
        <Button>Actualizar Datos</Button>
      </div>

      {/* Esta sección se carga inmediatamente */}
      <div className="mb-8 rounded-lg border bg-card p-6 shadow">
        <h2 className="mb-4 text-xl font-semibold">
          ¿Cómo funciona esta demo?
        </h2>
        <p className="mb-2">
          Esta página demuestra el streaming UI en Next.js. Cada componente
          tiene un tiempo de carga simulado diferente:
        </p>
        <ul className="ml-6 list-disc space-y-1">
          <li>Perfil de Usuario: 1 segundo</li>
          <li>Gráfico de Ingresos: 3 segundos</li>
          <li>Pedidos Recientes: 5 segundos</li>
          <li>Productos Populares: 7 segundos</li>
          <li>Estado de Inventario: 9 segundos</li>
        </ul>
        <p className="mt-2">
          Observa cómo los componentes aparecen progresivamente mientras se
          cargan, en lugar de esperar a que toda la página esté lista.
        </p>
      </div>

      {/* Perfil de usuario - Carga rápida (1s) */}
      <div className="mb-8">
        <Suspense
          fallback={<LoadingCard title="Cargando perfil de usuario..." />}
        >
          <UserProfile />
        </Suspense>
      </div>

      {/* Gráfico de ingresos - Carga media (3s) */}
      <div className="mb-8">
        <Suspense
          fallback={<LoadingCard title="Cargando gráfico de ingresos..." />}
        >
          <RevenueChart />
        </Suspense>
      </div>

      {/* Grid de 3 componentes con diferentes tiempos de carga */}
      <div className="mb-8 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {/* Pedidos recientes - Carga lenta (5s) */}
        <Suspense
          fallback={<LoadingCard title="Cargando pedidos recientes..." />}
        >
          <RecentOrders />
        </Suspense>

        {/* Productos populares - Carga muy lenta (7s) */}
        <Suspense
          fallback={<LoadingCard title="Cargando productos populares..." />}
        >
          <PopularProducts />
        </Suspense>

        {/* Estado de inventario - Carga extremadamente lenta (9s) */}
        <Suspense
          fallback={<LoadingCard title="Cargando estado de inventario..." />}
        >
          <InventoryStatus />
        </Suspense>
      </div>
    </div>
  );
}

function LoadingCard({ title }: { title: string }) {
  return (
    <div className="flex h-[300px] flex-col items-center justify-center rounded-lg border bg-card p-6 shadow">
      <Loader2 className="mb-4 h-8 w-8 animate-spin text-primary" />
      <p className="text-center text-muted-foreground">{title}</p>
    </div>
  );
}
