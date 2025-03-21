import Image from "next/image";
import { notFound } from "next/navigation";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

interface Character {
  id: number;
  name: string;
  status: string;
  species: string;
  type: string;
  gender: string;
  origin: {
    name: string;
    url: string;
  };
  location: {
    name: string;
    url: string;
  };
  image: string;
  episode: string[];
  url: string;
  created: string;
}

interface ApiResponse {
  info: {
    count: number;
    pages: number;
    next: string | null;
    prev: string | null;
  };
  results: Character[];
}

async function getCharacters(page: number): Promise<ApiResponse> {
  const res = await fetch(
    `https://rickandmortyapi.com/api/character?page=${page}`,
    { next: { revalidate: 3600 } }, // Cache for 1 hour
  );
  if (!res.ok) {
    if (res.status === 404) {
      notFound();
    }
    throw new Error("Failed to fetch characters");
  }

  return res.json();
}

export default async function CharacterGrid({ page }: { page: number }) {
  const data = await getCharacters(page);

  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {data.results.map((character) => (
        <Card key={character.id} className="overflow-hidden">
          <div className="relative h-[200px] w-full">
            <Image
              src={character.image || "/placeholder.svg"}
              alt={character.name}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          </div>
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <h3 className="font-bold leading-tight">{character.name}</h3>
              <StatusBadge status={character.status} />
            </div>
          </CardHeader>
          <CardContent className="pb-2 pt-0">
            <div className="grid grid-cols-2 gap-2 text-sm">
              <div>
                <p className="text-muted-foreground">Species</p>
                <p>{character.species}</p>
              </div>
              <div>
                <p className="text-muted-foreground">Gender</p>
                <p>{character.gender}</p>
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-4 py-3">
            <div className="w-full">
              <p className="text-xs text-muted-foreground">
                Last known location:
              </p>
              <p className="truncate text-sm">{character.location.name}</p>
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}

function StatusBadge({ status }: { status: string }) {
  let variant: "default" | "outline" | "secondary" | "destructive" = "default";

  switch (status.toLowerCase()) {
    case "alive":
      variant = "default";
      break;
    case "dead":
      variant = "destructive";
      break;
    default:
      variant = "secondary";
  }

  return <Badge variant={variant}>{status}</Badge>;
}
