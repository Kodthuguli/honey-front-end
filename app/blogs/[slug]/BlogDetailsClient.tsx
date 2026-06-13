/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

import {
  CalendarDays,
  Share2,
  ChevronDown,
} from "lucide-react";
import { toast } from "sonner";

export default function BlogDetailsClient({
  blog,
}: {
  blog:any;
}) {



  const [expanded, setExpanded] = useState(false);

  const handleShare =
async()=>{


const shareData = {

title:
blog.title,

text:
blog.excerpt || blog.title,

url:
window.location.href,

};



try{


if(
navigator.share
){


await navigator.share(
shareData
);


}

else{


await navigator.clipboard.writeText(
window.location.href
);


toast.info(
"Blog link copied!"
);


}


}
catch(error){


console.log(
"Share cancelled",
error
);


}


};


  return (

    <div className="bg-[#FBF7F2] min-h-screen overflow-hidden relative">

      {/* DECOR */}
      <div
        className="
          hidden lg:block
          absolute
          right-0
          bottom-[260px]
          opacity-40
          pointer-events-none
        "
      >

       {/* <Image

src="/leaf-line.png"

alt=""

width={220}

height={220}

/> */}

      </div>


      <div
        className="
          max-w-[1180px]
          mx-auto
          px-4 md:px-6 lg:px-8
          pt-8 md:pt-10
          pb-16
        "
      >

        {/* BREADCRUMB */}
        <div
          className="
            flex items-center gap-2
            text-[13px] md:text-sm
            text-[#7A6658]
          "
        >

          <Link href="/">
            Home
          </Link>

          <span>›</span>

          <Link href="/blogs">
            Blog
          </Link>

          <span>›</span>

          <span className="text-[#D06F1D] font-medium">
            {blog.category || "Health & Wellness"}
          </span>

        </div>


        {/* CATEGORY */}
        <div
          className="
            mt-6
            inline-flex
            px-3 py-1.5
            rounded-full
            bg-[#FFF1E3]
            text-[#D06F1D]
            text-[12px]
            font-semibold
          "
        >
          {blog.category || "Health & Wellness"}
        </div>


        {/* TITLE */}
        <h1
          className="
            mt-5
            text-[44px]
            md:text-[66px]
            leading-[1.05]
            font-serif
            text-[#24130D]
            max-w-[780px]
          "
        >
          {blog.title ||
            "Top 7 Health Benefits of Raw Honey"}
        </h1>


        {/* SUBTITLE */}
        <p
          className="
            mt-5
            text-[#4E3A30]
            text-[18px]
            leading-9
            max-w-[760px]
          "
        >
          {blog.excerpt ||
            "Discover how raw honey can improve immunity, aid digestion and boost overall well-being."}
        </p>


        {/* META */}
        <div
          className="
            mt-7
            flex flex-wrap items-center
            gap-5 md:gap-7
            text-[#4E3A30]
          "
        >

          <div className="flex items-center gap-2">

            <CalendarDays
              size={18}
              className="text-[#D06F1D]"
            />

            <span className="text-[15px]">
              {new Date(
                blog.createdAt
              ).toLocaleDateString("en-IN")}
            </span>

          </div>


          <div className="flex items-center gap-2">

            <span className="w-1.5 h-1.5 rounded-full bg-[#D06F1D]" />

            <span className="text-[15px]">
              {blog.readTime || "5 min read"}
            </span>

          </div>


          <button

onClick={
handleShare
}

className="
flex
items-center
gap-2
hover:text-[#D06F1D]
transition
cursor-pointer
"

>

            <Share2
              size={17}
              className="text-[#D06F1D]"
            />

            <span className="text-[15px]">
              Share
            </span>

          </button>

        </div>


        {/* HERO IMAGE */}
        <div
className="
relative
mt-8
md:mt-10
h-[260px]
sm:h-[380px]
md:h-[620px]
rounded-[22px]
md:rounded-[28px]
overflow-hidden
"
>


<Image

src={
blog.thumbnailUrl ||
"/placeholder.jpg"
}

alt={
blog.title
}

fill

priority

sizes="
(max-width:768px) 100vw,
1180px
"

className="
object-cover
"

/>


</div>


        {/* INTRO */}
        <div className="mt-8 md:mt-10">

          <p
className="
text-[#3F3027]
text-[16px] md:text-[18px]
leading-9
max-w-[980px]
"
>

{
blog.introDescription
}

</p>

          <p
            className="
              mt-6
              font-semibold
              text-[#24130D]
              text-[18px]
              md:text-[22px]
            "
          >
            {
blog.introHighlight
}
          </p>

        </div>


        {/* BENEFITS */}
        <div className="mt-10 space-y-8">

          {(expanded
?
blog.sections
:
blog.sections?.slice(0,3)
)?.map((item:any,index:number)=>(

            <div
              key={index}
              className="
                border-b border-[#E8D9C7]
                pb-8
              "
            >

              <div
                className="
                  flex
                  gap-5 md:gap-7
                  items-start
                "
              >

                {/* ICON */}
                <div
className="
relative
w-[76px]
h-[76px]
md:w-[96px]
md:h-[96px]
rounded-[18px]
border
border-[#E8D9C7]
bg-[#FFFDF9]
flex
items-center
justify-center
shrink-0
overflow-hidden
p-5
"
>


<Image

src={
item.icon ||
"/bee.png"
}

alt={
item.title
}

width={50}

height={50}

className="
object-contain
"

/>


</div>


                {/* CONTENT */}
                <div className="flex-1">

                  <h3
                    className="
                      text-[28px]
                      md:text-[38px]
                      font-semibold
                      text-[#24130D]
                    "
                  >
                    {index + 1}. {item.title}
                  </h3>

                  <p
                    className="
                      mt-3
                      text-[#4E3A30]
                      text-[16px] md:text-[18px]
                      leading-8
                      max-w-[850px]
                    "
                  >
                    {item.description}
                  </p>


                  {/* QUOTE */}
                  {item.quote && (

                    <div
                      className="
                        mt-5
                        bg-[#FFF7EF]
                        border border-[#F1D9C0]
                        rounded-[18px]
                        px-5 md:px-7
                        py-5
                        flex gap-4
                        max-w-[760px]
                      "
                    >

                      <span
                        className="
                          text-[#D06F1D]
                          text-[40px]
                          leading-none
                          font-serif
                        "
                      >
                        “
                      </span>

                      <p
                        className="
                          text-[#4E3A30]
                          text-[15px] md:text-[17px]
                          leading-8
                        "
                      >
                        {item.quote}
                      </p>

                    </div>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>


        {/* BUTTON */}
        <div className="mt-10 text-center">

          <button
            onClick={() =>
              setExpanded(!expanded)
            }
            className="
              inline-flex items-center gap-3
              h-[56px]
              px-10
              rounded-[14px]
              bg-[#D06F1D]
              text-white
              font-semibold
              text-[16px]
              hover:opacity-90
              transition
            "
          >

            {expanded
              ? "Show Less"
              : "Read More Benefits"}

            <ChevronDown
              size={18}
              className={`transition ${
                expanded ? "rotate-180" : ""
              }`}
            />

          </button>

        </div>


        {/* TAGS */}
        <div
          className="
            mt-12
            pt-7
            border-t border-[#E8D9C7]
            flex flex-wrap items-center gap-3
          "
        >

          <span
            className="
              text-[#24130D]
              font-semibold
              text-[18px]
              mr-2
            "
          >
            Tags:
          </span>

          {(blog.tags?.length > 0
            ? blog.tags
            : [
                "Raw Honey",
                "Health",
                "Immunity",
                "Natural Wellness",
              ]
          ).map((tag: string, index: number) => (

            <span
              key={index}
              className="
                px-5 py-2.5
                rounded-[12px]
                border border-[#E8D9C7]
                bg-[#FFFDF9]
                text-[#6A5445]
                text-[14px]
              "
            >
              {tag}
            </span>

          ))}

        </div>

      </div>

    </div>

  );
}