import { notFound } from "next/navigation";

export default async function BlogId({ params }) {
  const { BlogId } = await params;

  if (!/^\d+$/.test(BlogId)) {
    notFound();
  }

  return (
    <div>
      <h1>Welcome to Blog {BlogId} Page</h1>
    </div>
  );
}
