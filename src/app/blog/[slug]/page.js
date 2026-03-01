import SingleBlog from "@/app/components/SingleBlog";
import { connectDB } from "@/lib/mongodb";
import Blogs from "@/models/Blogs";
import { notFound } from "next/navigation";

export default async function BlogSlugPage({ params }) {
  const { slug } = await params;

  await connectDB();

  const post = await Blogs.findOne({ slug }).lean();

  if (!post) notFound();

  return <SingleBlog post={JSON.parse(JSON.stringify(post))} />;
}