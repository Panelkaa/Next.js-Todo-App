import Link from "next/link";

type PostsProps = {
    posts: any[]
}
export default function Posts({posts}: PostsProps) {
  return (
    <ul>
        {posts.map((post: any) => (
          <li key={post.id}>
            <Link href={`/blog/${post.id}`}>{post.title}</Link>
          </li>
        ))}
      </ul>
  )
}
