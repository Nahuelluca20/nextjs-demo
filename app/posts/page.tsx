import { Input } from "@/components/ui/input";
import { addPost } from "./actions";
import { PostsList } from "./components/posts-list";
import { Button } from "@/components/ui/button";
import { Suspense } from "react";
import { PostsLoading } from "./components/posts-loading";

export default function Home() {
  return (
    <main className="container mx-auto py-8 px-4 flex w-full gap-4">
      <section className=" w-full">
        <h1 className="text-3xl font-bold mb-6">Posts</h1>
        <Suspense fallback={<PostsLoading />}>
          <PostsList />
        </Suspense>
      </section>
      <form action={addPost} className="mt-15 space-y-3">
        <Input name="title" placeholder="Title" type="text" />
        <Input name="description" placeholder="Description" type="text" />
        <Button type="submit">Send</Button>
      </form>
    </main>
  );
}
