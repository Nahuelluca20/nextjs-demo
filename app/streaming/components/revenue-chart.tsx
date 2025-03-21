import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

// Simulación de carga de datos (3 segundos)
async function getRevenueData() {
  // Simular retraso de red
  await new Promise((resolve) => setTimeout(resolve, 3000));

  return {
    currentMonth: "$45,231",
    previousMonth: "$38,642",
    growth: "+17.05%",
    chartData: [
      { month: "Ene", value: 2500 },
      { month: "Feb", value: 3500 },
      { month: "Mar", value: 3000 },
      { month: "Abr", value: 4500 },
      { month: "May", value: 4000 },
      { month: "Jun", value: 5000 },
      { month: "Jul", value: 4800 },
      { month: "Ago", value: 5500 },
      { month: "Sep", value: 6000 },
      { month: "Oct", value: 5800 },
      { month: "Nov", value: 6500 },
      { month: "Dic", value: 7000 },
    ],
  };
}

export default async function RevenueChart() {
  const data = await getRevenueData();
  const maxValue = Math.max(...data.chartData.map((item) => item.value));

  return (
    <Card>
      <CardHeader>
        <CardTitle>Ingresos</CardTitle>
        <CardDescription>Cargado después de 3 segundos</CardDescription>
      </CardHeader>
      <CardContent>
        <Tabs defaultValue="yearly">
          <div className="flex items-center justify-between">
            <TabsList>
              <TabsTrigger value="yearly">Anual</TabsTrigger>
              <TabsTrigger value="monthly">Mensual</TabsTrigger>
              <TabsTrigger value="weekly">Semanal</TabsTrigger>
            </TabsList>
            <div className="flex items-center gap-2">
              <div className="text-2xl font-bold">{data.currentMonth}</div>
              <div className="text-sm text-green-600">{data.growth}</div>
            </div>
          </div>

          <TabsContent value="yearly" className="mt-4">
            <div className="h-[200px]">
              <div className="flex h-full items-end gap-2">
                {data.chartData.map((month, i) => (
                  <div
                    key={i}
                    className="group relative flex flex-1 flex-col items-center"
                  >
                    <div className="absolute -top-8 hidden rounded bg-black px-2 py-1 text-xs text-white group-hover:block">
                      ${month.value}
                    </div>
                    <div
                      className="w-full rounded-t bg-primary transition-all group-hover:bg-primary/80"
                      style={{
                        height: `${(month.value / maxValue) * 100}%`,
                      }}
                    ></div>
                    <span className="mt-2 text-xs text-muted-foreground">
                      {month.month}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="monthly">
            <div className="mt-4 h-[200px] flex items-center justify-center text-muted-foreground">
              Datos mensuales no disponibles en esta demo
            </div>
          </TabsContent>

          <TabsContent value="weekly">
            <div className="mt-4 h-[200px] flex items-center justify-center text-muted-foreground">
              Datos semanales no disponibles en esta demo
            </div>
          </TabsContent>
        </Tabs>
      </CardContent>
    </Card>
  );
}
