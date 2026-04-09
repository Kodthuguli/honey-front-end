/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { api } from "@/lib/api";

export default function BlogsPage() {
  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const res = await api.get("/blogs");
        const data = res.data;

        if (Array.isArray(data)) {
          setBlogs(data);
        } else {
          setBlogs([data]);
        }
      } catch (err) {
        console.error("Failed to load blogs:", err);
        setBlogs([]);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
  }, []);

  if (loading) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <p className="text-[#6F4E37]">Loading blogs...</p>
      </div>
    );
  }

  if (blogs.length === 0) {
    return (
      <div className="max-w-7xl mx-auto px-6 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#3A1F16]">
          Blog & Articles
        </h1>

        <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

        <p className="mt-6 text-[#6F4E37]">
          No articles available right now.
        </p>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-6 lg:px-8 py-20">

      {/* Heading */}
      <div className="text-center">
        <h1 className="text-4xl md:text-5xl font-serif text-[#3A1F16]">
          Blog & Articles
        </h1>

        <div className="mt-3 mx-auto h-[1px] w-24 bg-[#C6A77D]" />

        <p className="mt-4 text-[#6F4E37] max-w-2xl mx-auto">
          Learn about purity, natural living, and traditional wellness.
        </p>
      </div>

      {/* Blog Grid */}
      <div className="mt-16 grid grid-cols-1 md:grid-cols-2 gap-12">
        {blogs.map((b) => (
          <Link
            key={b.slug}
            href={`/blogs/${b.slug}`}
            className="
              group
              block
              bg-[#F4E6D5]
              border border-[#C6A77D]
              rounded-xl
              shadow-sm
              hover:shadow-md
              transition
            "
          >
            <div className="overflow-hidden rounded-t-xl">
              <img
                src={b.thumbnailUrl || "/placeholder.jpg"}
                alt={b.title}
                className="
                  object-cover w-full h-60
                  group-hover:scale-105
                  transition duration-500
                "
              />
            </div>

            <div className="p-6">

              <p className="text-sm text-[#6F4E37]">
                {new Date(b.createdAt).toLocaleDateString("en-IN")}
              </p>

              <h3 className="text-2xl font-serif text-[#3A1F16] mt-3">
                {b.title}
              </h3>

              <p className="text-[#6F4E37] mt-3 text-sm leading-relaxed">
                {b.excerpt || "No excerpt available..."}
              </p>

              <span className="mt-6 inline-block text-[#C4622D] font-medium group-hover:underline">
                Read More →
              </span>

            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}