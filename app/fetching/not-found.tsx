import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Search } from "lucide-react";

export default function NotFound() {
  return (
    <div className="container mx-auto flex min-h-[80vh] items-center justify-center p-6">
      <Card className="mx-auto max-w-md text-center">
        <CardHeader>
          <div className="flex justify-center">
            <Search className="h-12 w-12 text-muted-foreground" />
          </div>
          <CardTitle className="text-xl">Page Not Found</CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            The page you requested does not exist. The characters on this page
            might be in another dimension.
          </p>
        </CardContent>
        <CardFooter className="flex justify-center">
          <Button asChild>
            <Link href="/fetching">Go to first page</Link>
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
