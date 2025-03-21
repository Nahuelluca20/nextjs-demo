import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

// Simulación de carga de datos (1 segundo)
async function getUserProfile() {
  // Simular retraso de red
  await new Promise((resolve) => setTimeout(resolve, 1000));

  return {
    name: "Ana Martínez",
    email: "ana.martinez@ejemplo.com",
    role: "Administradora",
    lastActive: "Hace 5 minutos",
    status: "Activa",
    notifications: 12,
  };
}

export default async function UserProfile() {
  const user = await getUserProfile();

  return (
    <Card>
      <CardHeader className="pb-3">
        <CardTitle>Perfil de Usuario</CardTitle>
        <CardDescription>Cargado después de 1 segundo</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="flex items-center gap-4">
          <Avatar className="h-16 w-16">
            <AvatarFallback className="bg-primary text-xl text-primary-foreground">
              AM
            </AvatarFallback>
          </Avatar>
          <div className="flex-1">
            <div className="flex items-center justify-between">
              <h3 className="text-xl font-bold">{user.name}</h3>
              <Badge variant="outline" className="bg-green-50 text-green-700">
                {user.status}
              </Badge>
            </div>
            <p className="text-muted-foreground">{user.email}</p>
            <div className="mt-2 flex items-center justify-between">
              <p className="text-sm text-muted-foreground">
                <span className="font-medium text-foreground">{user.role}</span>{" "}
                • Activa {user.lastActive}
              </p>
              <Badge variant="secondary">
                {user.notifications} notificaciones
              </Badge>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
}
