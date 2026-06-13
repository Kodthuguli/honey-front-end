/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Lightbox from "yet-another-react-lightbox";
import "yet-another-react-lightbox/styles.css";

import Zoom from "yet-another-react-lightbox/plugins/zoom";
import Captions from "yet-another-react-lightbox/plugins/captions";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import { api } from "@/lib/api";
import { Filter, X } from "lucide-react";
import Image from "next/image";

export default function GalleryPage() {
  const [gallery, setGallery] = useState<any[]>([]);
  const [page, setPage] = useState(1);
  const [limit] = useState(6);
  const [totalPages, setTotalPages] = useState(1);
  const [category, setCategory] = useState("all");
  const [loading, setLoading] = useState(true);

  const [open, setOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const [categories, setCategories] = useState<string[]>([]);
  const [filterOpen, setFilterOpen] = useState(false);

  const SkeletonGrid = () => (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-8 mt-10">
      {[...Array(6)].map((_, i) => (
        <div
          key={i}
          className="w-full h-52 bg-[#F4E6D5] animate-pulse rounded-lg"
        />
      ))}
    </div>
  );

  const fetchGallery = async (reset = false) => {
    setLoading(true);
    try {
      const res = await api.get("/gallery", {
        params: {
          page: reset ? 1 : page,
          limit,
          category,
        },
      });

      setGallery(
res.data.items
);

      setTotalPages(res.data.totalPages);
    } catch {
      console.error("Failed to load gallery");
    } finally {
      setLoading(false);
    }
  };

  const fetchCategories = async () => {
    try {
      const res = await api.get("/categories");
      setCategories(res.data.map((c: any) => c.name));
    } catch {
      console.error("Failed to load categories");
    }
  };

  useEffect(()=>{

fetchCategories();

},[]);



useEffect(()=>{

fetchGallery();

},[
page,
category
]);



useEffect(()=>{

setPage(1);

},[
category
]);

  const slides = gallery
    .filter((img) => img.images?.[0])
    .map((img) => ({
      src: img.images[0],
      description: img.title || "",
    }));

return (

<div
className="
min-h-screen
bg-[#F8F1E6]
overflow-hidden
"
>


{/* ================= HERO ================= */}


<section
className="
relative
pt-14
pb-10
text-center
"
>


<h1
className="
font-serif
text-[44px]
md:text-[68px]
tracking-[4px]
text-[#102515]
"
>

Our Gallery

</h1>



<div
className="
mt-3
flex
items-center
justify-center
gap-5
text-[#D19A25]
"
>

<span className="w-24 h-px bg-[#D19A25]" />

<span className="text-xl">
🦋
</span>

<span className="w-24 h-px bg-[#D19A25]" />

</div>




<p
className="
mt-5
text-[16px]
tracking-wide
text-[#3F3027]
"
>

A glimpse into our natural process, farm, and pure honey extraction.

</p>


</section>







{/* MOBILE FILTER */}


<div className="lg:hidden flex justify-center mb-8">

<button

onClick={() => setFilterOpen(true)}

className="
flex
items-center
gap-2

px-7
py-3

rounded-full

bg-[#102515]
text-white
"
>

<Filter size={18}/>

Filter

</button>

</div>










{/* ================= MAIN AREA ================= */}


<section
className="
max-w-[1500px]

mx-auto

px-5
lg:px-12

pb-20


grid

grid-cols-1
lg:grid-cols-[300px_1fr]


gap-8

items-stretch
"
>











{/* ================= SIDEBAR ================= */}


<aside
className="
hidden
lg:flex

flex-col


bg-[#FFFDF8]


border
border-[#E8D9C7]


rounded-[22px]


p-7


self-stretch

min-h-full


sticky
top-28
"
>





{/* CATEGORY */}


<h3
className="
font-semibold
text-[18px]

text-[#2B140A]

mb-7

flex
items-center
gap-2
"
>

Categories

</h3>







<div
className="
space-y-5
"
>


<button

onClick={()=>setCategory("all")}

className={`
w-full

text-left

transition


${
category==="all"
?
"text-[#C4622D] font-semibold"
:
"text-[#2B140A] hover:text-[#C4622D]"
}

`}
>

All

</button>






{
categories.map((cat)=>(


<button

key={cat}

onClick={()=>setCategory(cat)}

className={`
w-full

text-left

transition


${
category===cat
?
"text-[#C4622D] font-semibold"
:
"text-[#2B140A] hover:text-[#C4622D]"
}

`}
>

{cat}

</button>


))

}


</div>









<div
className="
my-10

border-t

border-[#E8D9C7]
"
/>










{/* PROMISE */}


<h3
className="
font-semibold

text-[18px]

text-[#2B140A]

mb-7
"
>

Nature’s Promise

</h3>







<div
className="
space-y-7
"
>


{
[
{
title:"100% Natural",
desc:"Pure & authentic",
icon:"/leaf.png"
},

{
title:"Raw & Unprocessed",
desc:"As nature intended",
icon:"/honeycomb.png"
},

{
title:"Sourced From Forests",
desc:"Sustainably collected",
icon:"/forest.png"
}

].map((item)=>(


<div

key={item.title}

className="
flex
items-center
gap-4
"
>



<div
className="
w-12
h-12

rounded-full

border
border-[#D9A63A]

bg-white

flex
items-center
justify-center

p-2

shrink-0
"
>


<Image

src={item.icon}

alt={item.title}

width={32}

height={32}

className="
object-contain
"

/>


</div>






<div>


<p
className="
text-sm

font-semibold

text-[#2B140A]
"
>

{item.title}

</p>



<p
className="
text-xs

text-[#6F4E37]

mt-1
"
>

{item.desc}

</p>



</div>



</div>


))

}


</div>



</aside>















{/* ================= GALLERY CARDS ================= */}


<div>


{
loading && page===1
?
<SkeletonGrid/>
:
<div
className="
grid

grid-cols-1
sm:grid-cols-2
xl:grid-cols-3

gap-8
"
>


{
gallery.map((item)=>{


const imgSrc =
item.images?.[0];


const slideIndex =
slides.findIndex(
(s)=>s.src===imgSrc
);



return (

<div

key={item._id}


onClick={()=>{


if(slideIndex!==-1){

setCurrentIndex(slideIndex);

setOpen(true);

}


}}


className="
group

cursor-pointer


rounded-[18px]

overflow-hidden


bg-[#FFFDF8]


shadow-[0_8px_30px_rgba(0,0,0,0.12)]
"
>







<div
className="
relative

h-[260px]

overflow-hidden
"
>


<Image

src={
imgSrc ||
'/placeholder.png'
}

alt={item.title}

fill

sizes="33vw"

className="
object-cover

transition

duration-700

group-hover:scale-110
"

/>


</div>









<div
className="
relative

pt-12
pb-8

text-center
"
>



<div
className="
absolute

left-1/2
-top-8

-translate-x-1/2


w-16
h-16


rounded-full


bg-white


border
border-[#EAD8B5]


shadow-md


flex
items-center
justify-center

overflow-hidden

p-2
"
>


<Image

src="/logo.png"

alt="Vanamrith"

width={48}

height={48}

className="
object-contain
"

/>


</div>



<h3
className="
font-serif

text-[24px]

text-[#2B140A]
"
>

{item.title}

</h3>




<p
className="
mt-2

text-sm

text-[#6F4E37]
"
>

Pure harvest, real honey

</p>





</div>



</div>


)

})

}


</div>

}









{/* PAGINATION */}


{
totalPages > 1 && (

<div
className="
flex
justify-center
items-center

gap-3

mt-14
"
>



<button

disabled={page===1}

onClick={()=>setPage(page-1)}

className="
w-10
h-10

rounded-full

border
border-[#D9A63A]

disabled:opacity-40
"
>

←

</button>






{
Array.from(
{
length:totalPages
},
(_,i)=>i+1
)
.map((p)=>(


<button

key={p}

onClick={()=>setPage(p)}

className={`
w-10
h-10

rounded-full


${
page===p
?
"bg-[#D9A63A] text-[#102515]"
:
"border border-[#D9A63A]"
}

`}
>

{p}

</button>


))

}





<button

disabled={page===totalPages}

onClick={()=>setPage(page+1)}

className="
w-10
h-10

rounded-full

border
border-[#D9A63A]

disabled:opacity-40
"
>

→

</button>



</div>

)

}


</div>


</section>




{/* ================= MOBILE FILTER DRAWER ================= */}


{
filterOpen && (

<div
className="
fixed
inset-0

bg-black/40

z-[100]

flex
items-end

lg:hidden
"
>


<div
className="
w-full

bg-[#FFFDF8]

rounded-t-[28px]

p-7

max-h-[75vh]

overflow-y-auto

animate-slideUp
"
>



{/* HEADER */}


<div
className="
flex
justify-between
items-center

mb-8
"
>


<h3
className="
font-serif

text-2xl

text-[#2B140A]
"
>

🍃 Filter Gallery

</h3>



<button

onClick={()=>
setFilterOpen(false)
}

className="
text-[#2B140A]
"
>

<X size={26}/>

</button>


</div>







{/* CATEGORIES */}


<div className="space-y-5">


<button

onClick={()=>{

setCategory("all");

setFilterOpen(false);

}}

className={`
w-full

text-left

py-3

border-b

border-[#E8D9C7]


${
category==="all"
?
"text-[#C4622D] font-semibold"
:
"text-[#2B140A]"
}

`}
>

All

</button>





{
categories.map((cat)=>(


<button

key={cat}

onClick={()=>{

setCategory(cat);

setFilterOpen(false);

}}

className={`
w-full

text-left

py-3

border-b

border-[#E8D9C7]


${
category===cat
?
"text-[#C4622D] font-semibold"
:
"text-[#2B140A]"
}

`}
>

{cat}

</button>


))

}


</div>









{/* PROMISE MOBILE */}


<div
className="
mt-8

pt-6

border-t

border-[#E8D9C7]
"
>


<h4
className="
font-semibold

text-[#2B140A]

mb-5
"
>

Nature’s Promise

</h4>



<div className="space-y-4">


{
[
{
title:"100% Natural",
icon:"/leaf.png",
},
{
title:"Raw & Unprocessed",
icon:"/honeycomb.png",
},
{
title:"Sourced From Forests",
icon:"/forest.png",
}

].map((item)=>(

<div

key={item.title}

className="
flex
items-center
gap-4
"
>


<div
className="
w-10
h-10

rounded-full

border
border-[#D9A63A]

bg-white

flex
items-center
justify-center

p-2

shrink-0
"
>


<Image

src={item.icon}

alt={item.title}

width={28}

height={28}

className="
object-contain
"

/>


</div>



<p
className="
text-sm

text-[#2B140A]
"
>

{item.title}

</p>


</div>


))

}


</div>


</div>



</div>


</div>

)
}




{/* LIGHTBOX */}


<Lightbox

open={open}

close={()=>setOpen(false)}

index={currentIndex}

slides={slides}

plugins={[Zoom,Captions,Thumbnails]}

/>



</div>

);
}