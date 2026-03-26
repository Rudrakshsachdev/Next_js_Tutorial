export default async function BlogId({ params }) {
  const { BlogId } = await params;

  return (
    <div>
      <h1>Welcome to Blog {BlogId} Page</h1>
    </div>
  );
}
