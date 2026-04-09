/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { api } from "@/lib/api";

export default function BlogDetailPage() {
  const { slug } = useParams();

  const [blog, setBlog] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    if (!slug) return;

    const fetchBlog = async () => {
      try {
        setLoading(true);
        const res = await api.get(`/blogs/${slug}`);
        setBlog(res.data);
      } catch (err) {
        console.error("Blog not found:", err);
        setError("Blog not found");
      } finally {
        setLoading(false);
      }
    };

    fetchBlog();
  }, [slug]);

  if (loading) {
    return (
      <div className="text-center py-24 text-[#6F4E37]">
        Loading blog...
      </div>
    );
  }

  if (error || !blog) {
    return (
      <div className="text-center py-24 text-[#6F4E37]">
        {error || "Blog not found."}
      </div>
    );
  }

  return (
    <div className="max-w-4xl mx-auto px-6 lg:px-8 py-20">

      {/* Back Link */}
      <Link
        href="/blogs"
        className="text-[#C4622D] font-medium hover:underline"
      >
        ← Back to Blogs
      </Link>

      {/* Title */}
      <h1 className="text-4xl md:text-5xl font-serif text-[#3A1F16] mt-6 leading-tight">
        {blog.title}
      </h1>

      {/* Divider */}
      <div className="mt-4 h-[1px] w-20 bg-[#C6A77D]" />

      {/* Meta */}
      <p className="text-[#6F4E37] mt-4">
        {blog.author || "Admin"} •{" "}
        {new Date(blog.createdAt).toLocaleDateString("en-IN")}
      </p>

      {/* Banner */}
      <div className="mt-8 overflow-hidden rounded-xl">
        <img
          src={blog.thumbnailUrl || "/placeholder.jpg"}
          alt={blog.title}
          className="w-full h-80 object-cover shadow-sm"
        />
      </div>

      {/* Content */}
      <div className="mt-10 text-[#3A1F16] leading-8 whitespace-pre-line text-lg">
        {blog.content || "No content available."}
      </div>

      {/* Tags */}
      {blog.tags?.length > 0 && (
        <div className="mt-10 flex gap-3 flex-wrap">
          {blog.tags.map((t: string, i: number) => (
            <span
              key={i}
              className="
                bg-[#F4E6D5]
                border border-[#C6A77D]
                text-[#3A1F16]
                px-4 py-1
                rounded-full
                text-sm
              "
            >
              #{t}
            </span>
          ))}
        </div>
      )}
    </div>
  );
}