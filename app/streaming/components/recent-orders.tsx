import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

// Simulación de carga de datos (5 segundos)
async function getRecentOrders() {
  // Simular retraso de red
  await new Promise((resolve) => setTimeout(resolve, 5000));

  return [
    {
      id: "ORD-001",
      customer: "Carlos Ruiz",
      product: "Laptop Pro X",
      date: "Hoy, 10:30",
      status: "Completado",
      amount: "$1,299.99",
    },
    {
      id: "ORD-002",
      customer: "María López",
      product: "Monitor UltraWide",
      date: "Ayer, 15:45",
      status: "Procesando",
      amount: "$349.99",
    },
    {
      id: "ORD-003",
      customer: "Juan García",
      product: "Teclado Mecánico",
      date: "Ayer, 09:15",
      status: "Enviado",
      amount: "$129.99",
    },
    {
      id: "ORD-004",
      customer: "Laura Díaz",
      product: "Auriculares Inalámbricos",
      date: "22 Nov, 14:30",
      status: "Completado",
      amount: "$89.99",
    },
  ];
}

export default async function RecentOrders() {
  const orders = await getRecentOrders();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Pedidos Recientes</CardTitle>
        <CardDescription>Cargado después de 5 segundos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {orders.map((order) => (
            <div
              key={order.id}
              className="flex flex-col gap-2 rounded-lg border p-3"
            >
              <div className="flex items-center justify-between">
                <div className="font-medium">{order.customer}</div>
                <Badge
                  variant={
                    order.status === "Completado"
                      ? "default"
                      : order.status === "Procesando"
                        ? "outline"
                        : "secondary"
                  }
                >
                  {order.status}
                </Badge>
              </div>
              <div className="text-sm text-muted-foreground">
                {order.product}
              </div>
              <div className="flex items-center justify-between text-sm">
                <div className="text-muted-foreground">{order.date}</div>
                <div className="font-medium">{order.amount}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
