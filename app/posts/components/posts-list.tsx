"use server";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getPosts } from "../actions";
import * as posts from "@/types/posts";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export async function PostsList() {
  const data = await getPosts();
  const posts = data.result[0].results;

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      {posts.map((post: posts.Post) => (
        <Card key={post.id} className="h-full">
          <CardHeader>
            <CardTitle>{post.title}</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription>{post.description}</CardDescription>
          </CardContent>
          <CardFooter>
            <Button asChild>
              <Link href={`posts/${post.id}`}>view</Link>
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
