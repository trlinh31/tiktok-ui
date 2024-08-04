import Post from "@/components/Post";
import { Post as PostItems } from "@/data/post";

export default function Home() {
  return (
    <>
      {PostItems.map((post) => (
        <Post key={post.id} post={post} />
      ))}
    </>
  );
}
