import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

// Simulación de carga de datos (7 segundos)
async function getPopularProducts() {
  // Simular retraso de red
  await new Promise((resolve) => setTimeout(resolve, 7000));

  return [
    {
      name: "Laptop Pro X",
      category: "Electrónica",
      sales: 1245,
      growth: "+12.3%",
    },
    {
      name: "Auriculares NoiseCancel",
      category: "Audio",
      sales: 876,
      growth: "+23.5%",
    },
    {
      name: "Smartwatch Series 5",
      category: "Wearables",
      sales: 654,
      growth: "+8.7%",
    },
    {
      name: "Cámara 4K Ultra",
      category: "Fotografía",
      sales: 432,
      growth: "+5.2%",
    },
  ];
}

export default async function PopularProducts() {
  const products = await getPopularProducts();

  return (
    <Card className="h-full">
      <CardHeader>
        <CardTitle>Productos Populares</CardTitle>
        <CardDescription>Cargado después de 7 segundos</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-6">
          {products.map((product, index) => (
            <div key={index} className="flex items-center gap-4">
              <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10 text-primary">
                #{index + 1}
              </div>
              <div className="flex-1">
                <h4 className="font-medium">{product.name}</h4>
                <p className="text-sm text-muted-foreground">
                  {product.category}
                </p>
              </div>
              <div className="text-right">
                <div className="font-medium">
                  {product.sales.toLocaleString()}
                </div>
                <div className="text-sm text-green-600">{product.growth}</div>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
