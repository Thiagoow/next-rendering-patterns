import { GetStaticPaths, GetStaticProps } from "next";
import { Post } from "@/types/post";

interface Props {
  post: Post;
  id: string;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const posts: Post[] = await fetch(
    "https://jsonplaceholder.typicode.com/posts?_limit=5",
  ).then((res) => res.json());

  const paths = posts.map((post) => ({
    params: { id: post.id.toString() },
  }));

  return {
    paths,
    fallback: "blocking" /* fallback options (similar to dynamicParams):
    false → 404 for any path not in 'paths'
    true → Render loading fallback while generating new paths
    blocking → Wait with no loading while generating new paths
    */,
  };
};

export const getStaticProps: GetStaticProps<Props, { id: string }> = async ({
  params,
}) => {
  const id = params!.id;
  const post: Post = await fetch(
    `https://jsonplaceholder.typicode.com/posts/${id}`,
  ).then((res) => res.json());

  if (!post.id) {
    return { notFound: true };
  }

  return {
    props: {
      post,
      id,
    },
    /* if not only dynamic SSG but also ISR:
    revalidate: 60, */
  };
};

export default function PostPage({ post, id }: Props) {
  return (
    <main className="p-4 space-y-6 text-center">
      <span>Post ID: {id}</span>
      <h1 className="text-2xl font-bold">{post.title}</h1>

      <p>{post.body}</p>
    </main>
  );
}
