import { Post } from "@/types/post";

export async function generateStaticParams() {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  ).then((res) => res.json());
  /* Will SSG first 5 posts, the other ones will SSR then cached.
  Unless dynamicParams is set to false (default is true) */

  return posts.map((post) => ({
    id: post.id.toString(),
  }));
}

async function getPost(id: string): Promise<Post> {
  const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${id}`);
  if (!res.ok) throw new Error("Failed to fetch post");
  return res.json();
}

export default async function PostPage(props: PageProps<"/posts/[id]">) {
  const { id } = await props.params;
  const post = await getPost(id);

  return (
    <main className="p-4 space-y-6 text-center">
      <span>Post ID: {id}</span>
      <h1 className="text-2xl font-bold">{post.title}</h1>

      <p>{post.body}</p>
    </main>
  );
}
