import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

export default function CharacterGridSkeleton() {
  // Create an array of 20 items (same as API default page size)
  return (
    <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
      {Array.from({ length: 20 }).map((_, index) => (
        <Card key={index} className="overflow-hidden">
          <Skeleton className="h-[200px] w-full" />
          <CardHeader className="pb-2">
            <div className="flex items-center justify-between">
              <Skeleton className="h-6 w-[150px]" />
              <Skeleton className="h-5 w-16" />
            </div>
          </CardHeader>
          <CardContent className="pb-2 pt-0">
            <div className="grid grid-cols-2 gap-2">
              <div>
                <Skeleton className="mb-1 h-4 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
              <div>
                <Skeleton className="mb-1 h-4 w-16" />
                <Skeleton className="h-4 w-20" />
              </div>
            </div>
          </CardContent>
          <CardFooter className="border-t bg-muted/50 px-4 py-3">
            <div className="w-full">
              <Skeleton className="mb-1 h-3 w-32" />
              <Skeleton className="h-4 w-40" />
            </div>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
