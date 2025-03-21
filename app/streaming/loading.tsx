import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="container mx-auto flex min-h-[80vh] flex-col items-center justify-center p-6">
      <Loader2 className="mb-4 h-12 w-12 animate-spin text-primary" />
      <h2 className="text-xl font-semibold">
        Cargando página de demostración...
      </h2>
      <p className="text-muted-foreground">
        Este loading.tsx se mostrará solo si la navegación es directa a la
        página
      </p>
    </div>
  );
}
