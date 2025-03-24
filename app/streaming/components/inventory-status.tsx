import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";

// Simulación de carga de datos (9 segundos)
async function getInventoryStatus() {
  // Simular retraso de red
  await new Promise((resolve) => setTimeout(resolve, 9000));

  return [
    {
      product: "Laptop Pro X",
      stock: 24,
      total: 50,
      status: "Suficiente",
    },
    {
      product: "Auriculares NoiseCancel",
      stock: 8,
      total: 30,
      status: "Bajo",
    },
    {
      product: "Smartwatch Series 5",
      stock: 15,
      total: 40,
      status: "Medio",
    },
    {
      product: "Cámara 4K Ultra",
      stock: 3,
      total: 25,
      status: "Crítico",
    },
  ];
}

export default async function InventoryStatus() {
  const inventory = await getInventoryStatus();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Estado de Inventario</CardTitle>
        <CardDescription>Cargado después de 9 segundos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {inventory.map((item, index) => {
            const percentage = (item.stock / item.total) * 100;

            return (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <div className="font-medium">{item.product}</div>
                  <div className="text-sm">
                    {item.stock} / {item.total} unidades
                  </div>
                </div>
                <Progress value={percentage} className="h-2" />
                <div className="flex justify-between text-xs text-muted-foreground">
                  <div>Estado: {item.status}</div>
                  <div>{percentage.toFixed(0)}%</div>
                </div>
              </div>
            );
          })}
        </div>
      </CardContent>
    </Card>
  );
}
