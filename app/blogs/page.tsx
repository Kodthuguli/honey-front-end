"use client";

import Link from "next/link";

export default function BlogsPage() {
  // Temporary static list — API later
  const blogs = [
    {
      slug: "benefits-of-pure-forest-honey",
      title: "Benefits of Pure Forest Honey",
      excerpt: "Pure forest honey is packed with antioxidants and natural enzymes...",
      thumbnail: "/blog1.jpg",
      date: "Jan 20, 2025",
    },
    {
      slug: "identify-pure-honey",
      title: "How to Identify Pure Honey at Home",
      excerpt: "Simple ways to check whether honey is pure or adulterated...",
      thumbnail: "/blog2.jpg",
      date: "Jan 15, 2025",
    },
  ];

  return (
    <div className="max-w-6xl mx-auto px-6 py-16">
      <h1 className="text-4xl font-bold text-center text-[#2c3e1f] mb-4">
        Blog & Articles
      </h1>
      <p className="text-center text-gray-600 max-w-2xl mx-auto">
        Learn about purity, natural living, and traditional wellness.
      </p>

      {/* GRID */}
      <div className="mt-14 grid grid-cols-1 md:grid-cols-2 gap-10">
        {blogs.map((b) => (
          <Link
            key={b.slug}
            href={`/blogs/${b.slug}`}
            className="block bg-white rounded-xl shadow hover:shadow-md transition border border-gray-100"
          >
            {/* Image */}
            <img
              src={b.thumbnail}
              alt={b.title}
              className="rounded-t-xl object-cover w-full h-60"
            />

            {/* Content */}
            <div className="p-5">
              <p className="text-sm text-gray-500">{b.date}</p>

              <h3 className="text-xl font-semibold text-[#2c3e1f] mt-2">
                {b.title}
              </h3>

              <p className="text-gray-600 mt-2 text-sm">{b.excerpt}</p>

              <span className="mt-4 inline-block text-[#88b04b] font-medium hover:underline">
                Read More →
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
