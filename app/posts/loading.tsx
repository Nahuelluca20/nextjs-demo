import { PostsLoading } from "./components/posts-loading";

export default function Loading() {
  return (
    <main className="container mx-auto py-8 px-4">
      <h1 className="text-3xl font-bold mb-6">Posts</h1>
      <PostsLoading />
    </main>
  );
}
