/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useMemo, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { api } from "@/lib/api";

import {
  Search,
  SlidersHorizontal,
  CalendarDays,
  ChevronLeft,
  ChevronRight,
  X,
  Sprout,
  Book,
  Flower
} from "lucide-react";
import { title } from "process";

export default function BlogsPage() {

  const [blogs, setBlogs] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const [search, setSearch] = useState("");

  const [selectedCategory, setSelectedCategory] =
    useState("All Categories");

  const [filterOpen, setFilterOpen] = useState(false);

  const [page, setPage] = useState(1);

  const blogsPerPage = 6;

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


  const categories =
useMemo(()=>{

const uniqueCategories =
Array.from(

new Set(

blogs

.map(
(blog)=>
blog.category
)

.filter(Boolean)

)

);


return [

"All Categories",

...uniqueCategories

];


},[blogs]);


  const filteredBlogs = useMemo(() => {

    let filtered = [...blogs];

    if (search.trim()) {

      filtered = filtered.filter((blog) =>
        blog.title
          ?.toLowerCase()
          .includes(search.toLowerCase())
      );
    }

    if (selectedCategory !== "All Categories") {

      filtered = filtered.filter(
        (blog) =>
          blog.category === selectedCategory
      );
    }

    return filtered;

  }, [blogs, search, selectedCategory]);


  const totalPages = Math.ceil(
    filteredBlogs.length / blogsPerPage
  );

  const paginatedBlogs = filteredBlogs.slice(
    (page - 1) * blogsPerPage,
    page * blogsPerPage
  );


  const recentPosts = blogs.slice(0, 3);


  if (loading) {

    return (

      <div className="max-w-7xl mx-auto px-6 py-24 text-center">

        <p className="text-[#6F4E37]">
          Loading blogs...
        </p>

      </div>

    );
  }


  return (

    <div className=" min-h-screen overflow-hidden">

      {/* HERO */}
      {/* HERO */}
<section
  className="
    relative
    overflow-hidden
    min-h-[560px]
    flex
    items-center
    border-b
    border-[#E8D9C7]
    py-16
  "
>

  {/* BACKGROUND IMAGE */}
  <Image
    src="/blog-hero-bg.png"
    alt="Vanamrith Blog"
    fill
    priority
    sizes="100vw"
    className="
      object-cover
      object-center
      -z-10
    "
  />


  {/* LEFT SOFT GRADIENT */}
  <div
    className="
      absolute
      inset-0
      bg-gradient-to-r
      from-[#FFF8EA]/95
      via-[#FFF8EA]/60
      to-transparent
      -z-10
    "
  />


  {/* CONTENT */}
  <div
    className="
      max-w-[1400px]
      mx-auto
      w-full
      px-5
      lg:px-10
    "
  >

    <div
      className="
        max-w-[650px]
      "
    >

      {/* TAG */}
      <div
        className="
          flex
          items-center
          gap-4
        "
      >

        <span
          className="
            text-[#B87518]
            text-xl
          "
        >
          ✦
        </span>


        <p
          className="
            uppercase
            tracking-[0.35em]
            text-[#B87518]
            text-sm
            font-semibold
          "
        >
          Stories From Nature
        </p>


        <span
          className="
            h-px
            w-16
            bg-[#B87518]
          "
        />

      </div>



      {/* TITLE */}
      <h1
        className="
          mt-8
          font-serif
          text-[#2B160D]
          text-[48px]
          md:text-[72px]
          leading-[1.1]
        "
      >

        Insights, Stories &
        <br />

        Natural{" "}
        <span className="text-[#B87518]">
          Inspirations
        </span>

      </h1>



      {/* DECOR LINE */}
      <div
        className="
          mt-8
          flex
          items-center
          gap-4
        "
      >

        <span className="h-px w-24 bg-[#D4A45F]" />

        <Image
          src="/bee.png"
          alt=""
          width={28}
          height={28}
        />

        <span className="h-px w-24 bg-[#D4A45F]" />

      </div>




      {/* DESCRIPTION */}
      <p
        className="
          mt-8
          max-w-[480px]
          text-[18px]
          leading-9
          text-[#5D4637]
        "
      >

        Explore stories about honey,
        bee keeping, natural living
        and our journey from hive
        to bottle.

      </p>



      {/* FEATURE POINTS */}
      <div
        className="
          hidden
          md:grid
          grid-cols-3
          gap-8
          mt-14
          max-w-[650px]
        "
      >

        {[
          {title:"Natural Living",icon:<Sprout className="w-6 h-6 text-[#D79B2E]" />},
          {title:"Bee Knowledge",icon:<Book className="w-6 h-6 text-[#D79B2E]" />},
          {title:"Honey Guide",icon:<Flower className="w-6 h-6 text-[#D79B2E]" />}
        ].map((item)=>(

          <div
            key={item.title}
            className="
              text-center
              border-r
              last:border-none
              border-[#D8B887]
            "
          >

            <div
              className="
                mx-auto
                w-14
                h-14
                rounded-full
                bg-[#FFF3DD]
                flex
                items-center
                justify-center
                text-[#B87518]
                mb-4
              "
            >
              {item.icon}
            </div>


            <h4
              className="
                text-[#2B160D]
                font-semibold
              "
            >
              {item.title}
            </h4>


          </div>


        ))}

      </div>


    </div>


  </div>


</section>


      {/* CONTENT */}
      <section
        className="
          max-w-[1400px]
          mx-auto
          px-4 md:px-6 xl:px-10
          py-8 md:py-12
        "
      >

        {/* MOBILE SEARCH */}
        <div className="md:hidden">

          <div className="flex gap-3">

            {/* SEARCH */}
            <div className="relative flex-1">

              <Search
                size={18}
                className="
                  absolute
                  left-4
                  top-1/2
                  -translate-y-1/2
                  text-[#7A6658]
                "
              />

              <input
                type="text"
                placeholder="Search blog..."
                value={search}
                onChange={(e) =>
                  setSearch(e.target.value)
                }
                className="
                  w-full
                  h-[56px]
                  rounded-[16px]
                  border border-[#E8D9C7]
                  bg-white
                  pl-12 pr-4
                  text-[#24130D]
                  outline-none
                "
              />

            </div>


            {/* FILTER */}
            <button
              onClick={() => setFilterOpen(true)}
              className="
                h-[56px]
                px-5
                rounded-[16px]
                border border-[#E8D9C7]
                bg-white
                flex items-center gap-2
                text-[#24130D]
                font-medium
              "
            >

              <SlidersHorizontal size={18} />

              Filter

            </button>

          </div>

        </div>


        {/* DESKTOP LAYOUT */}
        <div
          className="
            mt-8 md:mt-0
            grid
            grid-cols-1 md:grid-cols-[280px_1fr]
            gap-8
            items-start
          "
        >

          {/* SIDEBAR */}
          <aside
            className="
              hidden md:block
              bg-[#FFFDF9]
              border border-[#E8D9C7]
              rounded-[24px]
              p-6
              sticky top-24
            "
          >

            {/* SEARCH */}
            <div>

              <h3
                className="
                  text-[18px]
                  font-semibold
                  text-[#24130D]
                "
              >
                Search
              </h3>

              <div className="relative mt-4">

                <Search
                  size={18}
                  className="
                    absolute
                    left-4
                    top-1/2
                    -translate-y-1/2
                    text-[#7A6658]
                  "
                />

                <input
                  type="text"
                  placeholder="Search blog..."
                  value={search}
                  onChange={(e) =>
                    setSearch(e.target.value)
                  }
                  className="
                    w-full
                    h-[52px]
                    rounded-[14px]
                    border border-[#E8D9C7]
                    bg-white
                    pl-12 pr-4
                    outline-none
                  "
                />

              </div>

            </div>


            {/* CATEGORIES */}
            <div className="mt-10">

              <h3
                className="
                  text-[18px]
                  font-semibold
                  text-[#24130D]
                "
              >
                Categories
              </h3>

              <div className="mt-5 space-y-4">

                {categories.map((cat) => (

                  <button
                    key={cat}
                    onClick={() => {
                      setSelectedCategory(cat);
                      setPage(1);
                    }}
                    className={`
                      block
                      text-left
                      transition
                      ${
                        selectedCategory === cat
                          ? "text-[#D06F1D] font-semibold"
                          : "text-[#24130D]"
                      }
                    `}
                  >
                    {cat}
                  </button>

                ))}

              </div>

            </div>


            {/* RECENT POSTS */}
            <div className="mt-12">

              <h3
                className="
                  text-[18px]
                  font-semibold
                  text-[#24130D]
                "
              >
                Recent Posts
              </h3>

              <div className="mt-5 space-y-5">

                {recentPosts.map((post, index) => (

                  <Link
                    key={index}
                    href={`/blogs/${post.slug}`}
                    className="
                      flex gap-3
                      group
                    "
                  >

                    <div
className="
relative
w-[76px]
h-[76px]
shrink-0
"
>

<Image

src={
post.thumbnailUrl ||
"/placeholder.jpg"
}

alt={
post.title
}

fill

sizes="76px"

className="
rounded-[12px]
object-cover
"

/>

</div>

                    <div>

                      <h4
                        className="
                          text-[14px]
                          leading-5
                          text-[#24130D]
                          font-medium
                          group-hover:text-[#D06F1D]
                          transition
                        "
                      >
                        {post.title}
                      </h4>

                      <p
                        className="
                          mt-2
                          text-[#7A6658]
                          text-sm
                        "
                      >
                        {new Date(
                          post.createdAt
                        ).toLocaleDateString("en-IN")}
                      </p>

                    </div>

                  </Link>

                ))}

              </div>

            </div>

          </aside>


          {/* BLOG GRID */}
          <div>

            <div
              className="
                grid
                grid-cols-1 md:grid-cols-2 xl:grid-cols-3
                gap-5 md:gap-6
              "
            >

              {paginatedBlogs.map((b, index) => {

                const category =
b.category ||
"Vanamrith";

                return (

                  <Link
                    key={b.slug || index}
                    href={`/blogs/${b.slug}`}
                    className="
                      group
                      block
                    "
                  >

                    {/* MOBILE CARD */}
                    <div
                      className="
                        md:hidden
                        bg-[#FFFDF9]
                        border border-[#E8D9C7]
                        rounded-[20px]
                        overflow-hidden
                        p-2.5
                        flex
                        gap-3
                      "
                    >

                      {/* IMAGE */}
                      <div
className="
relative
w-[42%]
min-h-[145px]
shrink-0
"
>


<Image

src={
b.thumbnailUrl ||
"/placeholder.jpg"
}

alt={
b.title
}

fill

sizes="50vw"

className="
object-cover
rounded-[14px]
"

/>


</div>


                      {/* CONTENT */}
                      <div className="flex-1 flex flex-col">

                        {/* CATEGORY */}
                        <div
                          className="
                            inline-flex
                            w-fit
                            px-2.5
                            py-1
                            rounded-full
                            bg-[#FFF1E3]
                            text-[#D06F1D]
                            text-[10px]
                            font-semibold
                          "
                        >
                          {category}
                        </div>


                        {/* TITLE */}
                        <h3
                          className="
                            mt-2
                            text-[15px]
                            leading-[1.35]
                            font-semibold
                            text-[#24130D]
                            line-clamp-2
                          "
                        >
                          {b.title}
                        </h3>


                        {/* DESC */}
                        <p
                          className="
                            mt-2
                            text-[#5D4637]
                            text-[12px]
                            leading-5
                            line-clamp-3
                          "
                        >
                          {b.excerpt ||
                            "Discover the natural goodness of pure honey and wellness."}
                        </p>


                        {/* BOTTOM */}
                        <div className="mt-auto pt-3">

                          <div
                            className="
                              flex
                              items-center
                              gap-2
                              text-[#7A6658]
                              text-[11px]
                              flex-wrap
                            "
                          >

                            <div className="flex items-center gap-1">

                              <CalendarDays size={12} />

                              <span>
                                {new Date(
                                  b.createdAt
                                ).toLocaleDateString(
                                  "en-IN"
                                )}
                              </span>

                            </div>

                            <span>•</span>

                            <span>
                              {b.readTime ||
                                "5 min read"}
                            </span>

                          </div>


                          <div
                            className="
                              mt-3
                              text-right
                              text-[#D06F1D]
                              font-semibold
                              text-[13px]
                            "
                          >
                            Read More →
                          </div>

                        </div>

                      </div>

                    </div>


                    {/* DESKTOP CARD */}
                    <div
                      className="
                        hidden md:block
                        bg-[#FFFDF9]
                        border border-[#E8D9C7]
                        rounded-[22px]
                        overflow-hidden
                        hover:shadow-lg
                        transition-all duration-300
                      "
                    >

                      {/* IMAGE */}
                      <div
className="
relative
overflow-hidden
h-[220px]
"
>


<Image

src={
b.thumbnailUrl ||
"/placeholder.jpg"
}

alt={
b.title
}

fill

sizes="
(max-width:1200px) 50vw,
33vw
"

className="
object-cover
group-hover:scale-105
transition
duration-700
"

/>

                        <div
                          className="
                            absolute
                            left-4
                            bottom-4
                            px-3
                            py-1
                            rounded-full
                            bg-[#FFF1E3]
                            text-[#D06F1D]
                            text-xs
                            font-semibold
                          "
                        >
                          {category}
                        </div>

                      </div>


                      {/* CONTENT */}
                      <div className="p-5">

                        <h3
                          className="
                            text-[18px]
                            md:text-[20px]
                            leading-[1.35]
                            font-semibold
                            text-[#24130D]
                            group-hover:text-[#D06F1D]
                            transition
                            min-h-[58px]
                          "
                        >
                          {b.title}
                        </h3>

                        <p
                          className="
                            mt-3
                            text-[#5D4637]
                            text-[15px]
                            leading-7
                            line-clamp-3
                          "
                        >
                          {b.excerpt ||
                            "Discover the natural goodness of pure honey and wellness."}
                        </p>

                        <div
                          className="
                            mt-5
                            flex
                            items-center
                            justify-between
                            gap-3
                            flex-wrap
                          "
                        >

                          <div
                            className="
                              flex
                              items-center
                              gap-4
                              text-[#7A6658]
                              text-sm
                            "
                          >

                            <div className="flex items-center gap-1.5">

                              <CalendarDays size={14} />

                              <span>
                                {new Date(
                                  b.createdAt
                                ).toLocaleDateString(
                                  "en-IN"
                                )}
                              </span>

                            </div>

                            <span>•</span>

                            <span>
                              {b.readTime ||
                                "5 min read"}
                            </span>

                          </div>

                          <span
                            className="
                              text-[#D06F1D]
                              font-semibold
                              text-sm
                            "
                          >
                            Read More →
                          </span>

                        </div>

                      </div>

                    </div>

                  </Link>

                );
              })}

            </div>


            {/* PAGINATION */}
            {totalPages > 1 && (

              <div
                className="
                  mt-10 md:mt-12
                  flex items-center justify-center
                  gap-3
                "
              >

                <button
                  onClick={() =>
                    setPage((prev) =>
                      Math.max(prev - 1, 1)
                    )
                  }
                  className="
                    w-11 h-11
                    rounded-[12px]
                    border border-[#E8D9C7]
                    bg-white
                    flex items-center justify-center
                  "
                >

                  <ChevronLeft size={18} />

                </button>


                {[...Array(totalPages)].map((_, i) => (

                  <button
                    key={i}
                    onClick={() => setPage(i + 1)}
                    className={`
                      w-11 h-11
                      rounded-[12px]
                      border
                      text-sm font-medium
                      ${
                        page === i + 1
                          ? "bg-[#FFF1E3] border-[#E6C7A8] text-[#D06F1D]"
                          : "bg-white border-[#E8D9C7] text-[#24130D]"
                      }
                    `}
                  >
                    {i + 1}
                  </button>

                ))}


                <button
                  onClick={() =>
                    setPage((prev) =>
                      Math.min(prev + 1, totalPages)
                    )
                  }
                  className="
                    w-11 h-11
                    rounded-[12px]
                    border border-[#E8D9C7]
                    bg-white
                    flex items-center justify-center
                  "
                >

                  <ChevronRight size={18} />

                </button>

              </div>

            )}

          </div>

        </div>

      </section>


      {/* MOBILE FILTER DRAWER */}
      {filterOpen && (

        <div
          className="
            fixed inset-0 z-50
            bg-black/40
            flex items-end
          "
        >

          <div
            className="
              bg-white
              rounded-t-[28px]
              w-full
              p-6
              max-h-[80vh]
              overflow-y-auto
            "
          >

            {/* HEADER */}
            <div className="flex items-center justify-between">

              <h3
                className="
                  text-[22px]
                  font-semibold
                  text-[#24130D]
                "
              >
                Categories
              </h3>

              <button
                onClick={() => setFilterOpen(false)}
              >

                <X size={22} />

              </button>

            </div>


            {/* CATEGORY LIST */}
            <div className="mt-6 space-y-4">

              {categories.map((cat) => (

                <button
                  key={cat}
                  onClick={() => {
                    setSelectedCategory(cat);
                    setPage(1);
                    setFilterOpen(false);
                  }}
                  className={`
                    w-full
                    text-left
                    py-3
                    border-b border-[#F1E3D5]
                    ${
                      selectedCategory === cat
                        ? "text-[#D06F1D] font-semibold"
                        : "text-[#24130D]"
                    }
                  `}
                >
                  {cat}
                </button>

              ))}

            </div>

          </div>

        </div>

      )}

    </div>
  );
}