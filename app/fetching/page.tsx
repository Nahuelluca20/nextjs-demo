import Link from "next/link";
import { Suspense } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import CharacterGrid from "./components/character-grid";
import CharacterGridSkeleton from "./components/character-grid-skeleton";

export default async function FetchingPage({
  searchParams,
}: {
  searchParams: Promise<{ page?: string }>;
}) {
  const page = (await searchParams).page;
  const currentPage = Number(page) || 1;

  return (
    <div className="container mx-auto p-6">
      <div className="mb-8">
        <h1 className="text-3xl font-bold">Rick and Morty Characters</h1>
        <p className="text-muted-foreground">
          Fetching data from the Rick and Morty API
        </p>
      </div>

      <Suspense fallback={<CharacterGridSkeleton />}>
        <CharacterGrid page={currentPage} />
      </Suspense>

      <div className="mt-8 flex items-center justify-center gap-2">
        <Button variant="outline" disabled={currentPage <= 1} asChild>
          <Link href={`/fetching?page=${currentPage - 1}`}>
            <ChevronLeft className="mr-2 h-4 w-4" />
            Previous
          </Link>
        </Button>
        <span className="mx-2 text-sm text-muted-foreground">
          Page {currentPage}
        </span>
        <Button variant="outline" asChild>
          <Link href={`/fetching?page=${currentPage + 1}`}>
            Next
            <ChevronRight className="ml-2 h-4 w-4" />
          </Link>
        </Button>
      </div>
    </div>
  );
}
