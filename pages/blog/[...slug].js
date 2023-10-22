import { useRouter } from "next/router";

function BlogPostsPage() {
  const router = useRouter();
  const { slug } = router.query;
  console.log(slug);
  return <h1>Blog Posts</h1>;
}

export default BlogPostsPage;
