"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { PackageX } from "lucide-react";

export default function ItemsError({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Log the error to an error reporting service
    console.error(error);
  }, [error]);

  return (
    <div className="flex min-h-[80vh] items-center justify-center p-6">
      <Card className="mx-auto max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center">
            <PackageX className="h-12 w-12 text-destructive" />
          </div>
          <CardTitle className="text-xl">Items could not be loaded</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            There was an error loading your inventory items. This is a demo
            error page for the /items route.
          </p>
          {error.message && (
            <div className="mt-4 rounded-md bg-destructive/10 p-4 text-sm text-destructive">
              <p className="font-medium">Error message:</p>
              <p>{error.message}</p>
            </div>
          )}
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button onClick={reset}>Try again</Button>
        </CardFooter>
      </Card>
    </div>
  );
}
