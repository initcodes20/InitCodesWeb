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


// import SingleBlog from "@/app/components/SingleBlog";
// import { connectDB } from "@/lib/mongodb";
// import Blogs from "@/models/Blogs";
// import { notFound } from "next/navigation";

// export async function generateMetadata({ params }) {
//   const { slug } = await params;
//   await connectDB();

//   const post = await Blogs.findOne({ slug }).lean();
//   if (!post) return {};

//   return {
//     title: post.title,
//     description: post.description.slice(0, 160),
//     openGraph: {
//       title: post.title,
//       description: post.description.slice(0, 160),
//       url: `https://initcodes.in/blog/${post.slug}`,
//       siteName: "InitCodes",
//       type: "article",
//     },
//     twitter: {
//       card: "summary_large_image",
//       title: post.title,
//       description: post.description.slice(0, 160),
//     },
//   };
// }

// export default async function BlogSlugPage({ params }) {
//   const { slug } = await params;

//   await connectDB();
//   const post = await Blogs.findOne({ slug }).lean();

//   if (!post) notFound();

//   return <SingleBlog post={JSON.parse(JSON.stringify(post))} />;
// }
