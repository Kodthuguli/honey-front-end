"use client";

import { useParams } from "next/navigation";
import Link from "next/link";

export default function BlogDetailPage() {
  const { slug } = useParams();

  // Temporary static blog list
  const blogs = [
    {
      slug: "benefits-of-pure-forest-honey",
      title: "Benefits of Pure Forest Honey",
      date: "Jan 20, 2025",
      author: "Admin",
      thumbnail: "/blog1.jpg",
      tags: ["Honey", "Health", "Natural"],
      content: `
        Pure forest honey is packed with antioxidants and enzymes that support immunity,
        digestion, and overall wellness...

        ✅ Boosts immunity
        ✅ Helps digestion
        ✅ Natural energy source
      `,
    },
  ];

  const blog = blogs.find((b) => b.slug === slug);

  if (!blog) {
    return (
      <div className="text-center py-20 text-gray-600">
        Blog not found.
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <Link href="/blogs" className="text-[#88b04b] font-medium hover:underline">
        ← Back to Blogs
      </Link>

      <h1 className="text-4xl font-bold text-[#2c3e1f] mt-4">{blog.title}</h1>

      <p className="text-gray-500 mt-2">
        {blog.date} • {blog.author}
      </p>

      <img
        src={blog.thumbnail}
        alt={blog.title}
        className="w-full h-80 object-cover rounded-xl shadow mt-6"
      />

      <div className="mt-8 text-gray-700 leading-7 whitespace-pre-line">
        {blog.content}
      </div>
    </div>
  );
}
